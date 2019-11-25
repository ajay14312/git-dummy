import React from 'react';
import './left-side-bar.css'

const LeftSideBar = ({ name, pic, description, company, country }) => {
    return (
        <div className="Bio-Data-Container">
            <img src={pic} className="Img-Style"/>
            <h1>{name}</h1>
            <div className="Hide-Other">{description}</div>
            <hr className="Hide-Other" />
            <div className="Hide-Other">{company}</div>
            <div className="Hide-Other">{country}</div>
        </div>

    );


}

const styles = {
    bioDataContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '25%'
    },
    imgStyle: {
        borderRadius: 10
    }

}

export default LeftSideBar;