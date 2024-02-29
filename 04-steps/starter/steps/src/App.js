import {useState} from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function App() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrevious() {
        // Attention! To update the current value of a state it's better to use a callback function
        if (step > 1)
            setStep((s) => s - 1);
    }

    function handleNext() {
        if (step < 3)
            setStep((s) => s + 1);
    }

    return (
        <>
            <button className="close" onClick={() => setIsOpen((isO) => !isO)}> &times;</button>
            {isOpen && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >= 1 ? "active" : ""}>1</div>
                        <div className={step >= 2 ? "active" : ""}>2</div>
                        <div className={step >= 3 ? "active" : ""}>3</div>
                    </div>

                    <StepMessage step={step}>
                        {messages[step - 1]}
                    </StepMessage>

                    <div className="buttons">
                        <Button
                            bgColor="#7950f2"
                            textColor="#fff"
                            onClick={handlePrevious}
                        >
                            <span>👈 Previous</span>
                        </Button>
                        <Button
                            bgColor="#7950f2"
                            textColor="#fff"
                            onClick={handleNext}
                        >
                            <span>Next 👉</span>
                        </Button>
                    </div>
                </div>
            )
            }
        </>
    );
}

function StepMessage({step, children}) {
    return (
        <div className="message">
            <h3>Step {step}</h3>
            {children}
        </div>
    );
}

function Button({textColor, bgColor, onClick, children}) {
    return (
        <button
            style={{backgroundColor: bgColor, color: textColor}}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default App;
