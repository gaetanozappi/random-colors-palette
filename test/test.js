import { expect, assert } from 'chai';
import { uniqColor } from '../index.js';

describe('uniqColor', () => {
    it('test', () => {
        assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('Pass string format rgb', () => {
        const result = [{
            "hue": "cyan",
            "shade": "100",
            "value": "rgb(178, 235, 242)"
        }]
        expect(
            uniqColor({
            text: "Hello world!",
            format: "rgb"
            })
        ).to.deep.equal(result);
    });

    it('Pass array string format hex', () => {
        const result = [
            {
                "hue": "orange",
                "shade": "600",
                "value": "#fb8c00"
            },
            {
                "hue": "lightBlue",
                "shade": "A400",
                "value": "#00b0ff"
            },
            {
                "hue": "deepOrange",
                "shade": "700",
                "value": "#e64a19"
            }
        ]
        expect(
            uniqColor({ text: ["Hello", "wold", "!"], format: "hex", textContrast: true })
        ).to.deep.equal(result);
    });
});
