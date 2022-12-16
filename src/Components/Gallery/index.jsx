import Tags from "../Tags";
import styled from "styled-components";
import Cards from "./Cards";

const StyledGallery = styled.section`
  margin-left: 17%;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const StyledGalleryTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.purple};
`;

function Gallery() {
  return (
    <StyledGallery>
      <StyledGalleryTitle>Navegue pela galeria</StyledGalleryTitle>
      <Tags />
      <Cards />
    </StyledGallery>
  );
}

export default Gallery;
