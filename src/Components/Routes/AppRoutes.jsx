import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { myRoutes } from "./myRoutes.js";
import Spinner from './Spinner/Spinner.jsx';


function AppRoutes() {
  return (
    <Suspense fallback={<div className='text-center my-5 py-5'><Spinner/></div>}>
      <Routes>
        {myRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
        
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
