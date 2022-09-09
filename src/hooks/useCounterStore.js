import { useState, useEffect } from 'react';

// hardcoded value of the initial state
let globalCounter = 0;

// let's store the functions to update state for each interested component
// this is an array of setCounter function pointers.
let listeners = [];

const useCounterStore = () => {

    // we're not interested in using the counter state, just setCounter
    const setCounter = useState(globalCounter)[1];

    // let's create a function that updates the global counter
    const incrementCounter = () => {
        // let's change the variable globalCounter defined outside the hook
        globalCounter = globalCounter + 1;

        // let's call the function setCounter corresponding to each interested component
        // so they re-render, and show the latest globalCounter value
        for (const listener of listeners) {
            listener(globalCounter);
        }
        
    }

    // let's register the components when they call this hook for the first time by
    // pushing their corresponding setCounter function into the listeners array
  useEffect(() => {
    //when the component did mount, its corresponding setCounter function is added to the list, as a pointer, like all functions
    listeners.push(setCounter);

    //There's an unmounting clean up function (which is a closure), that de-registers the component from the listeners
    return () => {
      listeners = listeners.filter(li => li !== setCounter);
    };
  }, [setCounter]);


  // let's return the global state and a way to update it
  return [globalCounter, incrementCounter]

   
}

export default useCounterStore;