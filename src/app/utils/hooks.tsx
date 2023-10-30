import { useState } from "react";

type initialStateType = {
    name?: string,
    email: string;
    password: string;
}

type FormStateReturnType = 
[initialStateType,(key: string, value: string) => void];

export function useFormState(initialState: initialStateType):
FormStateReturnType{
    const [state, setState ] = useState(initialState);

    function setProperty(key: string, value: string) {
        setState((prevState) => ({ ...prevState, [key]: value}));
    }
    return [ state, setProperty];
}