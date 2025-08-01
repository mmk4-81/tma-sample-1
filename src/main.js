import "./app.css"

window.Telegram.WebApp.setHeaderColor("#ff0000");
window.Telegram.WebApp.setBackgroundColor("#0000ff");

const data = window.Telegram.WebApp.initDataUnsafe;

document.querySelector('p').innerText = JSON.stringify(data);