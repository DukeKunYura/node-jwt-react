import { FC } from "react";
import { useGetAllUsersQuery } from "../../api/userApi";
import PersonCard from "../../components/PersonCard";
import Spinner from "../../components/Spinner";
import { useAppSelector } from "../../redux/hooks";

const PersonPage: FC = () => {
    const { data, isSuccess, isLoading } = useGetAllUsersQuery();
    const role = useAppSelector((state) => state.auth.role);
    const isActivated = useAppSelector((state) => state.auth.user.isActivated);


    console.log("person page")


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
                            <th ></th>
                            <th ></th>
                            <th ></th>
                            <th ></th>
                            <th ></th>
                            <th scope="col">id</th>
                            <th ></th>
                            <th scope="col">activated</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="container" style={{ overflowY: "scroll" }} >
                {isLoading && <Spinner />}
                <table className="table" >
                    <tbody >

                        {isSuccess && role !== "guest" && isActivated && data.map(item =>
                            <PersonCard
                                key={item.email}
                                email={item.email}
                                id={item.id}
                                isActivated={item.isActivated}
                            />)}
                    </tbody>
                </table>
            </div>
        </>

    )
}
export default PersonPage;