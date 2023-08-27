import { createRectangles } from './utils';
import { on, showUI } from '@create-figma-plugin/utilities'

import { ResizeWindowHandler } from './types'

export default function () {
  const options = { width: 290, height: 325 }
  const data = { greeting: 'Hello, World!' }
  showUI(options, data)
}

figma.ui.onmessage = (msg) => {
  if (msg.type === 'create-rectangles') {
    createRectangles(msg.count);
  }

  figma.closePlugin();
};
