import resultHandle, { Results } from "../lib/result-handle";

const results = [
    {
        21: -2, 3: -1, 8: 1, 11: -5, 22: 1, 14: -7, 9: -1, 5: -4, 15: -5, 12: -7, 19: -3, 20: -3, 18: -7, 23: 3, 6: -6, 1: 0, 16: -1, 17: 1, 24: -4, 7: 2, 25: 1, 26: -5, 27: -2, 2: -7, 10: -5, 4: -6, 13: -7,
    }, {
        21: -2, 3: -1, 8: 1, 11: -5, 22: 1, 14: -7, 9: -1, 5: -4, 15: -5, 12: -7, 19: -3, 20: -3, 18: 1, 23: 3, 6: -6, 1: 0, 16: -1, 17: 1, 24: -4, 7: 2, 25: 1, 26: -5, 27: -2, 2: -7, 10: -5, 4: -6, 13: -7,
    }, {
        21: -2, 3: -1, 8: 1, 11: -5, 22: 1, 14: -7, 9: -1, 5: -4, 15: -5, 12: -7, 19: -3, 20: -3, 18: 2, 23: 3, 6: -6, 1: 0, 16: -1, 17: 1, 24: -4, 7: 2, 25: 1, 26: -5, 27: -2, 2: -7, 10: -5, 4: -6, 13: -7,
    }, {
        21: -2, 3: -1, 8: 1, 11: -5, 22: 1, 14: -7, 9: -1, 5: -4, 15: -5, 12: -7, 19: -3, 20: -3, 18: -7, 23: 3, 6: -6, 1: 0, 16: -1, 17: 1, 24: -4, 7: 2, 25: 1, 26: -5, 27: -2, 2: -7, 10: -2, 4: -6, 13: -7,
    }, {
        21: -2, 3: -1, 8: 1, 11: -5, 22: 1, 14: -7, 9: -1, 5: -4, 15: -5, 12: -7, 19: -3, 20: -3, 18: 1, 23: 3, 6: -6, 1: 0, 16: -1, 17: 1, 24: -4, 7: 2, 25: 1, 26: -5, 27: -2, 2: -7, 10: -2, 4: -6, 13: -7,
    }, {
        21: -2, 3: -1, 8: 1, 11: -5, 22: 1, 14: -7, 9: -1, 5: -4, 15: -5, 12: -7, 19: -3, 20: -3, 18: 2, 23: 3, 6: -6, 1: 0, 16: -1, 17: 1, 24: -4, 7: 2, 25: 1, 26: -5, 27: -2, 2: -7, 10: -2, 4: -6, 13: -7,
    }, {
        21: -2, 3: -1, 8: 1, 11: -5, 22: 1, 14: -7, 9: -1, 5: -4, 15: -5, 12: -7, 19: -3, 20: -3, 18: -7, 23: 3, 6: -6, 1: 0, 16: -1, 17: 1, 24: -4, 7: 2, 25: 1, 26: -5, 27: -2, 2: -7, 10: -1, 4: -6, 13: -7,
    }, {
        21: -2, 3: -1, 8: 1, 11: -5, 22: 1, 14: -7, 9: -1, 5: -4, 15: -5, 12: -7, 19: -3, 20: -3, 18: 1, 23: 3, 6: -6, 1: 0, 16: -1, 17: 1, 24: -4, 7: 2, 25: 1, 26: -5, 27: -2, 2: -7, 10: -1, 4: -6, 13: -7,
    }, {
        21: -2, 3: -1, 8: 1, 11: -5, 22: 1, 14: -7, 9: -1, 5: -4, 15: -5, 12: -7, 19: -3, 20: -3, 18: 2, 23: 3, 6: -6, 1: 0, 16: -1, 17: 1, 24: -4, 7: 2, 25: 1, 26: -5, 27: -2, 2: -7, 10: -1, 4: -6, 13: -7,
    }
] satisfies Results;

console.log(resultHandle(results, { start: 25.75, step: 2.5 }));
