import youtube from 'youtube-iframe-player';
// var youtube = require('youtube-iframe-player');

youtube.init(function () {
  youtube.createPlayer('player', {
    videoId: 'An6LvWQuj_8',
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8', // 반복 재생할 유튜브 영상 ID 목록
      origin: 'http://localhost:1234' 
    },
    events: {
      onReady: function (event) {
        event.target.mute(); // 음소거!
      },
    },
  });
  
});
