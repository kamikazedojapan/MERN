import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem;
    /* position: fixed;
    top: 0;*/
    background-color: #110c4a;
    z-index: 1;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;

export const Logo = styled.img`
    width: 10rem;
    height: 3.5 rem;
    object-fit: cover;
    cursor: pointer;
`;

export const Search = styled.div`
    position: relative;
    width: 200px;
    display: flex;
    align-items: center;
    button {
        position: absolute;
        top: 1;
        right: 0.2rem;
        z-index: 10;
        border: none;
        border-radius: 0.3rem;
        
    }
    input {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        outline: none;
        font-size: 1rem;
        padding: 0.2rem;
        background-color: #f5f5f5;
        border: none;
        width: 100%;
        border-radius: 0.3rem;
    }
`;

export const Button = styled.button`
    margin-left: 2rem;
    background-color: #fe2c55;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.4rem 1rem;
    color: #fff;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;

    &:hover {
        background-color: #c40b30;
    }
`;

export const ErrorSpan = styled.span`
    background-color: #ffaeae;
    color: #9e0000;
    padding: 1rem;
    display: flex;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: bold;
`