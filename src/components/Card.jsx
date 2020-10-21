import React, { Component } from 'react'

import '../assets/styles/components/Card.scss'

export default class Card extends Component {
    constructor(props){
        super(props);

        this.state={}
    }
    render() {
        return (
            <div className="card">
                <div className="card__date">20/12/2020</div>
                <div className="card__title">Task 1</div>
                <div className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum temporibus numquam, accusantium beatae molestias placeat esse cumque cum recusandae id et, pariatur omnis quis iure, in qui asperiores sed itaque.</div>
                <div className="card__tags">
                    <ul>
                        <span>tag 1</span>
                        <span>tag 2</span>
                        <span>tag 3</span>
                    </ul>
                </div>
                <div className="card__actions">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}
