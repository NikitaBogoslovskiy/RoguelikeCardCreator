import * as React from 'react';
import { Container, TextField, MenuItem, Button } from '@mui/material';
import { useState } from "react";


function EssentialInput(props){
    const cardTemplates = [
            {
                value: 'Template 1',
                label: 'Template 1',
            },
            {
                value: 'Template 2',
                label: 'Template 2',
            }
        ];

    const cardTypes = [
            {
                value: 'Active',
                label: 'Active',
            },
            {
                value: 'Passive',
                label: 'Passive',
            }
        ];

    [file, setFile] = useState(null);
    const handleFile = (e) => {
        let file = e.target.files[0];
        if (file == undefined)
            return;
        if (!['image/jpeg', 'image/png'].includes(file.type)) {
            props.setImageWarning(true);
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.addEventListener("load", function () {
            props.setImageSrc(reader.result);
        })
    };

    const handleExport = (e) => {
        props.setNeedExport(true);
    };

    const handleCardTemplate = (e) => {
        props.setCardTemplate(e.target.value);
    };

    return (
        <Container sx={{ width: '100%', height: 360, mt: 11, ml: '0%' }}>
            <Container sx={{ width: '100%', height: 180, backgroundColor: '#ffecd7', borderRadius: 0.5, border: 1, borderColor: '#000000' }}>
                <TextField
                    label="Character Name"
                    value={props.characterName}
                    variant="standard"
                    size="small"
                    onChange={(event) => { props.setCharacterName(event.target.value); }}
                    sx={{ width: '100%', mt: 1 }}
                />
                <TextField
                    select
                    label="Card Template"
                    value={props.cardTemplate}
                    size="small"
                    onChange={handleCardTemplate}
                    variant="standard"
                    sx={{ width: '100%', mt: 1.5}}
                    >
                    {cardTemplates.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label="Card Type"
                    value={props.cardType}
                    size="small"
                    onChange={(event) => { props.setCardType(event.target.value); }}
                    variant="standard"
                    sx={{ width: '100%', mt: 1.5 }}
                    >
                    {cardTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Container>
            <Container sx={{ width: '100%', height: 67, mt: 1.5, backgroundColor: '#ffecd7', borderRadius: 0.5, border: 1, borderColor: '#000000' }}>
                <TextField
                    label="Energy Value"
                    value={props.energyValue}
                    type="number"
                    size="small"
                    onChange={(event) => { props.setEnergyValue(event.target.value); }}
                    variant="standard"
                    InputProps={{ inputProps: { min: 1, max: 9 } }}
                    sx={{ width: '100%', mt: 1.1 }}
                />
            </Container>
            <Container disableGutters>
                <Button variant="contained" component="label" sx={{ width: '100%', height: 38, mt: 1.5, fontSize: 12, backgroundColor: '#ffd8ad', color: '#000000', borderRadius: 1, border: 0.1, borderColor: '#000000', '&:hover': { backgroundColor: '#ffc581' }}}>
                    Upload Card Image
                    <input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={handleFile}
                        hidden
                    />
                </Button>
                <Button variant="contained" onClick={handleExport} component="label" sx={{ width: '100%', height: 38, mt: 1.5, fontSize: 12, backgroundColor: '#ffd8ad', color: '#000000', borderRadius: 1, border: 0.1, borderColor: '#000000', '&:hover': { backgroundColor: '#ffc581' } }}>
                    Export Card
                </Button>
            </Container>
        </Container>
    )
}

export {EssentialInput}