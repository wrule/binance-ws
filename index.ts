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
  'ethusdt@trade',
  'btcusdt@trade',
  'opusdt@trade',
  'linkusdt@trade',
  'aptusdt@trade',
  'ensusdt@trade',
  'dentusdt@trade',
  'apeusdt@trade',
  'arusdt@trade',
  'dogeusdt@trade',
  'shibusdt@trade',
  'sandusdt@trade',
], callbacks);

// unsubscribe the stream above
// setTimeout(() => client.unsubscribe(aggTrade), 3000)

// support combined stream
// const combinedStreams = client.combinedStreams(['btcusdt@miniTicker', 'ethusdt@ticker'], callbacks)
