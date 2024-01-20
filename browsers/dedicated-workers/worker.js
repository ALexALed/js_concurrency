console.log('hello from worker.js');
self.onmessage = (msg) => {
  console.log('message from main', msg.data);
  self.test = "TESTSSSS"
  postMessage('message sent from worker THIS IS DATA');
}