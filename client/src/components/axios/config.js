import axios from "axios";

export const apiInstance = axios.create({
    baseURL: "https://timesheet-server-1.herokuapp.com/api"
})