import styled from "styled-components";

const StyledButton = styled.button`
    border: none;
    border-radius: 15px;
    background: none;
    background-color: ;
    padding: 15px 40px;
    font-size: 20px;
    color: white;
    font-family: 'DM Sans';
    font-weight: bold;
`
interface Iprops{children:JSX.Element}

const CustomButton = (props:Iprops) => {return <StyledButton>{props.children}</StyledButton>}

export default CustomButton;