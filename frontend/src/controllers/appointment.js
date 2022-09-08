import axios from 'axios';

// Config
import { baseURL } from '../config';

export const addAppointment = async (details) => {
    const { data } = await axios.post(baseURL + '/appointment/add/', details);
    return data;
}

export const getAllAppointments = async () => {
    const { data } = await axios.get(baseURL + '/appointment/getAllAppointments/');
    return data;
}

export const deleteAppointment = async (id) => {
    const { data } = await axios.post(baseURL + '/appointment/delete/', {id: id});
    return data;
}

export const editAppointment = async (details) => {
    const { data } = await axios.post(baseURL + '/appointment/edit/', details);
    return data;
}

export const getSelectedAppointment = async (id) => {
    const { data } = await axios.post(baseURL + '/appointment/getSelectedAppointment/', {id: id});
    return data;
}

export const getAllAppointmentsCount = async () => {
    const { data } = await axios.get(baseURL + '/appointment/getAllAppointmentsCount/');
    return data;
}

