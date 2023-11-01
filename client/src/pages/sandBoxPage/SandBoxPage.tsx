import { FC, useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';

const SandBoxPage: FC = () => {
    const role = useAppSelector((state) => state.auth.role);
    const [upd, setUpd] = useState(false);

    {
        class User {
            private name: string;
            private surname: string;
            constructor(name: string, surname: string) {
                this.name = name;
                this.surname = surname;
            }
            get fullName() {
                return this.name + ' ' + this.surname;
            }

            set fullName(fullName: string) {
                [this.name, this.surname] = fullName.split(' ');
            }
        }

        const userIvan = new User('Иван', 'Иванов');

        userIvan.fullName = 'Georg Petrov';

        console.log(userIvan.fullName);

        let userDaniil = {
            name: 'Daniil',
            surname: 'Petrov',
        };

        userDaniil.name = 'DD';
    }

    const arr = [1, 7, 6, 7, 8, 1, 5, 4];

    const checker = (arr: number[]) => {
        let newArr: number[] = [];
        for (let i = 0; i < arr.length; i++) {
            if (!newArr.includes(arr[i])) {
                newArr.push(arr[i]);
            } else {
                let index = newArr.indexOf(arr[i]);
                delete newArr[index];
            }
        }
        return newArr.filter((el) => el !== null);
    };

    const checkerLight = (arr: number[]) => {
        console.log('checker');
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

    const mapperLight = () => {
        return checkerLight(arr).map((item) => <p key={item}>{item}</p>);
    };

    const memoResult = useMemo(mapperLight, []);

    console.log('DnDPage render');

    useEffect(() => {
        const list = document.querySelector('h3');
        const el = document.createElement('a');
        el.textContent = 'test';
        list?.appendChild(el);
    }, []);

    return (
        <>
            <div className="container">
                <h3></h3>
                {memoResult}
                <button
                    onClick={() => {
                        setUpd(!upd);
                    }}
                >
                    upd
                </button>
            </div>
        </>
    );
};
export default SandBoxPage;
