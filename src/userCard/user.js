import React from 'react'
import containerStyles from "./User.module.css";



const User = ({name,img,position,names}) => {

return ( <div className = {containerStyles.card}>
        <div className={containerStyles.image} style = {{ backgroundImage: `url(${img})`}}></div>
        <p className = {containerStyles.card_name} id = 'based'>{name}</p>
        <p className =  {containerStyles.card_position}>{position}</p>
        <p>{names + ' '}</p>
    </div>
   );
}

export default User;