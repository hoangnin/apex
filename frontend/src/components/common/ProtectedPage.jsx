import  {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthModalOpen } from "../../redux/features/authModalSlice"
import { useNavigate } from 'react-router'
import { Typography } from '@mui/material'

const ProtectedPage = ({children}) => {

    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.user)
    useEffect(() => {
        dispatch(setAuthModalOpen(!user))
    },[user,dispatch])
    return (
        user ? children : null
    )
}

export default ProtectedPage