import { useParams } from "react-router-dom";

import { Paper, Typography } from "@mui/material";

import { useWebsocket } from "../hooks/websocket";

export const Laboratory = () => {
  const { id } = useParams();
  const { checkCount } = useWebsocket({ laboratory_id: Number(id) });

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          paddingX: "20%",
          paddingY: "20px",
          margin: "50px 30px",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography variant="h4">現在の登録者数</Typography>
        <Typography variant="h1">{checkCount}</Typography>
      </Paper>
    </>
  );
};
