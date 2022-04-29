import styled from 'styled-components';

export const TextError = styled.div`
    width: 90%;
    margin: auto;
    span{
        font-weight: bold;
        color: orange;
    }
    p{
        margin: 22px 0;
        &:first-child{
            color: orange;
            text-align: center;
            font-size: 20px;
            -webkit-text-stroke: .3px #ccc;
        }
    }
`;