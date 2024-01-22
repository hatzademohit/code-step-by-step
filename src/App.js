import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './style.css'
import { Row } from 'react-bootstrap';
import MainComponent from './Componets/MainComponent/MainComponent';
import UpdateData from './Componets/UpdateData';
import ReactProps from './Componets/ReactProps';
import GetData from './Componets/GetData';
import HideShow from './Componets/HideShow';
import BasicForm from './Componets/BasicForm';
import Conditions from './Componets/Conditions';
import BasicFormValidation from './Componets/BasicFormValidation';
import FunctionAsProps from './Componets/FunctionasProps/Functionone';
import UseState from './Componets/Hooks/UseState';
import UseEffect from './Componets/Hooks/UseEffect';
import UseEffectwithSP from './Componets/Hooks/UseEffectwithSP';
import HandleArray from './Componets/HandleArray';

function App() {
  return (
    <div className='container-fluid my-3'>
      <Row style={{gap: '10px 0'}}>
        <MainComponent title="Update Data" component={<UpdateData />} />
        <MainComponent title="React Props" component={<ReactProps name="Mohit" />} />
        <MainComponent title="Get Data" component={<GetData />} />
        <MainComponent title="Hide Show" component={<HideShow />} />
        <MainComponent title="Basic form" component={<BasicForm />} />
        <MainComponent title="Conditions Rendering" component={<Conditions />} />
        <MainComponent title="Basic Form Validation" component={<BasicFormValidation />} />
        <MainComponent title="Pass fuction as a props" component={<FunctionAsProps />} />
        <MainComponent title="Hooks (useState)" component={<UseState />} />
        <MainComponent title="Hooks (useEffect with useSate)" component={<UseEffect />} />
        <MainComponent title="Hooks (useEffect with useSate and props)" component={<UseEffectwithSP />} />
        <MainComponent title="Handle array (Using map method)" component={<HandleArray />} />

      </Row>
    </div>
  );
}

export default App;
