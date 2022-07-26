import React from 'react';
import AddVtuber from '../add-vtuber/add-vtuber';
import VtubeHeader from '../vtube-header/vtube-header';
import VtubeList from '../vtube-list/vtube-list';
import './App.css';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addVtube: false,
			showForm: false,
			textForButton: 'Показать добавление',
			activeClass: '',
			data: [
				{
					name: 'Waabyuu',
					twitter: 'https://twitter.com/waabyuu',
					deadline: '8 July ',
					info: 'All emotions are on discord + Tongue physics + Animated bubbles  + DANCE ANIMATION!!!! + TONGUE PHYSICS + falling drops',
					done: '100',
					img: 'https://pbs.twimg.com/profile_images/1549084675565576194/OryWGs0i_400x400.jpg',
					id: 0,
				},
			],
		};
		this.tokens = [];
		this.maxId = 1;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((item) => item.id !== id),
			};
		});
	};
	onSubmit = (e) => {
		e.preventDefault();
		this.setState({
			addVtube: true,
		});
		e.target.reset();
	};
	addItem = (name, twitter, deadline, info, done, img) => {
		const newItem = {
			name,
			twitter,
			deadline,
			info,
			done,
			img,
			id: this.maxId++,
		};
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			console.log(newArr);
			return {
				data: newArr,
			};
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
		const { showForm, textForButton } = this.state;
		return (
			<div className='background app '>
				<VtubeHeader />
				<VtubeList onDelete={this.deleteItem} data={this.state.data} />
				<button onClick={this.showForm} className='btn'>
					{textForButton}
				</button>
				{showForm ? <AddVtuber onAdd={this.addItem} /> : ''}
				<div className='cube'></div>
				<div className='cube'></div>
				<div className='cube'></div>
			</div>
		);
	}
}
export default App;
