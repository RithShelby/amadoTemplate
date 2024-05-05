import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LayoutAPI from './LayoutAPI';
import ListData from './ListData';
import UserForm from './UserForm';
import ListFood from './ListFood';
import EditData from './EditData';

const RouterAPI = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutAPI/>}>
          <Route index element={<ListData />} />
          <Route path = "food" element ={<ListFood />} />
          <Route path="userform" element={<UserForm />} />
          <Route path="listdata/:id/*" element={<EditData />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default RouterAPI;
