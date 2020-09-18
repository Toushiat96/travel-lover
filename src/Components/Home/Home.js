import React from 'react';
import Header from '../Header/Header';
import HomeInformation from '../HomeInformation/HomeInformation';
import fakedata  from '../../fakedata/index';
import './Home.css'

const Home = () => {
    return (
        <div className="homeimage">
        <div>
        <Header></Header>
        </div>
        <div  className="carousel">
        
            {
            
            fakedata.map( data => <HomeInformation data ={data}></HomeInformation>)
            
            }
            </div>
        </div>
    );
};

export default Home;