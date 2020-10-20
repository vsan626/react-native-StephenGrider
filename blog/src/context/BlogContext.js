import React, { useReducer } from 'react';
import createDataContext from './createDataContext';
//! context helps the application communicate/move data or state still created / stored with hooks. Created a generic createContext for future data types / states to use
// const BlogContext = React.createContext()

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'add_blogpost' });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);

//#region
// export const BlogProvider = ({ children }) => {
//   //! children is essentially the different components / nested components. EX App.js's App
//   const [blogPosts, dispatch] = useReducer(blogReducer, []);

//   //! below used when using useState
//   //#region
//   // const addBlogPost = () => {
//   //   setBlogPosts([
//   //     ...blogPosts,
//   //     { title: `Blog Post #${blogPosts.length + 1}` }
//   //   ]);
//   // };
//   //#endregion

//   return (
//     <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

// export default BlogContext;
//#endregion
