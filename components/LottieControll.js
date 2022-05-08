import * as React from "react";
import lottie from "lottie-web";
import animationData from "../lotties/bg-flow.json";

const LottieControl = () => {
  const lottieRef = React.useRef(null);

  React.useEffect(() => {
    var animDuration = 700;
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      // renderer: "svg",
      loop: false,
      autoplay: true,
      animationData
    });
    const maxFrames = anim.totalFrames;
    animatebodymovin(animDuration);

    function animatebodymovin(duration) {
      const scrollPosition = window.scrollY;

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100));
      const v = frame < 125 ? frame : 125;
      console.log("v",v);
      anim.goToAndStop(maxFrames -2 , true);
    }
    const onScroll = () => {
      animatebodymovin(animDuration);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      anim.destroy();
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div ref={lottieRef}></div>;
};

export default LottieControl;
