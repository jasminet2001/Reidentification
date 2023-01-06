import vid from '../../assets/Pine.mp4';
import styles from "./video.module.css";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function video(){
    return(
        <Card className={styles.videoSection}>
            <Card.Body>
                <Card.Text>
                    <Container fluid>
                        <Row>
                            <Col md={1}>
                                <div className={styles.button}>
                                    <a href="#" className={styles.previous}>&#8249;</a>
                                </div>
                            </Col>

                            <Col md={10}>
                                <div className={styles.vid}>
                                    <video controls width='100%' poster=''>
                                    <source src={vid} type="video/mp4"/>
                                    </video>
                                </div>
                            </Col>

                            <Col md={1}>
                                <div className={styles.button}>
                                    <a href="#" className={styles.next}>&#8250;</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Card.Text>
            </Card.Body>
        </Card> 
    );
};
export default video;