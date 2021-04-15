/* eslint-disable */
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Detail.css';

function Detail(props) {

    let { id } = useParams();
    let history = useHistory();
    let findArt = props.art.find(function(i) {
      return i.id == id
    })
    
    return(
      <div className="container">
        <div className="artBox">
            <h3 className="detail-title">{ findArt.title }</h3>
            <h5 className="detail-artist">·{ findArt.artist }·</h5>
            <img id="detail-img" src={ findArt.image }></img>
            <div className="detail-tag">
                {
                    findArt.tag.map((a,i)=>{
                    return(
                        <button id="tags">{ findArt.tag[i] }</button>
                    )
                    }) 
                }
            </div>
        </div>
        <button id="detail-btn" className="btn btn-danger" onClick={ ()=>{ 
                history.goBack();
             } }>뒤로가기</button> 
      </div> 
    )
  }

  export default Detail; // 변수명 or 함수명