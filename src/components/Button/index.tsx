import styled from "styled-components";

const StyledButton = styled.button`
    border: none;
    border-radius: 1rem;
    background: none;
    background-color: black;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    color: white;
    font-family: 'DM Sans';
    font-weight: bold;
`
interface Iprops{children:JSX.Element}

const CustomButton = (props:Iprops) => {return <StyledButton>{props.children}</StyledButton>}

export default CustomButton;