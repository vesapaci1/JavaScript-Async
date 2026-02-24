console.log("Start");

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

fetchUserPromise()
  .then(user => {
    console.log("User:", user);
  })
  .catch(error => {
    console.log("Error:", error);
  });

console.log("End");


function fetchOrdersPromise(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Order1", "Order2"]);
        }, 1500);
    });
}

fetchOrdersPromise()
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