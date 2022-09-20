import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const VehicleBookingSchema = new Schema({
    
    appointmentID: {
        type: String,
    },
    type: {
        type: String,
    },
    guests: {
        type: String,
    },
    places: {
        type: String,
    },
    date: {
        type: String,
    },
    time: {
        type: String,
    },
    bookDate: {
        type: String,
    },
    state: {
        type: String,
    }

});

export const VehicleBookingModel = mongoose.model('vehicleBooking', VehicleBookingSchema);