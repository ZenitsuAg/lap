import { PiMagnifyingGlassBold } from "react-icons/pi";
import exam from "../../exam.json";
import { useState } from "react";
import QATile from "./QATile";
import Button from "./Button";


const ExamForm = () => {
    const [demoJson, setDemoJson] = useState(exam);
    const [searchValue, setSearchValue] = useState("")
    const [allQuestions, setAllQuestions] = useState(false)

    console.log(demoJson["Exam Questions"].filter((i) => i.Question.includes(searchValue)))    

    return (
        <>
            <div className="flex flex-1 gap-4 px-3 py-1.5 text-base bg-slate-50 border-[0.25px] rounded-lg border-[#CACDD5] ">
                <PiMagnifyingGlassBold size={"2em"} color={'#007a55'} />
                <input
                    type="text"
                    // name={inputName}
                    // id={inputName}
                    placeholder={"Search for exam questions here..."}
                    className="w-full bg-slate-50 focus:outline-none"
                    onChange={(e) => setSearchValue(e.target.value)}
                />

                
            </div>
            {searchValue.trim() ? (
                <div className="mt-6 bg-white rounded-lg border-slate-100 text-left p-3 divide-y divide-slate-200">

                    {demoJson["Exam Questions"]
                        .filter((i) => i.Question.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item, index) => (
                            <QATile key={index}
                                qNumber={index + 1}
                                question={item.Question}
                                answer={item.Answer}
                            />
                        ))
                    }

                    {demoJson["Exam Questions"]
                        .filter((i) => i.Question.toLowerCase().includes(searchValue.toLowerCase()))
                        .length == 0 && <p className="text-red-500 text-center font-semibold">404 not found</p>}
                    
                </div>
            ) : (
               <>
                    <div className="mt-2">
                        <Button 
                            btnText={`${allQuestions ? "Hide" : "Show"} all questions`} 
                            onClick={() => setAllQuestions(!allQuestions)}
                        />    
                    </div> 
                    
                    {allQuestions && (
                        <div className="my-3 overflow-hidden text-ellipsis bg-white rounded-lg border-slate-100 text-left p-3 divide-y divide-slate-200">
                            {demoJson["Exam Questions"].map((item, index) => (
                                <QATile key={index}
                                    qNumber={index + 1}
                                    question={item.Question}
                                    answer={item.Answer}
                                />
                            ))}
                        </div>
                    )}
               </>
            )}
        </>
    );
};

export default ExamForm;
