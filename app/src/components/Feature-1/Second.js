import './Second.css';
import vid from '../../assets/Pine.mp4';
function Second(){
    return(
        <div className="container">
            <h1 className="Title">Second Page</h1>
            <div className="float-container">
                <div className="float-right">
                    <video className="vid" controls width="200" poster=''>
                        <source src={vid} type="video/mp4"/>
                    </video>
                </div>
                <div className="float-right">
                    <video className="vid" controls width="200" poster=''>
                        <source src={vid} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>) ;
};
export default Second;