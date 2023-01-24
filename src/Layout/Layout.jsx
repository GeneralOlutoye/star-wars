/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BiMoviePlay } from 'react-icons/bi'
import { Menu } from 'antd';
import Logo from "../images/starwarsimg.png"
import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

export const Layout = ({ pageKey, pageTitle, pageUrl, tabName }) => {
    const [menuItems, setMenuItems] = useState([])
    const FetchMovie = async () => {
        const response = await axios.get('https://swapi.dev/api/films')
            .then(res => setMenuItems(res.data?.results))
            .catch(error => console.log(error))
        return response?.data
    }

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    const items = [
        getItem('Movie List', '1', <BiMoviePlay />,
            menuItems.map((menu, index) => (
                getItem(<Link to={pageUrl}>{menu.title}</Link>, index +2)
            )))
    ];

    useEffect(() => {
        FetchMovie()
    }, [])

    useLayoutEffect(() => {
        document.title = tabName
    }, [])

    return (
        <div className='h-screen grid grid-cols-[15rem_1fr]'>
            <div className='h-screen shadow-md'>
                <img src={Logo} alt="Logo" className='w-36 my-10 mx-auto' />
                <Menu
                    mode="inline"
                    items={items}
                    defaultOpenKeys={['1']}
                    defaultSelectedKeys={pageKey}
                />
            </div>
            <div>
                <header className='w-full shadow-md h-[4rem] flex justify-between items-center'>
                    <h1 className='font-bold text-lg ml-5'>{pageTitle}</h1>
                </header>
            </div>
        </div>
    )
}
