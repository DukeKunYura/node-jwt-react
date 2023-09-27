import { FC } from "react";
import { TUser } from "../interfaces/interfaces";

const PersonCard: FC<TUser> = ({ email, id, isActivated }) => {

    return (
        <div>
            {email}
        </div>
    )
}
export default PersonCard;