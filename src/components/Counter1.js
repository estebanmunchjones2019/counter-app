import useCounter from "../hooks/useCounter";

function Counter1() {
    const [counter, setCounter] = useCounter('Counter1');
    return (
        <>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>
                Increment counter
            </button>
        </>
    );
}

export default Counter1;