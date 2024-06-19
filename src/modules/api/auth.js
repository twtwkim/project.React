import axios from "axios";

const request = axios.create();

export const login = (username, password) =>{
    const response = request.post("/api/auth/login", {username, password});
    return response;
}

export const register = (username, password, telNumber) =>{
    const response = request.post("/api/auth/register", {username, password, telNumber});
    return response;
}

export const check = () =>{
    const response = request.get("/api/auth/check");
    return response;
}

export const logout = () =>{
    const response = request.post("/api/auth/logout");
    return response;
}