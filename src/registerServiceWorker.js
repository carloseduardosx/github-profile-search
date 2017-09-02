const registerServiceWorker = () => {
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    console.log('Starting service worker...');
    navigator.serviceWorker.register('/service-worker.js')
      .then((reg) => {
        console.log('Done. Now you\'re running offline.');
        reg.onupdatefound = () => { // eslint-disable-line
          console.log('Updating service worker...');
          const installingWorker = reg.installing;
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed' && navigator.serviceWorker && navigator.serviceWorker.controller) {
              console.log('Done! Reloading page...');
              window.location.reload();
            }
          };
        };
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default registerServiceWorker;
