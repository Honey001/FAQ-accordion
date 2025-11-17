const descriptions = document.querySelectorAll(".description");
const buttons = document.querySelectorAll("button");

descriptions.forEach((desc) => {
	desc.classList.add("hidden");
});

buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		const relatedDescription = btn
			.closest(".description-container")
			?.querySelector(".description");
		if (!relatedDescription) return;

		descriptions.forEach((desc) => {
			if (desc !== relatedDescription) {
				desc.classList.add("hidden");
				desc.setAttribute("aria-hidden", "true");
				const controller = document.querySelector(
					`button[aria-controls="${desc.id}"]`
				);
				if (controller)
					controller.setAttribute("aria-expanded", "false");
				const plusOther = controller?.querySelector(
					'img[alt="icon-plus"]'
				);
				const minusOther = controller?.querySelector(
					'img[alt="icon-minus"]'
				);
				plusOther?.classList.remove("hidden");
				minusOther?.classList.add("hidden");
			}
		});

		relatedDescription.classList.toggle("hidden");
		const nowHidden = relatedDescription.classList.contains("hidden");
		relatedDescription.setAttribute(
			"aria-hidden",
			nowHidden ? "true" : "false"
		);
		btn.setAttribute("aria-expanded", nowHidden ? "false" : "true");

		const plus = btn.querySelector('img[alt="icon-plus"]');
		const minus = btn.querySelector('img[alt="icon-minus"]');
		if (nowHidden) {
			plus?.classList.remove("hidden");
			minus?.classList.add("hidden");
		} else {
			plus?.classList.add("hidden");
			minus?.classList.remove("hidden");
		}
	});
});
