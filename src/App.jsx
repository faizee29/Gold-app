import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import main1 from './assets/main1.png';
import main2 from './assets/main2.png';
import main3 from './assets/main3.png';
import main4 from './assets/main4.png';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', maxWidth: '100dvw' }}>
      <Home />
      {showSplash && (
        <SplashScreen
          onFinish={() => setShowSplash(false)}
          imagesToPreload={[main1, main2, main3, main4]}
        />
      )}
    </div>
  );
}

export default App;
