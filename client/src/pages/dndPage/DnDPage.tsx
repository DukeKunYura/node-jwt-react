import { DetailedHTMLProps, FC, HTMLAttributes, useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import DnDCard from "../../components/DnDCard";

const DnDPage: FC = () => {
    const role = useAppSelector((state) => state.auth.role);

    const columnStyle = {
        "display": "flex",
        "margin": "6px",
        "border": "1px solid",
        "borderColor": "gray",
        "backgroundColor": "whitesmoke",
        "alignItems": "center",
        "flexDirection": "column"

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

    const checkerHard = (arr: number[]) => {
        const uniqueElements: { [key: number]: boolean } = {};
        const result: number[] = [];

        for (const num of arr) {
            if (!uniqueElements[num]) {
                uniqueElements[num] = true;
                result.push(num);
            }
        }

        return result;
    };

    const checkerLight = (arr: number[]) => {
        const counts: { [key: number]: number } = {};
        const result: number[] = [];

        for (const num of arr) {
            counts[num] = (counts[num] || 0) + 1;
        }

        for (const num of arr) {
            if (counts[num] === 1) {
                result.push(num);
            }
        }

        return result;
    };

    const result = checkerLight(arr);

    console.log("result: " + result);

    type TUuu = string | number | null;

    const uuu: TUuu = "5";

    const testFun = (uuu: number) => {
        console.log(uuu);
    }

    testFun(uuu as unknown as number);

    useEffect(() => {
        const list = document.querySelector("h3");
        const el = document.createElement("a");
        el.textContent = "DnD test";
        list?.appendChild(el);

    }, [])

    return (
        <>
            <div className="container">
                <h3></h3>
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