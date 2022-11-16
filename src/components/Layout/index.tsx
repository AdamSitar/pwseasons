import styled from "styled-components";
import Card from "../Card";

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: red;
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 10px;
  background-color: red;
`;

const Layout = () => {
  return (
    <StyledLayout>
      <StyledContainer>
        <Card />
        <Card />
        <Card />
      </StyledContainer>
    </StyledLayout>
  );
};

export default Layout;
