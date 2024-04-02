import React from 'react'
import { Container, Row } from 'react-bootstrap';
import MainComponent from '../MainComponent/MainComponent';
import ReactProps from '../ReactProps';
import GetData from '../GetData';
import HideShow from '../HideShow';
import BasicForm from '../BasicForm';
import Conditions from '../Conditions';
import BasicFormValidation from '../BasicFormValidation';
import FunctionAsProps from '../FunctionasProps/Functionone';
import UseState from '../Hooks/UseState';
import UseEffect from '../Hooks/UseEffect';
import UseEffectwithSP from '../Hooks/UseEffectwithSP';
import HandleArray from '../HandleArray';
import NestedArray from '../NestedArray';
import UseMemo from '../Hooks/UseMemo';
import UseRef from '../Hooks/UseRef';
import ControlledComponent from '../ControlledComponent';
import UncontrolledComponent from '../UncontrolledComponent';
import UpdateData from '../UpdateData'
import PreviousState from '../Hooks/PreviousState'
import PreviousProps from '../Hooks/PreviousProps';
import SateObjetWithHook from '../Hooks/SateObjetWithHook';

export default function ChildComponent() {
  return (
    <Container fluid>
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
        <MainComponent xl="3" lg="4" md="6" xs="12" title="Use Memo Hook" component={<UseMemo />} />
        <MainComponent xl="3" lg="4" md="6" xs="12" title="Use Ref and Forward Hook" component={<UseRef />} />
        <MainComponent xl="3" lg="4" md="6" xs="12" title="Controlled Component" component={<ControlledComponent />} />
        <MainComponent xl="3" lg="4" md="6" xs="12" title="Uncontrolled Component" component={<UncontrolledComponent />} />
        <MainComponent xl="3" lg="4" md="6" xs="12" title="Previous State" component={<PreviousState />} />
        <MainComponent xl="3" lg="4" md="6" xs="12" title="Previous Props" component={<PreviousProps />} />
        <MainComponent xl="3" lg="4" md="6" xs="12" title="Sate with objet" component={<SateObjetWithHook />} />
      </Row>
    </Container>
  )
}
