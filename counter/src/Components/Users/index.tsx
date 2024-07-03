import React, {FC} from 'react';
import Dummy from "./Dummy";
import User from "./User";
import {IUser} from "../../Models/user";

interface UsersProps {
    isLoading: boolean;
    users: IUser[];
    invited: number[];
    searchValue: string;
    onChangeSearchValue: (event:React.ChangeEvent<HTMLInputElement>) => void;
    onClickAction: (id:number) => void;
}

const Users:FC<UsersProps> = ({isLoading, users,invited, searchValue,onChangeSearchValue,onClickAction}) => {
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
                {users.filter((user) => {
                    const name = (user.first_name + user.last_name).toLowerCase();
                    return name.includes(searchValue.toLowerCase())
                        || user.email.includes(searchValue.toLowerCase());
                }).map((user =>
                    <User
                        key={user.id}
                        isInvited={invited.includes(user.id)}
                        onClickAction={onClickAction}
                        {...user}
                    />
                ))}
            </ul>
            )}
        </div>
    );
};

export default Users;