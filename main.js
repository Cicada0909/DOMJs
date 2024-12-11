const userProfile = document.querySelector(".profile");

const userName = document.createElement("h2");

const userDescription = document.createElement("p");

userName.textContent = prompt("Введите ваше имя");

userDescription.textContent = prompt("Введите кратку информацию о себе");

userProfile.append(userName);

userProfile.append(userDescription);