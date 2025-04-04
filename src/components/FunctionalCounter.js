import { useState } from "react";

const FunctionalCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="custom-center">
                <h3>Made through Functional Component : Current Count : {count} </h3>
                <button className="counter-button" onClick={() => setCount(count + 1)}>Increase Count</button>
            </div>
        </>
    );
}

export default FunctionalCounter