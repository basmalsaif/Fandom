document.addEventListener("DOMContentLoaded", function () {
    let books = [
        { title: "Harry Potter and the Philosophers Stone", cover: "Harry Potter and the Philosophers Stone.jpg" },
        { title: "Harry Potter and the Chamber of Secrets", cover: "Harry Potter and the Chamber of Secrets.jpg" },
        { title: "Harry Potter and the Prisoner of Azkaban", cover: "Harry Potter and the Prisoner of Azkaban.jpg" },
        { title: "Harry Potter and the Goblet of Fire", cover: "Harry Potter And The Goblet of Fire.jpg" },
        { title: "Harry Potter and the Order of the Phoenix", cover: "Harry Potter and the Order of the Phoenix.jpg" },
        { title: "Harry Potter and the Half-Blood Prince", cover: "Harry Potter and the Half-Blood Prince.jpg" },
        { title: "Harry Potter and the Deathly Hallows", cover: "Harry Potter and the Deathly Hallows.jpg" }
    ];

    let booksContainer = document.getElementById("books");

    if (!booksContainer) {
        console.error("Books container not found!");
        return;
    }

    books.forEach(book => {
        let bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        let imgElement = document.createElement("img");
        imgElement.src = book.cover;
        imgElement.alt = book.title;
        imgElement.onerror = function() {
            console.error("Image not found:", this.src);
        };

        let titleElement = document.createElement("h3");
        titleElement.textContent = book.title;

        let authorElement = document.createElement("p");
        authorElement.textContent = "by J.K. Rowling";

        let buttonElement = document.createElement("button");
        buttonElement.textContent = "Add to Cart";

        bookDiv.appendChild(imgElement);
        bookDiv.appendChild(titleElement);
        bookDiv.appendChild(authorElement);
        bookDiv.appendChild(buttonElement);

        booksContainer.appendChild(bookDiv);
    });
});
