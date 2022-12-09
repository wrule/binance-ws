import { Spot } from '@binance/connector';

const client = new Spot('', '', {
//   wsURL: 'wss://testnet.binance.vision' // If optional base URL is not provided, wsURL defaults to wss://stream.binance.com:9443
});

const callbacks = {
  open: () => client.logger.log('open'),
  close: () => client.logger.log('closed'),
  message: (data: any) => client.logger.log(data)
}
const aggTrade = client.combinedStreams(['ethusdt@bookTicker'], callbacks);

// unsubscribe the stream above
// setTimeout(() => client.unsubscribe(aggTrade), 3000)

// support combined stream
// const combinedStreams = client.combinedStreams(['btcusdt@miniTicker', 'ethusdt@ticker'], callbacks)
