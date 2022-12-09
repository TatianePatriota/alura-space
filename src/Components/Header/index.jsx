import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 24px;
`;

const StyledContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  width: 33%;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 10px;
    z-index: -1;
    border: 2px solid transparent;
    background: linear-gradient(to right, #c98cf1, #7b78e5) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
  }
`;

const StyledInput = styled.input`
  width: 80%;
  height: 30px;
  color: #d9d9d9;
  font-size: 1rem;
  border: none;
  background-color: transparent;
  outline: 0;

  &::placeholder {
    font-size: 1rem;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="Logo do Alura Space" />
      <StyledContainerHeader>
        <StyledInput type="text" placeholder="O que você procura?" />
        <img src={search} alt="Ícone de busca" />
      </StyledContainerHeader>
    </StyledHeader>
  );
}

export default Header;
