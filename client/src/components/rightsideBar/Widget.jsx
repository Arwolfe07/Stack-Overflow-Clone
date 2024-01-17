import React from 'react'
import pen from '../../assets/pen-solid.svg';
import comment from '../../assets/comment-alt-solid.svg';
import blackLogo from '../../assets/blacklogo.svg';

const Widget = () => {
    return (
        <div className='widget'>
            <h4>The Overflow Blog</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt='pen' width='18'/>
                    <p>More on our AI future: building course recommendations and a new data platform</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={pen} alt='pen' width='18'/>
                    <p>This product could help build a more equitable workplace (Ep. 575)</p>
                </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt='pen' width='18'/>
                    <p>AI/ML Tool examples part 3 - Title - Drafting Assistant</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt='pen' width='18'/>
                    <p>We are graduating the updated button styling for vote arrows</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt='pen' width='18'/>
                    <p>We are updating our Code of Conduct an we would like your feedback</p>
                </div>
                 <div className='right-sidebar-div-2'>
                    <img src={blackLogo} alt='pen' width='18'/>
                    <p>Temporary policy: ChatGPT is banned</p>
                </div>
                 <div className='right-sidebar-div-2'>
                    <img src={blackLogo} alt='pen' width='18'/>
                    <p>The [connect] tag is being burninated</p>
                </div>
                
            </div>
        </div>
    )
}

export default Widget;