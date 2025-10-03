import { useState } from "react";
import ques from "../../questions.json";
import Button from "./Button";

const Form = () => {
    const [moduleNo, setmoduleNo] = useState("module1");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [demoJson, setDemoJson] = useState(ques);
    const [display, setDisplay] = useState(false)

    const getString = (str) => {
        const match = str.match(/\d+$/);
        return match ? parseInt(match[0]) : null;
    };

    const questions = demoJson[moduleNo];

    const handleNextQuestion = (e) => {
        e.preventDefault();
        const questions = demoJson[moduleNo]; // Change module name here if needed
        setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
        if (currentIndex + 1 == questions.length && getString(moduleNo) < Object.keys(demoJson).length){
            console.log( 'Go to the next Module')
            setmoduleNo((e) => `module${getString(e) + 1}`)
        }
    };
    // Get the current question and answer
    const currentQuestion = demoJson[moduleNo][currentIndex];

    function handlePrevQuestion(e) {
        e.preventDefault();
        const questions = demoJson[moduleNo];
        if (currentIndex != 0)
            setCurrentIndex((prevIndex) => (prevIndex - 1) % questions.length);
        if (currentIndex == 0 && getString(moduleNo) != 1 ){
            console.log( 'Go to the previous Module')
            setmoduleNo((e) => `module${getString(e) - 1}`)
        }
    }

    function handleModuleChange(e) {
        setmoduleNo(e.target.value);
        setCurrentIndex(0);
    }

    let optArr = [];
    for (let module in demoJson) {
        optArr.push(
            <option key={module} value={module}>
                Module {getString(module)}
            </option>
        );
    }

    function handleView(e) {
        e.preventDefault();
        setDisplay(!display)
        console.log(display)
    }

    function handleNextModule(e) {
        e.preventDefault()
        if (getString(moduleNo) < Object.keys(demoJson).length) {
            setmoduleNo((e) => `module${getString(e) + 1}`)
        }
    }

    function handlePrevModule (e) {
        e.preventDefault()
        if (getString(moduleNo) != 1 ) setmoduleNo((e) => `module${getString(e) - 1}`)

    }

    return (
        <form
            action="#"
            className="shadow-lg border border-slate-50 rounded-lg w-[360px] max-sm:min-h-[500px] overflow-scroll md:w-[576px] p-8 flex flex-col justify-between gap-4 bg-white min-h-96 max-h-[400px]"
        >
            <div className={`flex items-center ${display ? 'justify-between' : 'justify-end'}`}>
                {display && (
                    <div className="max-sm:flex-col max-sm:items-start flex justify-between items-center gap-3">
                        <h1 className="text-2xl font-semibold text-emerald-700">
                            Module {getString(moduleNo)}
                        </h1>
                        <div className="max-sm:self-end max-sm:mb-3">
                            <select
                                value={moduleNo}
                                className="p-3 rounded-lg shadow outline-none border-slate-100"
                                onChange={handleModuleChange}
                            >
                                {optArr}
                            </select>
                            
                        </div>
                    </div>
                )}
                <div>
                    <button 
                        onClick={handleView}
                        className="text-sm p-3 mb-3 bg-amber-300 text-white rounded-xl border border-transparent hover:bg-emerald-600 duration-200 ease-in-out shadow font-medium">
                            Show all questions
                    </button>
                </div>
                </div>

            {display ? (
                <>
                    <div className="flex flex-col gap-5">
                        {demoJson[moduleNo].map((item, index) => (
                            <div key={index}>
                                <div className="flex gap-3">
                                    <p className=" font-semibold">{index + 1}.</p>
                                    {item.Question}
                                </div>
                                
                                <div className="flex gap-3">
                                    <h2 className="italic text-emerald-700 font-medium">Answer:</h2>
                                    <p className="font-medium">{item.Answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-3">
                        <Button 
                            btnText={"Prev Module"}
                            onClick={handlePrevModule}
                            
                        />
                        <Button 
                            btnText={"Next Module"}
                            onClick={handleNextModule}
                        />
                    </div>
                </>
            ) : (
                <>
                    <div>
                
                        <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                            <div
                                className="bg-emerald-700 h-2.5 rounded-full transition-all duration-150"
                                style={{
                                    width: `${
                                        ((currentIndex + 1) /
                                            demoJson[moduleNo].length) *
                                        100
                                    }%`,
                                }}
                            ></div>
                        </div>

                        <div>
                            Question <span className="font-medium text-emerald-700">{currentIndex + 1}</span> of {demoJson[moduleNo].length}
                        </div>
                        <div className="max-sm:flex-col max-sm:items-start flex justify-between items-center">
                            <h1 className="text-2xl font-semibold text-emerald-700">
                                Module {getString(moduleNo)}
                            </h1>
                            <div className="max-sm:self-end max-sm:mb-3">
                                <select
                                    value={moduleNo}
                                    className="p-3 rounded-lg shadow outline-none border-slate-100"
                                    onChange={handleModuleChange}
                                >
                                    {optArr}
                                </select>
                                <select
                                    value={currentIndex}
                                    className="p-3 rounded-lg shadow outline-none border-slate-100 ml-4"
                                    onChange={(e) =>
                                        setCurrentIndex(parseInt(e.target.value))
                                    }
                                >
                                    {demoJson[moduleNo].map((item, index) => (
                                        <option key={index} value={index}>
                                            {index + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <p className="text-sm">Cycle Through Questions</p>
                        <div className="question-box mt-4">
                            <div className="flex gap-1 mb-5">
                                <p className=" font-semibold">{currentIndex + 1}. </p>
                                {/* <h2 className="">Question:</h2> */}
                                <p>
                                    {currentQuestion
                                        ? currentQuestion.Question
                                        : "No question available"}
                                </p>
                            </div>
                            <div className="flex gap-1">
                                <h2 className="italic text-emerald-700 font-medium">Answer:</h2>
                                <p className="break-all">
                                    {currentQuestion
                                        ? currentQuestion.Answer
                                        : "No answer available"}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex gap-3">
                        <Button 
                            onClick={handlePrevQuestion}
                            btnText={currentIndex == 0 && getString(moduleNo) != 1 ? 'Prev. Module' : 'Previous'}
                        />
                        <Button 
                            onClick={handleNextQuestion}
                            btnText={currentIndex + 1 == questions.length ? 'Next Module' : 'Next'}
                        />
                    </div>

                </>

                
            )}
            

            
        </form>
    );
};

export default Form;
