import React from 'react';
import styled from 'styled-components';
import {testDataList} from './data';

const ProgressBarList = styled.article`
    display: flex;
    margin: 20px auto;
`;

const ProgressBar = styled.div<{isCheck:boolean}>`
    width: 30px;
    height: 36px;
    margin: 0 6.5px;


    border-bottom: 7px solid ${(props)=> props.isCheck ? "#DB4B4B" : "white"};
    

`;

const ProgressImg = styled.img`
    width: 30px;
    height: 30px;
`;

function TestProgress({page}:{page:number}){
    console.log(page);
    return (
    <ProgressBarList>
    {testDataList.map((value:any, index:number)=>
        <ProgressBar isCheck={page > index} key={index}>{page - 1 === index && <ProgressImg src={'img/ProgressImg.PNG'}/>}</ProgressBar>
    )}
    </ProgressBarList>);
}
export default TestProgress;