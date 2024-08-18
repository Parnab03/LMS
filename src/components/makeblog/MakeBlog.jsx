import React, { Component } from 'react'
import EditBlog from './EditBlog';
import './MakeBlog.css';

export class MakeBlog extends Component {
  render() {
    return (
      <>
        <div className="MakeBlogContainer">
            <header>
                <div className="LeftHeader">
                    <h2>My Blog</h2>
                </div>
                <div className="RightHeader">
                    <a href='/'>Create New Post</a>
                    <a href="/">Logout</a>
                </div>
            </header>
            <main>
                <p>Add Title:</p>
                <input type="text" name="" id="" placeholder='Enter Title'/>
                <p>Write Your Blog:</p>
                <EditBlog/>
                <button>Create Post</button>
            </main>
        </div>
      </>
    )
  }
}

export default MakeBlog
