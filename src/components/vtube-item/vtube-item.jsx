import React, { Component } from 'react';
import './vtube-item.css';
export class VtubeItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name, deadline, twitter, info, done, img } = this.props;
		return (
			<li className='wrapper'>
				<button className='trash' onClick={this.props.onDelete}>
					<span className='text'>Удалить</span>
					<span className='icon'>
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
							<path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'></path>
						</svg>
					</span>
				</button>
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
