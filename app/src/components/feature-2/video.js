import vid from '../../assets/Pine.mp4';
import styles from "./video.module.css";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function video(){
    return(
        <Card className={styles.videoSection}>
            <Card.Body>
                <Card.Text>
                    <video controls width='100%' poster=''>
                    <source src={vid} type="video/mp4"/>
                    </video>
                </Card.Text>
            </Card.Body>
        </Card>           
    );
};
export default video;