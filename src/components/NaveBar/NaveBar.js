import React from 'react'
import './NaveBar.css'


const NaveBar = () => {
    return (
        <header className="navigation">
            <div id="navbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg px-0 py-4">
                                <a className="navbar-brand" href="/login">
                                    Wi<span>Sys</span>
                                </a>

                                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09"
                                    aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="fa fa-bars"></span>
                                </button>

                                <div className="collapse navbar-collapse text-center" id="navbarsExample09">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="index.html">Home</a>
                                        </li>
                                        <li className="nav-item dropdown @@about">
                                            <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About <i class="fas fa-chevron-down small"></i></a>
                                            <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                                <li><a className="dropdown-item @@company" href="about.html">Our company</a></li>
                                                <li><a className="dropdown-item @@pricing" href="pricing.html">Pricing</a></li>

                                                <li className="dropdown dropdown-submenu dropright">
                                                    <a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0301" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>

                                                    <ul className="dropdown-menu" aria-labelledby="dropdown0301">
                                                        <li><a className="dropdown-item" href="index.html">Submenu 01</a></li>
                                                        <li><a className="dropdown-item" href="index.html">Submenu 02</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item @@service"><a className="nav-link" href="/login">Login</a></li>
                                        <li className="nav-item @@project"><a className="nav-link" href="project.html">Portfolio</a></li>
                                        <li className="nav-item dropdown @@blog">
                                            <a className="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <i class="fas fa-chevron-down small"></i></a>
                                            <ul className="dropdown-menu" aria-labelledby="dropdown05">
                                                <li><a className="dropdown-item @@blogGrid" href="blog-grid.html">Blog Grid</a></li>
                                                <li><a className="dropdown-item @@blogSidebar" href="blog-sidebar.html">Blog with Sidebar</a></li>
                                                <li><a className="dropdown-item @@blogSingle" href="blog-single.html">Blog Single</a></li>

                                                <li className="dropdown dropdown-submenu dropleft">
                                                    <a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0501" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>

                                                    <ul className="dropdown-menu" aria-labelledby="dropdown0501">
                                                        <li><a className="dropdown-item" href="index.html">Submenu 01</a></li>
                                                        <li><a className="dropdown-item" href="index.html">Submenu 02</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item @@contact"><a className="nav-link" href="contact.html">Contact</a></li>
                                    </ul>

                                   
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NaveBar