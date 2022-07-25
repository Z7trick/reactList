import React from 'react';
import VtubeItem from '../vtube-item/vtube-item';
const VtubeList = ({ data }) => {
	const elements = data.map((item) => {
		return <VtubeItem {...item} />;
	});
	return <ul className='vtube-list slider'>{elements}</ul>;
};

export default VtubeList;
