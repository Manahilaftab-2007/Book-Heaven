let buttons = document.querySelectorAll(".type");
let books = document.querySelector("#BookCntr");

let cart = [];

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        books.innerHTML = ""; 

        if (button.innerText == "Fantasy") {
            addBooks([
                { title: "Harry Potter", desc: "By J.K. Rowling - A magical adventure." },
                { title: "The Hobbit", desc: "By J.R.R. Tolkien - An exciting fantasy journey." }
            ]);
        } else if (button.innerText == "Historical") {
            addBooks([
                { title: "All the Light We Cannot See", desc: "By Anthony Doerr - WWII historical fiction." },
                { title: "The Book Thief", desc: "By Markus Zusak - Set in Nazi Germany." }
            ]);
        } else if (button.innerText == "Horror") {
            addBooks([
                { title: "The Shining", desc: "By Stephen King - A terrifying stay at an isolated hotel." },
                { title: "Dracula", desc: "By Bram Stoker - The classic vampire tale." }
            ]);
        } else if (button.innerText == "Mystery") {
            addBooks([
                { title: "Gone Girl", desc: "By Gillian Flynn - A twisted domestic thriller." },
                { title: "Sherlock Holmes", desc: "By Arthur Conan Doyle - Classic detective mysteries." }
            ]);
        } else if (button.innerText == "Fiction") {
            addBooks([
                { title: "The Alchemist", desc: "By Paulo Coelho - A journey of self-discovery." },
                { title: "To Kill a Mockingbird", desc: "By Harper Lee - A classic tale of justice." }
            ]);
        }
    });
});

function addBooks(bookList) {
    bookList.forEach(book => {
        let titleEl = document.createElement("h2");
        titleEl.textContent = book.title;

        let detailEl = document.createElement("p");
        detailEl.textContent = book.desc;

        let cartBtn = document.createElement("button");
        cartBtn.textContent = "Add to Cart";
        cartBtn.onclick = function() {
            addToCart(book.title);
        };

        books.append(titleEl, detailEl, cartBtn);
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

    cart.forEach(function(item) {
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


// Store all books globally for search access
const allBooks = [
    { title: "Harry Potter", desc: "By J.K. Rowling - A magical adventure.", genre: "Fantasy" },
    { title: "The Hobbit", desc: "By J.R.R. Tolkien - An exciting fantasy journey.", genre: "Fantasy" },
    { title: "All the Light We Cannot See", desc: "By Anthony Doerr - WWII historical fiction.", genre: "Historical" },
    { title: "The Book Thief", desc: "By Markus Zusak - Set in Nazi Germany.", genre: "Historical" },
    { title: "The Shining", desc: "By Stephen King - A terrifying stay at an isolated hotel.", genre: "Horror" },
    { title: "Dracula", desc: "By Bram Stoker - The classic vampire tale.", genre: "Horror" },
    { title: "Gone Girl", desc: "By Gillian Flynn - A twisted domestic thriller.", genre: "Mystery" },
    { title: "Sherlock Holmes", desc: "By Arthur Conan Doyle - Classic detective mysteries.", genre: "Mystery" },
    { title: "The Alchemist", desc: "By Paulo Coelho - A journey of self-discovery.", genre: "Fiction" },
    { title: "To Kill a Mockingbird", desc: "By Harper Lee - A classic tale of justice.", genre: "Fiction" }
];

let searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function() {
    let query = searchInput.value.toLowerCase().trim();
    books.innerHTML = "";

    if (query === "") {
        return; // Don't show anything if search is cleared
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

toggleCartBtn.addEventListener("click", function() {
    if (cartDiv.style.display === "none" || cartDiv.style.display === "") {
        cartDiv.style.display = "block";
        toggleCartBtn.textContent = "Hide Cart";
    } else {
        cartDiv.style.display = "none";
        toggleCartBtn.textContent = "🛒 View Cart";
    }
});