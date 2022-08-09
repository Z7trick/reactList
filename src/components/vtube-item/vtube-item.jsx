import React, { Component } from 'react';
import './vtube-item.css';
export class VtubeItem extends Component {
	state = {
		info: this.props.info,
		done: this.props.done,
	};

	onValueChange = (e) => {
		let value = e.target.value;
		if (e.target.name === 'done') {
			value = value.replace(/\D/g, '');
		}
		this.setState({
			[e.target.name]: value,
		});
	};
	componentDidUpdate(prevProps, prevState) {
		const { info, done } = this.state;
		if (prevState !== this.state) {
			this.props.onChangeText(info, done, this.props.idForChange);
		}
	}

	render() {
		const { price, name, deadline, twitter, img } = this.props;
		const { info, done } = this.state;
		return (
			<li className='wrapper'>
				<button className='trash' onClick={this.props.onDelete}>
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
						{/* <p className='vtuber-item__info'>{info}</p> */}
						<textarea className='textArea' onChange={this.onValueChange} placeholder='Info' name='info' value={info} />
						<div className='vtuber-item__price'>{price}</div>
						<div className='vtuber-item__status'>
							<div style={{ width: done + '%' }} className='vtuber-item__done'></div>
							<input name='done' value={done} type='text' onChange={this.onValueChange} className='vtuber-item__text' />
						</div>
					</figcaption>
				</figure>
			</li>
		);
	}
}

export default VtubeItem;
