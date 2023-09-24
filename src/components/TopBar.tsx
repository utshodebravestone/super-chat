import { auth } from "../configs/firebase";

import logo from "../assets/images/logo.svg";

const TopBar = ({
  isAuthenticated,
  onSignOut,
}: {
  isAuthenticated: boolean;
  onSignOut: () => void;
}) => {
  return (
    <div className="w-full py-4 px-2 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-8 h-8 object-cover" />
        <h1 className="text-2xl font-bold">Super Chat</h1>
      </div>
      {isAuthenticated && (
        <div className="flex items-center gap-2">
          <img
            src={auth.currentUser?.photoURL || ""}
            alt="user"
            className="h-10 w-10 object-cover rounded-full"
          />
          <button
            onClick={onSignOut}
            className="px-4 py-2 bg-emerald-500 text-white text-sm font-medium border border-emerald-500 rounded hover:bg-transparent hover:text-emerald-500 transition-colors duration-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default TopBar;
