import {FoodCart} from '../models/foodCart.js';

export const addCartItems = async (req, res) => {

    const reservationId = req.body.reservationId;
    const itemId = req.body.itemId;
    const itemName = req.body.itemName;
    const price = req.body.price;
    let orderId = req.body.orderId;
    let date = req.body.date;
    let time = req.body.time;
    let nic = req.body.nic;

    let newCart = new FoodCart({
        reservationId, date, time, itemId, itemName, price, orderId, nic
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
    let nic = req.body.nic;
    
    var month = new Date().getUTCMonth() + 1; //months from 1-12
    var day = new Date().getUTCDate();
    var year = new Date().getUTCFullYear();
    let date = year + "-" + month + "-" + day;
    let time = new Date().toLocaleTimeString('en-US');
    console.log(date);
    console.log(time);
    let orderId = new Date().toISOString();

    let newCart = new FoodCart({
        reservationId, date, time, itemId, itemName, price, orderId, nic
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

export const getOrdersForSelectedPeriod = async (req, res) => {

    let startDateString = req.params.startDate;
    let endDateString = req.params.endDate;
    // let startDate = new Date(+startDateArr[0], +startDateArr[1] - 1, +startDateArr[2])
    let startDate = new Date(startDateString).toISOString();
    let endDate = new Date(endDateString).toISOString();

    let orderList = [];
    let response = [];
    // await FoodCart.distinct('orderId', {'date': { $lte: endDateString}})
    await FoodCart.find({'orderId': { $gte: startDate, $lte: endDate}}).distinct('orderId')
    .then((orders) => {     
        orderList = orders
    }).catch(err => {
        console.error(err);
    })

    for (let order of orderList) {    
        await FoodCart.find({'orderId': order}).then((result) => {
            // console.log(result);
            if (result.length > 0) {
                let item = {};
                item.orderId = order;
                item.reservationId = result[0].reservationId;
                item.nic = result[0].nic;
                item.count = 1;
                item.totalPrice = 0;
                item.date = result[0].date;
                item.time = result[0].time;
                for (let orderItem of result) {
                    item.count +=1;
                    item.totalPrice += Number(orderItem.price);
                }
                // console.log(item);
                response.push(item);
            }
            
        })
    }

    res.send(response)
}

export const getRecordsForAOrder = async (req, res) => {

    const nic = req.params.nic;

    FoodCart.find({orderId: nic}).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err);
    })
}