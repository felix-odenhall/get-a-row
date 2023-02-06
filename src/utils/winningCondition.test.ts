import { calculateWinner } from "./winningCondition";
import { lines3x3 } from "../constants/gameBoards";

describe("ShuffleArray", () => {
  test("should be true if user has 3 horizontal matches in the top row", () => {
    const selectedTasks = [
      { id: 0, task: "task 0", isComplete: true },
      { id: 1, task: "task 1", isComplete: true },
      { id: 2, task: "task 2", isComplete: true },
      { id: 3, task: "task 3", isComplete: false },
      { id: 4, task: "task 4", isComplete: false },
      { id: 5, task: "task 5", isComplete: false },
      { id: 6, task: "task 6", isComplete: false },
      { id: 7, task: "task 7", isComplete: false },
      { id: 8, task: "task 8", isComplete: false },
    ];
    const testing = calculateWinner(selectedTasks, lines3x3);
    expect(testing).toEqual(true);
  });
  test("should be true if user has 3 horizontal matches in the middle row", () => {
    const selectedTasks = [
      { id: 0, task: "task 0", isComplete: false },
      { id: 1, task: "task 1", isComplete: false },
      { id: 2, task: "task 2", isComplete: false },
      { id: 3, task: "task 3", isComplete: true },
      { id: 4, task: "task 4", isComplete: true },
      { id: 5, task: "task 5", isComplete: true },
      { id: 6, task: "task 6", isComplete: false },
      { id: 7, task: "task 7", isComplete: false },
      { id: 8, task: "task 8", isComplete: false },
    ];
    const testing = calculateWinner(selectedTasks, lines3x3);
    expect(testing).toEqual(true);
  });
  test("should be true if user has 3 vertical matches in the third row", () => {
    const selectedTasks = [
      { id: 0, task: "task 0", isComplete: false },
      { id: 1, task: "task 1", isComplete: false },
      { id: 2, task: "task 2", isComplete: true },
      { id: 3, task: "task 3", isComplete: false },
      { id: 4, task: "task 4", isComplete: false },
      { id: 5, task: "task 5", isComplete: true },
      { id: 6, task: "task 6", isComplete: false },
      { id: 7, task: "task 7", isComplete: false },
      { id: 8, task: "task 8", isComplete: true },
    ];
    const testing = calculateWinner(selectedTasks, lines3x3);
    expect(testing).toEqual(true);
  });
  test("should be true if user has 3 diagonal matches", () => {
    const selectedTasks = [
      { id: 0, task: "task 0", isComplete: true },
      { id: 1, task: "task 1", isComplete: false },
      { id: 2, task: "task 2", isComplete: false },
      { id: 3, task: "task 3", isComplete: false },
      { id: 4, task: "task 4", isComplete: true },
      { id: 5, task: "task 5", isComplete: false },
      { id: 6, task: "task 6", isComplete: false },
      { id: 7, task: "task 7", isComplete: false },
      { id: 8, task: "task 8", isComplete: true },
    ];
    const testing = calculateWinner(selectedTasks, lines3x3);
    expect(testing).toEqual(true);
  });
  test("should be false if all values are false", () => {
    const selectedTasks = [
      { id: 0, task: "task 0", isComplete: false },
      { id: 1, task: "task 1", isComplete: false },
      { id: 2, task: "task 2", isComplete: false },
      { id: 3, task: "task 3", isComplete: false },
      { id: 4, task: "task 4", isComplete: false },
      { id: 5, task: "task 5", isComplete: false },
      { id: 6, task: "task 6", isComplete: false },
      { id: 7, task: "task 7", isComplete: false },
      { id: 8, task: "task 8", isComplete: false },
    ];
    const testing = calculateWinner(selectedTasks, lines3x3);
    expect(testing).toEqual(false);
  });
  test("should be false if all only 2/3 horizontal values are true", () => {
    const selectedTasks = [
      { id: 0, task: "task 0", isComplete: true },
      { id: 1, task: "task 1", isComplete: true },
      { id: 2, task: "task 2", isComplete: false },
      { id: 3, task: "task 3", isComplete: false },
      { id: 4, task: "task 4", isComplete: false },
      { id: 5, task: "task 5", isComplete: false },
      { id: 6, task: "task 6", isComplete: false },
      { id: 7, task: "task 7", isComplete: false },
      { id: 8, task: "task 8", isComplete: false },
    ];
    const testing = calculateWinner(selectedTasks, lines3x3);
    expect(testing).toEqual(false);
  });
  test("should be false if all only 2/3 vertical values are true", () => {
    const selectedTasks = [
      { id: 0, task: "task 0", isComplete: false },
      { id: 1, task: "task 1", isComplete: true },
      { id: 2, task: "task 2", isComplete: false },
      { id: 3, task: "task 3", isComplete: false },
      { id: 4, task: "task 4", isComplete: true },
      { id: 5, task: "task 5", isComplete: false },
      { id: 6, task: "task 6", isComplete: false },
      { id: 7, task: "task 7", isComplete: false },
      { id: 8, task: "task 8", isComplete: false },
    ];
    const testing = calculateWinner(selectedTasks, lines3x3);
    expect(testing).toEqual(false);
  });
  test("should be false if all only 2/3 diagonal values are true", () => {
    const selectedTasks = [
      { id: 0, task: "task 0", isComplete: true },
      { id: 1, task: "task 1", isComplete: false },
      { id: 2, task: "task 2", isComplete: false },
      { id: 3, task: "task 3", isComplete: false },
      { id: 4, task: "task 4", isComplete: true },
      { id: 5, task: "task 5", isComplete: false },
      { id: 6, task: "task 6", isComplete: false },
      { id: 7, task: "task 7", isComplete: false },
      { id: 8, task: "task 8", isComplete: false },
    ];
    const testing = calculateWinner(selectedTasks, lines3x3);
    expect(testing).toEqual(false);
  });
  test("should be false if all only 1 value is true", () => {
    const selectedTasks = [
      { id: 0, task: "task 0", isComplete: false },
      { id: 1, task: "task 1", isComplete: false },
      { id: 2, task: "task 2", isComplete: false },
      { id: 3, task: "task 3", isComplete: false },
      { id: 4, task: "task 4", isComplete: true },
      { id: 5, task: "task 5", isComplete: false },
      { id: 6, task: "task 6", isComplete: false },
      { id: 7, task: "task 7", isComplete: false },
      { id: 8, task: "task 8", isComplete: false },
    ];
    const testing = calculateWinner(selectedTasks, lines3x3);
    expect(testing).toEqual(false);
  });
});
