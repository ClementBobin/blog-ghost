import React, { useContext } from 'react'

import Link from 'next/link'
import '../src/app/profile/profileStyle.css'

const categories = [{name: 'React', slug: 'react'}, {name: 'Web Developement', slug: 'web-dev'}]

export default function Header() {
  return (
    <nav className='navbar outer'>
        <div className="navbar-inside">
            <div className="navbar-branding">
                <Link href="/">
                    <span className="navbar-title">
                        Blog
                    </span>
                </Link>
            </div>
            <div className="navbar-menu">
                <ul class="menu">
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className="menu-item">
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </ul>
                <ul class="actions">
                     <li class="action-item action-subscribe">
                        <a href="javascript:" data-portal="signup">Subscribe</a>
                    </li>
                    <li class="action-item">
                        <a href="/api/auth/login" data-portal="signin">Sign in</a>
                    </li>
                    <li class="action-item action-button">
                        <button class="sidebar-toggle btn btn-icon"><span class="screen-reader-text">Menu</span><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 12c0-0.69-0.281-1.316-0.732-1.767s-1.077-0.732-1.767-0.732-1.316 0.281-1.767 0.732-0.732 1.077-0.732 1.767 0.281 1.316 0.732 1.767 1.077 0.732 1.767 0.732 1.316-0.281 1.767-0.732 0.732-1.077 0.732-1.767zM23.249 12c0-0.69-0.281-1.316-0.732-1.767s-1.077-0.732-1.767-0.732-1.316 0.281-1.767 0.732-0.732 1.077-0.732 1.767 0.281 1.316 0.732 1.767 1.077 0.732 1.767 0.732 1.316-0.281 1.767-0.732 0.732-1.077 0.732-1.767zM5.75 12c0-0.69-0.281-1.316-0.732-1.767s-1.077-0.732-1.767-0.732-1.316 0.281-1.767 0.732-0.732 1.077-0.732 1.767 0.281 1.316 0.732 1.767 1.077 0.732 1.767 0.732 1.316-0.281 1.767-0.732 0.732-1.077 0.732-1.767z"></path></svg></button>
                    </li>
                    <li class="action-item action-button">
                        <button class="search-toggle btn btn-icon" data-ghost-search><span class="screen-reader-text">Search</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.38,21.62l-6.53-6.53a9.15,9.15,0,0,0,1.9-5.59,9.27,9.27,0,1,0-3.66,7.36l6.53,6.53a1.26,1.26,0,0,0,1.76,0A1.25,1.25,0,0,0,23.38,21.62ZM2.75,9.5A6.75,6.75,0,1,1,9.5,16.25,6.76,6.76,0,0,1,2.75,9.5Z"></path></svg></button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
