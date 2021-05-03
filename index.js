import { colorsList, huesList, shadesList, formatList } from "./defaultValue";
import { groupBy, hexToRgb, hexToHSL, setFormat, hashCode, boundHashCode } from "./function";

const uniqColor = ({
					   text = new Date(),
					   format = "hex",
					   typeObj = true
				   } = {}) => {
	if (text === "") text = new Date();
	if (!Array.isArray(text)) text = [text.toString()];
	return text.map((el) => {
		const hash = Math.abs(hashCode(String(el)));
		const hueR = boundHashCode(hash, [0, 18]);
		const shadeR = boundHashCode(hash, [0, 13]);
		const [hue, shaderS] = Object.entries(colorsList)[hueR];
		let [shade, value] = Object.entries(shaderS)[shadeR];
		value = setFormat(value, format);
		if (typeObj)
			return {
				hue,
				shade,
				value
			};
		return value;
	});
};

const randomColors = ({
						  number = 1,
						  hues = huesList,
						  shades = shadesList,
						  excludeHues = [],
						  excludeShades = [],
						  repeat = false,
						  numberColorGroup = 1,
						  filter = false,
						  format = "hex",
						  typeObj = true
					  } = {}) => {
	if (isNaN(number)) number = 1;
	if (number < 1) {
		return {
			combination: 0,
			error: "The number must be greater than zero."
		};
	}
	const hueNameArray = hues.filter((e) => !excludeHues.includes(e));
	const shadeArray = shades.filter((e) => !excludeShades.includes(e));
	const random = (items) => Math.floor(Math.random() * items.length);
	const randomExclude = (items, exclude) => {
		const numberItems = items.length;
		const arrayNumbers = Array.from(Array(numberItems).keys());
		const filter = arrayNumbers.filter((e) => !exclude.includes(e));
		return filter[random(filter)];
	};

	let cc = colorsList;
	delete cc.common;

	cc = Object.entries(cc)
		.filter((el) => hueNameArray.includes(el[0]))
		.map((el) => ({
			hue: el[0],
			shades: Object.fromEntries(
				Object.entries(el[1]).reduce((acc, ul, key, array) => {
					if (
						shadeArray.includes(ul[0]) &&
						!acc.map((el) => el[1]).includes(ul[1])
					)
						acc.push(ul);
					return acc;
				}, [])
			)
		}));

	const combination = !repeat
		? cc.reduce((acc, el) => (acc += Object.entries(el.shades).length), 0)
		: number;

	if (!repeat && number > combination) {
		console.error(combination);
		return {
			combination,
			error: "The number of colors required exceeds those that are available."
		};
	}

	let arrayFilter = [];
	let color = [...Array(number).keys()].reduce((acc, el) => {
		let hueNumber;
		if (!filter) hueNumber = random(cc);
		else {
			if (arrayFilter.length === cc.length) arrayFilter = [];
			if (arrayFilter.length < cc.length)
				hueNumber = randomExclude(cc, arrayFilter);
			else hueNumber = random(cc);
			arrayFilter.push(hueNumber);
		}

		const hueR = cc[hueNumber];
		const shadeNumber = random(Object.entries(hueR.shades));
		const shadeR = Object.entries(hueR.shades)[shadeNumber];
		if (typeObj)
			acc.push({
				hue: hueR.hue,
				shade: shadeR[0],
				value: setFormat(shadeR[1], format)
			});
		else acc.push(setFormat(shadeR[1], format));
		if (!repeat) {
			delete cc[hueNumber].shades[shadeR[0]];
			if (Object.entries(cc[hueNumber].shades).length === 0)
				cc.splice(hueNumber, 1);
		}
		return acc;
	}, []);

	const numberGroup =
		numberColorGroup > 1 ? Math.ceil(number / numberColorGroup) : 1;
	if (numberColorGroup > 1) color = groupBy(color, numberColorGroup);
	return {
		combination,
		color,
		numberGroup
	};
};

export {
	uniqColor,
	randomColors,
	colorsList,
	huesList,
	shadesList,
	formatList,
	hexToRgb,
	hexToHSL
};
