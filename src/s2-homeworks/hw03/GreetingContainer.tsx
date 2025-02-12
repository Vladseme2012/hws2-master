import React, {ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState} from 'react';
import Greeting from './Greeting';
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: UserType[],
    addUserCallback: (name: string) => void
}

type PureAddUserType = (name: string, setError: Dispatch<SetStateAction<string>>, setName: Dispatch<SetStateAction<string>>, addUserCallback: (name: string) => void) => void;

export const pureAddUser: PureAddUserType = (name: string, setError: Dispatch<SetStateAction<string>>, setName: Dispatch<SetStateAction<string>>, addUserCallback: (name: string) => void) => {
    if (name.trim() === '') {
        setError('Enter your name');
    } else {
        setName(name.trim());
        addUserCallback(name);
        setName('');
    }
};

export const pureOnBlur = (name: any, setError: any) => { // если имя пустое - показать ошибку
};

export const pureOnEnter = (e: any, addUser: any) => { // если нажата кнопка Enter - добавить
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<any>(''); // need to fix any
    const [error, setError] = useState<any>(''); // need to fix any

    const setNameCallback = (e: any) => { // need to fix any
        setName('some name'); // need to fix

        error && setError('');
    };
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback);
    };

    const onBlur = () => {
        pureOnBlur(name, setError);
    };

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser);
    };

    const totalUsers = 0; // need to fix
    const lastUserName = 'some name'; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    );
};

export default GreetingContainer;
