import React, { Component } from 'react';
import axios from 'axios';
import RepoTabData from './repo-tab-data';

class RightSideBar extends Component {
    state = {
        repo: false,
        overview: true,
        stars: false,
        repoData: []
    }
    callOverview = () => {
        this.setState({
            repo: false,
            overview: true,
            stars: false
        })
    }
    callRepositories = () => {
        this.setState({
            repo: true,
            overview: false,
            stars: false
        })
    }
    callStars = () => {
        this.setState({
            repo: false,
            overview: false,
            stars: true
        })
    }
    render() {
        return (
            <div>
                <div style={styles.bioDataContainer}>
                    <div style={styles.eachTab} onClick={this.callOverview}>Overview</div>
                    <div style={styles.eachTab} onClick={this.callRepositories}>Repositories</div>
                    <div style={styles.eachTab} onClick={this.callStars}>Stars</div>
                </div>
                <div>
                    {this.state.repo ? this.state.repoData.map(item => {
                        return <RepoTabData key={item.id} name={item.name} />
                    }) : null}
                    {
                        this.state.overview? <h3>Over view</h3>: null
                    }
                    {
                        this.state.stars? <h3>Stars</h3>: null
                    }
                </div>
            </div>
        );
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/supreetsingh247/repos`).then((data) => {
            console.log(data.data);
            this.setState({
                repoData: data.data
            })
        })
    }
}

const styles = {
    bioDataContainer: {
        display: 'flex'
    },
    eachTab: {
        marginRight: 15,
        cursor: 'pointer'
    }
}

export default RightSideBar;