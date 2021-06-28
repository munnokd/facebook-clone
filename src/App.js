import './App.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import PostUpload from './Post/PostUpload'
import Rightbar from './Rightbar/Rightbar';
import Login from './Login/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <div>
          <Header />
          <div className="app__body">
            <Sidebar />
            <PostUpload />
            <Rightbar />
          </div>
          </div>
      )}
    </div>
  );
}

export default App;
