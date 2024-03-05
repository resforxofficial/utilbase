export const sum = (a: number, b: number) : number => {
    return a + b;
}

// type StateSetter<T> = T | ((prevState: T) => T);

// /**
//  * interface State is the initial form value of return values from utilizeState
//  * @alias getState this function gets current state
//  * @alias setState this function sets current state to new state
//  */
// interface State<T> {
//     getState: () => T;
//     setState: (updater: StateSetter<T>) => void;
// }

// export default function utilizeState1<T>(initialState: T): State<T> {
//     let currentState = initialState;

//     const getState = () => currentState;

//     const updateState = (updater: StateSetter<T>) => {
//         const newState = typeof updater === 'function' ? (updater as (prevState: T) => T)(currentState) : updater;
//         currentState = newState;
//     };

//     return { getState, setState: updateState };
// }
