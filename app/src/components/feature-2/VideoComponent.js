import './style.css';
import VidSlider from './vidsDisplay';
import MainVid from './video';

function render(){
    return(
    <div className="Videos">
        <MainVid></MainVid>
        <VidSlider></VidSlider>
      </div>
    );
};

export default render;

