import * as React from 'react';
import { Container, Alert, Fade } from '@mui/material';
import {CardCreator} from './card_creator.jsx';
import {EssentialInput} from './essential_input.jsx';
import {OptionalInput} from './optional_input.jsx';
import { useState } from "react";
import originImageSrc from '../../images/example_image.jpg';


function Content(props){
    const [characterName, setCharacterName] = useState('Cool Hero');
    const [cardTemplate, setCardTemplate] = useState('Template 1');
    const [cardType, setCardType] = useState('Active');
    const [energyValue, setEnergyValue,] = useState(1);

    const [damageValue, setDamageValue] = useState(1);
    const [damageMultiplier, setDamageMultiplier] = useState(1);
    const [damageAll, setDamageAll] = useState(false);
    const [defenseValue, setDefenseValue] = useState(1);
    const [defenseAll, setDefenseAll] = useState(false);
    const [characterAbility, setCharacterAbility] = useState('This hero is able to do many things. For instance, to wake up.');

    const [imageSrc, setImageSrc] = useState(originImageSrc);
    const [needExport, setNeedExport] = useState(false);
    const [imageWarning, setImageWarning] = useState(false);

    return (
        <Container disableGutters>
            <Container sx={{ display: 'flex', flexDirection: 'row' }}>
                <EssentialInput 
                    characterName = {characterName} setCharacterName = {setCharacterName}
                    cardTemplate = {cardTemplate} setCardTemplate = {setCardTemplate}
                    cardType = {cardType} setCardType = {setCardType}
                    energyValue = {energyValue} setEnergyValue = {setEnergyValue}
                    imageSrc = {imageSrc} setImageSrc = {setImageSrc}
                    needExport = {needExport} setNeedExport = {setNeedExport}
                    setImageWarning = {setImageWarning}
                />
                <CardCreator
                    characterName = {characterName}
                    cardTemplate = {cardTemplate}
                    cardType = {cardType}
                    energyValue = {energyValue}
                    damageValue = {damageValue}
                    damageMultiplier = {damageMultiplier}
                    damageAll = {damageAll}
                    defenseValue = {defenseValue}
                    defenseAll = {defenseAll}
                    characterAbility = {characterAbility}
                    imageSrc = {imageSrc} setImageSrc = {setImageSrc}
                    needExport = {needExport} setNeedExport = {setNeedExport}
                    imageWarning = {imageWarning} setImageWarning = {setImageWarning}
                />
                <OptionalInput
                    cardType = {cardType}
                    damageValue = {damageValue} setDamageValue = {setDamageValue}
                    damageMultiplier = {damageMultiplier} setDamageMultiplier = {setDamageMultiplier}
                    damageAll = {damageAll} setDamageAll = {setDamageAll}
                    defenseValue = {defenseValue} setDefenseValue = {setDefenseValue}
                    defenseAll = {defenseAll} setDefenseAll = {setDefenseAll}
                    characterAbility = {characterAbility} setCharacterAbility = {setCharacterAbility}
                />
            </Container>
            {(imageWarning != null && imageWarning) ? (
                    <Fade in={true} timeout={1000}>
                        <Alert severity="warning" sx={{ mt: -2, position: 'absolute' }} onClose={() => { setImageWarning(false); }}>
                            Could not load the image
                        </Alert>
                    </Fade>
                ) : null
            }       
        </Container>
    )
}

export {Content}