import styled from "styled-components";
import Card from "../Card";

const StyledLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;


  gap: 4rem;
  justify-content: center;
  flex-direction: column;
  background-color: black;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 0;

  /* background-color: #424242; */


  h2{
    color: white;
    font-size: 3rem;
    margin: 1.2rem 0 1.2rem 0;
  }
  &>div:nth-child(2){
    flex-direction: row;
    display: flex;
    gap: 20px;

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
{/* 
      <StyledContainer>

        <div>
          <h2>Choose your favourite</h2>
        </div>

        <div>
          <Card />
          <Card />
          <Card />
        </div>

      </StyledContainer> */}
{/*       <StyledContainer>
        <div>
          <h2>Choose your favourite</h2>
        </div>
      </StyledContainer> */}
    </StyledLayout>
  );
};

export default Layout;
