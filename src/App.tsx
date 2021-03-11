import { testDataList } from 'destroyTest/component/data';
import TestResult from 'destroyTest/TestResult';
import TestView from 'destroyTest/TestView';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router';
import styled from 'styled-components';
import DestroyMain from './destroyTest/DestroyMain';


const Whole = styled.div`
  height: 100vh;
  background: #282525;
  padding-top : 60px;
`;

function App() {

  return (
      <Whole>
        <Route exact path='/' component={DestroyMain} />
        <Route path='/test' component={TestView} />
        <Route path='/result' component={TestResult} />
      </Whole>
  );
}

export default App;
