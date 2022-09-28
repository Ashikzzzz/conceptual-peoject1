import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';


const Home = () => {
const [search,setSearch]=useState("");
const [players,setPlayers]=useState([]);
const [cart,setCart]=useState([]);
// console.log(cart)
//  console.log(players);

useEffect(()=>{
    fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
    .then(res=>res.json())
    .then(data=>setPlayers(data.player))
},[search])
// console.log(cart);

const handleDlt=(id)=>{
    const leftPlayer= cart.filter(p=>p.idPlayer !== id)
    setCart(leftPlayer);
    // toast("Wow so easy!");
    Swal.fire({
        title: 'Are you sure?',
        text: "if sure,Click the delete button",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
}

    return (
        <div>
           <div className="home-container">
            <div className="left-side">
           {/* input start */}

           <input onChange={(e)=>setSearch(e.target.value)} className='input-field' type="text" placeholder='Search Here'/>
           <button className='search-btn'>Search</button>

            {/* send data from home to players section */}

           <div className="players-container">
            <Players players={players}
             cart={cart} 
             setCart={setCart}
             ></Players>
           </div>

            </div>

            <div className="right-side">

                {/* cart history  */}

            <div className="cart">
            <h1>Cart</h1>
            {
            cart.length && cart.map((p)=>
            <div className="cart-container-info">
                 <li>{p.strPlayer} </li> 
                 <button onClick={()=>handleDlt(p.idPlayer)} className='dlt-btn'>X</button>
            </div>
             
              )
           }
          
            </div>
           
            </div>
           </div>
           
        </div>
    );
};

export default Home;