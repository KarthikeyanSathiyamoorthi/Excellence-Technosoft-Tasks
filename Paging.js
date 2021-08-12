import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Paging() {

    const [pageOneLists, setPageOneLists] = useState([]);
    const [pageTwoLists, setPageTwoLists] = useState([]);

    
    
    const pageOneURL =  `https://reqres.in/api/users?page=1`
    const pageTwoURL = `https://reqres.in/api/users?page=2`

    

    console.log("pageTwoLists", pageTwoLists);

    console.log("pageOneLists", pageOneLists);

   const fetchData = () => {

    const getFirstLists = axios.get(pageOneURL);
    const getSecondLists = axios.get(pageTwoURL);

    axios.all([getFirstLists, getSecondLists]).then(
        axios.spread((...allData) => {
            const pageOne = allData[0].data.data;
            const pageTwo = allData[1].data.data;

            console.log("pageOne", pageOne);
            console.log("pageTwo", pageTwo);
            setPageOneLists(pageOne);
            setPageTwoLists(pageTwo)
        })
    )

   }


    useEffect(() => {
       
        console.log("useEffect");
        fetchData();
        
    },[]); 
       
      

    return (
        <div style={{ backgroundColor:'yellowgreen', paddingTop:40}} >
            <div>
            {
                pageOneLists.map((x) => {
                    return(
                        <ul key={x.id}>{x.first_name}</ul>
                    )
                })
            }

            </div>
            
            <div>
            {
                pageTwoLists.map((x) => {
                    return(
                        <ul key={x.id}>{x.first_name}</ul>
                    )
                })
            }

            </div>
        </div>
    )
}