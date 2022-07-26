import React from 'react';
import VtubeItem from '../vtube-item/vtube-item';
import './vtube-list.css';
const VtubeList = ({ data, onDelete }) => {
	const elements = data.map((item) => {
		const { id, ...itemProps } = item;

		return <VtubeItem key={id} {...itemProps} onDelete={() => onDelete(id)} {...item} />;
	});

	return <ul className='vtube-list slider'>{elements}</ul>;
};

export default VtubeList;
