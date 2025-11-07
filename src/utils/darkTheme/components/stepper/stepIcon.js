import { color } from 'framer-motion'
import colors from '../../base/colors'
import boxShadow from '../../functions/boxShadow'
import pxToRem from '../../functions/pxToRem'
import rgba from '../../functions/rgba'

const { white, primary, text } = colors

const stepIcon = {
  styleOverrides: {
    root: {
     background: text.primary,
      fill:`${rgba(primary.main, 0.5)}`,
      // stroke:  text.primary,
      strokeWidth: pxToRem(10),
      width: pxToRem(22),
      height: pxToRem(22),
      borderRadius: '50%',
      zIndex: 2,
      transition: 'all 200ms linear',

      '&.Mui-active': {
        // color: "white",
        // textColor:"blue",
        background: primary.main,
         
        fill:primary.main,
        

        // stroke: "white",
        // borderColor: white.main,
        boxShadow: boxShadow([0, 0], [0, 1], text.primary, 1)
      },

      '&.Mui-completed': {
        // background: white.main,
        fill: primary.main,
        // stroke: white.main,
        // borderColor: white.main,
       
      }
    }
  }
}

export default stepIcon
