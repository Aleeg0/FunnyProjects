import React, {useEffect, useState} from 'react';
import Users from "./Components/Users";
import {IUser} from "./Models/user";
import Submit from "./Components/Submit/Submit";

function App() {

    const [usersList, setUsersList] = useState<IUser[]>([]);
    const [invited,setInvited] = useState<number[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [isSend,setIsSend] = useState<boolean>(false);

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

    const onClickGoBack = () => {
        setIsSend(false);
        setInvited([]);
    }

    return (
        <div className="app">
            {!isSend ?
                <Users
                    users={usersList}
                    invited={invited}
                    onClickAction={onClickAction}
                    isLoading={false}
                    searchValue={searchValue}
                    onChangeSearchValue={onChangeSearchValue}
                    setIsSend={setIsSend}
                />
                :
                <Submit
                    count={invited.length}
                    onClickGoBack={onClickGoBack}
                />
            }
        </div>
    );
}

export default App;
