
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {deleteMyEvent} from '../reduxslice/myeventslice';








export default function MyEventItem({myevent}) {

const dispatch = useDispatch()
const state = useSelector((state) => state.myeventreducer)
const status = state.status;


const deleteEvent = (myeventid)=>
{
  console.log(myeventid)
  console.log("deleted")

  dispatch(deleteMyEvent(myeventid));
  if(status === 'success'){
    console.log("Success...")

     }
  else if(status==='error'){
      console.log("Success...")

    } 

}

  


  return (
    <div className="container mt-3">

      {myevent !== undefined ? (
        <div className="row mt-5">
          <div className="col-md-6">
            <p>
              <img src={myevent.Imageurl} className="img-fluid"/>
            </p>
          </div>
          <div className="col-md-6">
          <h1>{myevent.name}</h1>
            <h4>{myevent.organizer}</h4>
            <h4>{myevent.date}</h4>
            <h5>{myevent.time}</h5>
            <h6>Location: {myevent.location}</h6>
            <h6>Description: {myevent.about}</h6>
            <h6>{myevent.about}</h6>
            <h6>{myevent.price}</h6>
            <br></br>
            <div className="d-grid gap-2 col-6">
              <button class="btn btn-danger" onClick={()=>{deleteEvent(myevent.id)}} >Delete</button>
            </div>
          </div>
        </div>)
         : 
         (<div>No item yet</div>)}
    </div>
  );
}