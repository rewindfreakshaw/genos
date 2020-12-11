/* eslint import/no-duplicates: off */
import type Webamp from 'webamp';
import type { Options } from 'webamp';
import type {
  PrivateOptions,
  WebampStore
} from '@/types/components/Programs/winamp';

const demoTrack = {
  metaData: {
    artist: 'Porter Robinson',
    title: 'Something Comforting'
  },
  url: '/mp3/music.mp3'
};

/* eslint no-underscore-dangle: off */
/* eslint @typescript-eslint/naming-convention: off */
const __initialWindowLayout = {
  main: { position: { x: 0, y: 0 } },
  playlist: { position: { x: 0, y: 116 } },
  equalizer: { position: { x: 0, y: 232 } }
};

const availableSkins = [
  {
    url: '/skins/SpyAMP_Pro.wsz',
    name: 'SpyAMP Professional Edition v5'
  }
];

export const touchControls = `
  #minimize, #close, #volume, #balance, #equalizer-button, #playlist-button, #position, #eject,
  .actions, .shuffle-repeat, .playlist-middle, .playlist-bottom, #playlist-close-button, #equalizer-window`;

export const webampOptions: Options & PrivateOptions = {
  __initialWindowLayout,
  availableSkins
};

export const loadTrackOrSkin = (
  webamp: Webamp,
  url: string,
  name: string
): void => {
  if (url.includes('.wsz')) {
    webamp.setSkinFromUrl('/skins/SpyAMP_Pro.wsz');
    webamp.appendTracks([demoTrack]);
    webamp.setSkinFromUrl(url);
  } else {
    webamp.setTracksToPlay([
      url ? { url, metaData: { artist: '', title: name } } : demoTrack
    ]);
  }
};

export const closeEqualizer = (webamp: Webamp & WebampStore): void =>
  webamp.store.dispatch({
    type: 'CLOSE_WINDOW',
    windowId: 'equalizer'
  });
