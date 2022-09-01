import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

import { save, load } from './storage';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const currentTimeofVideo = load('videoplayer-current-time');
if (currentTimeofVideo) {
  player.setCurrentTime(load('videoplayer-current-time'));
}

player.on(
  'timeupdate',
  throttle(function (data) {
    save('videoplayer-current-time', data.seconds);
  }, 1000)
);
