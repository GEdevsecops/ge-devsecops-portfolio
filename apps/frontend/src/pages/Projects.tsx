import { Box, Container, Typography } from "@mui/material";

export default function Projects() {
  return (
    <Box
      id="projects"
      component="section"
      sx={{ py: 12, scrollMarginTop: "80px", minHeight: "40vh" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            color: "white",
            letterSpacing: "-0.02em",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          PROJECTS
        </Typography>

        <Typography
          variant="body1"
          sx={{ mt: 2, color: "rgba(255,255,255,0.6)" }}
        >
          Projects will appear here as they are completed and ready to showcase.
        </Typography>
      </Container>
    </Box>
  );
}