import photos from "../photos.json";
import open from "../../../assets/open.png";
import favorito from "../../../assets/favorito.png";
import styled from "styled-components";

const StyledGalleryItems = styled.li`
  background-color: ${(props) => props.theme.colors.darkBlue};
  border-radius: 17px;
  height: 280px;
  width: 285px;
  margin-right: 1rem;
  margin-bottom: 1.35rem;
  cursor: pointer;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.025);
    transition: 0.18s;
  }
`;

const StyledDescriptionText = styled.p`
  margin: 0;
  padding: 0 16px;
  font-size: 1.25rem;
  color: ${(props) => props.theme.colors.textColor};
  font-weight: 700;
`;

const StyledGalleryImages = styled.img`
  height: 75%;
  width: 100%;
`;

const StyledCreditText = styled.p`
  margin: 0;
  font-size: 0.6rem;
  color: ${(props) => props.theme.colors.textColor};
`;

const StyledContainerCredits = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
  width: 100%;
`;

const StyledGalleryList = styled.ul`
  padding: 0;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const StyledGalleryIcons = styled.span`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Cards() {
  return (
    <StyledGalleryList>
      {photos.map((photo) => {
        return (
          <StyledGalleryItems key={photo.id}>
            <StyledGalleryImages src={photo.image} alt={photo.title} />
            <StyledDescriptionText>{photo.tag}</StyledDescriptionText>
            <StyledContainerCredits>
              <StyledCreditText>{photo.credits}</StyledCreditText>
              <StyledGalleryIcons>
                <img src={favorito} alt="Ícone de curtir" />
                <img src={open} alt="Ícone de abrir modal" />
              </StyledGalleryIcons>
            </StyledContainerCredits>
          </StyledGalleryItems>
        );
      })}
    </StyledGalleryList>
  );
}

export default Cards;
