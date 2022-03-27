import React from 'react'
import "../styles/PreFooter.css"
import "../styles/footer.css"

const youtubeIcon =<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/></svg>;
const twitterIcon =<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M20,17H4V5h8V3H4C2.89,3,2,3.89,2,5v12c0,1.1,0.89,2,2,2h4v2h8v-2h4c1.1,0,2-0.9,2-2v-3h-2V17z"/><polygon points="17,14 22,9 20.59,7.59 18,10.17 18,3 16,3 16,10.17 13.41,7.59 12,9"/></g></g></svg>;
const facebookIcon =<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><rect height="2" width="6" x="9" y="8.5"/><path d="M15.64,12H8.37c-0.48,0-0.87,0.39-0.87,0.87h0.01V14h9v-1.13C16.51,12.39,16.12,12,15.64,12z"/><path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M18,17h-1.5v-1.5h-9V17H6v-4.13 c0-1,0.62-1.85,1.5-2.2V9c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2v1.67c0.88,0.35,1.5,1.2,1.5,2.2V17z"/></g></g></svg>;
const instagramIcon =<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"/></svg>;
const shieldIcon= <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z"/></svg>;
const mapIcons=<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>;
const repeatIcon =<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8zm-1.31 8.9l.25-2.17h2.39v.71h-1.7l-.11.92c.03-.02.07-.03.11-.05s.09-.04.15-.05.12-.03.18-.04.13-.02.2-.02c.21 0 .39.03.55.1s.3.16.41.28.2.27.25.45.09.38.09.6c0 .19-.03.37-.09.54s-.15.32-.27.45-.27.24-.45.31-.39.12-.64.12c-.18 0-.36-.03-.53-.08s-.32-.14-.46-.24-.24-.24-.32-.39-.13-.33-.13-.53h.84c.02.18.08.32.19.41s.25.15.42.15c.11 0 .2-.02.27-.06s.14-.1.18-.17.08-.15.11-.25.03-.2.03-.31-.01-.21-.04-.31-.07-.17-.13-.24-.13-.12-.21-.15-.19-.05-.3-.05c-.08 0-.15.01-.2.02s-.11.03-.15.05-.08.05-.12.07-.07.06-.1.09l-.67-.16z"/></svg>;

const Footer = ({footer}) => {
  return (
    <>
    <div className='PreFooter'>
      <div>
          {repeatIcon}
          <p><b>Hassle-freereplacement </b> <br/> 10-day easy replacement policy on mi.com</p>
      </div>

      <div> 
          {shieldIcon}
          <p><b>100% secure payments</b> <br/> we support cards, allets,EMI and COD</p>
      </div>

      <div>
          {mapIcons}
          <p><b>Vast service network</b><be/> 1000 MI service-centers across 600 cities</p>
      </div>
    </div>


    <div className='PreFooter2'>
       <div>
           <p>
               LET'S STAY IN TOUCH
           </p>
           <span>GeT updates on Sales specials and more</span>
       </div>

       <div>
           <input type="email" name="email" placeholder="Enter Email Address.." />
           {/* <button> ) </button> */}
           <span>Thanks. You're on our email list for special offers..</span>
       </div>
       
    <div>
        <p>
            FOLLOW MI
        </p>
        <span>WE want to hear from you!</span>
    </div>

    <div>
        {facebookIcon} {youtubeIcon} {instagramIcon} {twitterIcon}
    </div>


    </div>


    {/* <div className='LastFooter'>
        <b>Clone By Noman Ali fiverID(nomanali975)</b>
    </div> */}


    <div className='footer'>
       <div>
           <p>SUPPORT</p>
           {footer.support.map((item,index)=>(
               <a key={item.url} href={item.url}> {item.name} </a>
           ))}
       </div>


       <div>
           <p>SHOP AND LEARN</p>
           {footer.shopAndLearn.map((item,index)=>(
               <a key={item.url} href={item.url}> {item.name} </a>
           ))}
       </div>
   

    
        <div>
           <p>RETAIL STORE</p>
           {footer.retailStore.map((item,index)=>(
               <a key={item.url} href={item.url}> {item.name} </a>
           ))}
       </div>


       <div>
           <p>ABOUT</p>
           {footer.aboutUS.map((item , index)=>(
               <a key={item.url} href={item.url}> {item.name} </a>
           ))}
       </div>

       <div>
           <p>CONTACT US</p>
           {footer.contactUs.map((item , index)=>(
               <a key={item.url} href={item.url}> {item.name} </a>
           ))}
       </div>

       <div>
           <div>
               Chatwith our Virtual AI Bot (24/7 Live Agent Support)
              <div> <button>CHAT NOW</button></div>
           </div>
       </div>

    </div>
    
    <div className='footerBorder'>
       <div>
           Copyright &copy; 2018 - 2022. All Rights Reserved & Clone by Noman Ali FiverID (nomanali975)
       </div>
    </div>
    </>
  )
}

export default Footer