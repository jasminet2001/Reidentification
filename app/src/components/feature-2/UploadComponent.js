import Form from 'react-bootstrap/Form';
import Pic from '../../assets/upload.svg'
import styles from './upload.module.css';

function UploadComponent(){
    return(
        <div className={styles.flexContainer}>
            <div className={styles.img}>
                <img src={Pic} className={styles.pic} alt='' />
            </div>

            <div className={styles.form}>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Control type="file" size="lg" />
                </Form.Group>
            </div>
        </div>
    );
};
export default UploadComponent;