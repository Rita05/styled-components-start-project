import styled, { css } from "styled-components"

type ButtonPropsType = {
    styleBtn: 'primary' | 'outlined'
}

export const AppContainer = styled.div`
    height: 100%;
`

export const Card = styled.div`
    width: 300px;
    height: 350px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px 5px #0000001A;
    margin: auto;
    border-radius: 15px;
`
export const CardContainer = styled.div`
    padding: 10px 10px 20px;
`

export const Img = styled.img.attrs(props => ({
    src: props.src,
}))`   
    width: 280px;
    height: 170px;
`

export const Title = styled.h3`
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    margin: 20px 0 0;
    padding-left: 10px;
`
export const Content = styled.p`
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    color: #ABB3BA;
    margin: 20px 0;
    padding: 0 10px;
`

export const Button = styled.button<ButtonPropsType>`
    width: 86px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 5px;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    margin-left: 10px;

    ${props => props.styleBtn === 'primary' && css<ButtonPropsType>`
        background-color: #4E71FE;
        color: #FFFFFF;
        border: none;
    `}

    ${props => props.styleBtn === 'outlined' && css<ButtonPropsType>`
        background-color: #FFFFFF;
        border: 2px solid #4E71FE;
        color: #4E71FE;
        margin-left: 12px;
    `}
`

