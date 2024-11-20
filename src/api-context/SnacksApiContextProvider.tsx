import { FC, ReactNode, useEffect, useState } from "react";
import { SnacksApiService } from "./SnacksApiService";
import { ApiSnack, snacksApiContext } from "./useSnacksApiContext";

export const SnacksApiContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [snacksList, setSnacks] = useState<ApiSnack[]>([]);
  const [selectedSnack, setSelectedSnack] = useState<ApiSnack | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    SnacksApiService.getAll().then((apiData) => {
      setSnacks(apiData);
      setIsLoading(false);
    });
  }, []);
  const addSnack = async (newSnack: ApiSnack) => {
    setIsLoading(true);
    await SnacksApiService.add(newSnack);
    const newSnacks = await SnacksApiService.getAll();
    setSnacks(newSnacks);
    setIsLoading(false);
  };
  const modifySnack = async (changedSnack: ApiSnack) => {
    setIsLoading(true);
    // await SnacksApiService.delete(changedSnack);
    // await SnacksApiService.add(changedSnack);
    await SnacksApiService.modify(changedSnack);
    const newSnacks = await SnacksApiService.getAll();
    setSnacks(newSnacks);
    setIsLoading(false);
  };
  const deleteSnack = async (deletedSnack: ApiSnack) => {
    setIsLoading(true);
    await SnacksApiService.delete(deletedSnack);
    const newSnacks = await SnacksApiService.getAll();
    setSnacks(newSnacks);
    setIsLoading(false);
  };

  return (
    <snacksApiContext.Provider
      value={{
        snacksList,
        selectedSnack,
        setSelectedSnack,
        addSnack,
        isLoading,
        modifySnack,
        deleteSnack,
      }}
    >
      {children}
    </snacksApiContext.Provider>
  );
};