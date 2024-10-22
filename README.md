# Video Editor 1.0.0

## Check out the [Demo](https://aslamhusain.com/video-editor)

## Summary

The VideoEditor is a responsive VanillaJS library that allows users to crop, trim, and save videos. It is a component-based library that can be used in any web application. The VideoEditor is designed to be simple and easy-to-use and customizable to fit your needs. Please note that it does not perform any video transformations itself, but it does provide an object detailing the transformations that can be used to transform the video with a backend service.

### Screenshot

![Video Editor](/video-editor.png)

## Basic Usage

```javascript
import VideoEditor from '../VideoEditor';
const options = {
  src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
};
const videoEditor = new VideoEditor({ options });
videoEditor.render(myHTMLContainer);
```

## Advanced Usage

```javascript
const options = {
    src : 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
    crop: { width: 7, height: 4 },
    maxHeight: 450,
    transformations: {
        crop: { h: 173, scale: '0.2', w: 343, x: '308', y: '153' },
        time: { in: 5, out: 10 },
    },
    limit: { maxDuration: 10 },
    menuBarButtons: {
        inlineEndButtons: {
        cancel: {
            index: 3,``
            label: 'Exit',
            fontAwesomeIcon: 'fa fa-times',
        },
        },
    },
    onError: (error) => {
        // do something with the error
    },
    onSave: (transform, videoSrc) => {
        // do something with the transformed video
    },
    onTimelineClick: (timeIndex) => {
        // get the current time index
    },
    onClickHelpButton: (event) => {
        // custom help button
    },
    onRangeLimit: ({ marker, maxDuration, time }) => {
        // do something when the range limit is reached
    },
    onRangeUpdate: (...args) => {
        // do something when the range is updated
    },

}
```

## Saving the Video

You can save the video by passing a callback to the onSave option or by calling the save method on the VideoEditor instance.
The VideoEditor does not perform any transformations, however it does provide an object detailing the transformations that can be used to transform the video. For convenience, the video source is also provided.

### onSave

```javascript
const options = {
    src : 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
    onSave: (transformations, videoSrc) => {
        // do something with the transformations and video source
    },
}
```

### save method

```javascript
const videoEditor = new VideoEditor({ options });
videoEditor.render(myHTMLContainer);
// after the video is edited...
const [transformations, videoSrc] = videoEditor.save();
```

### Transformations

The transformations object contains the crop and time transformations.

```javascript
{
    crop: { h: 173, scale: '0.2', w: 343, x: '308', y: '153' },
    time: { in: 5, out: 10 }, // time in seconds
}
```

## Options

### src (required)

@type string | Blob

The video source. This can be a Blob or a URL string.

Example: '<https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4>'

### crop

@type object

An object with the width and height of the crop.

Example: { width: 16, height: 9 }

### transformations

@type object

An object with the crop and time transformations.

Example: { crop: { h: 173, scale: '0.2', w: 343, x: '308', y: '153' }, time: { in: 5, out: 10 } }

### maxHeight

@type number

The max height of the video editor. The default is 300.

### limit

@type object

An object with the max duration the video can be trimmed to

Example: { maxDuration: 5 }

### menuBarButtons

@type object

An object with custom menu bar buttons with option to disable default buttons.

Example: { inlineStartButtons: {}, inlineEndButtons: {}, disable: []}

Menu bar button properties:

- index: the position of the button
- label: the button label
- fontAwesomeIcon: the font awesome icon
  Example: { index: 3, label: 'Exit', fontAwesomeIcon: 'fa fa-times' }

Example: { inlineEndButtons: { cancel: { index: 3, label: 'Exit', fontAwesomeIcon: 'fa fa-times' } } }

### disabledButtons

@type object

An object with keys of button names to disable

The default button keys are: 'mute', 'crop', 'save', 'help'

Example: { mute: true, crop: true }

### onError

@type function

Error callback. If the error type is AxiosError, the error will contain
status and statusText properties.

Example: (error) => { console.error(error) }

Example of AxiosError: (error) => { console.error(error.status, error.statusText) }

### onReady

@type function

onReady callback

Example: () => { console.log('video editor is ready') }

### onRangeUpdate

@type function

Callback when the range is updated

Example: (currentIndex, { in : 0, out : 1 }) => { console.log(currentIndex) }

### onRangeLimit

@type function

Callback when the range limit is reached

Example: ({ marker, maxDuration, time }) => { console.log('range limit reached') }

### onMarkerDragStart

@type function

Callback when the marker drag is started

Example: (currentMarker) => { console.log('marker drag started', currentMarker) }

### onMarkerDragEnd

@type function

Callback when the marker drag is ended

Example: (currentMarker) => { console.log('marker drag ended', currentMarker) }

## Testing

You can test the VideoEditor in a local environment.
Make sure to install npm depencies, including dependencies.

### Install

```bash
npm install --dev
```

### Run VideoEditor in local environment

```bash
npm run start
```

## Contributing

I welcome contributions and suggestions.

If you would like to contribute to the VideoEditor, please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.
