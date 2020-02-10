//import YouTubePlayer from 'youtube-player';
const YouTubePlayer = require('youtube-player');

const func = function() {
  console.log('hello youtube')
 
  const player = YouTubePlayer('video-player');
  player.loadVideoById('JmhXm4xq8GQ');
  player.playVideo();
};


module.exports = func;
