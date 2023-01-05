import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import vid from '../../assets/Pine.mp4';

function vidCard(){
    return (
      <Card style={{width:'70%' ,margin:'auto', marginTop:'0%', marginBottom:'4%', backgroundColor: 'rgba(254,253,112,1)'}}>
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
export default vidCard;