# VideoEditor Library

## Welcome

Hello! And thanks for contributing to the VideoEditor library. This document will guide you through the structure of the VideoEditor and how to make contributions.

The VideoEditor is a VanillaJS library for video editing. I built it with expedience as part of an ongoing project. It was built with the following expectations in mind:

- Lightweight build with limited dependencies (Choose VanillaJS over React)
- Create only the features needed for the project's needs (YAGNI principle!)
- Design to promote extensibility in the future

## What needs work

Because the VideoEditor was built as part of another project where I have many different responsibilites, I built it with expendience, just to make it functional. As a result, documentation is not comprehensive and the code quality is not as clean as I would like it to be. I am looking for contributors to help clean up the code and improve the design of the VideoEditor. New features are also welcome!

## Contributing

There are `Features to add` and `TODO` lists at the bottom of this document. The `TODOs` are ordered by priority. If you would like to contribute, please take a look at the lists and see if there is anything you would like to work on. If you have an idea for a new feature, please open an issue to discuss it before you start working on it. If you would like to work on a `TODO` item, open an issue to let me know that you are working on it. This will help to avoid duplicate work. Also feel free to suggest new `TODO` items.

## VideoEditor Architecture

Here is a list of the main components within the VideoEditor.
The parent component is the VideoEditor itself.

```bash
VideoEditor
    |---- MenuBar
    |---- Viewer
    |---- Instructions Modal
    |---- Timeline
        |---- Playhead
        |---- RangeSelector
        |---- Cropper
        |---- Controls
        |---- Popover
        |---- InfoBar
```

The VideoEditor serves as the app entry point, orchestrating the loading of the video and initialization of major components. The loading process is handled by the Viewer and the majority of the VideoEditor's user interactions are handled by the `Timeline` and `RangeSelector` components.

## Rendering of the VideoEditor

The UI is rendered in the following steps:

1. `VideoEditor` receives a video source from the client.
2. `VideoEditor` initializes its child components, passing the video source to the `Viewer` component.
3. `Viewer` loads the video, then fires the `onLoad` event when the video is ready to play.
4. `VideoEditor` can now initialize the `Timeline` hooking into the `onLoad` callback. Loading the video allows the timeline to draw the frames of the video onto the timeline.
5. `Timeline` renders all of its sub-components, such as the `Playhead`, `RangeSelector`, `Controls`, `Popover`, `InfoBar` and `Cropper`.
6. `RangeSelector` initializes the in and out `Marker`s, creating a range that can be trimmed. The `RangeSelector` clones the timeline's frames, overlaying them ontop of the timeline in order to show which frames have been selected.

And that's it! The `VideoEditor` is now ready to be used.

## Individual Component Architecture

Each component of the VideoEditor is responsible for rendering a specific part of the editor, described by its title. The only required method is `render()`, which takes an `HTMLElement` as an argument. It renders the component by appending its main element to the container passed in as an argument. See the example below.

```javascript
// Child component
class VideoEditorComponent {
  constructor() {
    this.container = this.createVideoEditorContainer();
  }

  createVideoEditorContainer() {
    // ... logic to create video editor container
  }

  render(container) {
    container.appendChild(this.container);
  }
}
```

### Component Lifecycle

The component lifecycle is simple. There is an initialization phase and a rendering phase. In the initialization phase, the component is instantiated and its options are set. When the component is ready to be rendered, the `render()` method is called.

```javascript
class VideoEditor {
  constructor() {
    // initialize the components
    this.menuBar = new MenuBar(...options);
    this.viewer = new Viewer(...options);
    this.timeline = new Timeline(...options);
  }

  render(container) {
    // render the components
    this.menuBar.render(container);
    this.viewer.render(container);
    this.timeline.render(container);
  }
}
```

### Extending the HTML Component

Some components can access the `onRender()` method, which is called after the component is rendered. This is useful for adding event listeners to the component's elements. To use the `onRender()` method, extend your component with `HTMLElement` and override the `render()` and `onRender()` methods. Don't forget to call `super()` in the constructor and the `render()` method, passing in the appropriate arguments.

`HTMLElement` uses `MutationObserver` to implement the `onRender()` method.

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

State changes occur in an imperative manner as opposed to the more functional paradigm in `React`. State is updated by directly manipulating the DOM. This can be seen in the `RangeSelector` component, where the `mousedown` event listener is used to update the state of the component. State can also be handled by event listeners, which are added to the component's elements in the `onRender()` method.

As much as possible, I try to keep state management modular with separate of concerns between components. For instance, the video source is loaded and managed by the Viewer component alone. Other components can access the video element only through Viewer component methods, but the `Viewer` has no knowledge of the other components. Only `VideoEditor` has knowledge of all the components.

## Component Breakdown

### VideoEditor

The VideoEditor is the parent component that contains all the other components.You can think of it as the main app. It holds the global state of the video editor. It is responsible for initializing the child components and orchestrating the rendering process.

### MenuBar

The MenuBar component is responsible for rendering the menu bar at the top of the VideoEditor. It contains buttons that configure the video editor, such as the "Crop" button, the "Save" button, the "Help" button, and the "Dark Mode" toggle button.

### Viewer

The Viewer component is responsible for loading the video and calculating video dimensions, which are crucial for the responsive design.

### Timeline

The Timeline component is responsible for rendering the timeline and all the components within it. It contains the Playhead, RangeSelector, Controls, Popover, Cropper and InfoBar components. It is rendered after the Viewer component has begun to load the video. The Timeline component is also responsible for handling the video's time updates. It handles user interactions with the timeline, such as dragging the playhead and the range selector.

### Playhead

The Playhead component is responsible for rendering the playhead on the timeline. It extends the `Marker` class, which is a simple class that renders a marker on the timeline. The playhead is a special type of marker that is updated as the video plays.

### RangeSelector

The RangeSelector component is responsible for rendering the range selector on the timeline. It is also responsible for allowing the user to select a range of the video to be edited. It holds the in and out `Marker` components, which are used to select the range.

### Controls

The Controls component is responsible for rendering all `ControlButton`s on the timeline such as the `PlayButton`. To add your own `ControlButton`, please see the documentation in the `Control` component. These buttons allow the user to control the video, such as play, pause, and stop.

### InfoBar

The InfoBar component is responsible for rendering the info bar on the timeline. It displays information about the video such as the current time and the duration of the video and the video resolution.

### Popover

The Popover component provides warnings such as "Maximum duration reached" if such limits are set.

## Context and Global Video Editor Instance

All descendant components of the VideoEditor have access to the global instance of the VideoEditor. This is achieved by importing the context object from context.js, inspired by React's context/state management.

### Example

```javascript
import { context } from './context.js';

class ChidComponent {
  constructor() {
    this.videoEditor = context.getContext();
    // now you can access all the methods and properties of the VideoEditor
  }
}
```

## Bundle Size

Currently, the VideoEditor bundle when minified (but uncompressed) is 320KB. I would like to attempt to reduce the bundle size to 250KB or less. However, if more features are implemented this becomes increasingly unlikely.

The three dependencies that are contributing to the large bundle size are `cropperjs`, `fontawesome` and `gsap`, which are used for the cropper UI, menubar icons, and the rangeselector drag controls, respectively.

### Bundle Size Reduction Suggestions

- I would like to replace these dependencies with smaller, more lightweight alternatives. Potentially, we could use a custom SVG for the menubar icons, and a custom drag control for the rangeselector. However, this would require a significant amount of work. And draggables are not easy to implement, especially for cross browser and mobile support. There may be another library that is smaller and more lightweight that we could use instead of `gsap`.
- I would also like to remove the `cropperjs` dependency and replace it with a custom cropper. Again, this would require a significant amount of work.
- general clean up and seek and destroy any unused / duplicate code.

## Features to Add

1. Minimum duration limit.
   Currently, the `limit` option excepts `maxDuration` as a property only. I would like to add a minimum duration limit as well to limit the range selector to a minimum duration.
2. Loop toggle control button.
   This would allow the user to loop the video, toggling the loop on and off.
3. Rotate video.
   Extend the cropper to allow the user to rotate the video. (Lowest priority)
4. Crop Overlay
   At one point, there was a "Crop Overlay" that was used to show the user the area of the video that was cut out by the initial crop they chose for their frame. For instance, if a user supplied a video with a 320 \* 480 resolution and the frame crop was 1:1, the area of the video that was cut out by the frame would visible underneath this dark overlay. This was removed because it was tricky to implement with the cropperjs library and I was running out of time. Potentially, this could be added back in or an option to toggle it on and off could be added.

## TODOS

### High Priority

1. Fix a brief flash that occurs when the cropper is toggled on.
2. Fix cropper UI yellow border that is only partly visible when cropping videos with a smaller frame than their native resolution. (i.e. when the client passess in a crop of { width: 100, height: 100 } for a video with a resolution of 1920x1080)

### Medium Priority

1. Decrease bundle size.
2. Lazyload instructions component and look for other opportunities to lazyload components.
3. Housecleaning: remove commented out code, erroneous comments, and unused variables.
4. Improve error handling. Currently, the error handling is minimal with some defensive program strategies implemented sparsely. The most robust error handling occurs in the Viewer component where errors are most likely to occur due to incompatible sources.
5. Improve Cropper component. Cropper acts as a wrapper for the `cropperjs` library, is the most need of attention for code quality improvements. It is currently a child of the Timeline component, but there may be a more appropriate place for it. The integration of the cropper feature was done hastily. Ideally, It should also be more easily replaceable with another cropper library.

### Low Priority

1. Code quality improvements
2. Reduce complexity of Timeline / RangeSelector
3. Reassign responsibility of the Cropper to the Viewer or more appropriate component than Timeline where it currently resides.
4. Window event listener clean up when video editor is destroyed
5. Add property @type for menu bar button (types should go in the type.js file)
6. Add tests
7. Improve documentation naming conventions. For example, currently I am using SubComponent and ChildComponent interchangeably. I would like to standardize the naming conventions. These are small things, but they add up.
8. Expand readme
