import { useState } from "react";
import ques from "../../questions.json";

const Form = () => {
    const [moduleNo, setmoduleNo] = useState("module1");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [demoJson, setDemoJson] = useState(ques);

    const getString = (str) => {
        const match = str.match(/\d+$/);
        return match ? parseInt(match[0]) : null;
    };

    const handleNextQuestion = (e) => {
        e.preventDefault();
        const questions = demoJson[moduleNo]; // Change module name here if needed
        setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
    };
    // Get the current question and answer
    const currentQuestion = demoJson[moduleNo][currentIndex];

    function handlePrevQuestion(e) {
        e.preventDefault();
        const questions = demoJson[moduleNo];
        if (currentIndex != 0)
            setCurrentIndex((prevIndex) => (prevIndex - 1) % questions.length);
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

    return (
        <form
            action="#"
            className="shadow-lg border border-slate-50 rounded-lg md:w-[576px] p-8 flex flex-col justify-between gap-4 bg-white min-h-96"
        >
            <div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                    <div
                        className="bg-emerald-700 h-2.5 rounded-full"
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
                        <p>
                            {currentQuestion
                                ? currentQuestion.Answer
                                : "No answer available"}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex gap-3">
                <button
                    onClick={handlePrevQuestion}
                    className="p-3 w-full bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-9z00 text-white rounded-lg text-lg border"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextQuestion}
                    className="p-3 w-full bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-9z00 text-white rounded-lg text-lg border"
                >
                    Next
                </button>
            </div>
        </form>
    );
};

export default Form;
