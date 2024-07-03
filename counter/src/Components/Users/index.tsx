import React, {FC} from 'react';
import Dummy from "./Dummy";
import User from "./User";
import {IUser} from "../../Models/user";

interface UsersProps {
    isLoading: boolean;
    users: IUser[];
    searchValue: string;
    onChangeSearchValue: (event:React.ChangeEvent<HTMLInputElement>) => void;
}

const Users:FC<UsersProps> = ({isLoading, users,searchValue,onChangeSearchValue}) => {
    return (
        <div className="usersBox">
            <div className="searcher">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                </svg>
                <input  value={searchValue} onChange={(event) => onChangeSearchValue(event)} type="text" placeholder="Search user..."/>
            </div>
            {isLoading ?
            (<div className="dummyList">
                <Dummy/>
                <Dummy/>
                <Dummy/>
            </div>)
                : (
            <ul className="usersList">
                {users.map((user) => {
                    return(
                        <User key={user.id} {...user} />
                    );
                })}
            </ul>
            )}
        </div>
    );
};

export default Users;