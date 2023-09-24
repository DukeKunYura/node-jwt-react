import { FC } from "react";

const Person: FC = () => {
    const persons: Array<string> = ["Ivan", "Fedot", "Gustav"];
    console.log(import.meta.env.VITE_TOKEN)

    interface PersonOne {
        name: string,
        surname: string,
        age: number
    }

    const text: string = "В OC Windows подключение к удаленным серверам по SSH возможно, например, с помощью клиента Putty. Скачать его можно здесь (ссылка взята с официального сайта). Putty не требует установки — чтобы начать с ним работать, достаточно просто распаковать скачанный архив. По завершении распаковки запустите файл puttygen.exe. Выберите тип ключа SSH-2 RSA и длину 2048 бит, а затем нажмите на кнопку Generate:";

    const cropText = (text: string, length: number = 120): string => {
        if (text.length <= length) {
            return text;
        }
        const croped = text.slice(0, length);
        // Проверка является ли последний символ пробелом
        if (croped.charAt(croped.length - 1) === ' ') {
            return croped.trim() + '...';
        }
        // Поиск последнего пробела и обрезка до него
        const lastSpaceIndex = croped.lastIndexOf(' ');
        return croped.slice(0, lastSpaceIndex).trim() + '...';
    }

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return String(`${day}. ${month}. ${year}`);
    }

    const setName = (name: string) => {

        const newPerson: PersonOne = {
            name,
            surname: "Ivanov",
            age: 30
        };
        return newPerson;
    }

    const personsList: Array<PersonOne> = [];
    for (let i = 0; i < persons.length; i++) {
        personsList.push(setName(persons[i]));
    }
    console.log(personsList);





    return (
        <div>Person Page
            {personsList.length > 0 && personsList.map(item => <div key={item.name}>{item.name}</div>)}
            {cropText(text)}
            {formatDate("2022-11-02 21:52:24+03:00")}
        </div>
    )
}
export default Person;