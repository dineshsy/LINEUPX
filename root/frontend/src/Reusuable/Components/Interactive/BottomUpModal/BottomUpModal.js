import React from "react";
import {
    BackDrop,
    ModalWrapper,
    ModalContainer,
    CloseIconWrapper,
} from "./style";

import IconLabel from "../../View/IconLabel/IconLabel";
import CloseIcon from "../../../../Assets/Icons/Close-Icon/close icon.svg";
import { useState } from "react";

export default function BottomUpModal(props) {
    const [goDown, setGoDown] = useState(false);
    if (props.closeModal) {
        setGoDown(true);
        setTimeout(() => {
            props.toggelModal();
        }, 450);
    }
    return (
        <ModalContainer>
            <BackDrop
                onClick={() => {
                    setGoDown(true);
                    setTimeout(() => {
                        props.toggelModal();
                    }, 450);
                }}
            />
            <ModalWrapper cover={props.cover} goDown={goDown}>
                <CloseIconWrapper
                    onClick={() => {
                        setGoDown(true);
                        setTimeout(() => {
                            props.toggelModal();
                        }, 450);
                    }}
                >
                    <IconLabel icon={CloseIcon} />
                </CloseIconWrapper>
                {props.children}
            </ModalWrapper>
        </ModalContainer>
    );
}
