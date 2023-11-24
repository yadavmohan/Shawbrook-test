import React,{ useState } from "react";
import "../../assets/pageStyle.scss";
import { useNavigate } from "react-router-dom";
import SelectIcon from "../../assets/images/correct_4436481.png"
import EditIcon from "../../assets/images/edit_1159633.png";
import ImagePopupModalComponent from "../popupModalComponent";
import { noDataText, rejectText, acceptText, nextText } from "../../constant/data";

type ImageUrl = {
  alt_description:string;
  id: number;
  urls: {
    small: string;
  };
};

type SelectedDataItem = string | { imgurl: string; imagedec: string };

type SearchResultProps = {
    resetdatalistapi:()=>void;
    removeChangeHandler : (updatedValues: string[])=>void;
    onSelectedItemChangeHandler: (selectedData: SelectedDataItem[]) => void; 
    formlistState: { data: any; topic: string; };
    id: number; 
    urls: { small: string; }; 
};

const SearchResultList=(props:SearchResultProps)=>{
    const navigate = useNavigate();
    const { data } = props.formlistState;
    const [selectedData, setSelectedData] = useState<SelectedDataItem[]>([]);
    const [modalpop,setModalpop] = useState<boolean>(false);
    const [imageUrl,setImageUrl] = useState<string>("");

    const onChangeAcceptHandler = (imgurl: string, imagedec: string) => {
        if (selectedData && !selectedData.some(item => item === imgurl)) {
            setSelectedData([...selectedData, { imgurl, imagedec }]);
        }
    };

    const onChangeRejectHandler=(imageId:number)=>{
        let updatedValues = data.filter((cardItem : any)=>cardItem.id !== imageId)
        props.removeChangeHandler(updatedValues)
    }

    const onChangeNextHandler=()=>{
        props.onSelectedItemChangeHandler(selectedData)
        if(selectedData && selectedData.length > 0){
            navigate("/selectedSearchResultlist"); 
        }
    }
    const onSelectedEditItemChangeHandler = (imgurl: string, imagedec: string) => {
        setSelectedData(selectedData.filter((item)=>typeof item === 'string' ? item : item.imgurl !== imgurl || item.imagedec !== imagedec));
    };

    const onModalShowHandler=(imgeUrl:string)=>{
        setModalpop(true)
        setImageUrl(imgeUrl)
    }

    const onModalCloseHandler=()=>{
        setModalpop(false)
        setImageUrl("")
    }

    const redirecttoHomePage =()=> {
        navigate("/");
        props.resetdatalistapi()
    }

    const nodataRender = (
        <>
          <div className="no-data-text">{noDataText}</div>
          <button className="next-btn redirectButton" onClick={redirecttoHomePage}>Go to Home Page<span>&#187;</span></button> 
        </>
    )

    const checkImageUrl = (urlToCheck: string) => {
        return selectedData.some(item => (typeof item === 'string' ? item === urlToCheck : item.imgurl === urlToCheck));
    };

    return(
        <div className="main-wrapper">
            <div className="grid-component">
                <div className="search-category-list"> 
                    <div className="backBtn" onClick={redirecttoHomePage}><span>&#11013;</span></div>
                    Search Result for Your Favorites Topic
                    {selectedData.length > 0 ? <button className="next-btn" onClick={onChangeNextHandler}>{nextText} <span>&#187;</span></button> : ''}
                </div>
                { data && data.length > 0 ? <ul>
                    {
                        data.map((item:ImageUrl)=>{
                            return <li key ={item?.id} className={checkImageUrl(item?.urls?.small) ? 'selected' : ''}>
                                {checkImageUrl(item?.urls?.small) ? <div className="edit-block" onClick={()=>onSelectedEditItemChangeHandler(item?.urls?.small, item?.alt_description)}><img alt="" src={EditIcon} /></div> : ''}
                                <div className="grid-cloumn">
                                    <div className="images-box" onClick={()=>onModalShowHandler(item?.urls?.small)}>
                                        <img src={item?.urls?.small} alt="img" />
                                    </div>
                                    <div className="item-description">{item?.alt_description}</div>
                                    <div className="grid-button">
                                    {checkImageUrl(item?.urls?.small) ? <img alt="" src={SelectIcon} /> : <>
                                        <button className="grid-btn reject-btn" onClick={()=>onChangeRejectHandler(item?.id)}><span>&#10006;</span>{rejectText}</button>
                                        <button className="grid-btn accept-btn" data-testid="accept-input" onClick={()=>onChangeAcceptHandler(item?.urls?.small, item?.alt_description)}><span>&#10004;</span>{acceptText}</button>
                                        </>
                                    }
                                    </div>
                                </div>
                            </li>
                        })
                    }
                </ul>: data.length === 0 ? nodataRender : ''}
                {modalpop && <ImagePopupModalComponent modalClose={onModalCloseHandler} imageurlData = {imageUrl}/>}
            </div>
        </div>
    )
}

export default SearchResultList


