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
import NestedArray from './Componets/NestedArray';

function App() {
  return (
    <div className='container-fluid my-3'>
      <Row style={{gap: '10px 0'}}>
        <MainComponent xl="3" lg="4" md="6" xs="12" title="Update Data" component={<UpdateData />} />
        <MainComponent xl="3" lg="4" md="6" xs="12" title="React Props" component={<ReactProps name="Mohit" />} />
        <MainComponent xl="3" lg="4" md="6" xs="12" title="Get Data" component={<GetData />} />
        <MainComponent xl="3" lg="4" md="6" xs="12" title="Hide Show" component={<HideShow />} />
        <MainComponent xl="3" lg="4" md="6" xs="12" title="Basic form" component={<BasicForm />} />
        <MainComponent xl="3" lg="4" md="6" xs="12" title="Conditions Rendering" component={<Conditions />} />
        <MainComponent xl="3" lg="4" md="6" xs="12" title="Basic Form Validation" component={<BasicFormValidation />} />
        <MainComponent xl="3" lg="4" md="6" xs="12" title="Pass fuction as a props" component={<FunctionAsProps />} />
        <MainComponent xl="3" lg="4" md="6" xs="12" title="Hooks (useState)" component={<UseState />} />
        <MainComponent xl="3" lg="4" md="6" xs="12" title="Hooks (useEffect with useSate)" component={<UseEffect />} />
        <MainComponent xl="3" lg="4" md="6" xs="12" title="Hooks (useEffect with useSate and props)" component={<UseEffectwithSP />} />
        <MainComponent xl="3" lg="4" md="6" xs="12" title="Handle array (Using map method)" component={<HandleArray />} />
        <MainComponent xl="9" lg="12" md="12" xs="12" title="Nested Array (Using map method)" component={<NestedArray />} />

      </Row>
    </div>
  );
}

export default App;
