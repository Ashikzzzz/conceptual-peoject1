import React from 'react';
import Player from '../Player/Player';
import './Players.css'

const Players = ({players,cart,setCart}) => {
    // const {cart,setCart}=players;
    // console.log(players[0]);
    //  console.log(props)
    return (
        <div>
            <div className="cart-container">
            {/* sending data from players to player  */}

                {
                    players.map(player=><Player 
                         player={player}
                          key={player.idPlayer}
                          cart={cart}
                          setCart={setCart}
                          ></Player>)
                }
            </div>
            
        </div>
    );
};

export default Players;