
  var link = document.querySelector(".btn-feedback");
  var popup = document.querySelector(".modal-content");
  var overlay = document.querySelector(".modal-overlay");
  var close = popup.querySelector(".modal-content-close");
  var form = popup.querySelector("form");
  var login = popup.querySelector("[name=username]");
  var password = popup.querySelector("[name=email]");
  var storage = localStorage.getItem("login");
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.add("modal-overlay-show");
    popup.classList.add("modal-content-show");
    if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
});
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("modal-overlay-show");
});
  form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
      evt.preventDefault();
      popup.classList.add("modal-error");
    } else {
      localStorage.setItem("login", login.value);
    }
});
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
        popup.classList.remove("modal-overlay");
      }
} });
