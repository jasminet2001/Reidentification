import styles from './Second.css';
import vid from '../../assets/Pine.mp4';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Second(){
    return(
        <Container className={styles.container}>
            <Row>
                <h1 className="Title">Second Page</h1>
            </Row>
            
            <Row className="floatContainer">
                <Col className="floatRight">
                    <video className="vid" controls width="100%" poster=''>
                        <source src={vid} type="video/mp4"/>
                    </video>
                </Col>

                <Col className="floatLeft">
                    <video className="vid" controls width="100%" poster=''>
                        <source src={vid} type="video/mp4"/>
                    </video>
                </Col>
            </Row>
        </Container>) ;
};
export default Second;