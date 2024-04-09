import { useParams } from "react-router-dom";
import { Paper, Typography, Box } from "@mui/material";
import { useWebsocket } from "../hooks/websocket";
import { useEffect, useState } from "react";
import { styled, keyframes } from "@mui/system";

const popIn = keyframes`
  from {
    transform: scale(0.50);
    opacity: 0.7;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const AnimatedTypography = styled(Typography)({
  animation: `${popIn} 0.5s ease-out`,
});

export const Laboratory = () => {
  const { id } = useParams();
  const { checkCount } = useWebsocket({ laboratory_id: Number(id) });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    // アニメーションが終了するまでの時間（ここでは0.5秒）後にアニメーション状態をリセットします。
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [checkCount]);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          paddingX: "20%",
          paddingY: "20px",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
          boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.4)",
          "&:hover": {
            boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.6)",
          },
        }}
      >
        <Typography variant="h4" gutterBottom>
          現在の登録者数
        </Typography>
        <Typography variant="h3" gutterBottom>
          合計(ID,IC,IS,IM,IN)
        </Typography>
        {animate ? (
          <AnimatedTypography variant="h1">{checkCount}</AnimatedTypography>
        ) : (
          <Typography variant="h1">{checkCount}</Typography>
        )}
      </Paper>
    </Box>
  );
};
