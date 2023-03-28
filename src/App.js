import NavBar from './components/NavBar';
import Home from './pages/Home';
import AddDog from './pages/AddDog';
import './App.css';

import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/add-dog", element: <AddDog /> }
  ]);

  return (
    <div className="App">
      <NavBar />
      {routes}
    </div>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
