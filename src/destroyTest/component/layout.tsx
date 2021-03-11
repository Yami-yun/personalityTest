import styled, { css } from 'styled-components';


export const TestLayout=styled.section<{next?: number, isClicked?:boolean}>`
    position: relative;
    width: 420px;
    min-height: 600px;
    border: 8px dashed white;
    border-radius: 4px;
    /* border-style:  */
    margin: 0 auto;
    padding: 1.4em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items : center;
    
    /* animation : next 0.3s ease-in-out; */
    transform-origin: left center;

    ${props=> (props.next === 1) && css`
        top: -600px;
        opacity: 0;

    `}

    ${props=> (props.isClicked && props.next === 0) && css`
        transition: all 2s;
        transform: rotateY(-180deg);
        opacity: 0;
    `}

    ${props=> (props.isClicked && props.next === 1) && css`
        transition: all 2s;
        opacity: 1;
    `}

`;
