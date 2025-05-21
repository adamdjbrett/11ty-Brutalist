document.addEventListener("DOMContentLoaded", function () {
	const sections = document.querySelectorAll(".section");

	// Observer: Untuk setiap .section di halaman
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry, idx) => {
				const wrapper = entry.target.querySelector(".wrapper");
				if (entry.isIntersecting) {
					wrapper.classList.add("active");
				} else {
					wrapper.classList.remove("active");
				}
			});
		},
		{ threshold: 0.3 }
	);

	sections.forEach((section, idx) => {
		observer.observe(section);
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const hero = document.querySelector(".hero");
	// Timeout agar animasi lebih smooth setelah halaman siap
	setTimeout(() => {
		hero.classList.add("show");
	}, 300); // delay 300ms, boleh diubah sesuai selera
});

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("tahun").textContent = new Date().getFullYear();
});
