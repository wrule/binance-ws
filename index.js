"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connector_1 = require("@binance/connector");
const client = new connector_1.Spot('', '', {});
function log(data) {
    try {
        console.log(Object.values(data));
    }
    catch (e) {
        console.log(data);
        console.log(e);
    }
}
const callbacks = {
    open: () => console.log('开始'),
    close: () => console.log('结束'),
    message: (data) => log(data),
};
client.combinedStreams(['ethusdt@bookTicker'], callbacks);
// unsubscribe the stream above
// setTimeout(() => client.unsubscribe(aggTrade), 3000)
// support combined stream
// const combinedStreams = client.combinedStreams(['btcusdt@miniTicker', 'ethusdt@ticker'], callbacks)
