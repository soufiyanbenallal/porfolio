import * as React from 'react';
import lottie from 'lottie-web';
import animationData from '../lotties/bg-flow2.json';

const LottieControl = () => {
  const lottieRef = React.useRef(null);

  React.useEffect(() => {
    var animDuration = 200;
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      // renderer: "svg",
      loop: false,
      autoplay: false,
      animationData,
    });
    const maxFrames = anim.totalFrames;
    // anim.play();

    function animatebodymovin(duration) {
      const scrollPosition = window.scrollY;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
      const v = frame < 125 ? frame : 225;
      anim.goToAndStop(v, true);
    }
    const onScroll = () => {
      animatebodymovin(animDuration);
    };

    document.addEventListener('scroll', onScroll);
    return () => {
      anim.destroy();
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return <div ref={lottieRef}></div>;
};

export default LottieControl;
