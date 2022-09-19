import { Box, Typography, Container, Grid } from "@mui/material";

export default function Section3() {
    return (
        <>
            <Box className="section3-box">
                <Typography fontSize="1.875rem" fontWeight={"700"}>Everything you need</Typography>
                <Typography fontSize="1.875rem" fontWeight={"700"}>to become a <span style={{ color: "#ff8982" }}>smart </span>collector</Typography>
                <Typography fontSize="1rem" fontWeight={"700"}>Fastest rarity ranking reveals, clean and slick interface and 0.5% fee</Typography>
                <Typography fontSize="1rem" fontWeight={"700"}>because we believe the user deserves more.</Typography>
            </Box>
        </>
    );
}