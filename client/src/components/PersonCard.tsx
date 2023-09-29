import { FC } from "react";
import { TUser } from "../interfaces/interfaces";

const PersonCard: FC<TUser> = ({ email, _id, isActivated }) => {

    return (
        <tr>
            <td scope="row">{email}</td>
            <td>{_id}</td>
            <td>{isActivated ? "activated" : "not activated"}</td>
        </tr>

    )
}
export default PersonCard;