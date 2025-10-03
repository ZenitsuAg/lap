import Agrod from "../../images/AgroD.svg";

const Header = () => {
    return (
        <div className="pt-4 mt-10 flex justify-center items-center fixed w-full">
            <nav className="border border-transparent max-sm:w-[350px] lg:px-10 shadow rounded-4xl flex gap-60 justify-between p-3 px-3.5 max-sm:justify-center   backdrop-blur-lg">
                <div>
                    <a href="#home" className="flex gap-1 justify-center">
                        <img src={Agrod} alt="lol" className="w-20" />
                    </a>
                </div>
                <div className="flex gap-4 max-md:hidden">
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
        </div>
    );
};

export default Header;
