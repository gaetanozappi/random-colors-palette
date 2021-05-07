const groupBy = (xs, number, arr = []) =>
    xs.reduce((rv, x, key) => {
        if (arr.length < number) arr.push(x);
        if (arr.length === number || key === xs.length - 1) {
            rv.push(arr);
            arr = [];
        }
        return rv;
    }, []);

const hexToRgb = (hex, type = "string") => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return null;
    result.shift();
    const [r, g, b] = result.map((el) => parseInt(el, 16));
    switch (type) {
        case "obj":
            return { r, g, b };
        case "array":
            return [r, g, b];
        default:
            return `rgb(${r}, ${g}, ${b})`;
    }
};

const getContrastYIQ = (hex) => {
    const { r, g, b } = hexToRgb(hex, "obj");
    return (r * 299 + g * 587 + b * 114) / 1000 >= 128 ? "#000000" : "#FFFFFF";
};

const hexToHSL = (hex, type = "string") => {
    let r = 0;
    let g = 0;
    let b = 0;
    if (hex.length === 4) {
        r = `0x${hex[1]}${hex[1]}`;
        g = `0x${hex[2]}${hex[2]}`;
        b = `0x${hex[3]}${hex[3]}`;
    } else if (hex.length === 7) {
        r = `0x${hex[1]}${hex[2]}`;
        g = `0x${hex[3]}${hex[4]}`;
        b = `0x${hex[5]}${hex[6]}`;
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
    switch (type) {
        case "obj":
            return { h, s, l };
        case "array":
            return [h, s, l];
        default:
            return `hsl(${h}, ${s}%, ${l}%)`;
    }
};

const setFormat = (hex, type) => {
    switch (type) {
        case "rgb":
            return hexToRgb(hex);
        case "rgb-obj":
            return hexToRgb(hex, "obj");
        case "rgb-array":
            return hexToRgb(hex, "array");
        case "hsl":
            return hexToHSL(hex);
        case "hsl-obj":
            return hexToHSL(hex, "obj");
        case "hsl-array":
            return hexToHSL(hex, "array");
        default:
            return hex;
    }
};

const hashCode = (str) =>
    str.split("").reduce((acc, el) => {
        acc = (acc << 5) - acc + el.charCodeAt(0);
        return acc & acc;
    }, 0);

const boundHashCode = (num, range) =>
    typeof range === "number"
        ? range
        : (num % Math.abs(range[1] - range[0])) + range[0];

export {
    groupBy,
    hexToRgb,
    hexToHSL,
    setFormat,
    hashCode,
    boundHashCode,
    getContrastYIQ
};
