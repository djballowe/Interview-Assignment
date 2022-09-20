import axios from "axios";

export const apiInstance = axios.create({
    baseURL: "https://timesheet-interview-1.herokuapp.com/api"
})