import React from 'react';
import AddVtuber from '../add-vtuber/add-vtuber';
import VtubeHeader from '../vtube-header/vtube-header';
import VtubeList from '../vtube-list/vtube-list';
import './App.css';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imageURL: '',
			showForm: false,
			textForButton: 'Показать добавление',
			activeClass: '',
			data: JSON.parse(localStorage.getItem('items')) || [],
			// maxId: 1,
		};
		this.maxId = localStorage.getItem('id') ? localStorage.getItem('id') : 1;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((item) => item.id !== id),
			};
		});
	};

	addItem = (name, twitter, deadline, info, done) => {
		if (localStorage.getItem('id')) {
			this.maxId++;
			localStorage.setItem('id', this.maxId);
		} else {
			localStorage.setItem('id', this.maxId);
		}

		const newItem = {
			name,
			twitter,
			deadline,
			info,
			done,
			id: +localStorage.getItem('id'),
			img: this.state.imageURL,
			// id: this.state.id,
		};

		this.setState((prevState) => ({
			data: [...prevState.data, newItem],
		}));
	};
	setImage = (url) => {
		return this.setState({
			imageURL: url,
		});
	};
	resetImage = () => {
		return this.setState({
			imageURL: '',
		});
	};
	showForm = (e) => {
		e.preventDefault();
		if (this.state.showForm) {
			this.setState((state) => ({
				showForm: false,
				textForButton: 'Показать добавление',
			}));
			return;
		}
		this.setState((state) => ({
			showForm: true,
			textForButton: 'Свернуть добавление',
		}));
	};

	render() {
		const { showForm, textForButton, data } = this.state;
		localStorage.setItem('items', JSON.stringify(this.state.data));
		return (
			<div className='background app '>
				<div className='container'>
					<VtubeHeader />
					<VtubeList onDelete={this.deleteItem} data={data} />
					<button onClick={this.showForm} className='btn'>
						{textForButton}
					</button>
					{showForm ? <AddVtuber resetImage={this.resetImage} setImage={this.setImage} onAdd={this.addItem} /> : ''}
					<div className='cube'></div>
					<div className='cube'></div>
					<div className='cube'></div>
				</div>
			</div>
		);
	}
}
export default App;
