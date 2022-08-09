import React from 'react';
import VtubeItem from '../vtube-item/vtube-item';
import './vtube-list.css';
const VtubeList = ({ data, onDelete, onChangeText }) => {
	const elements = data.map((item) => {
		const { id, ...itemProps } = item;

		return (
			<VtubeItem idForChange={id} onChangeText={onChangeText} key={id} {...itemProps} onDelete={() => onDelete(id)} />
		);
	});

	return <ul className='vtube-list slider'>{elements}</ul>;
};

export default VtubeList;
