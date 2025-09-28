import { PiMagnifyingGlassBold } from "react-icons/pi";

const ExamForm = () => {
    return (
        <>
            <div className="flex flex-1 gap-4 px-3 py-1.5 text-xs bg-slate-50 border-[0.25px] rounded-lg border-[#CACDD5] ">
                <PiMagnifyingGlassBold size={"2em"} color={'#007a55'} />
                <input
                    type="text"
                    // name={inputName}
                    // id={inputName}
                    placeholder={"Search for exam questions here..."}
                    className="w-full bg-slate-50 focus:outline-none"
                />

                
            </div>
            <div className="mt-6 ">
                <h1>The remaining part will be implemented soon!!</h1>
            </div>
        </>
    );
};

export default ExamForm;
