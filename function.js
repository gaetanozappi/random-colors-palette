const groupBy = (xs, number, arr = []) =>
    xs.reduce((rv, x, key) => {
        if (arr.length < number) arr.push(x);
        if (arr.length === number || key === xs.length - 1) {
            rv.push(arr);
            arr = [];
        }
        return rv;
    }, []);

const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const [, r, g, b] = result;
    const convert = (a) => parseInt(a, 16);
    return result ? `rgb(${convert(r)}, ${convert(g)}, ${convert(b)})` : null;
};

const hexToHSL = (H) => {
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
        case "rgb":
            return hexToRgb(color);
        case "hsl":
            return hexToHSL(color);
        default:
            return color;
    }
};

const hashCode = (str) =>
    str.split("").reduce((acc, el) => {
        acc = (acc << 5) - acc + el.charCodeAt(0);
        acc &= acc;
        return acc;
    }, 0);

const boundHashCode = (num, range) =>
    typeof range === "number"
        ? range
        : (num % Math.abs(range[1] - range[0])) + range[0];

export { groupBy, hexToRgb, hexToHSL, setFormat, hashCode, boundHashCode };
