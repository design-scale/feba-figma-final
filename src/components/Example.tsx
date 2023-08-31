import { h } from 'preact';
import {useState, useEffect} from 'preact/hooks'
import Lottie from 'react-lottie';
import * as animationData from '../lotties/animation.json';

const LottieControl = ({playAnimation}: any) => {
    const [isStopped, setIsStopped] = useState(true); // Começa parado
    const [isPaused, setIsPaused] = useState(false);
  
    const buttonStyle = {
      display: 'block',
      margin: '10px auto',
    };
  
    const defaultOptions = {
      loop: false,
      autoplay: false,
  
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  
    useEffect(() => {
      // Atualiza o estado de reprodução quando a prop playAnimation mudar
      setIsStopped(!playAnimation);
    }, [playAnimation]);

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={100}
        width={100}
        isStopped={isStopped}
        isPaused={isPaused}

      />
   
     
    </div>
  );
};

export default LottieControl;