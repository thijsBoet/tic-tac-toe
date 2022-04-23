import React, { useState, useEffect } from 'react';
import Board from './Board';
import { calculateWinner } from '../helpers';

const heading = {
	width: '265px',
	textAlign: 'center',
	margin: '0 auto',
	marginTop: '50px',
	padding: '25px',
	backgroundColor: '#F5DF4D',
	fontFamily: 'Helvetica, Arial, sans-serif',
	color: '#34568B',
	fontSize: '36px',
	fontWeight: 'bolder',
	borderRadius: '50px',
	border: '4px solid #6B5B95',
};

const subTitle = {
	width: '200px',
	margin: '5px auto',
	fontFamily: 'Helvetica, Arial, sans-serif',
	color: '#34568B',
	fontSize: '16px',
	fontWeight: 'bolder',
};

const Game = () => {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [stepNumber, setStepNumber] = useState(0);
	const [xIsNext, setXIsNext] = useState(true);
	const winner = calculateWinner(history[stepNumber]);

	const handleClick = index => {
		const timeInHistory = history.slice(0, stepNumber + 1);
		const current = timeInHistory[stepNumber];
		const squares = [...current];
		if (winner || squares[index]) return;
		squares[index] = xIsNext ? 'X' : 'O';
		setHistory([...timeInHistory, squares]);
		setStepNumber(timeInHistory.length);
		setXIsNext(!xIsNext);
	};

	const renderMoves = () =>
		history.map((_step, move) => {
			const destination = move ? `Go to move #${move}` : 'Go to game start';
			return (
				<li key={move} style={{ listStyleType: 'none' }}>
					<button style={subTitle} onClick={() => jumpTo(move)}>
						{destination}
					</button>
				</li>
			);
		});

	const jumpTo = step => {
		setStepNumber(step);
		setXIsNext(step % 2 === 0);
	};

	return (
		<>
			<h1 style={heading}>Tic Tac Toe</h1>
			<Board squares={history[stepNumber]} onClick={handleClick} />
			<div style={subTitle}>
				<p>
					{winner
						? 'Winner: ' + winner
						: 'Next Player: ' + (xIsNext ? 'X' : 'O')}
					{renderMoves()}
				</p>
			</div>
		</>
	);
};

export default Game;
