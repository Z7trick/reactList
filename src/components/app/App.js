import React from 'react';
import AddVtuber from '../add-vtuber/add-vtuber';
import VtubeHeader from '../vtube-header/vtube-header';
import VtubeList from '../vtube-list/vtube-list';
import './App.css';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showForm: false,
			textForButton: 'Показать добавление',
		};
	}

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
		const data = [
			{
				img: 'https://i.pinimg.com/originals/df/c7/4b/dfc74b6867617fc8220fddb0efc9d916.jpg',
				name: 'Julia',
				deadline: '2020-12-22',
				twitter: 'ss',
				info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ab, debitis aut delectus repudiandae ration',
				done: '50',
			},
		];
		const { showForm, textForButton } = this.state;
		return (
			<div className='background app '>
				<VtubeHeader />
				<VtubeList data={data} />
				<button onClick={this.showForm} className='btn'>
					{textForButton}
				</button>
				{showForm ? <AddVtuber /> : ''}
				<div className='cube'></div>
				<div className='cube'></div>
				<div className='cube'></div>
			</div>
		);
	}
}

export default App;
