import {FoodCart} from '../models/foodCart.js';

export const addCartItems = async (req, res) => {

    const reservationId = req.body.reservationId;
    const itemId = req.body.itemId;
    const itemName = req.body.itemName;
    const price = req.body.price;
    let orderId = req.body.orderId;
    let date = req.body.date;
    let time = req.body.time;

    let newCart = new FoodCart({
        reservationId, date, time, itemId, itemName, price, orderId
    })

    newCart = await newCart.save().then((newCart) =>{
        res.send(newCart);
    }).catch(err => {
        console.error(err);
    })
}

export const addAllCartItems = async (req, res) => {

    const itemsArr = req.query.items;

    for (let item of itemsArr) {
        const reservationId = req.body.reservationId;
    const itemId = req.body.itemId;
    const itemName = req.body.itemName;
    const price = req.body.price;
    
    var month = new Date().getUTCMonth() + 1; //months from 1-12
    var day = new Date().getUTCDate();
    var year = new Date().getUTCFullYear();
    let date = year + "-" + month + "-" + day;
    let time = new Date().toLocaleTimeString('en-US');
    console.log(date);
    console.log(time);
    let orderId = new Date().toISOString();

    let newCart = new FoodCart({
        reservationId, date, time, itemId, itemName, price, orderId
    })

    newCart = await newCart.save().then((newCart) =>{
        res.send(newCart);
    }).catch(err => {
        console.error(err);
    })
    }

    const reservationId = req.body.reservationId;
    const itemId = req.body.itemId;
    const itemName = req.body.itemName;
    const price = req.body.price;

    var month = new Date().getUTCMonth() + 1; //months from 1-12
    var day = new Date().getUTCDate();
    var year = new Date().getUTCFullYear();
    let date = year + "-" + month + "-" + day;
    let time = new Date().toLocaleTimeString('en-US');
    console.log(date);
    console.log(time);
    let orderId = new Date().toISOString();

    let newCart = new FoodCart({
        reservationId, date, time, itemId, itemName, price, orderId
    })

    newCart = await newCart.save().then((newCart) =>{
        res.send(newCart);
    }).catch(err => {
        console.error(err);
    })
}