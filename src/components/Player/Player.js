import React from 'react';
import './Player.css'

const Player = ({player,cart,setCart}) => {
    const{strCutout,strPosition,strSport,idPlayer,strPlayer}=player;

    const handleAddToCart=()=>{
         const info={
            strCutout,
            strPosition,
            strPlayer,
            strSport,
            idPlayer,
        
         }
         if(cart){
            const newPlayer=[...cart,info]
            setCart(newPlayer)
         }
         
        
        //   console.log(cart)
    }

    const handleBookMark=()=>{
        const info={
            strCutout,
            strPosition,
            strPlayer,
            strSport,
            idPlayer,
            quantity:1
        
         }

        //  database 

         const prevBookmerked=localStorage.getItem("bookmark")
        const oldBookMarked= (JSON.parse(prevBookmerked))
        if(oldBookMarked){
            const isExist= oldBookMarked.find(p=>p.idPlayer===idPlayer)
            if(isExist){
                isExist.quantity=isExist.quantity+1;
                localStorage.setItem("bookmark",(JSON.stringify(oldBookMarked)))
                // alert("Already bookMarked")
                return;
            }
            else{
                localStorage.setItem("bookmark",(JSON.stringify([...oldBookMarked,info])))
            }
            localStorage.setItem("bookmark",(JSON.stringify([...oldBookMarked,info])))
        }
        else{
            localStorage.setItem("bookmark",(JSON.stringify([info])))
        }
    }

    
    return (
        <div className='card' data-aos="zoom-in-up">
            <img src={player.strCutout ?player.strCutout:"not found" } alt="" />
            {/* <h5>BirthYEar:{player.dateBorn}</h5> */}
            {/* <h5>{props.player.strBirthLocation}</h5> */}
            {/* <h5>Gander :{player.strGender}</h5> */}
            <h5>Name:{player.strPlayer}</h5>
            <h5>Position : {player.strPosition}</h5>
            <h5>Sport : {player.strSport}</h5>
            {/* <p>{props.player.strDescriptionEN?props.player.strDescriptionEN.slice(0,20)+"...see more":"data not found"}</p> */}
            <button className='card-btn'>
                Details
             </button>
                <button onClick={handleAddToCart} className='card-btn'>
                    Add to cart
                </button>
                <button onClick={handleBookMark} className='card-btn'>
                    Bookmark
                </button>
        </div>
    );
};

export default Player;