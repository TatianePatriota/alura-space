import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.blueFooter};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  box-sizing: border-box;
`;

const StyledTextFooter = styled.p`
  color: ${(props) => props.theme.colors.textColor};
`;

const StyledIconsFooter = styled.a`
  width: 10%;
  padding-left: 34px;
  cursor: pointer;
`;

function Footer() {
  return (
    <StyledFooter>
      <div>
        <StyledIconsFooter href="/">
          <img src={facebook} alt="Ícone facebook" />
        </StyledIconsFooter>
        <StyledIconsFooter href="/">
          <img src={twitter} alt=" Ícone twitter" />
        </StyledIconsFooter>
        <StyledIconsFooter href="/">
          <img src={instagram} alt="Ícone instagram" />
        </StyledIconsFooter>
      </div>
      <StyledTextFooter>Desenvolvido por Alura.</StyledTextFooter>
    </StyledFooter>
  );
}

export default Footer;
