import styled from "styled-components";
import CustomButton from "../Button";
// import HeaderImage from "../Image/index";

const StyledCard = styled.div`
  width: 400px;
  height: 425px;
  background-color: #cfcfcf;
  border-radius: 1rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  color: black;


  &>div:nth-child(1){
    height: 50%;
  }
  
  
  &>div:nth-child(2){
    background-color: #fc9700;
    padding: 1.2rem;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &>div{
      font-size: 2.5rem;
      font-weight: 500;
      padding: 0 0.3rem 0 0.3rem;

      &>div{
        display: flex;
        justify-content: space-between;

        font-family: DM Sans;
        font-size: 1.2rem;
        font-weight: 500;
        font-style: italic;
      }
    }
  }
`;


const Card = () => {
  return( 
    <StyledCard>
      <div>
        {/* <HeaderImage></HeaderImage> */}
      </div>
      
      <div> 
        <div>
          <h3>Name</h3>
          <div>   
            <h4>Description</h4>
            <h4>Version</h4>
          </div>
        </div>
        <CustomButton><p>Download</p></CustomButton>
      </div>
    </StyledCard> );
};

export default Card;
