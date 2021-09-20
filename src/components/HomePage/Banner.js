/* eslint-disable */
import "../../Styles/HomePageStyle/Banner.css"
import React, { useEffect, useState } from 'react';
import BannerInfo from "./BannerInfo";
import data from "../../data/items.json"
import {useDispatch, useSelector} from 'react-redux'
import {getProductsAction} from '../../redux/negociemosDucks'

const Banner = () => {
    const dispatch = useDispatch()

    const infoBanner = useSelector(store=> store.dataProducts.array)

    const[currentPage] = useState(Math.floor(Math.random()*(data.length-5))) 
    let[indexOfFirstPost,setIndexOfFirstPost] = useState(currentPage)
    let[indexOfLastPost,setIndexOfLastPost] = useState(currentPage+1)


    useEffect(()=> {
       dispatch(getProductsAction()) 
    },[])

    const pageNumber = []

    const currentPosts = infoBanner.slice(indexOfFirstPost, indexOfLastPost)
    const listBannerSlice = currentPosts.map(item => <BannerInfo key={item.ID_ITEM} item={item}/>)


    for (let i = currentPage; i < currentPage+5; i++) {
        pageNumber.push(i)  
    }
    
    const handeclick = (event)=> {
        setIndexOfFirstPost(Number(event.target.id));
        setIndexOfLastPost(Number(event.target.id)+1);
    }

    const renderPageNumbers = pageNumber.map(number => {
        return (
            <button key={number} id={number} 
                onClick={handeclick}
                className={indexOfFirstPost == number ? "active" :null}
                >
            </button>
        )
    })

    return (
        <div className="Banner">
            {listBannerSlice}
            <ul className="pageNumbersBanner">
                {renderPageNumbers}
            </ul>
        </div>
    );
    };

export default Banner;