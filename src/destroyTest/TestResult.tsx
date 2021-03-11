import { resultData } from 'destroyTest/component/data';
import { TestLayout } from 'destroyTest/component/layout';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { INIT_TEST } from 'redux/action/types';
import styled from 'styled-components';

const Whole = styled.section`
    margin-top: 50px;
    /* border: 1px solid; */
`;

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

const RetryBtn = styled.button`
    width: 150px;
    height: 44px;
    border: 2px dashed red;
    border-radius: 14px;
    color: red;

    &:hover{
        border: 2px dashed white;
        color: white;
    }

`;


function TestResult(){

    const result = useSelector((state:any)=>state.destroy.result);
    const history = useHistory();
    const dispatch = useDispatch();
    let t:any = {};

    // 결과 타입 정하기
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

    const onRetryHandler = () => {
        dispatch({type:INIT_TEST});
        history.push("/");
    }
    
    return (
        <Whole>
            <TestLayout>
                <TestResultImg src={resultData[nType].imgSrc} />
                <TestResultTxtHead>{resultData[nType].type}</TestResultTxtHead>
                <TestResultTxtbody dangerouslySetInnerHTML={{__html:resultData[nType].data}}></TestResultTxtbody>
                <RetryBtn onClick={onRetryHandler} >Retry</RetryBtn>
            </TestLayout>
        </Whole>
    );
}
export default TestResult;
