# VideoEditor Library

## Welcome

Hello! And thanks for contributing to the VideoEditor library. This document will help you understand the structure of the VideoEditor and how to contribute to it.
The VideoEditor is a VanillaJS component that allows you to edit a video. It was built to be lightweight with as few dependencies as posssible. The VideoEditor was built as quickly as possible as possible for use in another project. As a result, the code is not as clean as it could be. I am looking for contributors to help clean up the code and improve the structure of the VideoEditor. New features are also welcome!

## Contributing

There is a `TODO` list at the bottom of this document. If you would like to contribute, please take a look at the `TODO` list and see if there is anything you would like to work on. If you have an idea for a new feature, please open an issue to discuss it before you start working on it. If you would like to work on a `TODO` item, please open an issue to let me know that you are working on it. This will help to avoid duplicate work. Also feel free to suggest new `TODO` items.

## VideoEditor Architecture

The VideoEditor is a VanillaJS component that allows you to edit a video. Here is a list of the main components within the VideoEditor with their child components.
The parent component is the VideoEditor itself. It contains the following child components:

```bash
VideoEditor
    |---- MenuBar
    |---- Viewer
    |---- Timeline
        |---- Playhead
        |---- RangeSelector
        |---- Controls
        |---- Popover
        |---- InfoBar
```

The majority of the video Editor logic is handled by the `Timeline` and `RangeSelector` components.

## Individual Component Architecture

Each component of the VideoEditor is responsible for rendering a specific part of the video editor, described by its title. The only prescribed method is `render()`, which takes an `HTMLElement` as an argument and appends the component as a child of this contiainer.

```javascript
class VideoEditorComponent {
  constructor() {
    this.container = this.createVideoEditorContainer();
  }

  createVideoEditorContainer() {
    // ... logic to create video editor container
  }

  render(container) {
    // render the component into the container
    container.appendChild(this.container);
  }
}
```

When the component is ready to be rendered, the `render()` method is called. Usually, the component to render is instantiated in a parent component's constructor and then rendered in that parent component's `render()` method.

```javascript
class VideoEditor {
  constructor() {
    this.menuBar = new MenuBar(...options);
    this.viewer = new Viewer(...options);
    this.timeline = new Timeline(...options);
  }

  render(container) {
    this.menuBar.render(container);
    this.viewer.render(container);
    this.timeline.render(container);
  }
}
```

### Extending the HTML Component

Some components can access the `onRender()` method, which is called after the component is rendered. This is useful for adding event listeners to the component's elements. Extend the HTMLElement and override the `render()` and `onRender()` methods. Don't forget to call `super()` in the constructor and the `render()` method, passing in the appropriate arguments.

```javascript
class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.componentElement = this.componentElement();
  }

  createVideoEditorContainer() {
    // ... logic to create video editor container
  }

  render(container) {
    super(this.componentElement, container);
    // render the component into the container
    container.appendChild(this.componentElement);
  }

  onRender() {
    // do something after the component is rendered
  }
}
```

### State Management

State changes occur in an imperative manner, meaning that the parent component calls the child component's methods to change the state of the child component. The child component then re-renders itself to reflect the new state.

## Component Breakdown

### VideoEditor

The VideoEditor is the parent component that contains all the other components. It is responsible for initializing the video and the child components. It also contains the global state of the video editor.

### MenuBar

The MenuBar component is responsible for rendering the menu bar at the top of the VideoEditor. It contains buttons that allow the user to perform actions such as play, pause, and save.

### Viewer

The Viewer component is responsible for rendering the video and the timeline. It contains the video element and fires events when the video is ready to play.

### Timeline

The Timeline component is responsible for rendering the timeline and all the components within it. It contains the Playhead, RangeSelector, Controls, Popover, and InfoBar components. It is rendered after the Viewer component has begun to load the video.

### Playhead

The Playhead component is responsible for rendering the playhead on the timeline. It is also responsible for moving the playhead when the video is playing.

### RangeSelector

The RangeSelector component is responsible for rendering the range selector on the timeline. It is also responsible for allowing the user to select a range of the video to be edited.

### Controls

The Controls component is responsible for rendering the controls on the timeline. It is also responsible for allowing the user to control the video.

### InfoBar

The InfoBar component is responsible for rendering the info bar on the timeline. It is also responsible for displaying information about the video.

### Popover

The Popover component is responsible for rendering the popover on the timeline. It is provides warnings such as "Maximum duration reached" if such limits are set.

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

## Bundle Size

The VideoEditor is currently 320KB. I would like to reduce the bundle size to 200KB or less. The two dependencies that are contributing to the large bundle size are `cropperjs`, `fontawesome` and `gsap`, which are used for the cropper UI, menubar icons, and the rangeselector drag controls, respectively.

### Bundle Size Reduction Suggestions

- I would like to replace these dependencies with smaller, more lightweight alternatives. Potentially, we could use a custom SVG for the menubar icons, and a custom drag control for the rangeselector.
- I would also like to remove the `cropperjs` dependency and replace it with a custom cropper.
- clean up the code to remove any unused variables and functions.

## TODOS

1. Find moment to revoke object url of video src
2. Window event listener clean up when video editor is destroyed
3. Add property @type for menu bar button (types should go in the type.js file)
4. Expand readme
5. Add minDuration to limit
6. Further encapsulate cropper functionality in the Timeline component. Probably, the Viewer component is the right place for it.
7. Housecleaning: removed commented out code, erroneous comments, and unused variables.
8. Decrease bundle size.
