import React, { useState, useEffect } from "react";
import {
    TextField,
    makeStyles,
    Chip,
    FormControlLabel,
    Checkbox,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { className } from "../function";
import "../styles/main.css";

import {
    uniqColor,
    getContrastYIQ,
    formatList
} from "../random-colors-palette";
import { HighlightOff } from "@material-ui/icons";

export default function UniqColor({ darkState }) {
    const useStyles = makeStyles((theme) => ({
        title: {
            color: darkState ? "#ffffff" : "#343a40",
            textShadow: `3px 3px 2px ${
                darkState ? "rgba(0, 0, 0, 1)" : "rgba(150, 150, 150, 1)"
            }`
        }
    }));
    const classes = useStyles();
    const [state, setState] = useState({
        uniqRandom: [],
        text: ["random", "colors", "palette"],
        format: "hex",
        textContrast: true,
        typeObj: false
    });
    const { uniqRandom, text, textContrast, format, typeObj } = state;

    useEffect(() => {
        console.log("tt", typeObj);
        const uniqRandom = uniqColor({
            text,
            format,
            textContrast,
            typeObj
        });

        setState((prev) => ({
            ...prev,
            uniqRandom
        }));
    }, [text, format, textContrast, typeObj]);

    const colorView = ({
                           hue = "",
                           shade = "",
                           value,
                           textContrast = "#000",
                           key
                       }) => (
        <div
            key={`${hue}-${shade}-${key}`}
            style={{
                backgroundColor: value,
                padding: 8,
                borderRadius: 4,
                marginBottom: 4,
                color: textContrast
            }}
        >
            {hue}
            <div style={{ textAlign: "left" }}>
                {shade}{" "}
                <span
                    style={{
                        ...(hue && { float: "right" })
                    }}
                >
          {value}
        </span>
            </div>
        </div>
    );

    console.log(state);

    return (
        <>
            <h1 className={className(classes.title, "text-6xl font-bold hp")}>
                uniq
                <span className="text-primary">Color</span>
            </h1>
            <div
                style={{
                    marginBottom: 12
                }}
            >
                <Autocomplete
                    freeSolo
                    multiple
                    id="text-exclude-outlined"
                    options={[]}
                    getOptionLabel={(option) => option}
                    defaultValue={text}
                    filterSelectedOptions
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip
                                label={option}
                                size="small"
                                {...getTagProps({ index })}
                                style={{
                                    backgroundColor: uniqRandom[index]?.value || uniqRandom[index],
                                    color: uniqRandom[index]?.textContrast //|| getContrastYIQ(uniqRandom[index]),
                                }}
                                deleteIcon={
                                    <HighlightOff
                                        style={{
                                            color: uniqRandom[index]?.textContrast
                                        }}
                                    />
                                }
                            />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label="Text"
                            placeholder="Text"
                            size="small"
                            fullWidth
                        />
                    )}
                    onChange={(event, newValue) =>
                        setState((prev) => ({
                            ...prev,
                            text: newValue
                        }))
                    }
                />
            </div>

            <div
                style={{
                    marginBottom: 12
                }}
            >
                <FormControl
                    variant="outlined"
                    size="small"
                    fullWidth
                    className={classes.formControl}
                >
                    <InputLabel id="demo-simple-select-outlined-label">Format</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={format}
                        onChange={({ target: { value } }) =>
                            setState((prev) => ({
                                ...prev,
                                format: value
                            }))
                        }
                        label="Format"
                    >
                        {formatList.map((el) => (
                            <MenuItem key={el} value={el}>
                                {el}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            {typeObj && (
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={textContrast}
                            onChange={({ target: { checked } }) =>
                                setState((prev) => ({
                                    ...prev,
                                    textContrast: checked
                                }))
                            }
                            name="textContrast"
                            color="primary"
                        />
                    }
                    label="Text Contrast"
                />
            )}

            <div
                style={{
                    marginBottom: 12
                }}
            >
                <FormControl
                    variant="outlined"
                    size="small"
                    fullWidth
                    className={classes.formControl}
                >
                    <InputLabel id="demo-simple-select-outlined-label">Format</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={typeObj}
                        onChange={({ target: { value } }) =>
                            setState((prev) => ({
                                ...prev,
                                typeObj: value
                            }))
                        }
                        label="Format"
                    >
                        <MenuItem value={true}>Type object</MenuItem>
                        <MenuItem value={false}>Type not object</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div
                style={{
                    marginBottom: 12
                }}
            >
                {uniqRandom.map((el, key) => {
                    const { hue, shade, value, textContrast } = el;
                    return colorView({
                        ...(hue && { hue, shade, value, textContrast }),
                        ...(!hue && { value: el }),
                        key
                    });
                })}
            </div>
        </>
    );
}
