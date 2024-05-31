import HomePage from "../pages/HomePage"
import Profile from "../pages/Profile"
import ChangePassword from "../pages/ChangePassword"
import Voucher from "../pages/Voucher"
import ProtectedPage from "../components/common/ProtectedPage"
import Blog from "../pages/Blog"
import Add from "../components/common/Add"
import AddPost from "../components/common/AddPost"
import DetailPost from "../pages/DetailPost"

export const routesGen = {
    home: "/",
    profile: "/profile",
    voucher: "/vouchers",
    passwordChange: "/password-change",
    history: "/history",
    blog: "/blog",
    post: "/post",
    detailPost:(id)=> `/post/${id}`
};

const routes = [
    {
        index: true,
        element: <HomePage />,
        state: "home"
    },
    {
        path: "/profile",
        element: 
        <ProtectedPage>
            <Profile />
        </ProtectedPage>
        ,
        state: "profile"
    },
    {
        path: "/vouchers",
        element: <ProtectedPage>
            <Voucher />
        </ProtectedPage>,
        state: "voucher"
    },
    {
        path: "/password-change",
        element: (
                <ProtectedPage>
                    <ChangePassword />
                </ProtectedPage>
        ),
        state: "password.change"
    },
    {
        path: "/history",
        element: <ProtectedPage>
        <Voucher />
    </ProtectedPage>,
        state: "history"
    },
    {
        path: "/blog",
        element: <Blog />,
        state: "blog"
    },
    {
        path: "/post",
        element: <AddPost />,
        state: "post"
    },
    ,
    {
        path: "/post/:postId",
        element: <DetailPost />,
        state: "detail_post"

    }
];

export default routes;