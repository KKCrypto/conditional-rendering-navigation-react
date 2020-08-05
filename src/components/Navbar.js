import React from 'react'

const Navbar = ({ setPage }) => {

	return (
        <nav>
            <button onClick={() => setPage('home')}>Home</button>
            <button onClick={() => setPage('coins')}>Coins</button>
            <button onClick={() => setPage('stats')}>Stats</button>
            <button onClick={() => setPage('chart')}>Chart</button>
        </nav>
	)
}

export default Navbar
