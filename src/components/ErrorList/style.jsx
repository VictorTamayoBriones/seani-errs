import styled from 'styled-components';

export const Error = styled.li`
    width: max-content;
    padding: 5px 12px;
    background: teal;
    color: #fff;
    list-style: none;
    border-radius: 50px;
    font-size: 20px;
    cursor: pointer;

    @media (max-width: 880px){
        border-radius: 5px;
    }
`;

export const Errors = styled.ul`
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;

    @media (max-width: 880px){
        justify-content: flex-start;
        gap: 25px;
    }
`;