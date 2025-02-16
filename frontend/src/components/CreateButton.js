import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateButton = () => {
    const navigate = useNavigate();

    return(
        <Button 
            variant="contained" 
            onClick={() => navigate(`/create`)}
            sx={{ backgroundColor: '#333', my: 1 }}>새 글 작성</Button>
    );
}

export default CreateButton;