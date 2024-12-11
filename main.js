const userProfile = document.querySelector(".profile");

const userName = document.createElement("h2");

const userDescription = document.createElement("p");

userName.textContent = prompt("Введите ваше имя");

userDescription.textContent = prompt("Введите кратку информацию о себе");

userProfile.append(userName);

userProfile.append(userDescription);




// let userColor = prompt("введите цвет");

// // box.classList.add(userColor);

// // const newBox = document.createElement("div");

// // newBox.textContent = "New Box from Js";

// // newBox.classList.add("red")

// // // const body = document.querySelector("Body");
// // const body = document.body;

// // console.log(newBox);

// // body.appendChild(newBox);
// // // body.append() - универсальнее?

// const container = document.querySelector(".container");

// for (let i = 0; i < 10; i++) {
//     const newElem = document.createElement("div");

//     newElem.textContent = i + 1;
//     newElem.classList.add("box");

//     container.append(newElem);