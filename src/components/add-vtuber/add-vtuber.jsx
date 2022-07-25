import React from 'react';
import './add-vtuber.css';
class AddVtuber extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeClass: '',
		};
	}
	handleSubmit = (e) => {
		e.preventDefault();
		console.log('Отправлена форма.');
	};
	onEnter = () => {
		this.setState({
			activeClass: 'active',
		});
	};
	onLeave = () => {
		this.setState({
			activeClass: '',
		});
	};

	render() {
		return (
			<form className='form' onSubmit={this.handleSubmit}>
				<label
					onDragEnter={this.onEnter}
					onDrop={this.onLeave}
					onDragEnd={this.onLeave}
					onDragLeave={this.onLeave}
					onDragExit={this.onLeave}
					className={'file-input ' + (this.activeClass ?? this.state.activeClass)}
					htmlFor='file'>
					<span className='drop-zone'>
						<p>
							<b>Выбери картинку</b> <br /> Или перемести сюда
						</p>
					</span>
					<input type='file' id='file' />
				</label>
				<div className='inputs'>
					<div className='form__group field'>
						<input required='' placeholder='Name' name='name' className='form__field' type='input' />
						<label className='form__label'>Name</label>
					</div>
					<div className='form__group field'>
						<input required='' placeholder='Twitter' name='twitter' className='form__field' type='input' />
						<label className='form__label'>Twitter</label>
					</div>
					<div className='form__group field'>
						<input required='' placeholder='Deadline' name='deadline' className='form__field' type='input' />
						<label className='form__label'>Deadline</label>
					</div>
					<div className='form__group field'>
						<input required='' placeholder='Info' name='info' className='form__field' type='input' />
						<label className='form__label'>Info</label>
					</div>
					<div className='form__group field'>
						<input required='' placeholder='Done' name='done' className='form__field' type='input' />
						<label className='form__label'>Done</label>
					</div>
				</div>
				<button className='btn' type='submit'>
					Отправить
				</button>
			</form>
		);
	}
}

export default AddVtuber;
