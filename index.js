const { createStore } = require('redux');


// #1 write oyut an example/default version of my
// application state

const defaultState = {
    count: 0
};

// #2 - Describe the ways that state can change
// - count can go up by one
// - count can go down by one
// #2b - find single words or phrases for those changes
// - increment
// - decrement
// #2c - translate those into objects

// Also good to all-caps the variable for an action
const ACTION_INC = {
    type: 'INCREMENT' // common to uppercase type
};

const ACTION_DEC = {
    type: 'DECREMENT'
};

// #3 - Write a pure function tha accepts the current state 
// and an action, then returns the new version state

const counter = (state=defaultState, action) => {
    // check the action.type
    switch (action.type) {
        case ACTION_INC.type:
        // if it's 'INCREMENT', return a new state object with the count +1
            return {
                count: state.count + 1
            };

        case ACTION_DEC.type:
        // if it's 'DECREMENT', return a new state object with the count -1
            return {
                count: state.count -1
            };

        default:
        // else return the state as-is
        return state;

    }
};

// #4 - create your store that knows how to use your reducer function
const store = createStore(counter);

// You can subscibe to notifications of any changes to the state
store.subscribe(() => {
    const theState = store.getState();
    console.log(`The state is now ${theState.count}`);
});

module.exports = {
    store,
    ACTION_INC,
    ACTION_DEC,
};

// const {
//     store,
//     ACTION_INC,
//     ACTION_DEC,
// } = require('./index');