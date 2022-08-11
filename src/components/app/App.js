import { useState, useEffect } from 'react';
import AddVtuber from '../add-vtuber/add-vtuber';
import VtubeHeader from '../vtube-header/vtube-header';
import VtubeList from '../vtube-list/vtube-list';
import './App.css';
const App = (props) => {
	const [imageURL, setImageURL] = useState('');
	const [checkForm, setCheckForm] = useState(false);
	const [textForButton, setTextButton] = useState('Показать добавление');
	const [activeClass, setActiveClass] = useState('');
	const [data, setData] = useState(JSON.parse(localStorage.getItem('items')) || []);
	let maxId = localStorage.getItem('id') ? localStorage.getItem('id') : 1;

	const deleteItem = (id) => {
		setData((data) => data.filter((item) => item.id !== id));
		maxId--;
		localStorage.setItem('id', maxId);
	};
	const onChangeText = (info, done, id) => {
		setData((data) => {
			const newArr = data.map((item) => {
				if (item.id === id) {
					item.info = info;
					item.done = done;
					return item;
				}
				return item;
			});
			return newArr;
		});
	};

	const addItem = ({ name, twitter, deadline, info, done, price }) => {
		if (localStorage.getItem('id')) {
			maxId++;
			localStorage.setItem('id', maxId);
		} else {
			localStorage.setItem('id', maxId);
		}

		const newItem = {
			name,
			twitter,
			deadline,
			info,
			done,
			price,
			id: +localStorage.getItem('id'),
			img: imageURL,
			// id: this.state.id,
		};
		setData((data) => [...data, newItem]);
	};
	const setImage = (url = '') => {
		setImageURL(url);
	};
	const showForm = (e) => {
		e.preventDefault();
		if (checkForm) {
			setCheckForm((form) => false);
			setTextButton((text) => 'Показать добавление');
			return;
		}
		setCheckForm((form) => true);
		setTextButton((text) => 'Свернуть добавление');
	};

	localStorage.setItem('items', JSON.stringify(data));
	return (
		<div className='background app '>
			<div className='container'>
				<VtubeHeader />
				<VtubeList onChangeText={onChangeText} onDelete={deleteItem} data={data} />
				<button onClick={showForm} className='btn'>
					{textForButton}
				</button>
				{checkForm ? <AddVtuber setImage={setImage} onAdd={addItem} /> : ''}
				<div className='cube'></div>
				<div className='cube'></div>
				<div className='cube'></div>
			</div>
		</div>
	);
};
export default App;
