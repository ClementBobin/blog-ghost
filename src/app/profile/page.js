import './profileStyle.css'
import Avatar from './components/Avatar.jsx'
import PostRecent from './components/PostRecent'
import PostFeatured from './components/PostFeatured.jsx'

const posts = [
  {
      title : "hi NewYork",
      slug: 'javascript',
      link: 'www.gogle.com',
      datetime: '18-09-2023',
      image: '/postImage.jpg'
  },
  {
    title : "hello NewYork",
    slug: 'sql',
    link: 'www.google.com',
    datetime: '30-11-2023',
    image: '/postImage.jpg'
  }
];

const postsFeatured = [
  {
    title : "hello Featured NewYork",
    slug: 'Featured',
    link: 'www.google.com',
    datetime: '30-11-2023',
    image: '/postImage.jpg'
  }
];

export default function Profile() {
  return (
    <div id="page" className="site">
      <Avatar />
      <PostFeatured posts={postsFeatured} />
      <PostRecent posts={posts} />
    </div>
  )
}
