import First  from './First';
import {useState} from 'react';
import Second from './Second';
import styles from './VidComponent.module.css';
import Button from 'react-bootstrap/Button';

function DoubleVidComponent() {
  const [isShown, setIsShown] = useState(false);
  const [isShownFirst, setIsShownFirst] = useState(true);
  const handleClick = event => {
    setIsShownFirst(current => !current);
    setIsShown(current => !current);
  };
  return (
    <div>
      {isShownFirst && <First/>}
      {isShown && <Second/>}
        <div className={styles.btnContainer}>
            <Button variant="outline-warning" onClick={handleClick} className={styles.btn}>Click</Button>
        </div>
    </div>
  );
}

export default DoubleVidComponent;