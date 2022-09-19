import { RoomModel } from '../models/room.js';


export const addRoom = async (req, res) => {
    console.log(req.body);
    const room = new RoomModel({
        name: req.body.name,
        price: req.body.price,
        state: req.body.state
    });
    const details = await room.save();
    if (details) {
        res.send({
            status: true,
            details: details
        });
    } else {
        res.send({
            status: false,
        });
    }
}