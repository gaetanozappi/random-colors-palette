# Javascript: random-colors-palette

[![GitHub package version](https://img.shields.io/github/package-json/v/gaetanozappi/random-colors-palette.svg?style=flat&colorB=2b7cff)](https://github.com/gaetanozappi/random-colors-palette)
[![github home](http://img.shields.io/npm/v/random-colors-palette.svg?style=flat)](https://www.npmjs.com/package/random-colors-palette)
[![github home](https://img.shields.io/badge/gaetanozappi-random--colors--palette-blue.svg?style=flat-square)](https://github.com/gaetanozappi/random-colors-palette)
[![npm](https://img.shields.io/npm/dm/random-colors-palette.svg?style=flat&colorB=007ec6)](https://www.npmjs.com/package/random-colors-palette)

[![github issues](https://img.shields.io/github/issues/gaetanozappi/random-colors-palette.svg?style=flat)](https://github.com/gaetanozappi/random-colors-palette/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/gaetanozappi/random-colors-palette.svg?style=flat&colorB=44cc11)](https://github.com/gaetanozappi/random-colors-palette/issues?q=is%3Aissue+is%3Aclosed)
[![Issue Stats](https://img.shields.io/issuestats/i/github/gaetanozappi/random-colors-palette.svg?style=flat&colorB=44cc11)](http://github.com/gaetanozappi/random-colors-palette/issues)
[![github license](https://img.shields.io/github/license/gaetanozappi/random-colors-palette.svg)]()


-   [Usage](#-usage)
-   [License](#-license)

## 💻 Usage

```javascript
import { randomColors, colorsList, huesList, shadesList, formatList } from 'random-colors-palette';

randomColors({
 number: 3,
 hues: ['red', 'blue', 'lightBlue', 'cyan'],
 shades: ['100', '300', '400', '500', '700'],
 excludeHues: ['red'],
 excludeShades: ['400'],
 repeat: false,
 numberColorGroup: 1,
 format: 'hex',
 typeObj: true
});

/*
{
    "combination": 12,
    "color": [
        {
            "hue": "cyan",
            "shade": "300",
            "value": "#4dd0e1"
        },
        {
            "hue": "blue",
            "shade": "100",
            "value": "#bbdefb"
        },
        {
            "hue": "lightBlue",
            "shade": "300",
            "value": "#4fc3f7"
        }
    ],
    "numberGroup": 1
}
*/

randomColors({
 number: 3,
 hues: ['red', 'blue', 'lightBlue', 'cyan'],
 shades: ['100', '300', '400', '500', '700'],
 excludeHues: ['red'],
 excludeShades: ['400'],
 repeat: false,
 numberColorGroup: 2,
 format: 'hls',
 typeObj: true
});

/*
{
    "combination": 12,
    "color": [
        [
            {
                "hue": "cyan",
                "shade": "100",
                "value": "hsl(187, 71.1%, 82.4%)"
            },
            {
                "hue": "lightBlue",
                "shade": "700",
                "value": "hsl(201, 98.1%, 41.4%)"
            }
        ],
        [
            {
                "hue": "lightBlue",
                "shade": "300",
                "value": "hsl(199, 91.3%, 63.9%)"
            }
        ]
    ],
    "numberGroup": 2
}
*/

randomColors({
 number: 3,
 hues: ['red', 'blue', 'lightBlue', 'cyan'],
 shades: ['100', '300', '400', '500', '700'],
 excludeHues: ['red'],
 excludeShades: ['400'],
 repeat: false,
 numberColorGroup: 1,
 format: 'rgb',
 typeObj: false
});

/*
{
    "combination": 12,
    "color": [
        "rgb(77, 208, 225)",
        "rgb(179, 229, 252)",
        "rgb(187, 222, 251)"
    ],
    "numberGroup": 1
}
*/


/* huesList 
[
    'red',
    'pink',
    'purple',
    'deepPurple',
    'indigo',
    'blue',
    'lightBlue',
    'cyan',
    'teal',
    'green',
    'lightGreen',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deepOrange',
    'brown',
    'grey',
    'blueGrey'
]
*/

/* shadesList
[
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'A100',
    'A200',
    'A400',
    'A700'
]
*/

/* formatList 
['hex', 'rgb', 'hsl']
*/
```

## 💡 Props

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `number`       | `number`   | `1`   |Numbers of colors to generate.
| `hues`      | `array`   | `huesList`  | 
| `shades`       | `array`   | `shadesList`   |
| `excludeHues`       | `array`   | `[]`   |
| `excludeShades`     | `array`   | `[]` |
| `repeat`       | `bool`   | `false`   |
| `numberColorGroup`       | `number`   | `1`   |
| `format`       | `string`   | `hex`   |
| `typeObj`       | `bool`   | `true`   |

## 📜 License
This library is provided under the Apache License.
