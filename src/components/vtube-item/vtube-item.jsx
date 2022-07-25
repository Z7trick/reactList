import React, { Component } from 'react';
import './vtube-item.css';
export class VtubeItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { img, name, deadline, twitter, info, done } = this.props;
		return (
			<li>
				<figure className='vtuber-item'>
					<img className='vtuber-item__image' src={img} alt='' />
					<figcaption className='figcap'>
						<h4 className='vtuber-item__name'>{name}</h4>
						<a href={twitter} className='vtuber-item__twitter'>
							twitter
						</a>
						<div className='vtuber-item__deadline'>{deadline}</div>
						<p className='vtuber-item__info'>{info}</p>
						<div className='vtuber-item__status'>
							<div style={{ width: done + '%' }} className='vtuber-item__done'></div>
							<div className='vtuber-item__text'>{done + '%'}</div>
						</div>
					</figcaption>
				</figure>
			</li>
		);
	}
}

export default VtubeItem;
