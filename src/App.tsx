import Header from './components/Header';

import { Route, Routes } from 'react-router-dom';
import Userpage from './page/Userpage';
import UserAddPage from './page/UserAddPage';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/users/add" element={<UserAddPage />} />
        <Route path="/" element={<Userpage />} />
      </Routes>
    </div>
  );
}

export default App;
