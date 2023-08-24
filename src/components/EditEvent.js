import React , {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addMyEvent} from '../reduxslice/myeventslice';

export default function EditEvent({setIsedit}) {

    const dispatch = useDispatch()
    let newevent ={}

    const [name, setName] = useState('');
    const [organizer, setOrganizer] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [location, setLocation] = useState('');
    const [about, setAbout] = useState('');
    const [Imageurl, setImageurl] = useState('');


    const handleChangeItem =(event)=>{
        let name = event.target.name;
        let value = event.target.value;
        switch(name){
            case 'name' : 
                setName(value);
                break;
            case 'organizer' : 
                setOrganizer(value);
                break;
            case 'price' : 
                setPrice(value);
                break;
            case 'date' : 
                setDate(value);
                break;
            case 'time' : 
                setTime(value);
                break;
            case 'location' : 
                setLocation(value);
                break;
            case 'about' : 
                setAbout(value);
                break;
            case 'Imageurl' : 
                setImageurl(value);
                break;
            default:
                break;
                
        }
        
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        newevent.name= name
        newevent.organizer= organizer
        newevent.price= price
        newevent.date= date
        newevent.time= time
        newevent.location= location
        newevent.about= about
        newevent.Imageurl= Imageurl
        console.log(newevent)
        dispatch(addMyEvent(newevent));
        setIsedit(false)
    }

    const cancel=()=>{
      setIsedit(false)
  }
 

  return (
    <div>
    <div>
    <form onSubmit={handleSubmit}>
        <div className="p-5">
        <div className="row mb-2">
                <input type="text" className="form-control" 
                name='name' value={name} onChange={handleChangeItem}
                placeholder="Enter Event Name" aria-label="First name"/>
            </div>
            <div className="row mb-2">
                <input type="text" className="form-control" 
                name='organizer' value={organizer} onChange={handleChangeItem}
                placeholder="Enter Organizer/Organization" aria-label="Last name"/>
            </div>
            <div className="row mb-2">
                <input type="text" className="form-control" 
                name='price' value={price} onChange={handleChangeItem} 
                placeholder="Enter Price" aria-label="Last name"/>
            </div>
            <div className="row mb-2">
                <input type="text" className="form-control" 
                name='date' value={date} onChange={handleChangeItem} 
                placeholder="Enter Date" aria-label="Last name"/>
            </div>
            <div className="row mb-2">
                <input type="text" className="form-control" 
                name='time' value={time} onChange={handleChangeItem} 
                placeholder="Enter Time" aria-label="Last name"/>
            </div>
            <div className="row mb-2">
                <input type="text" className="form-control" 
                name='location' value={location} onChange={handleChangeItem} 
                placeholder="Enter Location" aria-label="Last name"/>
            </div>
            <div className="row mb-2">
                <input type="text" className="form-control" 
                name='about' value={about} onChange={handleChangeItem} 
                placeholder="Enter Description" aria-label="Last name"/>
            </div>
            <div className="row mb-2">
                <input type="text" className="form-control" 
                name='Imageurl' value={Imageurl} onChange={handleChangeItem} 
                placeholder="Enter Image URL" aria-label="Last name"/>
            </div>
        </div>
        <div className='row text-center mb-1'>
            <div className="col-12">
                <button type="submit"
                className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
        <div className='row text-center mb-1'>
            <div className="col-12">
                <button type="submit"
                className="btn btn-primary" onClick={cancel}>Cancel</button>
            </div>
            
        </div>
        
    </form>
</div>
</div>
  )
}