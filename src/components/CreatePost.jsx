import React, { Component } from "react";
import TextEditor from "./TextEditor";
import "./CreatePost.css";

export class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            preview: "",
        };
    }

    handlePreviewChange = (preview) => {
        this.setState({ preview });
    };

    render() {
        return (
            <div className="MakeBlogContainer">
                <header>
                    <div className="LeftHeader">
                        <h2>Editor(Admin Pannel)</h2>
                    </div>
                    <div className="RightHeader">
                        {/* <a href='/'>Create New Post</a>
                <a href='/'>Logout</a> */}
                    </div>
                </header>
                <main>
                    <div>
                        <div className="inputField">
                            <div className="firstField">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Course Name"
                                />
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Module Name"
                                />
                            </div>
                            <div className="secondField">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Lecture Name"
                                />
                            </div>
                        </div>
                        <TextEditor
                            onPreviewChange={this.handlePreviewChange}
                        />
                        <div className="publishbtn">
                            <button>Publish</button>
                        </div>
                    </div>
                    <div className="preview">
                        {/* <h2>Live Preview</h2> */}
                        <div
                            dangerouslySetInnerHTML={{
                                __html: this.state.preview,
                            }}
                        />
                    </div>
                </main>
            </div>
        );
    }
}

export default CreatePost;
