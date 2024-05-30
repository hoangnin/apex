import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setAppState } from "../../redux/features/appStateSlice"

const PageWrapper = ({ state, children }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0,0);
        dispatch(setAppState(state))
    }, [state, dispatch]);
    return (
        children
    )
}

export default PageWrapper