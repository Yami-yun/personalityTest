import { resultData } from 'destroyTest/component/data';
import { TestLayout } from 'destroyTest/component/layout';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


const TestResultImg = styled.img`
    width: 100%;
    height: 280px;
    margin-bottom: 25px;

    border-radius: 12px;
`;

const TestResultTxtHead = styled.h3`
    margin-bottom: 25px;
`;

const TestResultTxtbody = styled.p`
    width: 100%;
    margin-bottom: 25px;

    line-height: 30px;
    font-size: 0.9rem;

`;


function TestResult(){

    const result = useSelector((state:any)=>state.destroy.result);
    let t:any = {};
    result.forEach((value:any)=>{
        t[value] = (t[value] || 0) + 1;
    });
    let max = 0;
    let type = "";
    for(const k in t){
        if(max < t[k]){
            type = k;
            max = t[k];
        }
    }

    let nType = parseInt(type);
    
    return (
        <TestLayout>
            <TestResultImg src={resultData[nType].imgSrc} />
            <TestResultTxtHead>{resultData[nType].type}</TestResultTxtHead>
            <TestResultTxtbody dangerouslySetInnerHTML={{__html:resultData[nType].data}}></TestResultTxtbody>
        </TestLayout>
    );
}
export default TestResult;
