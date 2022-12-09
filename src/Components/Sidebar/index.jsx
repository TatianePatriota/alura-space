import home from "../../assets/icones/home-ativo.png";
import mostViews from "../../assets/icones/mais-vistas-inativo.png";
import moreLikes from "../../assets/icones/mais-curtidas-inativo.png";
import IconNews from "../../assets/icones/novas-inativo.png";
import iconSurprise from "../../assets/icones/surpreenda-me-inativo.png";
import styled from "styled-components";

const StyledSidebarNav = styled.nav`
  width: 180px;
`;

const StyledSidebarList = styled.ul`
  padding-left: 0.5rem;
  margin: 0;
  height: 276px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledSidebarItems = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:first-child {
    a {
      font-weight: 700;
      color: #7b78e5;
      font-family: "GandhiSansRegular";
    }
  }
`;

const StyledSidebarImages = styled.img`
  margin-right: 0.5rem;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const StyledSidebarAnchor = styled.a`
  font-size: 1.125rem;
  color: #d9d9d9;
  font-family: "GandhiSansRegular";
`;

function Sidebar() {
  return (
    <StyledSidebarNav>
      <StyledSidebarList>
        <StyledSidebarItems>
          <StyledSidebarImages src={home} alt="Home ativo" />
          <StyledSidebarAnchor href="/">Ínicio</StyledSidebarAnchor>
        </StyledSidebarItems>
        <StyledSidebarItems>
          <StyledSidebarImages src={mostViews} alt="Mais vistas" />
          <StyledSidebarAnchor href="/">Mais curtidas</StyledSidebarAnchor>
        </StyledSidebarItems>
        <StyledSidebarItems>
          <StyledSidebarImages src={moreLikes} alt="Mais curtidas" />
          <StyledSidebarAnchor href="/">Mais vistas</StyledSidebarAnchor>
        </StyledSidebarItems>
        <StyledSidebarItems>
          <StyledSidebarImages src={IconNews} alt="Novidades" />
          <StyledSidebarAnchor href="/">Novas</StyledSidebarAnchor>
        </StyledSidebarItems>
        <StyledSidebarItems>
          <StyledSidebarImages src={iconSurprise} alt="Supreenda-me" />
          <StyledSidebarAnchor href="/">Surpreenda-me</StyledSidebarAnchor>
        </StyledSidebarItems>
      </StyledSidebarList>
    </StyledSidebarNav>
  );
}

export default Sidebar;
