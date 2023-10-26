

// const BlogPost = ({match}) => {
//   const postId = match.params.id;

//   const blogPost = blogData.find((post) => post.id === parseInt(postId, 10));

//   if (!blogPost) {
//     return <div>Blog post not Found!</div>;
//   }

//   return (
//     <div>
//       <Link to="/">Back to Blog</Link>
//       <h2>{blogPost.title}</h2>
//       <p>Author: {blogPost.author}</p>
//       <p>Date: {blogPost.date}</p>
//       <p>{blogPost.content}</p>
//     </div>
//   );
// };

// export default BlogPost