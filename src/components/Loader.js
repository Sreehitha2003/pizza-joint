import React from 'react';
import {motion, useCycle} from "framer-motion";

const loadervariants ={
    animationOne: {
        x:[-20,20],
        y:[0,-30],
        transition:{
          x:{
            yoyo: Infinity,
            duration: 0.5
          },
          y:{
            yoyo: Infinity,
            duration: 0.25,
            ease: "easeOut"
          },
        }
    },
    animationTwo: {
        y: [0, -40],
        x: 0,
        transition: {
          y: {
            yoyo: Infinity,
            duration: 0.25,
            ease: 'easeOut'
          }
        }
    }
}

const Loader = () =>{
    const [animation, cycleanimation] = useCycle("animationOne","animationTwo")
    
    return(
        <>
        <motion.div className='loader'
        variants={loadervariants}
        animate={animation}>

        </motion.div>
        <div onClick={() => cycleanimation()}></div>
        </>
    )
}

export default Loader;