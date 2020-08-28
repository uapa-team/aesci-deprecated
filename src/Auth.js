import {useAuthTokenInterceptor} from "axios-jwt";
import {isLoggedIn, setAuthTokens, clearAuthTokens, getAccessToken} from "axios-jwt";
import axios from "axios";
import jwtDecode from "jwt-decode";

const apiClient = axios.create();

const BASE_AUTH_URL = "http://127.0.0.1:8000/api/token/";// <--- Cambiarla por el path de user-ms
const refreshEndpoint = BASE_AUTH_URL + "refresh/";
const verifyEndpoint = BASE_AUTH_URL + "verify/";


export const login = async (username, password) => {
    return new Promise((resolve, reject) => {
        axios.post(
            BASE_AUTH_URL,
            {
                "username": username,
                "password": password
            }
        ).then(response => {
            console.log(response);
            setAuthTokens({
                accessToken: response.data.access,
                refreshToken: response.data.refresh
            });
            sessionStorage.setItem("groups",JSON.stringify(jwtDecode(response.data.access)["groups"]));
            sessionStorage.setItem("permissions",JSON.stringify(jwtDecode(response.data.access)["permissions"]));
            window.location.reload();
        }, reject)
    });
};

export const logout = () => {
    clearAuthTokens();
    window.location.reload();
};

export const isLogged = () => {
    return isLoggedIn();
};

export const verify = () => {
    return new Promise((resolve, reject) => {
        axios.post(
            verifyEndpoint,
            {
                "token": getAccessToken()
            }
        ).catch(() => {
            logout();
            window.location.reload();
        })
    });
};

const requestRefresh = (refresh) => {
    return new Promise((resolve, reject) => {
        console.log("REFRESH: " + refresh);
        axios.post(
            refreshEndpoint,
            {refresh: refresh}
        ).then(response => {
            sessionStorage.setItem("groups",JSON.stringify(jwtDecode(response.data.access)["groups"]));
            sessionStorage.setItem("permissions",JSON.stringify(jwtDecode(response.data.access)["permissions"]));
            console.log(JSON.stringify(jwtDecode(response.data.access)));
            resolve(response.data.access);
        }, reject);
    });
};

useAuthTokenInterceptor(apiClient, {requestRefresh});