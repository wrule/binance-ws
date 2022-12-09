import { Spot } from '@binance/connector';

const client = new Spot('', '', { });

const callbacks = {
  open: () => console.log('开始'),
  close: () => console.log('结束'),
  message: (data: any) => console.log(data),
}
client.combinedStreams(['ethusdt@bookTicker'], callbacks);

// unsubscribe the stream above
// setTimeout(() => client.unsubscribe(aggTrade), 3000)

// support combined stream
// const combinedStreams = client.combinedStreams(['btcusdt@miniTicker', 'ethusdt@ticker'], callbacks)
