import { SideBar } from '../index.jsx';
import App1 from '../../Pages/Application1/App1/index.jsx';
import Home from '../../Pages/Home/index.jsx';
// import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';


function Layout() {
    return (
        <>
            <HashRouter>
                <SideBar>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/Application1/App1" element={<App1 />} />
                    </Routes>
                </SideBar>
            </HashRouter>
        </>
    );
}

export default Layout;
