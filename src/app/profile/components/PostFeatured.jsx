import Image from 'next/image'

export default function PostFeatured({posts}) {
    console.log(posts)
  return (
    <main id="main" className="content">
        {posts.map((post) => (<PostCard post={post} key={post.title} />))}
    </main>
  )
}

function PostCard({post}) {
  return (
    <div className="featured-posts outer">
        <article className="post tag-javascript featured post-featured inner">
            <header className="post-header">
                <div className="post-meta">
                    <span className="post-featured-badge">Featured</span> # <time className="published" dateTime={post.datetime}>{post.datetime}</time>
                </div>
                <h2 className="post-title"><a href={post.link}>{post.title}</a></h2>
            </header>
            <a href={post.link} className="post-thumbnail">
                <Image className="post-thumbnail-image" width="1100" height='1100' src={post.image} alt="Choosing the Best Front-end Framework" />
            </a>
            <div className="post-content">
                <p className="post-excerpt post-excerpt-dots">In computer science, a software framework is an abstraction in which software providing generic functionality can be selectively changed by additional user-written code, thus providing application-specific software. A software framework provides a standard way to build and deploy applications. “Walking</p>
                <p className="post-tags"><a href={`/tag/${post.slug}/`}>{post.slug}</a></p>
                <p className="post-read-more"><a className="btn" href={post.link}>Continue Reading</a></p>
            </div>
        </article>
    </div>
  )
}