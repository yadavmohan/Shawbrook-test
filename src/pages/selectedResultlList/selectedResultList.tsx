import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/pageStyle.scss";


type SelectedPropsType = {
    formDetailsState : {
        selectedData : string[]; 
    };
    formlistState :{
        firstName:string;
        lastName : string;
        topic : string
    }
    resetdatalistapi(): unknown;
}

const SelectedResultList=(props:SelectedPropsType)=>{
    const { selectedData } = props.formDetailsState;
    const { firstName, lastName, topic} = props.formlistState;
    const navigate = useNavigate();

    const onBackHandler=()=>{
        navigate("/"); 
        props.resetdatalistapi()
    }
    
    return(
        <div className="main-wrapper">
            <div className="selected-data-list">
            <div className="search-category-list">
                <div  className="backBtn" onClick={onBackHandler}><span>&#11013;</span><span className="backhomeText">Goto home page</span></div>
                {firstName} {lastName} topic : {topic}
            </div>
                <ul>
                    {
                        selectedData.map((item:string,index:number)=>{
                            return (
                                <li key={index}>
                                   <div className="selected-images"><img alt={`img${index+1}`} src={item} /></div> 
                                   <div className="selected-data">
                                        <div className="s-text">{firstName}</div>
                                        <div className="s-text">{lastName}</div>
                                        <div className="s-text">{topic}</div>
                                   </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SelectedResultList


