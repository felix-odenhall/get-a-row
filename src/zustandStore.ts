import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { fifaDataObj } from "./fifaData";

const shuffle = ([...arr]): BingoData[] => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

interface BingoData {
  id: number;
  task: string;
  isComplete: boolean;
}

interface UserState {
  username: string;
  setUsername: (username: string) => void;
  hasUsername: boolean;
  setHasUsername: (hasUsername: boolean) => void;
  hasOngoingGame: boolean;
  setHasOngoingGame: (hasOngoingGame: boolean) => void;
  bingoTasks: BingoData[];
  setBingoTasks: (bingoTasks: BingoData[]) => void;
  hasBingo: boolean;
  setHasBingo: (bingoValue: boolean) => void;
  lastCompletedTask: string;
  setLastCompletedTask: (lastCompletedTask: string) => void;
  shuffleArr: (bingoTasks: BingoData[]) => BingoData[];
}

const useStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        username: "",
        setUsername: (username) =>
          set((state) => ({
            ...state,
            username,
          })),
        hasUsername: false,
        setHasUsername: (hasUsername) => set(() => ({ hasUsername })),
        hasOngoingGame: false,
        setHasOngoingGame: (hasOngoingGame) => set(() => ({ hasOngoingGame })),
        bingoTasks: fifaDataObj,
        setBingoTasks: (bingoTasks) =>
          set((state) => ({
            ...state,
            bingoTasks,
          })),
        hasBingo: false,
        setHasBingo: (hasBingo) => set(() => ({ hasBingo })),
        lastCompletedTask: "",
        setLastCompletedTask: (lastCompletedTask) =>
          set(() => ({ lastCompletedTask })),
        shuffleArr: (bingoTasks) => shuffle(bingoTasks.slice(0, 9)),
      }),
      {
        name: "Get_A_Row_User",
      }
    )
  )
);

export default useStore;
