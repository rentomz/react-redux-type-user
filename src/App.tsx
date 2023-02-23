import Header from './components/Header';

import { Route, Routes } from 'react-router-dom';
import UserAddPage from './page/UserAddPage';
import UserDetailPage from './page/UserDetailPage';
import Userpage from './page/Userpage';
import UserUpdatePage from './page/UserUpdatePage';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Title 1</h1>
      <Routes>
        <Route path="/" element={<Userpage />} />
        <Route path="/users/add" element={<UserAddPage />} />
        <Route path="/users/detail/:id" element={<UserDetailPage />} />
        <Route path="/users/update/:id" element={<UserUpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;
