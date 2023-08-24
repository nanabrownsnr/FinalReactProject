import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEvents } from '../reduxslice/eventslice';
import EventItem from './EventItem';

export default function EventList() {

    const dispatch = useDispatch()
    const status = useSelector((state) => state.eventreducer.status);
    const events = useSelector((state) => state.eventreducer.events);
    useEffect(()=>{
      if(status==='idle'){
        console.log(content)
          dispatch(fetchEvents());
      }
    },[])
    let content = 'Hi there'
    if(status === 'loading'){
        console.log(content)
      content = "Loading...";
    }
    else if(status==='success'){
        console.log(content)
        content = (<div className='container'>
                  { events.map(event => <EventItem key={event.id} event={event}/>)}
              </div>
              )
              }
    return (

      <div> {content}

      </div>
    )
  }