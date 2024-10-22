import React, { useState } from 'react';
import './App.css';

function App() {
  const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundImage: `url('https://i.pinimg.com/enabled_hi/564x/71/5a/44/715a44e030bb4a07d6493f6f2c5d1183.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  });
  const [customColor, setCustomColor] = useState('');

  return (
    <div className="App" style={backgroundStyle}>
      <h1>Background Changer App</h1>
      <div className='btn'>
        <button onClick={() => setBackgroundStyle({ backgroundColor: 'blue' })}>Blue</button>
        <button onClick={() => setBackgroundStyle({ backgroundColor: 'green' })}>Green</button>
        <button onClick={() => setBackgroundStyle({ backgroundColor: 'lightcoral' })}>Peach</button>
        <button onClick={() => setBackgroundStyle({ backgroundColor: 'yellow' })}>Yellow</button>
      </div>
      {/* Input for custom color */}
      <div>
        <input
          type="text"
          placeholder="Enter a color or hex code"
          value={customColor}
          onChange={(e) => setCustomColor(e.target.value)}
        />
        <button className='btn1' onClick={() => setBackgroundStyle({ backgroundColor: customColor })}>Set</button>
      </div>
    </div>
  );
}

export default App;