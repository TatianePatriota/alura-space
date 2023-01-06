import popularPhotos from "./popular-photos.json";
import styled from "styled-components";

const StyledPopularContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 800px;
  color: ${(props) => props.theme.colors.purple};
  font-size: 16px;
  margin-right: 30px;
`;

const StyledPopularList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 77%;
  padding: 0;
`;

const StyledPopularButton = styled.button`
  margin-top: 12.5rem;
  background: transparent;
  border: none;
  border: 2px solid ${(props) => props.theme.colors.pink};
  border-radius: 6px;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  padding: 12px 16px;
  position: relative;
  z-index: 0;
  cursor: pointer;

  &:hover {
    border-radius: 10px;
    background: linear-gradient(
        to right,
        ${(props) => props.theme.colors.pink},
        ${(props) => props.theme.colors.purple}
      )
      border-box;
    color: ${(props) => props.theme.colors.darkBlue};
    transition: 0.1s;
    cursor: pointer;
    background: linear-gradient(
        to right,
        ${(props) => props.theme.colors.pink},
        ${(props) => props.theme.colors.lightBlue}
      )
      border-box;

    background: linear-gradient(
        to right,
        ${(props) => props.theme.colors.pink},
        ${(props) => props.theme.colors.purple}
      )
      border-box;
    color: ${(props) => props.theme.colors.darkBlue};
    transition: 0.1s;
  }
`;

const StyledPopularTitle = styled.h2`
  margin-top: 7rem;
`;

function Popular() {
  return (
    <StyledPopularContainer>
      <StyledPopularTitle>Populares</StyledPopularTitle>
      <StyledPopularList>
        {popularPhotos.map((photoPopular) => {
          return (
            <li key={photoPopular.id}>
              <img src={photoPopular.path} alt={photoPopular.alt} />
            </li>
          );
        })}
      </StyledPopularList>
      <StyledPopularButton>Ver mais</StyledPopularButton>
    </StyledPopularContainer>
  );
}

export default Popular;
