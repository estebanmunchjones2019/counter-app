import useCounter from "../hooks/useCounter";

function Counter2() {
    const [counter, setCounter] = useCounter('Counter2');
    return (
        <>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>
                Increment counter
            </button>
        </>
    );
}

export default Counter2;