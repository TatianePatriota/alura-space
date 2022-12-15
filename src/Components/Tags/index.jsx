import styled from "styled-components";

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
  width: 380px;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const StyledTextItems = styled.li`
  background-color: ${(props) => props.theme.colors.tagColor};
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
`;

function Tags() {
  return (
    <StyledTags>
      <StyledTextTag>Busque por tags:</StyledTextTag>
      <StyledTextList>
        <StyledTextItems>Estrelas</StyledTextItems>
        <StyledTextItems>Galáxias</StyledTextItems>
        <StyledTextItems>Lua</StyledTextItems>
        <StyledTextItems>Planetas</StyledTextItems>
      </StyledTextList>
    </StyledTags>
  );
}

export default Tags;
