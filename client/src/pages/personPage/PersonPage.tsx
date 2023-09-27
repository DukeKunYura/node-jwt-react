import { FC } from "react";
import { useGetAllUsersQuery } from "../../api/userApi";
import PersonCard from "../../components/PersonCard";
import Spinner from "../../components/Spinner";

const PersonPage: FC = () => {
    const { data, isSuccess, isLoading } = useGetAllUsersQuery();
    console.log("person page")


    return (
        <div>Person Page
            {isLoading && <Spinner />}
            {isSuccess && data.map(item =>
                <PersonCard
                    key={item.email}
                    email={item.email}
                    id={item.id}
                    isActivated={item.isActivated}
                />)}
        </div>
    )
}
export default PersonPage;