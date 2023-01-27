/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { BiMoviePlay } from 'react-icons/bi'
import { BsMenuButtonWide } from 'react-icons/bs'
import { Drawer, Menu } from 'antd';
import Logo from "../images/starwarsimg.png"
import { useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const Layout = (props) => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    const menuItem = [
        {
            key: '2',
            url: '/',
            name: 'A New Hope'
        },
        {
            key: '3',
            url: '/empire-strikes-back',
            name: 'The Empire Strikes Back'
        },
        {
            key: '4',
            url: '/return-of-the-jedi',
            name: 'Return of the Jedi'
        },
        {
            key: '5',
            url: '/phantom-menace',
            name: 'The Phantom Menace'
        },
        {
            key: '6',
            url: '/attack-of-the-clones',
            name: 'Attack of the Clones'
        },
        {
            key: '7',
            url: '/revenge-of-the-sith',
            name: 'Revenge of the Sith'
        },
    ]


    const items = [
        getItem('Movie List', '1', <BiMoviePlay />,
            menuItem.map((menu) => (
                getItem(<NavLink to={menu.url}>{menu.name}</NavLink>, menu.key)
            ))
        )
    ];

    useLayoutEffect(() => {
        document.title = props.tabName
    }, [])

    return (
        <div className='h-screen grid grid-cols-1 lg:grid-cols-[15rem_1fr]'>
            <div className='h-screen shadow-md hidden lg:block overflow-auto'>
                <img src={Logo} alt="Logo" className='w-36 my-10 mx-auto' />
                <Menu
                    mode="inline"
                    items={items}
                    defaultOpenKeys={['1']}
                    defaultSelectedKeys={props.pageKey}
                />
            </div>
            <Drawer placement="right" onClose={onClose} open={open} width={'70%'}>
                <Menu
                    mode="inline"
                    items={items}
                    defaultOpenKeys={['1']}
                    defaultSelectedKeys={props.pageKey}
                />
            </Drawer>
            <div className='overflow-auto'>
                <header className='w-full shadow-md h-[4rem] flex justify-between items-center px-5 lg:px-0'>
                    <h1 className='font-bold text-lg lg:m-auto text-blue-600'>{props.pageTitle}</h1>
                    <BsMenuButtonWide onClick={showDrawer} className='block lg:hidden text-xl' />
                </header>
                <main className='m-[1rem] lg:m-[2rem]'>{props.children}</main>
            </div>
        </div>
    )
}