import { Spot } from '@binance/connector';

const client = new Spot('', '', { });

function log(data: any) {
  try {
    const list = Object.values(JSON.parse(data).data);
    list.unshift(Number(new Date()));
    console.log(JSON.stringify(list) + ',');
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
client.combinedStreams([
  'ethusdt@aggTrade',
  'btcusdt@aggTrade',
  'opusdt@aggTrade',
  'linkusdt@aggTrade',
  'aptusdt@aggTrade',
  'ensusdt@aggTrade',
  'dentusdt@aggTrade',
  'apeusdt@aggTrade',
  'arusdt@aggTrade',
  'dogeusdt@aggTrade',
  'shibusdt@aggTrade',
  'sandusdt@aggTrade',
], callbacks);

// unsubscribe the stream above
// setTimeout(() => client.unsubscribe(aggTrade), 3000)

// support combined stream
// const combinedStreams = client.combinedStreams(['btcusdt@miniTicker', 'ethusdt@ticker'], callbacks)
