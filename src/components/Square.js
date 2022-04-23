import React from 'react';

const style = {
	backgroundColor: '#34568B',
	border: '4px solid #6B5B95',
	width: '100px',
	height: '100px',
	color: 'white',
	fontSize: '48px',
	cursor: 'pointer',
	outline: 'none',
	borderRadius: '10px',
	margin: '2px',
};

const Square = ({ value, onClick }) => (
	<button style={style } onClick={onClick}>{value}</button>
);

export default Square;
