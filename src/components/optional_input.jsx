import * as React from 'react';
import { Container, TextField, Typography, MenuItem, FormControlLabel, FormGroup, Checkbox, Box } from '@mui/material';
import {useEffect, useState, useRef} from "react";


function OptionalInput(props){
    return (
        <Container sx={{ width: '100%', height: 360, mt: 11, mr: '0%' }}>
            <Container disableGutters>
                <Container sx={{ width: '100%', height: 110, backgroundColor: '#ffecd7', borderRadius: 0.5, border: 1, borderColor: '#000000' }}>
                    <TextField
                        label="Special Ability"
                        value={props.characterAbility}
                        multiline
                        rows={3}
                        size='small'
                        variant="standard"
                        onChange={(event) => { props.setCharacterAbility(event.target.value); }}
                        sx={{ width: '100%', mt: 1 }}
                    />
                </Container>
                {props.cardType == "Active" ?
                (
                    <Container disableGutters>
                        <Container sx={{ width: '100%', height: 146, mt: 0.9, backgroundColor: '#ffecd7', borderRadius: 0.5, border: 1, borderColor: '#000000' }}>
                            <TextField
                                label="Damage Value"
                                value={props.damageValue}
                                type="number"
                                size="small"
                                onChange={(event) => { props.setDamageValue(event.target.value); }}
                                variant="standard"
                                InputProps={{ inputProps: { min: 0, max: 9 } }}
                                sx={{ width: '100%', mt: 0.8 }}
                            />
                            <TextField
                                label="Damage Multiplier"
                                value={props.damageMultiplier}
                                disabled={props.damageValue == 0}
                                type="number"
                                size="small"
                                onChange={(event) => { props.setDamageMultiplier(event.target.value); }}
                                variant="standard"
                                InputProps={{ inputProps: { min: 1, max: 9 } }}
                                sx={{ width: '100%', mt: 1.5 }}
                            />
                            <FormGroup>
                                <FormControlLabel 
                                    control={
                                        <Checkbox 
                                            disabled={props.damageValue == 0} 
                                            onChange={(event) => { props.setDamageAll(event.target.checked); }}
                                            checked={props.damageAll}
                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }} 
                                        />
                                    } 
                                    label={
                                        <Box component="div" fontSize={13}>
                                        Damage All
                                        </Box>
                                    }
                                    sx={{ width: '100%', mt: 0.5 }}
                                />
                            </FormGroup>
                        </Container>
                        <Container sx={{ width: '100%', height: 89, mt: 0.9, backgroundColor: '#ffecd7', borderRadius: 0.5, border: 1, borderColor: '#000000' }}>
                            <TextField
                                label="Defense Value"
                                value={props.defenseValue}
                                type="number"
                                size="small"
                                onChange={(event) => { props.setDefenseValue(event.target.value); }}
                                variant="standard"
                                InputProps={{ inputProps: { min: 0, max: 9 } }}
                                sx={{ width: '100%', mt: 0.8 }}
                            />
                            <FormGroup>
                                <FormControlLabel 
                                    control={
                                        <Checkbox 
                                            disabled={props.defenseValue == 0} 
                                            onChange={(event) => { props.setDefenseAll(event.target.checked); }}
                                            checked={props.defenseAll}
                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 15 } }} 
                                        />
                                    } 
                                    label={
                                        <Box component="div" fontSize={13}>
                                        Defense All
                                        </Box>
                                    }
                                    sx={{ width: '100%', mt: 0.5 }}
                                />
                            </FormGroup>
                        </Container>
                    </Container>
                ) : null
            }
            </Container>
        </Container>
    )
}

export {OptionalInput}