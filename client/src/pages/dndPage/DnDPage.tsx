import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import DnDCard from "../../components/DnDCard";

const DnDPage: FC = () => {
    const role = useAppSelector((state) => state.auth.role);

    const columnStyle = {
        "display": "flex",
        "flexDirection": "column",
        "margin": "6px",
        "border": "1px solid",
        "borderColor": "gray",
        "backgroundColor": "whitesmoke",
        "alignItems": "center"
    };

    const arr = [1, 7, 6, 7, 8, 1, 5, 4];

    const checker = (arr: number[]) => {
        let newArr: number[] = [];
        for (let i = 0; i < arr.length; i++) {
            if (!newArr.includes(arr[i])) {
                newArr.push(arr[i])
            } else {
                let index = newArr.indexOf(arr[i]);
                delete newArr[index];
            }
        }
        return newArr.filter(el => el !== null);
    };

    const result = checker(arr);

    console.log("result: " + result);

    return (
        <>
            <div className="container">
                <br />
                <div className="row align-items-start">
                    <div className="col" style={columnStyle}>
                        <br />
                        <h4>First section</h4>
                        <DnDCard />
                        <DnDCard />
                        <DnDCard />
                    </div>
                    <div className="col" style={columnStyle}>
                        <br />
                        <h4>Second section</h4>
                        <DnDCard />
                    </div>
                    <div className="col" style={columnStyle}>
                        <br />
                        <h4>Third section</h4>
                        <DnDCard />
                        <DnDCard />
                    </div>
                </div>

            </div>
        </>

    )
}
export default DnDPage;