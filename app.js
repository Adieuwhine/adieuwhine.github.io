let tg = window.Telegram.WebApp;
let buy = document.GetElementById("buy");
let order = document.GetElementById("order");

buy.addEventListener("click", () => {
  document.getElementById("main").style.display = "none";
  document.getElementById("form").style.display = "block";
  document.getElementById("user_name").value = tg.initDataUnsafe.first_name + " " + tg.initDataUnsafe.last_name;
});

order.addEventListener("click", () => {
  tg.close();
});




