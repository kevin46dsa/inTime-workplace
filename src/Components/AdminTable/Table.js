import React, { useState, useEffect } from 'react';
// import { Link,useNavigate} from "react-router-dom";
//import axios from "axios";
//import mockData from "./mockData.json";
import orderBy from 'lodash/orderBy';
import transactionService from '../../services/userDataService';
import { useNavigate } from 'react-router-dom';
import './Table.css';

const Table = ({ updatePieState }) => {
	let navigate = useNavigate();
	const [data, setdata] = useState([]);
	const [oneTime, setOneTime] = useState([]);
	const [incomeData, setIncomedata] = useState([]);
	const [incomeOneTime, setIncomeOneTime] = useState([]);
	const [toggleTable, setToggleTable] = useState('OneTime');
	const [toggleIncomeTable, setIncomeToggleTable] = useState('OneTime');

	useEffect(() => {
		transactionService.getUserData().then((response) => {
			if (response.data) {
				let inData = response.data.data.In
				let outData = response.data.data.Out

				setdata(inData)
				setOneTime(outData);

/*
				setIncomeOneTime(
					orderBy(response.data.Income.OneTime, ['_id'], ['desc']).slice(0, 5)
				);
				setIncomedata(
					orderBy(response.data.Income.Recurring, ['_id'], ['desc']).slice(0, 5)
				);
				*/
			}
		});
	}, []);

	const handleEdit = (event) => {
		event.preventDefault();
		let val = event.target.value;
		navigate('/addexpense?q=' + val);
	};

	const handleEditIncome = (event) => {
		event.preventDefault();
		let val = event.target.value;
		navigate('/addincome?q=' + val);
	};

	const handleDelete = (event) => {
		event.preventDefault();
		let id = event.target.value;

		transactionService
			.deleteUserExpense(id)
			.then((d) => {
				let tmpData = data.filter((d) => d._id !== id);
				let one = oneTime.filter((d) => d._id !== id);
				setOneTime(one);
				setdata(tmpData);
			})
			.then(() => {
				console.log('deleted expense');
				updatePieState();
			})
			.catch((e) => {
				console.log('Error');
			});
	};

	const handleDeleteIncome = (event) => {
		event.preventDefault();
		let id = event.target.value;

		transactionService
			.deleteUserIncome(id)
			.then((d) => {
				let tmpDataIncome = incomeData.filter((d) => d._id !== id);
				let oneIncome = incomeOneTime.filter((d) => d._id !== id);
				setIncomeOneTime(oneIncome);
				setIncomedata(tmpDataIncome);
			})
			.catch((e) => {
				console.log('Error');
			});
	};

	const changeExpense = (event) => {
		event.preventDefault();
		setToggleTable(event.target.value);
	};

	const changeIncome = (event) => {
		event.preventDefault();
		setIncomeToggleTable(event.target.value);
	};

	return (
		<div class="container">
			<div class="row">
    <div class="col">
	<p className="h4">In Time</p>
				
				<table className="table table-border">
					<thead>
						<tr>
						<th>Add Row below</th>
						<th>In Time</th>
						<th>Date</th>
						<th>Edit</th>
						<th>Delete</th>
						</tr>
					</thead>
					<tbody>
					{data.map((d) => {
						return (
							<tr>
								<td>btn add row below</td>
								<td>{d.Time}</td>
								<td>{d.Date}</td>
									<td>
										<button
											className="btn btn-info"
											value={d._id}
											onClick={handleEditIncome}
										>
											Edit
										</button>
									</td>
									<td>
										<button
											className="btn btn-danger"
											value={d._id}
											onClick={handleDeleteIncome}
										>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
    </div>
    <div class="col">
	<p className="h4">Out Time</p>
			
			<table className="table table-border">
				<thead>
					<tr>
						<th>Add Row below</th>
						<th>Out Time</th>
						<th>Date</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{oneTime.map((d) => {
						return (
							<tr>
								<td>btn add row below</td>
								<td>{d.Time}</td>
								<td>{d.Date}</td>
								<td>
									<button
										className="btn btn-info"
										value={d._id}
										onClick={handleEdit}
									>
										Edit
									</button>
								</td>
								<td>
									<button
										className="btn btn-danger"
										value={d._id}
										onClick={handleDelete}
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
    </div>
		
				
			
			
		</div>
	
   		</div>
		
	);
};

export default Table;
