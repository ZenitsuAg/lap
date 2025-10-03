const Button = ({ btnText, onClick }) => {
    return (
        <>
            <button 
                className="p-3 w-full bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white rounded-lg text-lg border"
                onClick={onClick}
            >
                {btnText}
            </button>
        </>
    )
}

export default Button