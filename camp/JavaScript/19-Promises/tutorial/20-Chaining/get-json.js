function get(url) {
  // Return a new promise.
  return new Promise(function (resolve, reject) {
    // Do the usual XHR stuff
    const req = new XMLHttpRequest();

    req.open('GET', url);

    req.onload = function () {
      // This is called even on 404 etc
      // so check the status
      if (req.status === 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      } else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function () {
      reject(Error('Network Error'));
    };

    // Make the request
    req.send();
  });
}

function getJSON(url) {
  /**
   * Since JSON.parse() takes a single argument and returns a transformed value,
   * we can make a shortcut in the then.
   */
  return get(url).then(JSON.parse);
}
