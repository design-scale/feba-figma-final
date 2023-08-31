import { h } from 'preact';
import {useState} from 'preact/hooks'
import Lottie from 'react-lottie';
import * as animationData from '../lotties/animation.json';

const LottieControl = () => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const buttonStyle = {
    display: 'block',
    margin: '10px auto',
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={100}
        width={100}
        isStopped={isStopped}
        isPaused={isPaused}
      />
      <button style={buttonStyle} onClick={() => setIsStopped(true)}>
        stop
      </button>
      <button style={buttonStyle} onClick={() => setIsStopped(false)}>
        play
      </button>
      <button style={buttonStyle} onClick={() => setIsPaused(!isPaused)}>
        pause
      </button>
    </div>
  );
};

export default LottieControl;