import React, { useState } from 'react';
import Likes from './components/Likes';
import LikeTotal from './components/LikeTotal';
import './App.css';

function App() {
	const [sum, setSum] = useState(0)

	return (
		<div className='App'>
			<LikeTotal sum={sum}/>
			<Likes increment={1} sum={sum} setSum={setSum}/>
			<Likes increment={3} sum={sum} setSum={setSum}/>
			<Likes increment={5} sum={sum} setSum={setSum}/>
		</div>
	);
}

export default App;
