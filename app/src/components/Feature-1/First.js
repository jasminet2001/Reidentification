import React,{Component} from 'react';
import './First.css';
import ReactPlayer from 'react-player'

export class First extends Component{
    render()
    {
        return(
        <div className="block">
            <h1 className="Title">First Page</h1>
            <ReactPlayer className="video" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        </div>) ;
    }
