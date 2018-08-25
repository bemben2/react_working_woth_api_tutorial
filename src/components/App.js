import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import SideNews from './News/SideNews';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			news1: {
				type: "top-headlines",
				query: "sources=bbc-news"
			},
			news2: {
				type: "everything",
				query: "sources=techcrunch&language=en"
			},
			news3: {
				type: "everything",
				query: "domains=comicbookmovie.com&language=en"
			}
		}
	}

	render() {
		return (
			<div className="containwer-fluid">
				<div className="navbar-fixed">
					<nav>
						<div className="nav-wrapper indigo lighten-4">
							<a href="/" className="bran-logo center">My Feed</a>
						</div>
					</nav>
				</div>
				<div>
					<div className="row">
						<div className="col s8">
							<News news={this.state.news1} />
							<News news={this.state.news2} />
						</div>
						<div className="col s4">
							<SideNews news={this.state.news3} />
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default App;
