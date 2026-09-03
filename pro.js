let buttons = document.querySelectorAll(".type");
let books = document.querySelector("#BookCntr");

let cart = [];

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        books.innerHTML = "";

        if (button.id == "Fantasy") {
            addBooks([
                {
                    title: "Harry Potter",
                    desc: "By J.K. Rowling - A magical adventure.",
                    image: "Fantasy1.jpg"
                },
                {
                    title: "The Hobbit",
                    desc: "By J.R.R. Tolkien - An exciting fantasy journey.",
                     image: "Fantasy2.jpg"
                }
            ]);
        } else if (button.id == "Historical") {
            addBooks([
                {
                    title: "All the Light We Cannot See",
                    desc: "By Anthony Doerr - WWII historical fiction.",
                   image:"Historical1.jpg"
                },
                {
                    title: "The Book Thief",
                    desc: "By Markus Zusak - Set in Nazi Germany.",
                    image:"Historical2.jpg"
                }
            ]);
        } else if (button.id== "Horror") {
            addBooks([
                {
                    title: "The Shining",
                    desc: "By Stephen King - A terrifying stay at an isolated hotel.",
                    image:"Horror1.jpg"
                },
                {
                    title: "Dracula",
                    desc: "By Bram Stoker - The classic vampire tale.",
                      image:"Horror2.jpg"
                }
            ]);
        } else if (button.id == "Mystery") {
            addBooks([
                {
                    title: "Gone Girl",
                    desc: "By Gillian Flynn - A twisted domestic thriller.",
                    image:"Mystery1.jpg"
                },
                {
                    title: "Sherlock Holmes",
                    desc: "By Arthur Conan Doyle - Classic detective mysteries.",
                    image:"Mystery2.jpg",
                }
            ]);
        } else if (button.id == "Fiction") {
            addBooks([
                {
                    title: "The Alchemist",
                    desc: "By Paulo Coelho - A journey of self-discovery.",
                    image:"Fiction1.jpg"
                },
                {
                    title: "To Kill a Mockingbird",
                    desc: "By Harper Lee - A classic tale of justice.",
                    image:"Fiction2.jpg"
                }
            ]);
        }
    });
});

function addBooks(bookList) {
    bookList.forEach(book => {

        let bookDiv = document.createElement("div");

        let titleEl = document.createElement("h2");
        titleEl.textContent = book.title;

        let imageEl = document.createElement("img");
        imageEl.src = book.image;
        imageEl.width = 150;

        let detailEl = document.createElement("p");
        detailEl.textContent = book.desc;

        let cartBtn = document.createElement("button");
        cartBtn.textContent = "Add to Cart";

        cartBtn.onclick = function () {
            addToCart(book.title);
        };

        bookDiv.append(imageEl, titleEl, detailEl, cartBtn);
        books.appendChild(bookDiv);
    });
}

function addToCart(bookName) {
    cart.push(bookName);
    updateCartUI();
    alert(bookName + " added to cart!");
}

function updateCartUI() {
    let cartList = document.getElementById("cartList");
    let emptyText = document.getElementById("cartEmptyText");

    cartList.innerHTML = "";

    if (cart.length === 0) {
        emptyText.style.display = "block";
        return;
    }

    emptyText.style.display = "none";

    cart.forEach(function (item) {
        let li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Order placed successfully!");
    cart = [];
    updateCartUI();
}


const allBooks = [
    {
        title: "Harry Potter",
        desc: "By J.K. Rowling - A magical adventure.",
        genre: "Fantasy",
        image: "Fantasy1.jpg",

    },
    {
        title: "The Hobbit",
        desc: "By J.R.R. Tolkien - An exciting fantasy journey.",
        genre: "Fantasy",
        image: "Fantasy2.jpg",
    },
    {
        title: "All the Light We Cannot See",
        desc: "By Anthony Doerr - WWII historical fiction.",
        genre: "Historical",
        image:"Historical1.jpg"

    },
    {
        title: "The Book Thief",
        desc: "By Markus Zusak - Set in Nazi Germany.",
        genre: "Historical",
        image:"Historical2.jpg"
    },
    {
        title: "The Shining",
        desc: "By Stephen King - A terrifying stay at an isolated hotel.",
        genre: "Horror",
          image:"Horror1.jpg"
    },
    {
        title: "Dracula",
        desc: "By Bram Stoker - The classic vampire tale.",
        genre: "Horror",
          image:"Horror2.jpg"
    },
    {
        title: "Gone Girl",
        desc: "By Gillian Flynn - A twisted domestic thriller.",
        genre: "Mystery",
          image:"Mystery1.jpg"
    },
    {
        title: "Sherlock Holmes",
        desc: "By Arthur Conan Doyle - Classic detective mysteries.",
        genre: "Mystery",
          image:"Mystery2.jpg"
    },
    {
        title: "The Alchemist",
        desc: "By Paulo Coelho - A journey of self-discovery.",
        genre: "Fiction",
        image:"Fiction1.jpg"
    },
    {
        title: "To Kill a Mockingbird",
        desc: "By Harper Lee - A classic tale of justice.",
        genre: "Fiction",
        image:"Fiction2.jpg"
    }
];

let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
    let query = searchInput.value.toLowerCase().trim();
    books.innerHTML = "";

    if (query === "") {
        return;
    }

    let filteredBooks = allBooks.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.desc.toLowerCase().includes(query)
    );

    if (filteredBooks.length === 0) {
        let noResult = document.createElement("p");
        noResult.textContent = "No books found.";
        books.appendChild(noResult);
        return;
    }

    addBooks(filteredBooks);
});

let toggleCartBtn = document.getElementById("toggleCartBtn");
let cartDiv = document.getElementById("cart");

toggleCartBtn.addEventListener("click", function () {
    if (cartDiv.style.display === "none" || cartDiv.style.display === "") {
        cartDiv.style.display = "block";
        toggleCartBtn.textContent = "Hide Cart";
    } else {
        cartDiv.style.display = "none";
        toggleCartBtn.textContent = "🛒 View Cart";
    }
});
