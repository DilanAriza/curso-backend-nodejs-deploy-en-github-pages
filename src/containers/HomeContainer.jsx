//dependences
import React from 'react'
import { Link } from 'react-router-dom'

//Components
import Header from '../components/Header'

//Styles
import '../assets/styles/containers/Home.scss'


export default function HomeContainer({children}) {
    return (
        <div className="padding-top-80">
            <Header></Header>
            <div className="home">
                <div className="banner">
                    <div className="banner__container">
                        <div className="content-banner">
                            <div className="item__head__banner">
                                <h1>Task app of Dilan Ariza</h1>
                            </div>
                            <div className="item__sub-head__banner">
                                <p>
                                    This Applications use the depencendes like React, React Router, Redux.
                                    And this applications is deployment in GitHub Pages
                                </p>
                                <Link to="/task" className="btn-task">
                                    <span>Go to task</span>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
                {/* <div className="slidebar">
                    <ul>
                        <li><Link to="/task/create">Create Task</Link></li>
                        <li><Link to="/taks/findtags">Find of tags</Link></li>
                        <li><Link to="/tags/findalltags">Find tags</Link></li>
                        <li><Link to="/tags/create">Create tags</Link></li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}
