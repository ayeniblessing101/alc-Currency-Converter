// Create an instance of a db object for us to store the open database
let db;

// Prevent us from trying to use indexedDB functionality before the app has completely finished loading 
window.onload = () => {
  let request = window.indexedDB.open('converted-currency', 1);
  
  // onerror handler signifies that the database didn't open successfully
  request.onerror = () => {
    console.log('Database failed to open');
  };

  // onsuccess handler signifies that the database opened successfully
  request.onsuccess = () => {
    console.log('Database opened successfully');
  };

  db = request.result;

  request.onupgradeneeded = (e) => {
    db = e.target.result;

    // Create an objectStore to store our converted currency in
    let objectStore = db.createObjectStore('converted-currency', { keyPath: 'id' });

    console.log('Database setup complete');
  };

}
