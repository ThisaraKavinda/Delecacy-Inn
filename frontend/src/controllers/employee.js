import axios from 'axios';

// Config
import { baseURL } from '../config';

export const addEmployee = async (details) => {
    const { data } = await axios.post(baseURL + '/employee/add/', details);
    return data;
}

export const getAllEmployees = async () => {
    const { data } = await axios.get(baseURL + '/employee/getAllEmployees/');
    return data;
}

export const deleteEmployee = async (id) => {
    const { data } = await axios.post(baseURL + '/employee/delete/', {id: id});
    return data;
}

export const editEmployee = async (details) => {
    const { data } = await axios.post(baseURL + '/employee/edit/', details);
    return data;
}

export const getSelectedEmployee = async (id) => {
    console.log("asadasds")
    const { data } = await axios.post(baseURL + '/employee/getSelectedEmployee/', {id: id});
    console.log(data)
    return data;
}

export const getAllEmployeesCount = async () => {
    const { data } = await axios.get(baseURL + '/employee/getAllEmployeesCount/');
    return data;
}

