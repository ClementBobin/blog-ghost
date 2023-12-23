import Image from "next/image"

export default function Profile() {
  return (
    <div>
        <div id="page" className="site">
            <div className="hero">
                <div className="hero-bg" style="background-image: url(https://horace.justgoodthemes.com/content/images/2023/08/bc_1.jpg)"></div>
                    <section className="hero-container outer">
                        <div className="hero-content inner">
                            <div className="hero-avatar">
                                <Image src="https://horace.justgoodthemes.com/content/images/2023/08/authorimage.jpg" alt="Author image" width="130px" height="130px" className="avatar" />
                            </div>
                            <h2 className="hero-title h1">Hi there!</h2>
                            <p className="hero-text">My name is Daniel Bennett. I&#x27;m a freelance front-end developer, author and speaker based in Austin, TX. It&#x27;s nice to meet you.</p>
                            <div className="hero-social">
                                <div className="social-links">
                                    <a href="https://www.facebook.com/ghost" className="btn btn-icon btn-secondary" target="_blank" rel="noopener">
                                        <span className="screen-reader-text">Facebook</span>
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/></svg>    
                                    </a>
                                    <a href="https://twitter.com/ghost" className="btn btn-icon btn-secondary" target="_blank" rel="noopener">
                                        <span className="screen-reader-text">Facebook</span>
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/></svg>    
                                    </a>
                                </div>            
                            </div>
                        </div>
                    </section>
                </div>
            <main id="main" className="content">
                <div className="featured-posts outer">
                    <article className="post tag-javascript featured post-featured inner">
                        <header className="post-header">
                            <div className="post-meta">
                                <span className="post-featured-badge">Featured</span> &sol; <time className="published" datetime="2023-08-18">August 18, 2023</time>
                            </div>
                            <h2 className="post-title"><a href="/choosing-the-best-front-end-framework/">Choosing the Best Front-end Framework</a></h2>
                        </header>
                        <a href="/choosing-the-best-front-end-framework/" className="post-thumbnail">
                            <Image className="post-thumbnail-image" sizes="(max-width: 1140px) 94vw, 1100px" src="https://horace.justgoodthemes.com/content/images/size/w1100/2023/08/1.jpg" alt="Choosing the Best Front-end Framework" />
                        </a>
                        <div className="post-content">
                            <p className="post-excerpt post-excerpt-dots">In computer science, a software framework is an abstraction in which software providing generic functionality can be selectively changed by additional user-written code, thus providing application-specific software. A software framework provides a standard way to build and deploy applications. “Walking</p>
                            <p className="post-tags"><a href="/tag/javascript/">JavaScript</a></p>
                            <p className="post-read-more"><a className="btn" href="/choosing-the-best-front-end-framework/">Continue Reading</a></p>
                        </div>
                    </article>
                </div>
            <div className="post-feed-header outer">
                <div className="post-feed-title small-title inner">Latest Articles</div>
            </div>
            <div className="outer">
                <div className="post-feed inner-wide">
                    <article className="post inner">
                        <header className="post-header">
                            <div className="post-meta">
                                <time className="published" datetime="2023-08-20">August 20, 2023</time>
                            </div>
                            <h2 className="post-title h3"><a href="/the-advantages-disadvantages-of-working-from-home/">The Advantages &amp; Disadvantages of Working from Home</a></h2>
                        </header>
                        <a href="/the-advantages-disadvantages-of-working-from-home/" className="post-thumbnail"><img className="post-thumbnail-image" src="https://horace.justgoodthemes.com/content/images/size/w800/2023/08/4.jpg" alt="The Advantages &amp; Disadvantages of Working from Home" /></a>
                        <div className="post-content">
                            <p className="post-excerpt post-excerpt-dots">A work at home parent is an entrepreneur who works from home and integrates parenting into his or her business activities. They are sometimes referred to as a WAHM (work at home mom) or a WAHD (work at home dad)</p>
                        </div>
                    </article>
                </div>
                <nav className="pagination inner">
                    <div className="nav-links">
                        <span className="page-number">Page 1 of 1</span>
                    </div>
                </nav>
            </div>
        </main>
    </div>
    <div className="site-overlay"></div>
    <aside className="sidebar">
        <div className="sidebar-scrollable">
            <div className="sidebar-inside">
                <button id="sidebar-hide" className="sidebar-toggle btn btn-icon"><span className="screen-reader-text">Close Sidebar</span><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.419 4.439l7.561 7.561-7.561 7.561c-0.559 0.559-0.559 1.463 0 2.020s1.463 0.559 2.020 0l7.561-7.561 7.561 7.561c0.559 0.559 1.463 0.559 2.020 0s0.559-1.463 0-2.020l-7.561-7.561 7.561-7.561c0.559-0.559 0.559-1.463 0-2.020s-1.463-0.559-2.020 0l-7.561 7.561-7.561-7.561c-0.559-0.559-1.463-0.559-2.020 0s-0.559 1.463 0 2.020z"></path></svg></button>
                <nav id="sidebar-nav" className="widget widget-nav">
                    <h2 className="widget-title small-title">Explore Site</h2>
                        <ul className="menu">
                            <li className="menu-item menu-item-home current-menu-item"><a href="https://horace.justgoodthemes.com/">Home</a></li>
                            <li className="menu-item menu-item-about"><a href="https://horace.justgoodthemes.com/about/">About</a></li>
                            <li className="menu-item menu-item-style-guide"><a href="https://horace.justgoodthemes.com/style-guide/">Style Guide</a></li>
                            <li className="menu-item menu-item-ghost-hosting"><a href="https://ghost.org/pricing/?via=tomas40">Ghost hosting</a></li>
                        </ul>
                        <ul className="actions">
                            <li className="action-item action-button"><a className="btn" href="javascript:" data-portal="signup">Subscribe</a></li>
                        </ul>
                    </nav>
                    <section className="widget widget-text">
                        <h2 className="widget-title small-title">About Horace</h2>
                        <p>Horace is a simple Ghost theme for writers and bloggers. Explore it yourself. Feedback, questions, or ideas? Drop us a line via email.</p>
                    </section>
                    <section className="widget widget-recent-posts">
                        <h2 className="widget-title small-title">Recent Articles</h2>
                        <ul>
                        <li>
                            <div className="post-header">
                                <div className="post-meta">
                                    <time className="published" datetime="2023-08-20">August 20, 2023</time>
                                </div>
                                <h3 className="post-title"><a href="/the-advantages-disadvantages-of-working-from-home/">The Advantages &amp; Disadvantages of Working from Home</a></h3>
                            </div>
                            <a href="/the-advantages-disadvantages-of-working-from-home/" className="post-thumbnail"><img className="post-thumbnail-image" src="/content/images/size/w150/2023/08/4.jpg" alt="The Advantages &amp; Disadvantages of Working from Home" /></a>
                        </li>
                        <li>
                            <div className="post-header">
                                <div className="post-meta">
                                    <time className="published" datetime="2023-08-20">August 20, 2023</time>
                                </div>
                                <h3 className="post-title"><a href="/learning-javascript-design-patterns/">Learning JavaScript Design Patterns</a></h3>
                            </div>
                            <a href="/learning-javascript-design-patterns/" className="post-thumbnail"><img className="post-thumbnail-image" src="/content/images/size/w150/2023/08/5.jpg" alt="Learning JavaScript Design Patterns" /></a>
                        </li>
                        <li>
                            <div className="post-header">
                                <div className="post-meta">
                                    <time className="published" datetime="2023-08-18">August 18, 2023</time>
                                </div>
                                <h3 className="post-title"><a href="/how-to-start-learning-blockchain-development/">How To Start Learning Blockchain Development</a></h3>
                            </div>
                            <a href="/how-to-start-learning-blockchain-development/" className="post-thumbnail"><img className="post-thumbnail-image" src="/content/images/size/w150/2023/08/3.jpg" alt="How To Start Learning Blockchain Development" /></a>
                        </li>
                    </ul>
                </section>
                <section className="widget widget-tagcloud">
                    <h2 className="widget-title small-title">Tags</h2>
                    <div className="tagcloud">
                        <a href="/tag/tips/">Tips</a><a href="/tag/javascript/">JavaScript</a><a href="/tag/news/">News</a>
                    </div>
                </section>
            </div>
        </div>
    </aside>
    </div>
  )
}
