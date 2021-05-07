import React, { useState, useEffect } from "react";
import {
    TextField,
    FormControlLabel,
    Checkbox,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    makeStyles,
    Chip
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { Refresh, ExpandMore, HighlightOff } from "@material-ui/icons";
import { className } from "../function";
import "../styles/main.css";

import {
    randomColor,
    getContrastYIQ,
    colorsList,
    huesList,
    shadesList,
    formatList,
} from "../random-colors-palette";

export default function RandomColors({ darkState }) {
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
        number: 12,
        colors: [],
        hues: ["red", "blue", "lightBlue", "cyan"],
        excludeHues: ["red"],
        shades: ["100", "300", "400", "500", "700"],
        excludeShades: ["400"],
        numberColorGroup: 1,
        repeat: false,
        format: "hex",
        textContrast: true
    });

    const {
        number,
        colors,
        hues,
        shades,
        excludeHues,
        excludeShades,
        numberColorGroup,
        repeat,
        format,
        textContrast
    } = state;

    const refresh = () => {
        const colors = randomColor({
            number,
            hues,
            shades,
            excludeHues,
            excludeShades,
            numberColorGroup,
            repeat,
            format,
            textContrast
        });

        setState((prev) => ({
            ...prev,
            colors
        }));
    };

    useEffect(() => {
        refresh();
    }, [
        number,
        hues,
        shades,
        excludeHues,
        excludeShades,
        numberColorGroup,
        repeat,
        textContrast,
        format
    ]);

    const colorView = ({ hue, shade, value, textContrast, key }) => (
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
                {shade} <span style={{ float: "right" }}>{value}</span>
            </div>
        </div>
    );

    return (
        <>
            <h1 className={className(classes.title, "text-6xl font-bold hp")}>
                random
                <span className="text-primary">
          Color({colors?.combination})
        </span>
            </h1>

            <div
                style={{
                    marginBottom: 12
                }}
            >
                <TextField
                    id="number"
                    label="Number"
                    placeholder="Number"
                    variant="outlined"
                    onChange={({ target: { value } }) =>
                        setState((prev) => ({
                            ...prev,
                            number: parseInt(value)
                        }))
                    }
                    value={number || ""}
                    size="small"
                    fullWidth
                />
            </div>

            <div
                style={{
                    marginBottom: 12
                }}
            >
                <Autocomplete
                    multiple
                    id="hues-outlined"
                    options={huesList}
                    getOptionLabel={(option) => option}
                    defaultValue={hues}
                    filterSelectedOptions
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip
                                label={option}
                                size="small"
                                {...getTagProps({ index })}
                                style={{
                                    backgroundColor: colorsList[option][500],
                                    color: getContrastYIQ(colorsList[option][500])
                                }}
                                deleteIcon={
                                    <HighlightOff
                                        style={{
                                            color: getContrastYIQ(colorsList[option][500])
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
                            label="Hues"
                            placeholder="Hues"
                            size="small"
                            fullWidth
                        />
                    )}
                    onChange={(event, newValue) =>
                        setState((prev) => ({
                            ...prev,
                            hues: newValue
                        }))
                    }
                />
            </div>

            <div
                style={{
                    marginBottom: 12
                }}
            >
                <Autocomplete
                    multiple
                    id="hues-exclude-outlined"
                    options={huesList}
                    getOptionLabel={(option) => option}
                    defaultValue={excludeHues}
                    filterSelectedOptions
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip
                                label={option}
                                size="small"
                                {...getTagProps({ index })}
                                style={{
                                    backgroundColor: colorsList[option][500],
                                    color: getContrastYIQ(colorsList[option][500])
                                }}
                                deleteIcon={
                                    <HighlightOff
                                        style={{
                                            color: getContrastYIQ(colorsList[option][500])
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
                            label="Exclude Hues"
                            placeholder="Exclude Hues"
                            size="small"
                            fullWidth
                        />
                    )}
                    onChange={(event, newValue) =>
                        setState((prev) => ({
                            ...prev,
                            excludeHues: newValue
                        }))
                    }
                />
            </div>

            <div
                style={{
                    marginBottom: 12
                }}
            >
                <Autocomplete
                    multiple
                    id="shades-outlined"
                    options={shadesList}
                    getOptionLabel={(option) => option}
                    defaultValue={shades}
                    filterSelectedOptions
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip
                                label={option}
                                size="small"
                                {...getTagProps({ index })}
                                style={{
                                    backgroundColor: colorsList["blue"][option],
                                    color: getContrastYIQ(colorsList["blue"][option])
                                }}
                                deleteIcon={
                                    <HighlightOff
                                        style={{
                                            color: getContrastYIQ(colorsList["blue"][500])
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
                            label="Shades"
                            placeholder="Shades"
                            size="small"
                            fullWidth
                        />
                    )}
                    onChange={(event, newValue) =>
                        setState((prev) => ({
                            ...prev,
                            shades: newValue
                        }))
                    }
                />
            </div>

            <div
                style={{
                    marginBottom: 12
                }}
            >
                <Autocomplete
                    multiple
                    id="shades-exclude-outlined"
                    options={shadesList}
                    getOptionLabel={(option) => option}
                    defaultValue={excludeShades}
                    filterSelectedOptions
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip
                                label={option}
                                size="small"
                                {...getTagProps({ index })}
                                style={{
                                    backgroundColor: colorsList["blue"][option],
                                    color: getContrastYIQ(colorsList["blue"][option])
                                }}
                                deleteIcon={
                                    <HighlightOff
                                        style={{
                                            color: getContrastYIQ(colorsList["blue"][500])
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
                            label="Exclude Shades"
                            placeholder="Exclude Shades"
                            size="small"
                            fullWidth
                        />
                    )}
                    onChange={(event, newValue) =>
                        setState((prev) => ({
                            ...prev,
                            excludeShades: newValue
                        }))
                    }
                />
            </div>

            <div
                style={{
                    marginBottom: 12
                }}
            >
                <TextField
                    id="number-colors-group"
                    label="Number of colors for each group"
                    placeholder="Number of colors for each group"
                    variant="outlined"
                    onChange={({ target: { value } }) =>
                        setState((prev) => ({
                            ...prev,
                            numberColorGroup: parseInt(value)
                        }))
                    }
                    value={numberColorGroup || ""}
                    size="small"
                    fullWidth
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

            <FormControlLabel
                control={
                    <Checkbox
                        checked={repeat}
                        onChange={({ target: { checked } }) =>
                            setState((prev) => ({
                                ...prev,
                                repeat: checked
                            }))
                        }
                        name="repeat"
                        color="primary"
                    />
                }
                label="Repeat"
            />

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

            <IconButton aria-label="delete" onClick={refresh}>
                <Refresh style={{ cursor: "pointer" }} />
            </IconButton>

            {colors?.error && (
                <div
                    style={{
                        marginBottom: 12
                    }}
                >
                    There is a problem, the number of possible combinations is{" "}
                    {colors?.combination}
                </div>
            )}

            {colors?.numberGroup === 1
                ? colors?.color?.map(({ hue, shade, value, textContrast }, key) =>
                    colorView({ hue, shade, value, textContrast, key })
                )
                : colors?.color?.map((el, key) => (
                    <Accordion key={`group${key}`}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>
                                Group: {key} ({el.length})
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ flex: 1 }}>
                                {el.map(({ hue, shade, value, textContrast }, key) =>
                                    colorView({ hue, shade, value, textContrast, key })
                                )}
                            </div>
                        </AccordionDetails>
                    </Accordion>
                ))}
        </>
    );
}
