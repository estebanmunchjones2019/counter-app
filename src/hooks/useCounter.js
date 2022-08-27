import { useState } from 'react';

const useCounter = (componentName) => {

    // let's log the component that is calling this hook
    console.log('useCounter hook function running because' + componentName + ' is calling it');

    // all components using the hooks will have counter with value 0 as initial state
    const [counter, setCounter] = useState(0);

    return [counter,setCounter];
}

export default useCounter;