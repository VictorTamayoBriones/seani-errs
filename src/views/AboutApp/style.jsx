import styled from 'styled-components';

export const WelcomPage = styled.div`
    width: 100%;
    height: 100vh;
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        width: 80%;
        margin: 8px 10%;
    }

    p{
        &:first-child{
            font-size: 25px;
            letter-spacing: 1.2px;
        }
        margin: 20px 0px;
        font-size: 20px;
        line-height: 40px;
    }

    button{
        background: green;
        color: #fff;
        border: none;
        border-radius: 5px;
        width: 40%;
        font-size: 18px;
        padding: 5px 0px;
        letter-spacing: 1px;
        align-self: flex-end;
        margin-bottom: 30px;
        cursor: pointer;
        transition: ease-in-out all .3s;

        &:hover{
            transform: translateX(-3px) translateY(-3px);
            box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.8);
        }
    }

    @media (min-width: 900px){
        justify-content: flex-start;
        align-items: center;
        gap: 50px;
        img{
            width: 30%;
        }
        .text{
            width: 80%;
            p{
                text-align: center;
            }
        }
        button{
            align-self: center;
        }
    }
`;