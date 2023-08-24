import React, { useEffect,useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchMyEvents} from '../reduxslice/myeventslice';
import MyEventItem from './MyEventItem';
import EditEvent from './EditEvent';




export default function MyEventList() {

  const [isedit, setIsedit] = useState(false)

  const createEvent = ()=>
{
    setIsedit(true)
}

const cancel=()=>{
    setIsedit(false)
}

const dispatch = useDispatch()
const status = useSelector((state) => state.myeventreducer.status);
const myevents = useSelector((state) => state.myeventreducer.myevents);


useEffect(()=>{
  if(status==='idle'){
      dispatch(fetchMyEvents());
  }
},[dispatch, status])

let content = 'Hi there'
if(status === 'loading'){
   content = 'loading'
    console.log(content)
}
else if(status==='success'){

    content = (<div className='container'>
              { myevents.map(myevent => <MyEventItem key={myevent.id} myevent={myevent}/>)}
          </div>
          )
          }
return (


  <div> 
    <div className="container mt-3">
    <button class="btn btn-primary" onClick={createEvent}>Create Event</button>
    </div>
    
    {isedit && <EditEvent cancel={cancel} setIsedit={setIsedit}/>}

    {content}

  </div>
)
  }