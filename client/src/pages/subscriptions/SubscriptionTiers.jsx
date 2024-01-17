import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {sendSubs} from '../../actions/subs';


const subscriptionTiers = ({user,tier,navigate, dispatch}) => {
  const tokenHandler = async (token)=>{
    dispatch(sendSubs(token,tier,user,navigate));
    
  }

  const clickHandler =()=>{
navigate('/');
  }

  return (
    <div className='tier-card'>
      <div className={`vis-${tier.id}`}></div>

      <h2>{tier.plan}</h2>
      {tier.id === 2 && <p className='most'>Most Bought</p>}
      <p className='tier-price'>Rs. {tier.pricePerMonth}/month</p>
      <p className='tier-details'><span>Benefits- </span>{tier.details}</p>
      {tier.id===1 && <button className='tier-button' onClick={clickHandler}>Proceed</button>}
      {tier.id > 1 &&
      <StripeCheckout stripeKey='pk_test_51NRsY3SARLwElmNvbbe5TJfnTlT8ZOzD9FUm9glQJVkxEHLI1pypYdK9eSzM46958rYZN6lCfSPwuyeEqyHlvG6t00lj8oJARK'
      token={tokenHandler}
      amount={tier.pricePerMonth * 100}
      name={tier.plan}
      currency='INR'
    ><button className='tier-button'>Buy</button></StripeCheckout>
      }
      

    </div>
  )
}

export default subscriptionTiers;