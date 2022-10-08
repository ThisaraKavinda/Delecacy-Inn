import axios from 'axios';

// Config
import { baseURL } from '../config';

export const confirmVehicleBooking = async (newItem ) => {

    const { data } = await axios.post(baseURL + '/vehicleAppointment/add/', newItem)
    return data;
}