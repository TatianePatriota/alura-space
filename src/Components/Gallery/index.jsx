import Tags from "../Tags";
import styled from "styled-components";
import Cards from "./Cards";
import { useState } from "react";
import photos from "./photos.json";

const StyledGallery = styled.section`
  margin-left: 13%;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 75%;
`;

const StyledGalleryTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.purple};
`;

function Gallery() {
  const [items, setItems] = useState(photos);
  const tags = [...new Set(photos.map((value) => value.tag))];

  const filterPhotos = (tag) => {
    const newPhotos = photos.filter((photo) => {
      return photo.tag === tag;
    });
    setItems(newPhotos);
    console.log(newPhotos);
  };

  return (
    <StyledGallery>
      <StyledGalleryTitle>Navegue pela galeria</StyledGalleryTitle>
      <Tags tags={tags} filterPhotos={filterPhotos} setItems={setItems} />
      <Cards items={items} />
    </StyledGallery>
  );
}

export default Gallery;
