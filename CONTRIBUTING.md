# VideoEditor

## Welcome

Hello!

## VideoEditor structure

The VideoEditor is a VanillaJS component that allows you to edit a video. Here is a list of the main components within the VideoEditor with their child components.

1. MenuBar
2. Timeline
3. RangeSelector

## Context and Global Video Editor Instance

All descendant components of the VideoEditor have access to the global instance of the VideoEditor. This is achieved by importing the context object from context.js, inspired by React's context/state management.

### Example

```javascript
import { context } from './context.js';

class SubComponent {
  constructor() {
    this.videoEditor = context.getContext();
    // now you can access all the methods and properties of the VideoEditor
  }
}
```

## TODOS

1. Find moment to revoke object url of video src
2. Window event listener clean up when video editor is destroyed
3. Add property @type for menu bar button
4. Expand readme
5. Add minDuration to limit

```

```
