import { useLoaderData } from "react-router-dom";

const Profile = () => {
    const detail = useLoaderData()
    console.log(detail)

    const { candidateName } = detail
    return (
        <div>
            {candidateName}
        </div>
    );
};

export default Profile;