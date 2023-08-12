import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import Swal from 'sweetalert2'
import Spinner from "../pages/Spinner/Spinner";
import { AuthContext } from "../pages/Provider/AuthProvider";


// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user);
    if (loading) {
        return <Spinner></Spinner>
    }

    if (user) {

        return children;
    }

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to log in first to view',
        footer: '<a href="">Why do I have this issue?</a>'
    })

    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivetRoute;