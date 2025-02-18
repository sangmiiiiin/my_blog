// import { Box, Button, Card, CardContent, Paper, TextField, Typography } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const Edit = () => {
//     const [post, setPost] = useState({
//         id: 1,
//         title: "기본 제목",
//         thumbnail: "http://via.placeholder.com/400x200",
//         description: "기본 요약 내용",
//         content: "기본 글 내용"
//     });
//     const [title, setTitle] = useState(null);
//     const [content, setContent] = useState(null);
//     const { id } = useParams();

//     useEffect(async () => {
//         try {
//             const response = await axios.get(`http://192.168.10.100:5700/${id}"`);
//             setPost(response.data);
            
//         } catch(error) {
//             console.error("글 조회 오류 발생: ", error);
//         }

//     })

//     const handleEdit = async () => {
//         try{
//             await axios.post(`http://192.168.10.100:5700/posts/${id}`, { title, content });
//         } catch(error) {
//             console.error("수정 중 오류가 발생 했습니다: ", error)
//         }
//     }

//     return(
//         <>
//         <Box display="flex" justifyContent="center" alignItems="center">
//             <Paper elevation={3} sx={{ marginTop: 4, padding: 4, width: "100%", maxWidth: 600 }}>
//                 <Typography variant="h5" gutterBottom>
//                     새 글 작성
//                 </Typography>
//                 <Card variant="outlined">
//                     <CardContent>
//                         <form onSubmit={handleEdit}>
//                             <TextField
//                                 label="제목"
//                                 variant="outlined"
//                                 fullWidth
//                                 value={title}
//                                 onChange={(e) => setTitle(e.target.value)}
//                                 margin="normal"
//                                 >
//                                     {post.title}
//                             </TextField>
//                             <TextField
//                                 label="내용"
//                                 variant="outlined"
//                                 fullWidth
//                                 multiline
//                                 rows={6}
//                                 value={content}
//                                 onChange={(e) => setContent(e.target.value)}
//                                 margin="normal"
//                                 >
//                                     {post.content}
//                                 </TextField>
                            
//                             <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
//                                 작성
//                             </Button>
//                         </form>
//                     </CardContent>
//                 </Card>
//             </Paper>
//         </Box>
//         </>
//     );
// }

// export default Edit;

// frontend/src/pages/Edit.js
import { Box, Button, Card, CardContent, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
    // const [post, setPost] = useState({
    //     title: "",
    //     content: ""
    // });
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://192.168.10.100:5700/posts/${id}`);
                // setPost(response.data);
                setTitle(response.data.title);
                setContent(response.data.content);
            } catch(error) {
                console.error("글 조회 오류 발생: ", error);
            }
        };
        fetchPost();
    }, [id]);

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://192.168.10.100:5700/posts/${id}`, { title, content });
            navigate(`/posts/${id}`);
        } catch(error) {
            console.error("수정 중 오류가 발생했습니다: ", error);
        }
    };

    return(
        <Box display="flex" justifyContent="center" alignItems="center">
            <Paper elevation={3} sx={{ marginTop: 4, padding: 4, width: "100%", maxWidth: 600 }}>
                <Typography variant="h5" gutterBottom>
                    글 수정
                </Typography>
                <Card variant="outlined">
                    <CardContent>
                        <form onSubmit={handleEdit}>
                            <TextField
                                label="제목"
                                variant="outlined"
                                fullWidth
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                margin="normal"
                            />
                            <TextField
                                label="내용"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={6}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                margin="normal"
                            />
                            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                수정 완료
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Paper>
        </Box>
    );
};

export default Edit;
