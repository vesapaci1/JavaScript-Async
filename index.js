console.log("Start");

function fetchUser(callback) {
    setTimeout(() => {
        const user = {id: 1, name: "Vesa"};
        callback(user);
    }, 2000);
}

fetchUser(function (user) {
    console.log("User received:", user);
});

console.log("End");


function fetchOrders(userId, callback) {
  setTimeout(() => {
    const orders = ["Order1", "Order2"];
    callback(orders);
  }, 1500);
}

fetchUser(function (user) {
  fetchOrders(user.id, function (orders) {
    console.log("Orders:", orders);
  });
});