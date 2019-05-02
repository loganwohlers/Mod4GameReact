import React, { Component } from 'react';
import SearchMenu from './SearchMenu'
import MapComponent from '../components/MapComponent'
// process.env.REACT_APP_API_KEY

class MainContainer extends Component {

    componentDidMount() {
        fetch('https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity')
            .then(res => res.json())
            .then(data => console.log(data))
    }

    render() {
        return (
            <>
                <SearchMenu />
            </>
        )
    }
}

export default MainContainer

