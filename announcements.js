document.addEventListener("DOMContentLoaded", () => {
  const announcements = [
    "Hackathon event next week!",
    "Documentation updated with new API examples.",
    "Now accepting translations for v1.3."
  ];
  
  const list = document.getElementById("announcement-list");
  announcements.forEach(a => {
    const li = document.createElement("li");
    li.textContent = a;
    list.appendChild(li);
  });
});
