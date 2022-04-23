import React from 'react';
import Square from './Square';

const style = {
	backgroundColor: '#F5DF4D',
	border: '4px solid #88B04B',
	borderRadius: '15px',
	width: '312px',
	height: '312px',
	margin: '0 auto',
	marginTop: '25px',
	display: 'grid',
	gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)',
};

const Board = ({ squares, onClick }) => {
	return (
		<main style={style}>
			{squares.map((square, index) => (
				<Square
					key={index}
					value={square}
					onClick={() => onClick(index)}
				/>
			))}
		</main>
	);
};

export default Board;
