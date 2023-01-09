import React,{Component} from 'react';
import './Second.css';
import ReactPlayer from 'react-player'

export class Second extends Component{
    render(){
        return(
        <div className="container">
            <h1 className="Title">Second Page</h1>
            <div className="float-container">
                <div className="float-right">
                    <ReactPlayer className="vid" width="200" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </div>
                <div className="float-right">
                    <ReactPlayer className="vid" width="200" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </div>
            </div>
        </div>) ;
    }
}