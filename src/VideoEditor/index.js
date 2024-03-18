import VideoEditor from './VideoEditor';

import context from './context';

/**
 * Video Editor Module
 *
 * A module that returns a VideoEditor instance
 *
 * The context is an instance of the VideoEditor class
 * which can be accessed in all descendant classes
 * but does not pollute the global scope
 *
 * @param {Object} props - The video editor props
 */
var VideoEditorModule = (function () {
  return VideoEditor;
  //   return function (props) {
  //     context.setContext(new VideoEditor(props));
  //     return context.getContext();
  //   };
})();

export default VideoEditorModule;
