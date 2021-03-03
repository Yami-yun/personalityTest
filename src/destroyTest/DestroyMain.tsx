import { TestLayout } from 'destroyTest/component/layout';
import React from 'react';
import { useDispatch } from 'react-redux';
import { MOVE_TEST_PAGE } from 'redux/action/types';
import styled from 'styled-components';



const Title1 = styled.h1`
    margin-bottom: 15px;
`;

const Title2 = styled.h2`
    margin-bottom: 45px;
`;

const StartBtn = styled.button`
    width: 240px;
    height: 60px;
    background: #FF7070;
    border-radius: 10px;

    font-size: 1.6rem;
    font-weight: 700;
`;

function DestroyMain(){

    const dispatch = useDispatch();

    const onStartHandler = () => {
        dispatch({type:MOVE_TEST_PAGE});
    }
    return (
    <>
        <TestLayout>
            <Title1>멸망한 세계에서</Title1>
            <Title2>알아보는 성격 테스트</Title2>

            <StartBtn onClick={onStartHandler}> S T A R T </StartBtn>
        </TestLayout>
    </>);
}
export default DestroyMain;