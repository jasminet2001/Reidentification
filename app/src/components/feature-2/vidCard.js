import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import vid from '../../assets/Pine.mp4'

function vidCard(){
    return (
        <Card style={{ width: '18rem', padding: '2em', margin:'4em', marginTop:'2%', marginBottom:'0'}}>
          <Card.Body>
            {/* <Card.Title>Card Title</Card.Title> */}
            <Card.Text>
              <video controls width='100%' poster=''>
                <source src={vid} type="video/mp4"/>
              </video>
            </Card.Text>
          </Card.Body>
        </Card>
    );
};
export default vidCard;