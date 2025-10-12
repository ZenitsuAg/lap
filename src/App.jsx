import Agrod from "../images/AgroD.svg";
import Form from "./Components/Form";
import Header from "./Components/Header";
import ExamForm from "./Components/ExamForm";

function App() {

    return (
        <div className="min-h-screen font-epunda bg-slate-100 relative">
            <Header />

            <div
                id="home"
                className="main-content min-h-screen flex flex-col justify-center items-center text-center bg-radial from-emerald-400 via-emerald-500 to-emerald-700"
            >
                <div className="group max-sm:px-4">
                    <img src={Agrod} alt="lol" className="w-xl max-sm:w-md" />
                    <h1 className="text-4xl md:text-6xl font-extrabold group-hover:text-emerald-700">
                        Hedera X{" "}
                        <span className="text-emerald-700 group-hover:text-black">
                            AgroD
                        </span>
                    </h1>
                </div>

                <p className="italic">
                    Revolutionalizing agriculture in Africa one{" "}
                    <span className=" text-emerald-700">Token</span> at a time.
                </p>
            </div>

            <div className="min-h-screen px-4 flex flex-col justify-center items-center max-sm:px-3">
                <h1 className="text-3xl font-bold underline decoration-double decoration-emerald-700 mb-5 max-sm:text-center ">
                    Module solutions and answer
                </h1>

                <Form />
            </div>

            <div className="min-h-screen max-lg:w-auto w-3xl mx-auto text-center px-4 py-3">
                <h1 className="font-medium text-4xl text-center">
                    Certifcate exam questions
                </h1>

                <p>Search for exam questions or go through all available questions here</p>

                <ExamForm />
            </div>
        </div>
    );
}

export default App;
