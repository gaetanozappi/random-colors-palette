import { colorsList, huesList, shadesList, formatList } from './defaultValue';

const groupBy = (xs, number, arr = []) =>
	xs.reduce((rv, x, key) => {
		if (arr.length < number) arr.push(x);
		if (arr.length === number || key === xs.length - 1) {
			rv.push(arr);
			arr = [];
		}
		return rv;
	}, []);

const hexToRgb = hex => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	const [, r, g, b] = result;
	const convert = a => parseInt(a, 16);
	return result ? `rgb(${convert(r)}, ${convert(g)}, ${convert(b)})` : null;
};

const hexToHSL = H => {
	let r = 0;
	let g = 0;
	let b = 0;
	if (H.length === 4) {
		r = `0x${H[1]}${H[1]}`;
		g = `0x${H[2]}${H[2]}`;
		b = `0x${H[3]}${H[3]}`;
	} else if (H.length === 7) {
		r = `0x${H[1]}${H[2]}`;
		g = `0x${H[3]}${H[4]}`;
		b = `0x${H[5]}${H[6]}`;
	}
	r /= 255;
	g /= 255;
	b /= 255;
	const cmin = Math.min(r, g, b);
	const cmax = Math.max(r, g, b);
	const delta = cmax - cmin;
	let h = 0;
	let s = 0;
	let l = 0;

	if (delta === 0) h = 0;
	else if (cmax === r) h = ((g - b) / delta) % 6;
	else if (cmax === g) h = (b - r) / delta + 2;
	else h = (r - g) / delta + 4;
	h = Math.round(h * 60);
	if (h < 0) h += 360;
	l = (cmax + cmin) / 2;
	s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
	s = +(s * 100).toFixed(1);
	l = +(l * 100).toFixed(1);
	return `hsl(${h}, ${s}%, ${l}%)`;
};

const setFormat = (color, type) => {
	switch (type) {
		case 'rgb':
			return hexToRgb(color);
		case 'hsl':
			return hexToHSL(color);
		default:
			return color;
	}
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
						  format = 'hex',
						  typeObj = true
					  } = {}) => {
	if (isNaN(number)) number = 1;
	if (number < 1) {
		return {
			combination: 0,
			error: 'The number must be greater than zero.'
		};
	}
	const hueNameArray = hues.filter(e => !excludeHues.includes(e));
	const shadeArray = shades.filter(e => !excludeShades.includes(e));
	const random = items => Math.floor(Math.random() * items.length);
	const randomExclude = (items, exclude) => {
		const numberItems = items.length;
		const arrayNumbers = Array.from(Array(numberItems).keys());
		const filter = arrayNumbers.filter(e => !exclude.includes(e));
		return filter[random(filter)];
	};

	let cc = colorsList;
	delete cc.common;

	cc = Object.entries(cc)
		.filter(el => hueNameArray.includes(el[0]))
		.map(el => ({
			hue: el[0],
			shades: Object.fromEntries(
				Object.entries(el[1]).reduce((acc, ul, key, array) => {
					if (shadeArray.includes(ul[0]) && !acc.map(el => el[1]).includes(ul[1])) acc.push(ul);
					return acc;
				}, [])
			)
		}));

	const combination = !repeat ? cc.reduce((acc, el) => (acc += Object.entries(el.shades).length), 0) : number;

	if (!repeat && number > combination) {
		console.error(combination);
		return {
			combination,
			error: 'The number of colors required exceeds those that are available.'
		};
	}

	let arrayFilter = [];
	let color = [...Array(number).keys()].reduce((acc, el) => {
		let hueNumber;
		if (!filter) hueNumber = random(cc);
		else {
			if (arrayFilter.length === cc.length) arrayFilter = [];
			if (arrayFilter.length < cc.length) hueNumber = randomExclude(cc, arrayFilter);
			else hueNumber = random(cc);
			arrayFilter.push(hueNumber);
		}

		const hueR = cc[hueNumber];
		const shadeNumber = random(Object.entries(hueR.shades));
		const shadeR = Object.entries(hueR.shades)[shadeNumber];
		if(typeObj) acc.push({ hue: hueR.hue, shade: shadeR[0], value: setFormat(shadeR[1], format) });
		else acc.push(setFormat(shadeR[1], format));
		if (!repeat) {
			delete cc[hueNumber].shades[shadeR[0]];
			if (Object.entries(cc[hueNumber].shades).length === 0) cc.splice(hueNumber, 1);
		}
		return acc;
	}, []);

	const numberGroup = numberColorGroup > 1 ? Math.ceil(number / numberColorGroup) : 1;
	if (numberColorGroup > 1) color = groupBy(color, numberColorGroup);
	return {
		combination,
		color,
		numberGroup
	};
};

export { randomColors, colorsList, huesList, shadesList, formatList, hexToRgb, hexToHSL };
