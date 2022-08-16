import {configureStore} from '@reduxjs/toolkit'
import Googlereducer from './Googlereducer'
export const store=configureStore(
    {reducer:{
        Googlereducer:Googlereducer
    }}
)