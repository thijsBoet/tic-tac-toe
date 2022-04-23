import React, { useState, useEffect} from 'react';
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
};

const subTitle = {
	width: '200px',
	margin: '20px auto',
	fontFamily: 'Helvetica, Arial, sans-serif',
	color: '#34568B',
	fontSize: '28px',
	fontWeight: 'bolder',
};

const Game = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const winner = calculateWinner(board);

	const handleClick = index => {
		const boardCopy = [...board];
		if (winner || boardCopy[index]) return;
		boardCopy[index] = xIsNext ? 'X' : 'O';
		setBoard(boardCopy);
		setXIsNext(!xIsNext);
		console.log(boardCopy, xIsNext);
	};
	
	const renderMoves = () => (
		<button style={subTitle} onClick={() => setBoard(Array(9).fill(null))}>
			Play Again
		</button>
	);

	const jumpTo = () => {

	};


	return (
		<>
			<h1 style={heading}>Tic Tac Toe</h1>
			<Board squares={board} onClick={handleClick} />
			<div style={subTitle}>
				<p>
					{winner
						? 'Winner: ' + winner
						: 'Next Player: ' + (xIsNext ? 'X' : 'O')}
					{winner && renderMoves() }
				</p>
			</div>
		</>
	);
};

export default Game;
