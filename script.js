const navigation = document.getElementById("navigation");
const nav = document.querySelector("nav");
navigation.addEventListener("click", () => {
	nav.classList.toggle("visible");
});

// Ако кликането върху страницата, е върху елемент,
// който не се съдържа в менюто (nav) или в бутона (navigation),
// когато nav има клас visible, да се скрива dropdown менюто.

document.body.addEventListener("click", (e) => {
	if (!nav.contains(e.target) && !navigation.contains(e.target) && nav.classList.contains("visible")) {
		nav.classList.remove("visible");
	}
});
