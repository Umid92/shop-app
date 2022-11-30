class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }
}

class NewElement {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

class Component {
  constructor(renderId) {
    this.renderId = renderId;
  }
  createNewElement(tag, classesName, atributes) {
    const newEl = document.createElement(tag);
    if (classesName) {
      newEl.className = classesName;
    }
    if (atributes && atributes.length > 0) {
      for (attrb of atributes) {
        newEl.setAttribute(attrb.name, attrb.value);
      }
    }
    document.getElementById(this.renderId).append(newEl);
    return newEl;
  }
}

class ShopingCard extends Component {
  items = [];
  get totalAmount() {
    const sum = this.items.reduce(
      (prevValue, currentValue) => prevValue + currentValue.price,
      0
    );
    return sum;
  }
  addToCard(product) {
    this.items.push(product);
    this.totaloutput.innerHTML = `<h2>Total : $${this.totalAmount}</h2>`;
  }
  render() {
    const card = this.createNewElement("section", "cart");
    card.innerHTML = `
    <h2>Total : $${0}</h2>
    <button>Order Now!!!</button>
    `;
    this.totaloutput = card.querySelector("h2");
  }

  constructor(renderId) {
    super(renderId);
  }
}
class ProductItem extends Component {
  constructor(product) {
    this.product = product;
  }
  addItemHandler() {
    App.addProduct(this.product);
  }
  render() {
    let item = this.createNewElement("li", "product-item");

    item.innerHTML = `
        <div>
        <img src="${this.product.imageUrl}">
        <div class = "product-item__content">
        <h2>${this.product.title}</h2>
        <h3>${this.product.price}</h3>
        <p>${this.product.description}</p>
        <button>Add a new item</button>
        </div>
        </div>
      `;
    const addBtn = item.querySelector("button");
    addBtn.addEventListener("click", this.addItemHandler.bind(this));
    return item;
  }
}

class ProductList {
  products = [
    new Product(
      "A pillow",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-ktzwL0upec5dQ6u1N6DIXnIY4LCoWQapHJ1k0K-3LVs10KpdM7jUQ3iyMnZP18y4to&usqp=CAUhttps://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fpillows%2F&psig=AOvVaw1hzEFHXd3k042DZFrqSfMP&ust=1669811184812000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiphcWx0_sCFQAAAAAdAAAAABAE",
      100,
      "A soft pillow"
    ),
    new Product(
      "A carpet",
      "https://www.vintagecarpets.com/image/cache/catalog/12075-12124/Vintage-carpets-12110-rot-1500x1950.JPG",
      200,
      "A good carpet"
    ),
  ];
  constructor() {}

  render() {
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (let prodItem of this.products) {
      const newItem = new ProductItem(prodItem);
      const item = newItem.render();
      prodList.append(item);
    }
    return prodList;
  }
}

class Shop {
  card;
  render() {
    const prodApp = document.getElementById("app");
    const productList = new ProductList();
    const prodItem = productList.render();
    this.card = new ShopingCard("app");
    this.card.render();
    prodApp.append(prodItem);
  }
}

class App {
  static card;
  static init() {
    const shop = new Shop();
    shop.render();
    this.card = shop.card;
  }

  static addProduct(product) {
    this.card.addToCard(product);
  }
}
App.init();
