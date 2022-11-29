const productList = {
  products: [
    {
      title: "A pillow",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-ktzwL0upec5dQ6u1N6DIXnIY4LCoWQapHJ1k0K-3LVs10KpdM7jUQ3iyMnZP18y4to&usqp=CAUhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fpillows%2F&psig=AOvVaw1hzEFHXd3k042DZFrqSfMP&ust=1669811184812000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiphcWx0_sCFQAAAAAdAAAAABAE",
      price: 100,
      description: "A soft pillow",
    },
    {
      title: "A carpet",
      imageUrl:
        "https://www.vintagecarpets.com/image/cache/catalog/12075-12124/Vintage-carpets-12110-rot-1500x1950.JPG",
      price: 200,
      description: "A good carpet",
    },
  ],
  render() {
    const prodCard = document.getElementById("app");
    prodCard.className = "product-list";
    const prodList = document.createElement("ul");
    for (let prodItem of this.products) {
      let item = document.createElement("li");
      item.className = "product-item";
      item.innerHTML = `
        <div>
        <img src="${prodItem.imageUrl}">
        <div class = "product-item__content">
        <h2>${prodItem.title}</h2>
        <h3>${prodItem.price}</h3>
        <p>${prodItem.description}</p>
        <button>Add a new item</button>
        </div>
        </div>
      `;
      prodList.append(item);
    }

    prodCard.append(prodList);
  },
};

productList.render();
