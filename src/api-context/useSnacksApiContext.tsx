import { createContext, useContext } from "react";

export interface ApiSnack {
  id: number;
  name: string;
  price: number;
}

export interface SnacksApiContextInterface {
  snacksList: ApiSnack[];
  selectedSnack: ApiSnack | undefined;
  setSelectedSnack: (item: ApiSnack) => void;
  addSnack: (item: ApiSnack) => void;
  isLoading: boolean;
  modifySnack: (changedSnack: ApiSnack) => void;
  deleteSnack: (deletedSnack: ApiSnack) => void;
}

export const snacksApiContext = createContext<SnacksApiContextInterface>({
  snacksList: [],
  selectedSnack: undefined,
  setSelectedSnack: () => {},
  addSnack: () => {},
  isLoading: false,
  modifySnack: () => {},
  deleteSnack: () => {},
});

export const useSnacksApiContext = () => useContext(snacksApiContext);