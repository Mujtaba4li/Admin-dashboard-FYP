import React from "react";
import Lottie from "react-lottie";
import data from "../../../assets/json/hello.json";

export default function MyLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div id="lottie">
      <Lottie
        options={defaultOptions}
        height={120}
        width={150}
        style={{
          // top: "30%",
          right: "10%",
          // zIndex: -1,
          overflow: "hidden",
          // position: "fixed",
          // marginLeft:'10rem',
          marginTop:'-20px',
          position:"absolute"
        }}
      />
    </div>
  );
}

// import React, { useEffect, useRef } from 'react';
// import lottie from 'lottie-web';

// export default function Lottie() {
//   const container = useRef(null)

//   useEffect(() => {
//     lottie.loadAnimation({
//       container: container.current,
//       renderer: 'svg',
//       loop: true,
//       autoplay: true,
//       animationData: require('../../../assets/json/hello.json')
//     })
//   }, [])

//   return (
//     <div className="App">

//       <div className="container" ref={container}></div>
//     </div>
//   );
// }
