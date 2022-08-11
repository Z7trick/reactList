import { useState, useEffect, useRef } from 'react';
import './add-vtuber.css';
const AddVtuber = (props) => {
	const [data, setData] = useState({
		name: '',
		twitter: '',
		deadline: '',
		info: '',
		done: '',
		activeClass: '',
		price: '',
	});
	const { name, twitter, deadline, info, done, price, activeClass } = data;

	let maxId = 1;
	const fileInput = useRef();

	const onValueChange = (e) => {
		setData((state) => ({ ...state, [e.target.name]: e.target.value }));
	};

	const onEnter = () => {
		setData((state) => ({ ...state, activeClass: 'active' }));
	};
	const onLeave = () => {
		setData((state) => ({ ...state, activeClass: '' }));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		props.onAdd({ name, twitter, deadline, info, done, price });
		setData((state) => ({ ...state, name: '', twitter: '', deadline: '', info: '', price: '', done: '' }));
		props.setImage();
		e.target.reset();
		fileInput.current.previousSibling.innerHTML = '<p><b>Выбери картинку</b> <br /> Или перемести сюда</p>';
	};
	const onChangeFile = (e) => {
		if (fileInput.current.files.length > 0) {
			const reader = new FileReader();
			reader.addEventListener('load', () => {
				// localStorage.setItem('recent-image', reader.result);
				props.setImage(reader.result);
			});
			reader.readAsDataURL(fileInput.current.files[0]);
			e.target.previousSibling.innerHTML = '<p>Файл вставлен!</p>';
		}
	};

	return (
		<form className='form' onSubmit={onSubmit}>
			<label
				onDragEnter={onEnter}
				onDrop={onLeave}
				onDragEnd={onLeave}
				onDragLeave={onLeave}
				onDragExit={onLeave}
				className={'file-input ' + activeClass}
				htmlFor='file'>
				<span className='drop-zone'>
					<p>
						<b>Выбери картинку</b> <br /> Или перемести сюда
					</p>
				</span>
				<input onChange={onChangeFile} ref={fileInput} type='file' id='file' />
			</label>
			<div className='inputs'>
				<div className='form__group field'>
					<input
						onChange={onValueChange}
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
						onChange={onValueChange}
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
						onChange={onValueChange}
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
						onChange={onValueChange}
						required=''
						placeholder='Info'
						name='info'
						className='form__field'
						type='text'
						value={info}
					/>
					<label className='form__label'>Инфо</label>
				</div>
				<div className='form__group field'>
					<input
						onChange={onValueChange}
						required=''
						placeholder='price'
						name='price'
						className='form__field'
						type='input'
						value={price}
					/>
					<label className='form__label'>Цена</label>
				</div>
				<div className='form__group field'>
					<input
						onChange={onValueChange}
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
};

export default AddVtuber;
