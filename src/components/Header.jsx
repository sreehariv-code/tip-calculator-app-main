import logo from "../assets/logo.svg";
function Header() {
  return (
    <header className="flex flex-col items-center text-neutral-very-dark-cyan  pb-[2rem] text-[30px] md:text-[1vw] font-semibold pt-10 ">
      <img src={logo} alt="" />
    </header>
  );
}

export default Header;
