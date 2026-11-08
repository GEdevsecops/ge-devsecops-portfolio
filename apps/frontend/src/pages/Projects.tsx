
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from "@mui/material";

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
          sx={{
            mt: 2,
            mb: 5,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Selected projects showcasing my development skills,
          technical thinking, and practical engineering experience.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: 3,
          }}
        >
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              bgcolor: "#0f172a",
              color: "white",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 3,
              transition: "0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                borderColor: "#2563eb",
              },
            }}
          >
            <CardContent sx={{ p: 3, flexGrow: 1 }}>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 800 }}
                >
                  FirstMate
                </Typography>

                <Chip
                  label="Live"
                  size="small"
                  color="success"
                  variant="outlined"
                />
              </Stack>

              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                A productivity application designed to bring
                everyday organization into one workspace,
                including tasks, notes, reminders, and meetings.
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{ color: "rgba(255,255,255,0.8)", mb: 1.5 }}
              >
                TECHNOLOGIES
              </Typography>

              <Stack
                direction="row"
                sx={{
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {["React", "JavaScript", "Vite", "CSS"].map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      color: "#93c5fd",
                      bgcolor: "rgba(37,99,235,0.15)",
                      border: "1px solid rgba(37,99,235,0.3)",
                    }}
                  />
                ))}
              </Stack>
            </CardContent>

            <CardActions sx={{ px: 3, pb: 3, gap: 1 }}>
              <Button
                component="a"
                href="https://react-firstmate-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  bgcolor: "#2563eb",
                  "&:hover": { bgcolor: "#1d4ed8" },
                }}
              >
                Live Demo
              </Button>

              <Button
                component="a"
                href="https://github.com/gabrieleneitaxx-ge/react-firstmate"
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "rgba(255,255,255,0.3)",
                  "&:hover": {
                    borderColor: "#60a5fa",
                    bgcolor: "rgba(37,99,235,0.1)",
                  },
                }}
              >
                GitHub
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
