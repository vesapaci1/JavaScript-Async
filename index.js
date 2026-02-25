console.log("Start");

// 1. CALLBACKS
function fetchUserCallback(callback) {
  setTimeout(() => {
    const success = true;

    if (success) {
      callback(null, { id: 1, name: "Vesa" });
    } else {
      callback("Failed to fetch user", null);
    }
  }, 2000);
}

function fetchOrdersCallback(userId, callback) {
  setTimeout(() => {
    callback(null, ["Order1", "Order2"]);
  }, 1500);
}

function loadDataCallbacks() {
  fetchUserCallback((err, user) => {
    if (err) {
      console.log("Error:", err);
      return;
    }
    console.log("User:", user);

    fetchOrdersCallback(user.id, (err, orders) => {
      if (err) {
        console.log("Error:", err);
        return;
      }
      console.log("Orders:", orders);
    });
  });
}

// loadDataCallbacks(); // Uncomment to run callbacks version

//2. PROMISES
function fetchUserPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({ id: 1, name: "Vesa" });
      } else {
        reject("Failed to fetch user");
      }
    }, 2000);
  });
}

function fetchOrdersPromise(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Order1", "Order2"]);
    }, 1500);
  });
}

function loadDataPromises() {
  fetchUserPromise()
    .then((user) => {
      console.log("User:", user);
      return fetchOrdersPromise(user.id);
    })
    .then((orders) => {
      console.log("Orders:", orders);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

// loadDataPromises(); // Uncomment to run Promises version

// 3. ASYNC/AWAIT 
async function loadData() {
  try {
    const user = await fetchUserPromise();
    console.log("User:", user);

    const orders = await fetchOrdersPromise(user.id);
    console.log("Orders:", orders);
  } catch (error) {
    console.log("Error:", error);
  }
}

loadData();

console.log("End");