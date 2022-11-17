import styled from "styled-components";
import Card from "../Card";

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: black;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #424242;


  &>div:nth-child(2){
    flex-direction: row;
    display: flex;
    gap: 20px;

  }
  h2{
    color: white;
    font-size: 64px;
    margin: 20px 0 20px 0;
  }
`;


const Layout = () => {
  return (
    <StyledLayout>
      <StyledContainer>

        <div>
          <h2>Choose your favourite</h2>
        </div>

        <div>
          <Card />
          <Card />
          <Card />
        </div>

      </StyledContainer>

{/*       <StyledContainer>
        <div>
          <h2>Choose your favourite</h2>
        </div>
      </StyledContainer> */}
    </StyledLayout>
  );
};

export default Layout;
