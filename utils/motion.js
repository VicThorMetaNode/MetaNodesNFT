// ----- BASIC MOTIONS ----------

//NAVBAR FROM UP TO 0
export const navVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        delay: 1,
      },
    },
  };



//CONTAINER + CHILDREN :  use it as main DIV
export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });

  //SPRING = An animation that simulates spring physics for realistic motion.
  //This is the default animation for physical values like x, y, scale and rotate.
  //TEXT VARIANTS 1
  export const textVariant1 = (delay) => ({
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay,
      },
    },
  });

  //Set type to "tween" to use a duration-based animation. If any non-orchestration transition values are set without a type property
  //this is used as the default animation.
  //TEXT VARIANTS 2
  export const textVariant2 = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };



// ----- SCROLL MOTIONS ----------
// import { motion, useScroll } from "framer-motion"
//SCROLL-TRIGGERED ANIMATIONS
export const whileInViewTrigger = {
initial: { opacity: 0 },
whileInView: { opacity: 1 },
}


//----- BASIC ANIMATIONS
//SLIDE-IN
export const slideIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
        y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
        x: 0,
        y: 0,
        transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
        },
    },
    });

//ZOOM IN
export const zoomIn = (delay, duration) => ({
    hidden: {
        scale: 0,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut',
        },
    },
    });

    //FADE IN
    export const fadeIn = (direction, type, delay, duration) => ({
      hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type,
          delay,
          duration,
          ease: 'easeOut',
        },
      },
    });