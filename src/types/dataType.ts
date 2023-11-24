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

export type formPropeType ={
    formlistState: intialStatePropType;
    getSearchList : (data: getsearchDataProps)=>void;
    firstName: string;
    lastName: string;
    others: string;
    topic: string;
}