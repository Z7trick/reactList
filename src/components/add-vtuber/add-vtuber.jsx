import React from 'react';
import './add-vtuber.css';
class AddVtuber extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			twitter: '',
			deadline: '',
			info: '',
			done: '0',
			activeClass: '',
		};
		this.maxId = 1;
		this.fileInput = React.createRef();
	}
	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
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

	onSubmit = (e) => {
		e.preventDefault();
		const { name, twitter, deadline, info, done } = this.state;
		// const img = URL.createObjectURL(this.fileInput.current.files[0]);

		this.props.onAdd(name, twitter, deadline, info, done);
		this.setState({
			name: '',
			twitter: '',
			deadline: '',
			info: '',
			done: '',
		});
		e.target.reset();
		this.fileInput.current.value = '';
		this.fileInput.current.previousSibling.innerHTML = '<p><b>Выбери картинку</b> <br /> Или перемести сюда</p>';
	};
	onChangeFile = (e) => {
		if (this.fileInput.current.files.length > 0) {
			const reader = new FileReader();
			reader.addEventListener('load', () => {
				// localStorage.setItem('recent-image', reader.result);
				this.props.setImage(reader.result);
			});
			reader.readAsDataURL(this.fileInput.current.files[0]);
			e.target.previousSibling.innerHTML = '<p>Файл вставлен!</p>';
		}
	};

	render() {
		const { name, twitter, deadline, info, done } = this.state;
		return (
			<form className='form' onSubmit={this.onSubmit}>
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
					<input onChange={this.onChangeFile} ref={this.fileInput} type='file' id='file' />
				</label>
				<div className='inputs'>
					<div className='form__group field'>
						<input
							onChange={this.onValueChange}
							required=''
							placeholder='Name'
							name='name'
							className='form__field'
							type='input'
							value={name}
						/>
						<label className='form__label'>Имя</label>
					</div>
					<div className='form__group field'>
						<input
							onChange={this.onValueChange}
							required=''
							placeholder='Twitter'
							name='twitter'
							className='form__field'
							type='input'
							value={twitter}
						/>
						<label className='form__label'>Твиттер</label>
					</div>
					<div className='form__group field'>
						<input
							onChange={this.onValueChange}
							required=''
							placeholder='Deadline'
							name='deadline'
							className='form__field'
							type='input'
							value={deadline}
						/>
						<label className='form__label'>ДедЛайн</label>
					</div>
					<div className='form__group field'>
						<input
							onChange={this.onValueChange}
							required=''
							placeholder='Info'
							name='info'
							className='form__field'
							type='input'
							value={info}
						/>
						<label className='form__label'>Инфо</label>
					</div>
					<div className='form__group field'>
						<input
							onChange={this.onValueChange}
							required=''
							placeholder='Done'
							name='done'
							className='form__field'
							type='input'
							value={done}
						/>
						<label className='form__label'>Сколько выполнено</label>
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
