/*
test("1+1", () => {
    expect(1+1).toBe(2);
}); */

/* import problem solved ✔
import { sum } from '../../src/ts/contemporary';

describe("sum", () => {
    test("add 1 + 2", () => {
        expect(sum(1, 2)).toBe(3);
    });
});
*/

import utilizeState from '../../src/ts/index';

describe("utilizeState", () => {
    test("should be initial value at first", () => {
        const { getState, setState } = utilizeState<{ args: number }>({ args: 0 });
        expect(getState().args).toBe(0);
    });

    test("should be changed when used setState", () => {
        const { getState, setState } = utilizeState<{ args: number }>({ args: 0 });
        setState(v => ({ args: v.args + 5 }));

        expect(getState().args).toBe(5);
    });

    test("should be return to initial value when it gets reset", () => {
        const store: {
            args: number,
            oneup: () => void,
            reset: () => void
        } = {
            args: 0,
            oneup: () => {},
            reset: () => {}
        }

        const { getState, setState } = utilizeState(store);
        setState(v => ({
            args: 0,
            oneup: () => {
                setState(prev => ({ ...prev, args: prev.args + 1 }));
            },
            reset: () => {
                setState(store);
            }
        }));

        getState().oneup();
        expect(getState().args).toBe(1);

        getState().reset();
        expect(getState()).toBe(store);
        expect(getState().args).toBe(0);
    });
});
