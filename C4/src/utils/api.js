// manage api requests here

import axios from "axios";
export const getBooks=(categoryFilter,sortcriteria,sortOrder)=>{
    let url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`
    if(categoryFilter){
    url+=`?category=${categoryFilter}`
    }
    if(sortcriteria&&sortOrder){
        url+=`${categoryFilter?"&":"?"}_sort=${sortcriteria}&_order=${sortOrder}`
        }
        return axios({
            method:"get",
            url:url
        })
}
