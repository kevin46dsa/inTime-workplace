import React, { useState, useEffect } from 'react';

import Table from './Table';

function adminTable() {
    const [isIN, setIsIN] = useState(false);
	const [reloader, updateReloader] = useState(1);	

    const updatePieState = () => {
		updateReloader(reloader + 1);
		console.log('update reloader function', reloader);
	};

	useEffect(() => {
		console.log('in reloader useEffect');
	}, [reloader]);

    return (<div className="app">

        <Table updatePieState={updatePieState} />
    </div>);
}
export default adminTable;