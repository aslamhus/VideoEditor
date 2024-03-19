/** font awesome, import only used icons to keep build size small */
import { dom, library } from '@fortawesome/fontawesome-svg-core';
import {
  faPlay,
  faPause,
  faCheck,
  faStepBackward,
  faStepForward,
  faVolumeUp,
  faVolumeMute,
  faSun,
  faMoon,
  faCrop,
  faSave,
  faTimes,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faPlay,
  faPause,
  faCheck,
  faStepBackward,
  faStepForward,
  faVolumeUp,
  faVolumeMute,
  faSun,
  faMoon,
  faCrop,
  faSave,
  faTimes,
  faQuestion
);
dom.watch();

export default library;
