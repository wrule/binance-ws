import { Spot } from '@binance/connector';

const client = new Spot('', '', { });

function log(data: any) {
  try {
    console.log(Object.values(JSON.parse(data)));
  } catch (e) {
    console.log(data);
    console.log(e);
  }
}

const callbacks = {
  open: () => console.log('开始'),
  close: () => console.log('结束'),
  message: (data: any) => log(data),
}
client.combinedStreams(['ethusdt@bookTicker'], callbacks);

// unsubscribe the stream above
// setTimeout(() => client.unsubscribe(aggTrade), 3000)

// support combined stream
// const combinedStreams = client.combinedStreams(['btcusdt@miniTicker', 'ethusdt@ticker'], callbacks)
