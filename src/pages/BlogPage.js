import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function BlogPage() {
  return (
      <Router>
        <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
            Home
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
            About
          </Link>

          <Link to="/posts" style={{ padding: 5 }}>
            Posts
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />}>
            <Route path="" element={<PostLists />} />
            <Route path=":slug" element={<Post />} />
          </Route>
        </Routes>
      </Router>
    );

}

const BlogPosts = {
  '1': {
    title: '第一个博客Post',
    description: '第一个博客Post描述.'
  },
  '2': {
    title: '第二个博客Post',
    description: '第二个博客Post描述.'
  }
};

function PostLists() {
  return (
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title }]) => (
        <li key={slug}>
          <Link to={`/posts/${slug}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Post() {
  const BlogPosts = {
    "1": {
      title: "第一篇博客文章",
      description: "第一篇博客文章，是关于Vue3.0的"
    },
    "2": {
      title: "第二篇博客文章",
      description: "Hello React Router v6"
    }
  };

  const { slug } = useParams();
  const post = BlogPosts[slug];
  const { title, description } = post;
  return (
    <div style={{ padding: 20 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Posts() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Blog</h2>
      {/* 渲染任何匹配的子级 */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>在React中使用React Router v6 的指南</p>
    </div>
  );
}


function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>在React中使用React Router v6 的指南</p>
    </div>
  );
}

export default BlogPage;