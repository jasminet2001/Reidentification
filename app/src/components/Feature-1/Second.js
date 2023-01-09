import styles from './Second.css';
import vid from '../../assets/Pine.mp4';
function Second(){
    return(
        <div className={styles.container}>
            <h1 className="Title">Second Page</h1>
            <div className={styles.floatContainer}>
                <div className="float-right">
                    <video className="vid" controls width="50%" poster=''>
                        <source src={vid} type="video/mp4"/>
                    </video>
                </div>
                <div className="float-left">
                    <video className="vid" controls width="50%" poster=''>
                        <source src={vid} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>) ;
};
export default Second;