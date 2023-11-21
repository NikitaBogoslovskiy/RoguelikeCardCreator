import * as React from 'react';
import { Container } from '@mui/material';
import cardBackgroundSrc from '../../images/fgc6_front1.png'
import cardImageDividerSrc from '../../images/front1_border.png'
import cardTextDividerSrc from '../../images/spacer.png'
import cardPassiveEnergySrc from '../../images/crystal_blue.png'
import cardActiveEnergySrc from '../../images/crystal_green.png'
import cardDefaultEffectSrc from '../../images/front2_stat_inner_blue.png'
import cardDamageEffectSrc from '../../images/front2_stat_inner_purple.png'
import cardDefenseEffectSrc from '../../images/front2_stat_inner_red.png'
import cardDamageIconSrc from '../../images/icon_sword.png'
import cardDefenseIconSrc from '../../images/icon_shield.png'
import cardAffectAllIconSrc from '../../images/icon_storm.png'
import cardDamageMultiplierIconSrc from '../../images/icon_drop.png'
import cardImageSrc from '../../images/fgc6_back_blue.png'
import cardMaskSrc from '../../images/front1_image_shape.png'
import cardCoverSrc from '../../images/front1_art_overlay.png'
import { Stage, Layer, Image, Text, Group, Rect } from 'react-konva';
import {useEffect, useState, useRef} from "react";


function CardCreator(props){
    let scale = 0.39;
    let cardBackground = new window.Image();
    cardBackground.src = cardBackgroundSrc;
    let cardImageDivider = new window.Image();
    cardImageDivider.src = cardImageDividerSrc;
    let cardTextDivider = new window.Image();
    cardTextDivider.src = cardTextDividerSrc;
    let cardPassiveEnergy = new window.Image();
    cardPassiveEnergy.src = cardPassiveEnergySrc;
    let cardActiveEnergy = new window.Image();
    cardActiveEnergy.src = cardActiveEnergySrc;
    let cardDefaultEffect = new window.Image();
    cardDefaultEffect.src = cardDefaultEffectSrc;
    let cardDefenseEffect = new window.Image();
    cardDefenseEffect.src = cardDefenseEffectSrc;
    let cardDamageEffect = new window.Image();
    cardDamageEffect.src = cardDamageEffectSrc;
    let cardDamageIcon = new window.Image();
    cardDamageIcon.src = cardDamageIconSrc;
    let cardDefenseIcon = new window.Image();
    cardDefenseIcon.src = cardDefenseIconSrc;
    let cardAffectAllIcon = new window.Image();
    cardAffectAllIcon.src = cardAffectAllIconSrc;
    let cardDamageMultiplierIcon = new window.Image();
    cardDamageMultiplierIcon.src = cardDamageMultiplierIconSrc;

    let cardImg = new window.Image();
    cardImg.src = props.imageSrc;
    let cardMask = new window.Image();
    cardMask.src = cardMaskSrc;
    let cardCover = new window.Image();
    cardCover.src = cardCoverSrc;

    [startX, setStartX] = useState(0);
    [startY, setStartY] = useState(0);
    [shiftX, setShiftX] = useState(0);
    [shiftY, setShiftY] = useState(0);
    [imageX, setImageX] = useState(1);
    [imageY, setImageY] = useState(8);
    [mouseIsDown, setMouseIsDown] = useState(false);
    [imageScale, setImageScale] = useState(scale);
    let scaleCoefficient = 0.05;
    [cardImage, setCardImage] = useState(cardImg);

    useEffect(() => {
        let newImg = new window.Image();
        newImg.src = props.imageSrc;
        newImg.onerror = () => { props.setImageWarning(true); }
        newImg.onload = () => {
            if (newImg.width == 0 || newImg.height == 0)
                props.setImageWarning(true);
            else
                setCardImage(newImg);
        }
    }, [props.imageSrc]);

    const handleMouseDown = (e) => {
        if (!mouseIsDown) {
            setMouseIsDown(true);
            setStartX(e.evt.clientX);
            setStartY(e.evt.clientY);
        }
    };

    const handleMouseMove = (e) => {
        if (mouseIsDown) {
            setShiftX(e.evt.clientX - startX);
            setShiftY(e.evt.clientY - startY);
        }
    };

    const handleMouseUp = (e) => {
        if (mouseIsDown) {
            setMouseIsDown(false);
            setImageX(imageX + shiftX);
            setImageY(imageY + shiftY);
            setShiftX(0);
            setShiftY(0);
        }
    };

    const handleWheel = (e) => {
        if (e.evt.deltaY < 0)
            setImageScale(imageScale + imageScale * scaleCoefficient);
        else if (e.evt.deltaY > 0)
            setImageScale(imageScale - imageScale * scaleCoefficient);
    };

    const stageRef = useRef(null);
    useEffect(() => {
        if (props.needExport) {
            const url = stageRef.current.toDataURL({ pixelRatio: 5, height: cardBackground.height * scale * 1.05, width: cardBackground.width * scale });
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            a.download = `${props.characterName} (roguelike card).png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            props.setNeedExport(false);
        }
    }, [props.needExport]);


    return (
        <Container sx={{ width: 280, height: 360, mt: 11, backgroundColor: '#ffffff', borderRadius: 1, border: 1.06, borderColor: '#000000' }}>
            <Stage ref={stageRef} width={270} height={360} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onWheel={handleWheel}>
                <Layer>
                    <Image image={cardBackground} x={0} y={8} scaleX={scale} scaleY={scale}/>
                </Layer>
                <Layer>
                    <Group>
                        <Image image={cardImage} x={imageX + shiftX} y={imageY + shiftY} scaleX={imageScale} scaleY={imageScale}/>
                        <Image 
                            image={cardMask} 
                            globalCompositeOperation={"destination-in"}
                            x={2} y={8} scaleX={scale} scaleY={scale}
                        />
                    </Group>
                    <Image image={cardCover} x={3.5} y={10} scaleX={scale} scaleY={scale * 1.01}/>
                    <Image image={cardImageDivider} x={-3} y={182} scaleX={scale} scaleY={scale}/>
                    <Image image={cardTextDivider} x={10} y={270} scaleX={scale} scaleY={scale}/>
                    <Text text={props.characterName} fontFamily='Cambria' align='center' fontSize={22} fontStyle='bold' fill='#f7eedd' stroke='#6c614b' strokeWidth={0.7} x={16} y={242} width={205} height={10}/>
                    <Text text={props.characterAbility} fontFamily='Constantia' align='center' fontSize={13} fontStyle='normal' fill='#f7eedd' stroke='5f5643' opacity={1.0} strokeWidth={0.1} x={15} y={289} width={205} height={50}/>
                </Layer>
                <Layer visible={props.cardType == "Passive"}>
                    <Image image={cardPassiveEnergy} x={88} y={175} scaleX={scale} scaleY={scale}/>
                    <Image image={cardDefaultEffect} x={5} y={191} scaleX={scale} scaleY={scale}/>
                    <Image image={cardDefaultEffect} x={199} y={191} scaleX={scale} scaleY={scale}/>
                    <Text text={props.energyValue} fontFamily='Lucida Bright' align='center' fontSize={30} fontStyle='bold' fill='#f7eedd' stroke='#6c614b' strokeWidth={0.4} x={0} y={188} width={236}/>
                </Layer>
                <Layer visible={props.cardType == "Active"}>
                    <Image image={cardActiveEnergy} x={88} y={175} scaleX={scale} scaleY={scale}/>
                    <Image image={cardDamageEffect} x={5} y={191} scaleX={scale} scaleY={scale}/>
                    <Image image={cardDefenseEffect} x={199} y={191} scaleX={scale} scaleY={scale}/>
                    <Text text={props.energyValue} fontFamily='Lucida Bright' align='center' fontSize={30} fontStyle='bold' fill='#f7eedd' stroke='#6c614b' strokeWidth={0.4} x={0} y={188} width={236}/>
                    <Text text={props.damageValue} fontFamily='Lucida Bright' align='center' fontSize={22} fontStyle='bold' fill='#f7eedd' stroke='#6c614b' strokeWidth={0.1} x={0} y={197} width={43}/>
                    <Text text={props.defenseValue} fontFamily='Lucida Bright' align='center' fontSize={22} fontStyle='bold' fill='#f7eedd' stroke='#6c614b' strokeWidth={0.1} x={194} y={197} width={43}/>
                    <Image image={cardDamageIcon} x={3} y={189} scaleX={0.43} scaleY={0.43}/>
                    <Image image={cardDefenseIcon} x={219} y={189} scaleX={0.43} scaleY={0.43}/>
                    <Group visible={props.damageValue != 0 && props.damageAll}>
                        <Image image={cardAffectAllIcon} x={28} y={189} scaleX={0.4} scaleY={0.4}/>
                    </Group>
                    <Group visible={props.defenseValue != 0 && props.defenseAll}>
                        <Image image={cardAffectAllIcon} x={200} y={189} scaleX={0.4} scaleY={0.4} />
                    </Group>
                    <Group visible={props.damageValue != 0 && props.damageMultiplier > 1}>
                        <Image image={cardDamageMultiplierIcon} x={3} y={210} scaleX={0.52} scaleY={0.52} />
                        <Text text={props.damageMultiplier} fontFamily='Lucida Bright' align='center' fontSize={8} fontStyle='bold' fill='#f7eedd' stroke='#6c614b' strokeWidth={0} x={0} y={217} width={20}/>
                    </Group>
                </Layer>
            </Stage>
        </Container>
    )
}

export {CardCreator}