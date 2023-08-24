import React from "react";
import { useSelector } from 'react-redux'



export default function EventItem({event}) {
  const isLoggedIn = useSelector((state)=> state.userreducer.isLoggedIn);

  const addtoCart = ()=>
{
    alert('Ticket Reserved')
}
  return (
    <div className="container mt-3">

      {event !== undefined ? (
        <div className="row mt-5">
          <div className="col-md-6">
            <p>
              <img src={event.Imageurl} className="img-fluid"/>
            </p>
          </div>
          <div className="col-md-6">
            <h1>{event.name}</h1>
            <h4>{event.organizer}</h4>
            <h4>{event.date}</h4>
            <h5>{event.time}</h5>
            <h6>Location: {event.location}</h6>
            <h6>Description: {event.about}</h6>
            <h6>{event.about}</h6>
            <h6>{event.price}</h6>
            <br></br>
            {isLoggedIn &&   <div class="d-grid gap-2 col-6">
              {/* <button class="btn btn-primary" type="button">Details</button> */}
              <button class="btn btn-primary" type="button" onClick={()=>{addtoCart()}}>Reserve Ticket</button>
            </div>}
          

          </div>
        </div>)
         : 
         (<div>No item yet</div>)}
    </div>
  );
}