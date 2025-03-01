import React, {FC, ReactNode, useEffect, useState} from 'react';
import {Header} from '../header/Header';
import {Sidebar} from '../sidebar/Sidebar';
import {PATH} from '../Pages';
import {useLocation} from 'react-router-dom';
import s from './Layout.module.css';


type PropsType = {
    children: ReactNode
}

export const Layout: FC<PropsType> = ({children}) => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const location = useLocation();
    const currentPath = location.pathname;

    const pageName =
        currentPath === PATH.PRE_JUNIOR
            ? 'Pre-junior'
            : currentPath === PATH.JUNIOR
                ? 'Junior'
                : currentPath === PATH.JUNIOR_PLUS
                    ? 'Junior Plus'
                    : 'Error';
    useEffect(() => {
        open && (document.body.style.overflow = 'hidden');
        !open && (document.body.style.overflow = 'unset');
    }, [open]); // отключает прокрутку при открытом меню

    return (
        <>
            {!open ? (<Header handleOpen={handleOpen}/>) : (<Sidebar open={open} handleClose={handleClose}/>)}
            <div>
                {/*страницы*/}
                {open ? (<h1 className={s.title}>{pageName}</h1>) : (<></>)}
                {children}
            </div>
        </>
    );
};
