document.querySelectorAll(".accordion-header").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isOpen = content.style.display === "block";

    // κλείνει όλα (προαιρετικό – μπορείς να το αφαιρέσεις)
    document.querySelectorAll(".accordion-content").forEach(c => {
      c.style.display = "none";
    });
    document.querySelectorAll(".accordion-header").forEach(b => {
      b.textContent = b.textContent.replace("▼", "▶");
    });

    if (!isOpen) {
      content.style.display = "block";
      button.textContent = button.textContent.replace("▶", "▼");
    }
  });
});
