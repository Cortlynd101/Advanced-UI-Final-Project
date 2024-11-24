import { FC, ReactNode, useEffect, useState } from "react";
import { ApiUser, usersApiContext } from "./useUsersApiContext";
import { UsersApiService } from "./UserApiService";
import { ApiTicket } from "./useTicketsApiContext";

export const UsersApiContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [usersList, setUsers] = useState<ApiUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<ApiUser | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [userTickets] = useState<ApiTicket[]>([]);
  useEffect(() => {
    setIsLoading(true);
    UsersApiService.getAll().then((apiData) => {
      setUsers(apiData);
      setIsLoading(false);
    });
  }, []);
  const addUser = async (newUser: ApiUser) => {
    setIsLoading(true);
    await UsersApiService.add(newUser);
    const newUsers = await UsersApiService.getAll();
    setUsers(newUsers);
    setIsLoading(false);
  };
  const modifyUser = async (changedUser: ApiUser) => {
    setIsLoading(true);
    await UsersApiService.modify(changedUser);
    const newUsers = await UsersApiService.getAll();
    setUsers(newUsers);
    setIsLoading(false);
  };
  const deleteUser = async (deletedUser: ApiUser) => {
    setIsLoading(true);
    await UsersApiService.delete(deletedUser);
    const newUsers = await UsersApiService.getAll();
    setUsers(newUsers);
    setIsLoading(false);
  };

  return (
    <usersApiContext.Provider
      value={{
        usersList,
        selectedUser,
        setSelectedUser,
        addUser,
        userTickets,
        isLoading,
        modifyUser,
        deleteUser,
      }}
    >
      {children}
    </usersApiContext.Provider>
  );
};