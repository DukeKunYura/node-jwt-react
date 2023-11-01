import { FC, useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import DnDCard from '../../components/DnDCard';

const DnDPage: FC = () => {
    const role = useAppSelector((state) => state.auth.role);

    const columnStyle = {
        display: 'flex',
        margin: '6px',
        border: '1px solid',
        borderColor: 'gray',
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        flexDirection: 'column',
    } as const;

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
    );
};
export default DnDPage;
