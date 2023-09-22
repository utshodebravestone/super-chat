import logo from "../assets/images/logo.svg";

const TopBar = () => {
  return (
    <div className="w-full py-4 flex items-center justify-center gap-2 shadow-sm">
      <img src={logo} alt="logo" className="w-8 h-8 object-cover" />
      <h1 className="text-2xl font-bold">Super Chat</h1>
    </div>
  );
};

export default TopBar;
