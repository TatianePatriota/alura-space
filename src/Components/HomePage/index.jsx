import styled from "styled-components";
import Header from "../Header";
import Sidebar from "../Sidebar";
import banner from "../../assets/banner.png";

const StyledMain = styled.main`
  margin: 0 24px;
`;

const StyledContainerMain = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;

const StyledTitle = styled.h1`
  position: absolute;
  z-index: 1;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 2rem;
  width: 395px;
  height: 144px;
  top: 186px;
  left: 265px;
  font-weight: 700;
`;

const StyledImage = styled.img`
  width: 88%;
  height: 288px;
`;

function HomePage() {
  return (
    <>
      <Header />
      <StyledMain>
        <StyledContainerMain>
          <Sidebar />
          <StyledTitle>A galeria mais completa do espaço!</StyledTitle>
          <StyledImage
            src={banner}
            alt="Imagem da Terra vista do espaço"
          ></StyledImage>
        </StyledContainerMain>
      </StyledMain>
    </>
  );
}

export default HomePage;
