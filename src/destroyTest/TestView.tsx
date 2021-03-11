import { testDataList } from 'destroyTest/component/data';
import { TestLayout } from 'destroyTest/component/layout';
import TestProgress from 'destroyTest/component/TestProgress';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { MOVE_TEST_PAGE, RESULT_TXT_ADD } from 'redux/action/types';
import styled, { css } from 'styled-components';

import test from './img/skill2.png';


const Whole = styled.section`
    /* position: relative; */
    display: flex;
    flex-direction: column;

`;


const TestImage = styled.img`
    width: 80px;
    height: 80px;
    /* border: 1px solid #3b2424; */
    margin-bottom: 32px;
`;

const TestQuestion = styled.h3`
    width: 350px;
    /* border: 1px solid white; */
    margin-bottom: 32px;
    

    text-align: center;
    line-height: 34px;
`;

const SelectBtn = styled.button`
    width: 320px;
    height: 54px;
    border: 2px solid #DB4B4B;
    margin-bottom: 16px;

    color: #DB4B4B;
    line-height: 20px;

    &:hover{
        border: 4px solid white;
        color: white;
    }
`;



function TestView(){
    const page = useSelector((state:any) => state.destroy.page);
    const [isClicked, setIsClicked] = useState(false);
    const history = useHistory();

    const dispatch = useDispatch();
    const len = testDataList.length;
    const onNextHandler = (result:string) => {
        if(isClicked) return;           // 페이지 변화 전 클릭 금지

        if(page < len){
            // 모든 테스트가 끝나지 않았을 경우,
            setIsClicked(true);
            setTimeout(()=>{
                dispatch({type:MOVE_TEST_PAGE});
                dispatch({type:RESULT_TXT_ADD, payload:result});
                setIsClicked(false);
            }, 1500);
            
        }else{
            history.push("/result");
        }
    }

    return (
    <Whole>
        <TestProgress page={page}/>
        <TestLayout next={0} isClicked={isClicked}>
            <TestImage src={testDataList[page-1].imgSrc}/>
            <TestQuestion>{testDataList[page-1].questionTxt} </TestQuestion>
            {testDataList[page-1].answerTxtList.map((value, index)=>
                <SelectBtn onClick={()=>onNextHandler(value.result)} key={index}>{value.answerTxt}</SelectBtn>
            )}
        </TestLayout>
        {(page !== len && isClicked) && <TestLayout next={1} isClicked={isClicked}>

            <TestImage src={testDataList[page].imgSrc}/>
            <TestQuestion>{testDataList[page].questionTxt} </TestQuestion>
            {testDataList[page].answerTxtList.map((value, index)=>
                <SelectBtn onClick={()=>onNextHandler(value.result)} key={index}>{value.answerTxt}</SelectBtn>
            )}
        </TestLayout>}
    </Whole>);
}
export default TestView;