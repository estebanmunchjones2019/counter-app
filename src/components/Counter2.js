import useCounterStore from "../hooks/useCounterStore";

function Counter2() {
    const [globalCounter, incrementCounter] = useCounterStore();
    return (
        <>
            <div>{globalCounter}</div>
            <button onClick={incrementCounter}>
                Increment counter
            </button>
        </>
    );
}

export default Counter2;