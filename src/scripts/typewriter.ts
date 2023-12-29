export default function typewriter(
	element: string,
	properties: { text: string; speed: number; onFinish?: () => void }
) {
	let index = 0;
	let inTag = false;

	const i = () => {
		if (properties.text[index] === "<") {
			inTag = true;
		}
		if (properties.text[index] === ">") {
			inTag = false;
		}

		if (!inTag) {
			document.querySelector(element)!.innerHTML = properties.text.slice(0, index + 1);
			index++;

			if (index >= properties.text.length) {
				clearInterval(iId);
				if (properties.onFinish === undefined) return;
				properties.onFinish();
			}
		} else {
			index++;
			i();
		}
	};
	let iId = setInterval(i, properties.speed);
}
