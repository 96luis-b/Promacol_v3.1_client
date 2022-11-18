import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Link, Outlet } from 'react-router-dom';


import LoginPage from '../pages/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import SwitchRolRoutes from './SwitchRolRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

function AppRoutes() {



  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />
      {/* <Route path='/login' element={<LoginPage />} /> */}
      <Route path='/login' element={<LoginTest/>} />
      {/* <SwitchRolRoutes /> */}
      {/* <Route path="/*" element={<SwitchRolRoutes />} /> */}
      {/* <Route path="/profile" element={<Profile/>}>
        <Route path="/myprofile" element={<MyProfile/>} />
        <Route path="/me" element={<Me/>} />
      </Route> */}
      <Route path="/*" element={<SwitchRolRoutes/>} />
      {/* <Route path="profile/*" element={<Profile/>} /> */}
      <Route path="/404" element={<NotFoundPage />} />
      {/* <Route
        path="*"
        element={<Navigate to="/404" replace />}
      /> */}
    </Routes>
  );
}

export default AppRoutes;


function LoginTest(){
  return (<h1>Login statico</h1>)
}


// function Profile(){
//   return ( <div>
//     <nav>
//       <Link to="me">My Profile</Link>
//     </nav>

//     <Outlet />
//   </div>)
// }
function Profile() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        <Route path="me" element={<MyProfile />} />
        <Route path=":id" element={<Me />} />
      </Routes>
    </div>
  );
}

function MyProfile(){
  return (<h1>My Profile</h1>)
}

function Me(){
  return (<h1>Me</h1>)
}