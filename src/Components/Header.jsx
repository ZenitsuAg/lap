import Agrod from "../../images/AgroD.svg";

const Header = () => {
    return (
        <nav className="border-b shadow-emerald-800 flex justify-between p-3 px-3.5 max-sm:justify-center shadow fixed w-full backdrop-blur-lg">
            <div>
                <a href="#home" className="flex gap-1 justify-center">
                    {/* <img src={Agrod} alt="lol" className="w-20" /> */}
                </a>
            </div>
            <div className="flex gap-4 ">
                <button className="cursor-pointer hover:text-emerald-700 duration-150 hover:scale-125">
                    Farmers
                </button>
                <button className="cursor-pointer hover:text-emerald-700 duration-150 hover:scale-125">
                    Investors
                </button>
                <button className="border-b hover:border-b-emerald-700 duration-150 hover:scale-125 hover:text-emerald-700">
                    Connect Wallet
                </button>
            </div>
        </nav>
    );
};

export default Header;
