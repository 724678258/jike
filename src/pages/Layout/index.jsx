import { request } from "@/utils"
import { useEffect } from "react"
const Layout = () => {
    useEffect(() => {
        request.get('/user/profile')
    }, [])
    return (
        <div>
            这里是Layout
        </div>
    )
}

export default Layout