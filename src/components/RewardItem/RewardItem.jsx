import React from 'react'
import "./RewardItem.css"

function RewardItem( {rewardData}) {
  return (
    <li className='reward-item'>
        <div className='reward-wrapper'>
            <figure className='reward-img'>
                <img src="/public/traveller.png" className="reward-img-icon"/>
            </figure>
            <div className='reward-details'>
                <p className="reward-amount">${rewardData.amount}</p>
                <p className="reward-comment">{rewardData.comment}</p>
            </div>
        </div>
    </li>
  )
}

export default RewardItem