function getFormValue(e) {
  e.preventDefault();
  let itemName = e.target.itemName.value;
  let description = e.target.description.value;
  let price = e.target.price.value;
  let quantity = e.target.quantity.value;
  let myObj = {
    itemName: itemName,
    description: description,
    price: price,
    quantity: quantity,
  };
  axios
    .post(
      "https://crudcrud.com/api/9f73ad05cb9843dc93a8aa30f246650a/items",
      myObj
    )
    .then((response) => {
      console.log(response.data);
      showUserOnScreen(myObj);
      clearFormInput();
    })
    .catch((err) => console.log(err));
}

function showUserOnScreen(myObj) {
  let ulist = document.querySelector(".list-group");
  let li = document.createElement("li");
  li.className = "list-group-item mt-3 d-flex";
  let buy1 = document.createElement("button");
  let buy2 = document.createElement("button");
  let buy3 = document.createElement("button");
  buy1.innerText = "Buy1";
  buy2.innerText = "Buy2";
  buy3.innerText = "Buy3";
  buy1.className = "btn btn-primary btn-sm w-auto me-2 ms-2";
  buy2.className = "btn btn-primary btn-sm w-auto me-2";
  buy3.className = "btn btn-primary btn-sm w-auto";
  li.appendChild(
    document.createTextNode(
      `${myObj.itemName} - ${myObj.description} - ₹${myObj.price} - ${myObj.quantity}Pc `
    )
  );
  li.appendChild(buy1);
  li.appendChild(buy2);
  li.appendChild(buy3);
  ulist.appendChild(li);
  buy1.onclick = () => {
    myObj.quantity--;
    axios
      .put(
        `https://crudcrud.com/api/9f73ad05cb9843dc93a8aa30f246650a/items/${myObj._id}`,
        {
          itemName: myObj.itemName,
          description: myObj.description,
          price: myObj.price,
          quantity: myObj.quantity,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };
  buy2.onclick = () => {
    myObj.quantity -= 2;
    axios
      .put(
        `https://crudcrud.com/api/9f73ad05cb9843dc93a8aa30f246650a/items/${myObj._id}`,
        {
          itemName: myObj.itemName,
          description: myObj.description,
          price: myObj.price,
          quantity: myObj.quantity,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };
  buy3.onclick = () => {
    myObj.quantity -= 3;
    axios
      .put(
        `https://crudcrud.com/api/9f73ad05cb9843dc93a8aa30f246650a/items/${myObj._id}`,
        {
          itemName: myObj.itemName,
          description: myObj.description,
          price: myObj.price,
          quantity: myObj.quantity,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };
}

function clearFormInput() {
  document.getElementById("itemName").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/9f73ad05cb9843dc93a8aa30f246650a/items")
    .then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        showUserOnScreen(response.data[i]);
      }
      console.log(response.data);
    })
    .catch((err) => console.error(err));
});
