export interface IUsername {
  hasUsername: boolean;
  setHasUsername: (hasUsername: boolean) => void;
  username?: string;
  setUsername?: (username: string) => void;
}

export interface IStartGame {
  setHasUsername: (hasUsername: boolean) => void;
  hasOngoingGame: boolean;
  setHasOngoingGame: (hasOngoingGame: boolean) => void;
}

export interface IhasOngoingGame {
  username?: string;
  hasUsername: boolean;
  hasOngoingGame: boolean;
  setHasOngoingGame: (hasOngoingGame: boolean) => void;
}
