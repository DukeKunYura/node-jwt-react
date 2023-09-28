import { FC } from "react";
import { TUser } from "../interfaces/interfaces";

const PersonCard: FC<TUser> = ({ email, id, isActivated }) => {

    return (
        <tr>
            <td scope="row">{email}</td>
            <td>{id ? "да" : "нет"}</td>
            <td></td>
            <td>{isActivated ? "activated" : "not activated"}</td>
        </tr>

    )
}
export default PersonCard;