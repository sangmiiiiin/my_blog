 // frontend/src/pages/Create.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NewPostContainer, NewPostTitle, SaveButton, Textarea } from "../styles/CreateStyles";
// import Alert from '@mui/material/Alert';


const Create = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:5700/posts", { title, content })
            navigate("/", { state: { success: true } });
        } catch(error) { 
            console.error("글 작성 오류:", error)
        };
    };

    return (
        <>
        <h1>새 글 작성</h1>
            <form onSubmit={handleSubmit}>
            <NewPostContainer>
                <NewPostTitle
                    type="text" 
                    placeholder="제목" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Textarea 
                    placeholder="내용" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)}
                />
                <SaveButton type="submit">작성</SaveButton>
            </NewPostContainer>
            </form>
        </>
    );
};

export default Create;
