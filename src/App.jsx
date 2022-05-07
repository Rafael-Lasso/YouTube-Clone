import './App.css';

import HeaderNav from './components/Header'
import NavBar from './components/NavBar';
import AllVideos from './components/Layouts/AllVideos';

function App() {
  return (
    <>
      <HeaderNav />
        <NavBar />
        <div className="container-videos">
          <AllVideos />
        </div>
            
    </>
  );
}

export default App;
