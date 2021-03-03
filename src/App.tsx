import { testDataList } from 'destroyTest/component/data';
import TestResult from 'destroyTest/TestResult';
import TestView from 'destroyTest/TestView';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import DestroyMain from './destroyTest/DestroyMain';

const Whole = styled.div`
  height: 100vh;
  background: #282525;
  padding-top : 60px;
`;

function App() {
  const page = useSelector((state:any) => state.destroy.page);
  console.log(page);
  const testPageRender = () => {
    if(page === testDataList.length + 1) return <TestResult/>
    
    const pageRender = page === 0 ? <DestroyMain /> : <TestView />;

    

    return pageRender;
  }
  return (
    <Whole>
      {testPageRender()}
    </Whole>
  );
}

export default App;
