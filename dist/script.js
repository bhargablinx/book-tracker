const allBooks = [];

function Book(title, author, pages, readStatus = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addToArray(data) {
  allBooks.push(data);
}

let b1 = new Book("Atomic Habits", "James Clear", 290);
let b2 = new Book("Eat That Frog", "Brian Tracy", 150);
let b3 = new Book("A Song of Ice & Fire", "G.R.R Martin", 1480);
let b4 = new Book("The Hobbit", "J.R.R. Tolkien", 295);
addToArray(b1);
addToArray(b2);
addToArray(b3);
addToArray(b4);

function createCard(obj) {
  const bookContainer = document.createElement("div");
  bookContainer.classList.add(
    "border-2",
    "border-slate-400",
    "text-slate-800",
    "p-4",
    "w-72",
    "rounded-xl",
    "shadow-xl",
    "w-full",
    "sm:w-72"
  );

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("text-xl", "font-medium");
  titleDiv.innerText = obj.title;
  bookContainer.appendChild(titleDiv);

  const authorPageDiv = document.createElement("div");
  authorPageDiv.classList.add("flex", "justify-between", "my-3");
  const authorDiv = document.createElement("div");
  authorDiv.innerText = `by ${obj.author}`;
  authorPageDiv.appendChild(authorDiv);
  const pageDiv = document.createElement("div");
  pageDiv.classList.add("text-[12px]", "text-slate-700");
  pageDiv.innerText = `${obj.pages} pages`;
  authorPageDiv.appendChild(pageDiv);
  bookContainer.appendChild(authorPageDiv);

  const btnDiv = document.createElement("div");
  btnDiv.classList.add("flex");
  const readBtn = document.createElement("div");
  readBtn.classList.add(
    "read-btn",
    "mr-3",
    "bg-yellow-300",
    "p-1",
    "px-2",
    "rounded-lg",
    "text-sm",
    "cursor-pointer"
  );
  readBtn.innerText = `Not Read Yet`;
  btnDiv.appendChild(readBtn);
  const deleteBtn = document.createElement("div");
  deleteBtn.classList.add(
    "delete-btn",
    "mr-3",
    "bg-red-300",
    "p-1",
    "px-2",
    "rounded-lg",
    "text-sm",
    "cursor-pointer"
  );
  deleteBtn.innerText = `Delete`;
  btnDiv.appendChild(deleteBtn);
  bookContainer.appendChild(btnDiv);

  document.querySelector(".allBookContainer").appendChild(bookContainer);
}

if (allBooks.length != 0) {
  document.querySelector(".allBookContainer").innerHTML = "";
  allBooks.forEach((item) => {
    createCard(item);
  });
}

function indexOfBook(bookName) {
  let indexToReturn = null;
  allBooks.forEach((item) => {
    if (item.title == bookName) {
      const index = parseInt(allBooks.indexOf(item));
      indexToReturn = index;
    }
  });
  return indexToReturn;
}

function toggleReadBtn(btn, readStatus) {
  if (readStatus) {
    btn.classList.remove("bg-yellow-300");
    btn.classList.add("bg-green-300");
    btn.innerText = `Read`;
  } else {
    btn.classList.add("bg-yellow-300");
    btn.classList.remove("bg-green-300");
    btn.innerText = `Not Read Yet`;
  }
}

document.querySelectorAll(".read-btn").forEach((item) => {
  item.addEventListener("click", () => {
    const bookName = item.parentElement.parentElement.childNodes[0].textContent;
    const index = indexOfBook(bookName);
    allBooks[index].readStatus =
      allBooks[index].readStatus == false ? true : false;
    toggleReadBtn(item, allBooks[index].readStatus);
    // console.log(allBooks[index].readStatus);
  });
});
