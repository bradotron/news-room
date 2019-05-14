import React, { Component } from 'react';

// import the components
import Logo from '../Components/Logo';
import Profile from '../Components/Profile';
import Search from '../Components/Search';
import Category from '../Components/Category';
import NewsFeed from '../Components/NewsFeed';

const testUser = {
	username: 'bob',
};

class Home extends Component {
  state = {
    user: {},
    articles: [],
    category: "",
  }

	render() {
		return (
			<div>
				{/* Logo */}
				<Logo />

				{/* Profile ***will need to pass the user as a prop */}
				<Profile user={testUser} />

        {/* Search Bar */}
        <Search />
        {/* Category Drop-Down */}
        <Category />

        {/* News Feed */}
        <NewsFeed category={this.state.category} articles={this.state.articles}/>
			</div>
		);
	}
}

export default Home;
