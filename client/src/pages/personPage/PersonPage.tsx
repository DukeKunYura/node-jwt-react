import { FC } from "react";
import { useGetAllUsersQuery } from "../../api/userApi";
import PersonCard from "../../components/PersonCard";
import Spinner from "../../components/Spinner";
import { useAppSelector } from "../../redux/hooks";

const PersonPage: FC = () => {
    const { data, isSuccess, isLoading } = useGetAllUsersQuery();
    const role = useAppSelector((state) => state.auth.role);
    const isActivated = useAppSelector((state) => state.auth.user.isActivated);

    return (
        <>
            <div className="container" >
                <table className="table caption-top" >
                    <caption>
                        {"List of users: " + data?.length + " accounts "}
                    </caption>
                    <thead>
                        <tr>
                            <th scope="col">email</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>id</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th scope="col">activated</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="container" style={{ overflowY: "scroll" }} >
                {isLoading && <Spinner />}
                <table className="table table-striped" >
                    <tbody >
                        {isSuccess && role !== "guest" && isActivated && data.map(item =>
                            <PersonCard
                                key={item.email}
                                email={item.email}
                                _id={item._id}
                                isActivated={item.isActivated}
                            />)}
                    </tbody>
                </table>
            </div>
        </>

    )
}
export default PersonPage;