import './First.css';
import vid from '../../assets/Pine.mp4';

function First(){
    return(
        <div className="block">
            <h1 className="Title">First Page</h1>
            <video className="video" controls width='100%' poster='' 
            style={{borderTopLeftRadius: "15%", borderBottomRightRadius: "15%"}}>
                <source src={vid} type="video/mp4" />
            </video>
        </div>) ;
};
export default First;

