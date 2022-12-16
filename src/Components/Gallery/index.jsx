import Tags from "../Tags";
import styled from "styled-components";
import Cards from "./Cards";

const StyledGalery = styled.section`
  margin-left: 17%;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const StyledGaleryTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.purple};
`;

function Galery() {
  return (
    <StyledGalery>
      <StyledGaleryTitle>Navegue pela galeria</StyledGaleryTitle>
      <Tags />
      <Cards />
    </StyledGalery>
  );
}

export default Galery;
