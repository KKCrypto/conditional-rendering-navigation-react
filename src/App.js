import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Coins from './components/Coins'
import Stats from './components/Stats'
import Chart from './components/Chart'
import Homepage from './components/Homepage'

function App() {

	const [page, setPage] = useState('home')

	function renderComponent(){
		switch(page){
			case 'home': return <Homepage/>
			case 'coins': return <Coins/>
			case 'stats': return <Stats/>
			case 'chart': return <Chart/>
			default: return <Homepage />
		}
	}

	return (
		<div className="App">

			<div className="title">
				<h1>Conditional Rendering Navigation - React.js</h1>
				<p>current state: { page }</p>
			</div>
			
			<Navbar setPage={setPage} />

			<div className="content">

				{ renderComponent() }
				
			</div>

		</div>
	)
}

export default App
