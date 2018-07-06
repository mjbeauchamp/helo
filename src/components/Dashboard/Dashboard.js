import React, {Component } from 'react';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            search: "",
            myPosts: true,
            userposts: []
        }
    }
    render(){
        console.log(this.state.searchText)
        let shownPosts = this.state.userposts.map((val, index) => {
            return <div>
                    <p>{val.title}</p>
                    <p>{val.username}</p>
                    <p>{val.profile_pic}</p>
                </div>
        });
        return (
            <div>
                <h1>Dashboard</h1>
                <input type="text" placeholder="search" onChange={(e) => {this.setState({search: e.target.value})}}/>
                <br/>
                <label htmlFor="myPosts">My Posts:</label>
                <input type="checkbox" id="myPosts"/>
                <br/>
                <button>Search All</button>
                <button>Search</button>
                <button>Reset</button>
                <hr/>
                {shownPosts}
                <hr/>
            </div>
        )
    }
}

export default Dashboard;