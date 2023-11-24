import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/pageStyle.scss";

type SelectedDataItem = string | { imgurl: string; imagedec: string };

type SelectedPropsType = {
    formDetailsState: {
        selectedData: SelectedDataItem[];
    };
    formlistState: {
        firstName: string;
        lastName: string;
        topic: string;
    };
    resetdatalistapi:()=>void;
};

const SelectedResultList = (props: SelectedPropsType) => {
    const { selectedData } = props.formDetailsState;
    const { firstName, lastName, topic } = props.formlistState;
    const navigate = useNavigate();

    const onBackHandler = () => {
        navigate("/");
        props.resetdatalistapi();
    };

    return (
        <div className="main-wrapper">
            <div className="selected-data-list">
                <div className="search-category-list">
                    <div className="backBtn" onClick={onBackHandler}><span>&#11013;</span><span className="backhomeText">Goto home page</span></div>
                    Selected Favorite Topics : {topic}
                </div>
                <ul>
                    {selectedData.map((item: SelectedDataItem, index: number) => {
                        return (
                            <li key={index}>
                                <div className="selected-images"><img alt={`img${index + 1}`} src={typeof item === 'string' ? item : item.imgurl} /></div>
                                <div className="selected-data">
                                    <div className="s-text">{firstName}</div>
                                    <div className="s-text">{lastName}</div>
                                    <div className="s-text">{typeof item === 'string' ? item : item.imagedec}</div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SelectedResultList;
