import React from 'react';
import Footer from '../Footer/Footer';
import image from '../../images/blog.jpg'
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <div className="row gx-5">
                <div className="col-lg-7">
                    <img className=' img-fluid imgHead w-100 mx-auto' src={image} alt="" />
                </div>
                <div className="col-lg-5 bTitle">
                    <h1>
                        WELCOME TO OUR
                    </h1>
                    <h1>
                        <span style={{ color: '#FF4F5A' }}>BLOG</span> PAGE...
                    </h1>
                    <a href='#blog' className='btn btBlog my-2'>Blogs</a>

                </div>

                <section id='blog'>
                    <h3 className='my-5'>Blogs</h3>
                    <div className='w-75 mx-auto my-3'>
                        <h3>Q1.What is the purpose of react router?</h3>
                        <p className='text-muted'> <b>Answer :</b> ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. </p>
                    </div>
                    <div className='w-75 mx-auto my-3'>
                        <h3>Q2.How does context Api works?</h3>
                        <p className='text-muted'> <b>Answer :</b> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                            Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
                            React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>
                    </div>
                    <div className='w-75 mx-auto my-3 mb-5'>
                        <h3>Q3.Describe about useRef hook in react js?</h3>
                        <p className='text-muted'> <b>Answer :</b> The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                            The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
                            The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.  </p>
                    </div>
                </section>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default Blog;