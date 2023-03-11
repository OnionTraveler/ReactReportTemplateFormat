import { useState, useEffect } from 'react';
import { HashRouter, Link, Switch, Route } from 'react-router-dom';
import './style.css';
import 'boxicons/css/boxicons.min.css';



function SideBar(props) {

    const sideBarItems = [
        {
            itemName: 'Home',
            itemIcon: (<i className='bx bx-grid-alt' />),
            itemHyperLink: '/',
            subItems: []
        },
        {
            itemName: 'Application1',
            itemIcon: (<i className='bx bx-collection' />),
            itemHyperLink: '#',
            subItems: [
                {
                    subItemName: 'Dashboard KPI',
                    subItemHyperLink: '/Application1/App1'
                },
                {
                    subItemName: 'Detail',
                    subItemHyperLink: '/Application1/App2'
                }
            ]
        },
        {
            itemName: 'Application2',
            itemIcon: (<i className='bx bx-collection' />),
            itemHyperLink: '#',
            subItems: [
                {
                    subItemName: 'Dashboard KPI',
                    subItemHyperLink: '/Application2/App1'
                },
                {
                    subItemName: 'Detail',
                    subItemHyperLink: '/Application2/App2'
                }
            ]
        },




        {
            itemName: 'Analytics',
            itemIcon: (<i className='bx bx-pie-chart-alt-2' />),
            itemHyperLink: '#',
            subItems: []
        },
        {
            itemName: 'Chart',
            itemIcon: (<i className='bx bx-line-chart' />),
            itemHyperLink: '#',
            subItems: []
        },
        {
            itemName: 'Plugins',
            itemIcon: (<i className='bx bx-plug' />),
            itemHyperLink: '#',
            subItems: [
                {
                    subItemName: 'Manual Trigger',
                    subItemHyperLink: '#'
                },
                {
                    subItemName: 'Other Systems',
                    subItemHyperLink: '#'
                },
                {
                    subItemName: 'Help',
                    subItemHyperLink: '#'
                }
            ]
        },
        {
            itemName: 'Explore',
            itemIcon: (<i className='bx bx-compass' />),
            itemHyperLink: '#',
            subItems: []
        },
        {
            itemName: 'History',
            itemIcon: (<i className='bx bx-history' />),
            itemHyperLink: '#',
            subItems: []
        },
        {
            itemName: 'Setting',
            itemIcon: (<i className='bx bx-cog' />),
            itemHyperLink: '#',
            subItems: []
        },
    ];


    useEffect(() => {
        let arrow = document.querySelectorAll(".arrow");
        for (var i = 0; i < arrow.length; i++) {
            arrow[i].addEventListener("click", (e) => {
                let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
                arrowParent.classList.toggle("showMenu");
            });
        }

        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".bx-menu");
        sidebarBtn.addEventListener("click", () => {
            sidebar.classList.toggle("close");
        });

        return () => {
            let arrow = document.querySelectorAll(".arrow");
            for (var i = 0; i < arrow.length; i++) {
                arrow[i].removeEventListener("click", (e) => {
                    let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
                    arrowParent.classList.toggle("showMenu");
                });
            }

            let sidebar = document.querySelector(".sidebar");
            let sidebarBtn = document.querySelector(".bx-menu");
            sidebarBtn.removeEventListener("click", () => {
                sidebar.classList.toggle("close");
            });
        };
    }, []);




    return (
        <>
            <div className="sidebar close">
                <div className="logo-details">
                    {/* <i className='bx bxl-c-plus-plus'></i> */}
                    <i className='bx bxs-hot'></i>
                    <span className="logo_name">HelloOnion</span>
                </div>
                <ul className="nav-links">
                    {
                        sideBarItems.map((item, index) => (
                            <li key={index}>
                                <div className={item.subItems.length === 0 ? null : "iocn-link"}>
                                    <Link to={item.itemHyperLink}>
                                        {item.itemIcon}
                                        <span className="link_name">{item.itemName}</span>
                                    </Link>
                                    <i className={item.subItems.length === 0 ? null : "bx bxs-chevron-down arrow"} ></i>
                                </div>
                                <ul className={item.subItems.length === 0 ? "sub-menu blank" : "sub-menu"}>
                                    <li><a className="link_name" href="#">{item.itemName}</a></li>
                                    {
                                        item.subItems.map((item, index) => (
                                            <Link to={item.subItemHyperLink} key={index}>
                                                <li>{item.subItemName}</li>
                                            </Link>
                                        ))
                                    }
                                </ul>
                            </li>
                        ))
                    }

                    <li>
                        <div className="profile-details">
                            <div className="profile-content">
                                <img src={require('./image/onion.png')} alt="profileImg" />
                            </div>
                            <div className="name-job">
                                <div className="profile_name">OnionTraveler</div>
                                <div className="job">Web Desginer</div>
                            </div>
                            <i className='bx bx-log-out' ></i>
                        </div>
                    </li>
                </ul>
            </div>
            <section className="home-section">
                <div className="home-content">
                    <i className='bx bx-menu' ></i>
                    {/* <span className="text">Drop Down Sidebar</span> */}
                </div>
                {props.children}
            </section>
        </>
    );
}

export default SideBar;
