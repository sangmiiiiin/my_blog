import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, Card, CardContent, Paper, TextField, Typography } from "@mui/material";

const Create = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://192.168.10.100:5700/posts", { title, content });
            navigate("/", { state: { success: true } });
        } catch (error) {
            console.error("글 작성 오류:", error);
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Paper elevation={3} sx={{ marginTop: 4, padding: 4, width: "100%", maxWidth: 600 }}>
                <Typography variant="h5" gutterBottom>
                    새 글 작성
                </Typography>
                <Card variant="outlined">
                    <CardContent>
                        <form onSubmit={handleSubmit}>
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
                                작성
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Paper>
        </Box>
    );
};

export default Create;
