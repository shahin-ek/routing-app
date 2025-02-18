
import React from 'react';
import VideoPlayer from './VideoPlayer';

function App() {
  return (
    <div className="App">
      <h1>Video in React</h1>
      <VideoPlayer src="path/to/your/video.mp4" type="video/mp4" />
    </div>
  );
}

export default App;
