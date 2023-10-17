import React from "react";
import RemoveDeleteIcon from '../assets/images/remove.png';

type ModalPropsType = {
    modalClose: () => void;
    imageurlData: string;
}

const ImagePopupModalComponent = (props: ModalPropsType) => {
    return (
        <div className="image-wrappersection">
            <div className="imagebgOverlay"></div>
            <div className="imagebody">
                <span className="closepop-modal" onClick={props.modalClose}>
                    <img src={RemoveDeleteIcon} alt="Remove" />
                </span>
                <img src={props.imageurlData} alt="imgurl" />
            </div>
        </div>
    )
}

export default ImagePopupModalComponent;