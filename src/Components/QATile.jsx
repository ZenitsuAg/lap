const QATile = ({ qNumber, question, answer }) => {
    return (
        <div className="p-2">
            <div className="flex gap-3">
                <p className=" font-semibold">{qNumber}.</p>
                <p>{question}</p>
            </div>

            <div className="flex gap-3">
                <h2 className="italic text-emerald-700 font-medium">Answer:</h2>
                <p className="font-medium">{answer}</p>
            </div>
        </div>
    );
};

export default QATile