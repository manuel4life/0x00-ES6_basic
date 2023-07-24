const promise = new Promise((resolve, reject) => {
 
  if (true) {
    resolve('true');
  } else {
    reject(new Error('false'));
  }
});

export default function getResponseFromAPI() {
  return promise;
}
