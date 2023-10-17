import React,{useEffect, useState, ChangeEvent} from "react";
import "../../assets/pageStyle.scss";
import { topicOption } from "../../constant/searchConstant";
import { useNavigate } from 'react-router-dom';
import { formText, firstNameText, lastNameText, topicText } from "../../constant/data";

type formPropeType ={
    formlistState: { data: any; statusMessage: string; };
    getSearchList(data: { searchData: string; limit: number; userFirstName: string; userlastName: string; }): unknown;
    firstName: string;
    lastName: string;
    others: string;
    topic: string;
}

const FormComponent=(props:formPropeType)=>{
    const navigate = useNavigate();
    const[state,setState]=useState({firstName : '', lastName : '', others:'', topic : ''});
    const { data, statusMessage } = props.formlistState;

    const formChangeHandler=(fieldName:keyof formPropeType)=>(event:ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        const{value} = event.target;
        setState((preState)=>({
            ...preState,
            [fieldName] : value
        }))
    }

    useEffect(()=>{
        
    },[])

    const onSubmitChangeHandler=()=>{
        const data = {
            searchData : state.topic === "others" ? state.others : state.topic,
            limit :5,
            userFirstName : state.firstName,
            userlastName : state.lastName
        }
        props.getSearchList(data);
    }

    if(data && data.length > 0){
        navigate("/searchResultlist"); 
    }

    const otherTopic = state.others !=='' || state.topic !=='';
    const checkEmptyhandler = state.firstName !== '' && state.lastName !=='' && otherTopic;
    return(
        <div className="main-wrapper">
            <div className="formsection">
                <div className="grid-box">
                <div className="userAuthen-heading">
                    {formText}
                </div>
                    <span className="error-message">{statusMessage !== "" ? statusMessage : ''}</span>
                    <div className="form-row">
                        <label htmlFor="First Name"  className="form-label">{firstNameText}<sub className="requireastrik">*</sub></label>
                        <input type="text" name="First Name" data-testid="first-name-input" autoComplete="off"  value={state.firstName}  className="input-style" placeholder="Enter your first name"  onChange={formChangeHandler("firstName")} required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="Last Name" className="form-label">{lastNameText}<sub className="requireastrik">*</sub></label>
                        <input type="text" name="Last Name" value={state.lastName} data-testid="last-name-input" className="input-style" autoComplete="off" placeholder="Enter your last name" onChange={formChangeHandler("lastName")} required />
                    </div>
                    <div className="form-row">
                        <label htmlFor="Topic" className="form-label">{topicText}<sub className="requireastrik">*</sub></label>
                        <select placeholder="select-topic" name="Topic" className="formSelect-box" value={state.topic} data-tesid="topic-input" onChange={formChangeHandler("topic")} required>
                            {topicOption.map((topiclist)=>{
                                return <option key={topiclist}>{topiclist}</option>
                            })}
                        </select>
                    </div>
                    { state.topic === "others" && <div className="form-row">
                        <label htmlFor="Others" className="form-label">Others<sub className="requireastrik">*</sub></label>
                        <input type="text"  name="Others" value={state.others}  data-testid="Others" autoComplete="off" className="input-style othersOption" placeholder="Enter your text here" onChange={formChangeHandler("others")} />
                    </div>}
                    <button type="submit" onClick={onSubmitChangeHandler} className={`search-button btn-button ${checkEmptyhandler ? '' : 'disabledButtob'}`} data-testid="Search" disabled={checkEmptyhandler ? false : true}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default FormComponent


