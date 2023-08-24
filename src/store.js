import {configureStore} from '@reduxjs/toolkit';
import eventreducer from './reduxslice/eventslice';
import userreducer from './reduxslice/userslice'
import myeventreducer from './reduxslice/myeventslice';
export default configureStore({
    reducer:{
        eventreducer,
        userreducer,
        myeventreducer,
    }
});