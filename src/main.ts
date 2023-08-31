import { createRectangles } from './utils';
import { on, showUI } from '@create-figma-plugin/utilities'

import { ResizeWindowHandler } from './types'



export default function () {
  const options = { width: 290, height: 335 }
  const data = { greeting: 'Hello, World!' }
  showUI(options, data)
 

}


// show pages


figma.ui.onmessage = (msg) => {
  if (msg.type === 'create-rectangles') {
    createRectangles(msg.count);
    console.log('testezin _______PASSOU!')
    setTimeout(() => {
      figma.closePlugin()
    }, 2900)
  }
  
  
  

  // setTimeout(() => {
  //   figma.closePlugin();
  // }, 5000); // 5000 milliseconds = 5 seconds delay
};

