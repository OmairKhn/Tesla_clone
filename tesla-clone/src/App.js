import React from 'react';
import logo from './logo.svg';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { ImportExportOutlined } from '@mui/icons-material';
import { Routes,Route } from 'react-router-dom';
import {Model_s} from './components/Model_s';
import { Model_Y } from './components/Model_Y';
import { Model_x } from './components/Model_x';
import { Model_3 } from './components/Model_3';
import { ModelS_1 } from './components/ModelS_1';
import { ModelY1  } from './components/ModelY_1';
import { ModelX_1 } from './components/ModelX_1';
function App() {
  return (


    <div className="App">
      {/* <ModelX_1/> */}
      {/* <ModelS_1/> */}
      {/* <ModelY1/> */}
{/* <Model_Y/> */}
{/* <Model_s/> */}
      <Header />   
<Routes> 
<Route path='/' element={<Home/>} />
<Route path='/Models' element={<Model_s/>} />
<Route path='/Modely' element={<Model_Y/>} />
<Route path='/Modelx' element={<Model_x/>} />
<Route path='/Model3' element={<Model_3/>} />
<Route path='/ModelS1' element={<ModelS_1/>} />
<Route path='/ModelY1' element={<ModelY1/>} />
<Route path='/ModelX1' element={<ModelX_1/>} />

</Routes>



    </div>


  );
}

export default App;
