import axios from 'axios';

// Config
import { baseURL } from '../config';

export const addCustomer = async (details) => {
    const { data } = await axios.post(baseURL + '/customer/add/', details);
    return data;
}

export const getAllCustomers = async () => {
    const { data } = await axios.get(baseURL + '/customer/getAllCustomers/');
    return data;
}

export const deleteCustomer = async (id) => {
    const { data } = await axios.post(baseURL + '/customer/delete/', {id: id});
    return data;
}

export const editCustomer = async (details) => {
    const { data } = await axios.post(baseURL + '/customer/edit/', details);
    return data;
}

export const getSelectedCustomer = async (id) => {
    const { data } = await axios.post(baseURL + '/vehicle/getSelectedCustomer/', {id: id});
    return data;
}

export const getAllCustomersCount = async () => {
    const { data } = await axios.get(baseURL + '/vehicle/getAllCustomersCount/');
    return data;
}

