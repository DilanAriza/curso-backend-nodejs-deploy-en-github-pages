import React, { Component } from "react";

export class RedirectExternal extends Component {
    constructor( props ){
        super(props);
    }
    componentWillMount(){
        console.log(this.props);
        window.location = this.props.loc;
    }
    render(){
        return (<section>Redirecting...</section>);
    }
}

export default RedirectExternal;