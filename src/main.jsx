import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './component/Home/Home.jsx';
import AboutUs from './component/About/AboutUs.jsx';
import SafeJobConnet from './component/SafeJobConnet/SafeJobConnet.jsx';
import OurCommunity from './component/Service/OurCommunity/OurCommunity.jsx';
import SocialWelfare from './component/Service/SocialWelfare/SocialWelfare.jsx';
import Technology from './component/Technology/Technology.jsx';
import Saathi from './component/Saathi/Saathi.jsx';
import MicroAtm from './component/Service/MicroAtm/MicroAtm.jsx';
import PanCard from './component/Service/PanCard/PanCard.jsx';
import Bill from './component/Service/Bill/Bill.jsx';
import Service from './component/Service/AllService/Service.jsx';
import AllService from './component/Service/AllService/AllService.jsx';
import ListService from './component/Service/AllService/ListService.jsx';
import NeoBanking from './component/Service/NeoBanking.jsx/NeoBanking.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/safe-jobs' element={<SafeJobConnet/>}/>
      <Route path='/our-community' element={<OurCommunity/>}/>
      <Route path='/schemes' element={<SocialWelfare/>}/>
      <Route path='/technology' element={<Technology/>}/>
      <Route path='/saathi' element={<Saathi/>}/>
      <Route path='/microAtm' element={<MicroAtm/>}/>
      <Route path='/pan-card' element={<PanCard/>}/>
      <Route path='/bill-payment' element={<Bill/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/service' element={<AllService/>}/>
      <Route path='/service/:allService' element={<Service/>}/>
      <Route path='/neo_banking' element={<NeoBanking/>}/>

    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
