import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import vid from '../../assets/Pine.mp4';
import styles from './cards.module.css';
import { useState } from "react";

function VidCard(){
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <Card  
    onClick={handleClick}
    className={active ? styles.bgOnClick : styles.bg}
    >
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
export default VidCard;