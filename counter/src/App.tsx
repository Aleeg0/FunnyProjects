import React, {useEffect, useState} from 'react';
import Users from "./Components/Users";
import {IUser} from "./Models/user";

function App() {

    const [usersList, setUsersList] = useState<IUser[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");

    useEffect(() => {
        fetch("https://reqres.in/api/users")
        .then(data => data.json())
        .then(res => setUsersList(res.data));
    }, []);

    const onChangeSearchValue = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target!.value);
    }

    return (
        <div className="app">
            <Users users={usersList} isLoading={false} searchValue={searchValue} onChangeSearchValue={onChangeSearchValue}/>
        </div>
    );
}

export default App;
