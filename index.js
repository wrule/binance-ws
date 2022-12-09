"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connector_1 = require("@binance/connector");
const client = new connector_1.Spot('', '', {
//   wsURL: 'wss://testnet.binance.vision' // If optional base URL is not provided, wsURL defaults to wss://stream.binance.com:9443
});
const callbacks = {
    open: () => client.logger.log('open'),
    close: () => client.logger.log('closed'),
    message: (data) => client.logger.log(data)
};
const aggTrade = client.combinedStreams(['ethusdt@bookTickerWS'], callbacks);
// unsubscribe the stream above
// setTimeout(() => client.unsubscribe(aggTrade), 3000)
// support combined stream
// const combinedStreams = client.combinedStreams(['btcusdt@miniTicker', 'ethusdt@ticker'], callbacks)
