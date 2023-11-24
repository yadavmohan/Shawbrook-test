export const noDataText = "No Data Availbale";
export const rejectText = "Reject";
export const acceptText = "Accept";
export const nextText = "Next";
export const formText ="Form";
export const firstNameText ="First Name";
export const lastNameText ="Last Name";
export const topicText = "Topic";
export const noResultText = "No Result Found";


export type getsearchDataProps = {
    searchData: string; 
    limit: number; 
    userFirstName: string; 
    userlastName: string; 
}

export type intialStatePropType ={
    data : string[],
    statusMessage : string,
    isFetchLoading : boolean,
    firstName : string,
    lastName : string,
    topic : string
}