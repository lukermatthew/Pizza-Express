import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-green-800 text-black font-semi-bold px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="text-white">
        Pizza Express .
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
