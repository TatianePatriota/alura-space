import logo from "../../assets/logo.png";
import search from "../../assets/search.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo do Alura Space" />
      <div>
        <input type="text" placeholder="O que você procura?" />
        <img src={search} alt="Ícone de busca" />
      </div>
    </header>
  );
}

export default Header;
