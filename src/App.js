import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
// import { SearchProvider } from './contexts/SearchContext'
import { MainProvider } from './contexts/MainContext'
import AuthProvider from './contexts/AuthProvider';


function App() {
  return (
    <Router>

      <MainProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </MainProvider>
    </Router>
  );
}

export default App;
