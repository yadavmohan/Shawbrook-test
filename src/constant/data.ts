export const noDataText = "No Data Availbale";
export const rejectText = "Reject";
export const acceptText = "Accept";
export const nextText = "Next";
export const formText ="Form";
export const firstNameText ="First Name";
export const lastNameText ="Last Name";
export const topicText = "Topic";
export const noResultText = "No Result Found";


type getsearchDataProps = {
    searchData: string; 
    limit: number; 
    userFirstName: string; 
    userlastName: string; 
}

type intialStatePropType ={
    data : string[],
    statusMessage : string,
    isFetchLoading : boolean,
    firstName : string,
    lastName : string,
    topic : string
}

export type formPropeType ={
    formlistState: intialStatePropType;
    getSearchList : (data: getsearchDataProps)=>void;
    firstName: string;
    lastName: string;
    others: string;
    topic: string;
}
