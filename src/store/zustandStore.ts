import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { fifaDataObj } from "../constants/fifaData";
import { shuffleArray } from "../utils/shuffleArray";

export interface BingoData {
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
  isOpen: boolean;
  setIsOpen: (openDropDown: boolean) => void;
  pickedTasks: BingoData[];
  setPickedTasks: (pickedTask: BingoData[]) => void;
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
        shuffleArr: (bingoTasks) => shuffleArray(bingoTasks),
        isOpen: false,
        setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
        pickedTasks: [],
        setPickedTasks: (pickedTasks) =>
          set((state) => ({ ...state, pickedTasks })),
      }),
      {
        name: "Get_A_Row_User",
      }
    )
  )
);

export default useStore;
