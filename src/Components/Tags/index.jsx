import styled from "styled-components";
import photos from "../Gallery/photos.json";

const StyledTags = styled.div`
  width: 65vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: ${(props) => props.theme.colors.textColor};
`;
const StyledTextTag = styled.p`
  font-size: 16px;
`;

const StyledTextList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

const StyledTextItems = styled.li`
  background-color: ${(props) => props.theme.colors.tagColor};
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 15px;
`;

function Tags({ tags, filterPhotos, setItems }) {
  return (
    <StyledTags>
      <StyledTextTag>Busque por tags:</StyledTextTag>
      <StyledTextList>
        {tags.map((tag) => {
          return (
            <StyledTextItems key={tag} onClick={() => filterPhotos(tag)}>
              {tag}
            </StyledTextItems>
          );
        })}
        <StyledTextItems onClick={() => setItems(photos)}>
          Todas
        </StyledTextItems>
      </StyledTextList>
    </StyledTags>
  );
}

export default Tags;
