import { Box, Container, Typography, Grid, Paper, Stack } from "@mui/material";
import { Code, Storage, Security, Settings } from "@mui/icons-material";

const capabilityGroups = [
  {
    category: "Full-Stack Development",
    icon: <Code sx={{ color: "#2563eb" }} />,
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Next.js",
      "HTML5/CSS3",
    ],
  },
  {
    category: "DevSecOps & Delivery",
    icon: <Security sx={{ color: "#2563eb" }} />,
    skills: [
      "Git",
      "GitHub",
      "CI/CD",
      "Turborepo",
      "Vercel",
      "Plesk",
      "Security Practices",
    ],
  },
  {
    category: "Data & APIs",
    icon: <Storage sx={{ color: "#2563eb" }} />,
    skills: [
      "Drizzle ORM",
      "SQL",
      "REST APIs",
      "Node.js APIs",
      "Postman",
      "Data Modeling",
    ],
  },
  {
    category: "Testing & Engineering",
    icon: <Settings sx={{ color: "#2563eb" }} />,
    skills: [
      "Jest",
      "Unit Testing",
      "Integration Testing",
      "Debugging",
      "Code Review",
      "Linux",
    ],
  },
];

export default function Building() {
  return (
    <Box
      id="building"
      component="section"
      sx={{
        py: 12,
        scrollMarginTop: "80px",
      }}
    >
      <Container maxWidth="lg">
        {/* SECTION HEADER */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: 800,
            color: "white",
            mb: 6,
            letterSpacing: "-0.02em",
            fontSize: { xs: "2.2rem", md: "3rem" },
          }}
        >
          BUILDING{" "}
          <Box
            component="span"
            sx={{
              color: "#2563eb",
              fontFamily: "monospace",
              display: { xs: "block", sm: "inline" },
            }}
          >
          </Box>
        </Typography>

        <Grid container spacing={3}>
          {capabilityGroups.map((group) => (
            <Grid
              key={group.category}
              size={{ xs: 12, md: 6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  bgcolor: "rgba(2, 6, 23, 0.4)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 4,
                  height: "100%",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    borderColor: "rgba(37, 99, 235, 0.4)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                {/* CATEGORY HEADER */}
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    mb: 3,
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      p: 1,
                      bgcolor: "rgba(37, 99, 235, 0.1)",
                      borderRadius: 1.5,
                      display: "flex",
                    }}
                  >
                    {group.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      fontWeight: 700,
                    }}
                  >
                    {group.category}
                  </Typography>
                </Stack>

                {/* CAPABILITY CHIPS */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.5,
                  }}
                >
                  {group.skills.map((skill) => (
                    <Box
                      key={skill}
                      sx={{
                        px: 2,
                        py: 0.5,
                        bgcolor: "rgba(37,99,235,0.05)",
                        border: "1px solid rgba(37,99,235,0.2)",
                        borderRadius: "4px",
                        color: "#93c5fd",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {skill}
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}