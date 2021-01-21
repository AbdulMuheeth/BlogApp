import React,{useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch , useSelector } from 'react-redux'
import {selectSignedIn, selectUserInput, setBlogData } from '../Features/userSlice';
import '../styling/blogs.css';

const Blog = () => {
    const searchInput = useSelector(selectUserInput);
    console.log(searchInput);
    const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=632cb6444eeb18df00c058077a834440`;
    const isSignedIn = useSelector(selectSignedIn);
    const dispatch = useDispatch();
    const [blogs,setBlogs] = useState();

    const [loading,SetLoading] = useState(true);

    useEffect(() => {
        axios
        .get(blog_url)
        .then((response) => {
            dispatch(setBlogData(response.data));
            setBlogs(response.data)
            SetLoading(false)
        })
        .catch((error) => {
            console.log(error)
        })

    },[searchInput]); //changes the states specified in the when search Input is changed

    
    return (
         
        <div>

            {isSignedIn && 

                <div className="blog__page" >
                                
                    <h2 className="blog__page__header">Blogs</h2>
                    {loading? <h3 className="loading">Loading...</h3> : ""}
                    <div className="blogs d-flex flex-wrap justify-content-around">
                        {blogs?.articles?.map((blog) => (
                            <div className="card col-12 col-sm-5 col-md-4 my-3 "  >
                                <a className="blog text-decoration-none text-color-grey" target='_blank' href={blog.url} >
                                    <img src={blog.image} class="card-img-top" />
                                    <div class="card-body">
                                        <h3 className="sourceName">
                                            <span>{blog.source.name}</span>
                                            <p>{blog.publishedAt}</p>
                                        </h3>
                                        <h4 className="card-title">{blog.title}</h4>
                                        <p className="card-text">{blog.description}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                        {blogs?.totalArticles==0 && (
                            <h3 className="no__blogs m-5 text-info d-flex justify-content-center">No Blogs available. search something else to read the blogs.</h3>
                        )}
                    </div>
                </div>

            }
        </div>
        
    )
}

export default Blog
