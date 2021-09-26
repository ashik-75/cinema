import React, { useState } from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screen/homeScreen/HomeScreen';
import Footer from './components/footer/Footer';
const App = () => {
  const [active, setActive] = useState(false);

  console.log(active ? 'active' : 'not active');
  return (
    <div>
      <Topbar active={active} setActive={setActive} />
      <Sidebar active={active} />
      <main>
        <HomeScreen active={active} />
      </main>
      <Footer active={active} />
    </div>
  );
};

export default App;
