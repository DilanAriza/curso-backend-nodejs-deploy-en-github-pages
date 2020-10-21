import React from 'react';
import { Link } from 'react-router-dom';

import './../assets/styles/components/Home.scss';
import Card from './Card';

const Home = ()=>(
    <div className="home">
        <div className="slidebar">
            <ul>
                <li><Link to="/task/create">Create Task</Link></li>
                <li><Link to="/taks/findtags">Find of tags</Link></li>
                <li><Link to="/tags/findalltags">Find tags</Link></li>
                <li><Link to="/tags/create">Create tags</Link></li>
            </ul>
        </div>
        <div className="main">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
)

export default Home;