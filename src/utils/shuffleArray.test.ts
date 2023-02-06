import { shuffleArray } from "./shuffleArray";
import { fifaDataObj } from "../constants/fifaData";

describe("ShuffleArray", () => {
  test("Should have the same length", () => {
    const shuffledArr = shuffleArray(fifaDataObj);
    expect(shuffledArr.length).toEqual(fifaDataObj.length);
  });

  test("Should include same items as in test", () => {
    const shuffledArr = shuffleArray(fifaDataObj);
    const testArr = [
      {
        id: 1,
        task: "Score from a corner",
        isComplete: false,
      },
      {
        id: 7,
        task: "Finish a game with at least 8 corners",
        isComplete: false,
      },
      {
        id: 12,
        task: "Win with a lower rated team",
        isComplete: false,
      },
    ];
    expect(shuffledArr).toEqual(expect.arrayContaining(testArr));
  });
  test("Should cointain the given items", () => {
    const testArr = [1, 2, [3, 4], 5, "6", "7", 9, { ten: 10 }];
    const shuffledArr = shuffleArray(testArr);
    const sampleArr = [5, [3, 4], { ten: 10 }, 9, "6", 2, 1, "7"];
    expect(shuffledArr).toEqual(expect.arrayContaining(sampleArr));
  });
});
