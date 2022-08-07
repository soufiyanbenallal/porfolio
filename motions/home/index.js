export const FADE_ANIM = {
    initial:{ opacity: 0},
    animate:{ opacity: 1 },
    transition:{
     delay: 3,
     ease: "easeInOut",
      duration: 1.5,
    }
  }

  export const LINE_ANIM = {
    initial:{ width: 100,height: 4000,opacity: 0,y: '-50%', x: '-50%'},
    animate:{ width: 20,height: 92,opacity: 1,y: 0, x: 0},
    exit:{ opacity: 0 },

    transition:{
    //  delay: 2,
     ease: "easeInOut",
     
      duration: 1.5,
    }
  }
  export const DISAPEAR_ANIM = {
    animate:{opacity: 0},

    transition:{
     delay: 2.5,
     ease: "easeInOut",
      duration: .5,
    }
  }

  export const NAME_ANIM = {
    initial:{ scale: 5 ,opacity: 0},
    animate:{ scale: 1,opacity: 1 },
    transition:{
     delay: 1.5,
     ease: "easeInOut",
      duration: 1.5,
    }
  }
