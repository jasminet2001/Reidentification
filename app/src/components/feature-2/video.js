import vid from '../../assets/Pine.mp4';
import styles from "./video.module.css";
function video(){
    return(
        <div className="videoSection">
            <video width="750" height="500" controls className={styles.main} poster="">
                <source src={vid} type="video/mp4"/>
            </video>
        </div>       
    );
};
export default video;