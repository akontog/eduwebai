async function loadPartial(id, file) {
  const res = await fetch(file);
  document.getElementById(id).innerHTML = await res.text();
}

window.addEventListener("DOMContentLoaded", () => {
  loadPartial("header", "/eduwebai/partials/header.html");
  loadPartial("nav", "/eduwebai/partials/nav.html");
  loadPartial("footer", "/eduwebai/partials/footer.html");
});
