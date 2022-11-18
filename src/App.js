import Sidebar from './components/Sidebar';
import AppRoutes from './routes/AppRoutes'
// import { SearchProvider } from './contexts/SearchContext'
import { MainProvider } from './contexts/MainContext'
import AuthProvider from './contexts/AuthProvider';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <MainProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </MainProvider>
    </BrowserRouter>
  );
  // return (
  //   <BrowserRouter>
  //     <AppRoutes />
  //   </BrowserRouter>
  // );

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Dashboard />}>

  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // )
}

export default App;


function Dashboard() {
  return (
    <h1>Hola Dashboard</h1>
  )
}