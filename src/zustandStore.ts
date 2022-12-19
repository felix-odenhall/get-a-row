import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { fifaDataObj } from "./fifaData";

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
        setBingoTasks: (khghjgh) =>
          set((state) => ({ bingoTasks: state.bingoTasks })),
      }),
      {
        name: "Get_A_Row_User",
      }
    )
  )
);

// useStore.persist.setOptions({
//   name: "Get_A_Row_User",
// });
// // // to rehydrate the zustand store using the new name
// useStore.persist.rehydrate();

export default useStore;
