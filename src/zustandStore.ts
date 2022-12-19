import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { fifaDataObj } from "./fifaData";
import { getFromLocalStorage, parseLocalStorage } from "./utils/localStorage";

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
}
const useStore = create<UserState>()(
  devtools(
    persist((set) => ({
      username: parseLocalStorage(getFromLocalStorage("Username_Getarow")),
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
      setBingoTasks: (khghjgh) =>
        set((state) => ({ bingoTasks: state.bingoTasks })),
    }))
  )
);

export default useStore;
