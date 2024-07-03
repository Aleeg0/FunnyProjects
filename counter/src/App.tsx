import React, {useEffect, useState} from 'react';
import Users from "./Components/Users";
import {IUser} from "./Models/user";

function App() {

    const [usersList, setUsersList] = useState<IUser[]>([]);
    const [invited,setInvited] = useState<number[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");

    useEffect(() => {
        fetch("https://reqres.in/api/users")
        .then(data => data.json())
        .then(res => setUsersList(res.data));
    }, []);

    const onChangeSearchValue = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target!.value);
    }

    const onClickAction = (id:number) => {
        if (invited.includes(id)) {
            setInvited(i => i.filter((curId) => curId !== id));
        }
        else {
            setInvited([...invited, id]);
        }
    }

    return (
        <div className="app">
            <Users
                users={usersList}
                invited={invited}
                onClickAction={onClickAction}
                isLoading={false}
                searchValue={searchValue}
                onChangeSearchValue={onChangeSearchValue}
            />
        </div>
    );
}

export default App;
