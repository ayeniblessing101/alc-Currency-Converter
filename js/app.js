// Checks if browser supports service worker
if ( navigator.serviceWorker ) {
  navigator.serviceWorker
    .register('../sw.js')
    .then(() => {
      console.log('Service Worker Registered');
    }).catch(() => {
      console.log('Oops! Something went wrong');
    })
}