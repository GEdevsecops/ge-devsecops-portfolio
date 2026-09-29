import { Box, Container, Typography, Stack, Paper } from "@mui/material";
import { Terminal, Security, Storage } from "@mui/icons-material";

const engineeringItems = [
  {
    title: "Full-Stack DevSecOps Engineering",
    company: "Personal Brand & Engineering Platform",
    period: "2026 — Present",
    icon: <Terminal sx={{ color: "#2563eb" }} />,
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Turborepo",
      "Drizzle ORM",
    ],
    details: [
      "Building a full-stack Turborepo monorepo that integrates frontend, backend, and shared packages.",
      "Developing responsive interfaces with React and TypeScript using component-based architecture.",
      "Building backend services with Node.js and Express while developing structured data access with Drizzle ORM.",
      "Using Git-based feature workflows to build, test, debug, review, and improve the application.",
    ],
  },
  {
    title: "DevSecOps & Delivery",
    company: "Engineering Practice",
    period: "2026 — Present",
    icon: <Security sx={{ color: "#2563eb" }} />,
    tech: [
      "GitHub",
      "CI/CD",
      "Jest",
      "Security",
      "Deployment",
      "Linux",
    ],
    details: [
      "Developing CI/CD workflows to automate testing and software delivery.",
      "Using Jest to introduce automated testing and improve confidence in application changes.",
      "Applying security principles throughout the development lifecycle rather than treating security as a final step.",
      "Practicing deployment, debugging, monitoring, recovery, and continuous improvement as part of the engineering workflow.",
    ],
  },
  {
    title: "Database & Application Architecture",
    company: "Full-Stack Development",
    period: "2026 — Present",
    icon: <Storage sx={{ color: "#2563eb" }} />,
    tech: [
      "Drizzle ORM",
      "TypeScript",
      "Node.js",
      "Express",
      "SQL",
      "API Design",
    ],
    details: [
      "Designing application data models and integrating database access through Drizzle ORM.",
      "Connecting backend services with structured application data and API workflows.",
      "Using TypeScript across application layers to improve consistency and catch errors during development.",
      "Exploring scalable architecture patterns while keeping the application understandable and maintainable.",
    ],
  },
];

export default function Engineering() {
  return (
    <Box
      id="engineering"
      component="section"
      sx={{
        py: 12,
        scrollMarginTop: "80px",
        bgcolor: "transparent",
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
            fontSize: { xs: "2.2rem", md: "3rem" },
            letterSpacing: "-0.02em",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          ENGINEERING{" "}
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

        <Stack spacing={4}>
          {engineeringItems.map((item) => (
            <Paper
              key={item.title}
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                bgcolor: "rgba(2, 6, 23, 0.4)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: 4,
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  borderColor: "rgba(37, 99, 235, 0.4)",
                  bgcolor: "rgba(37, 99, 235, 0.03)",
                  transform: "translateY(-4px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                },
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
              >
                {/* ICON */}
                <Box
                  sx={{
                    p: 1.5,
                    bgcolor: "rgba(37, 99, 235, 0.1)",
                    borderRadius: 2,
                    height: "fit-content",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "fit-content",
                    mx: { xs: "auto", sm: 0 },
                  }}
                >
                  {item.icon}
                </Box>

                {/* CONTENT */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      fontWeight: 700,
                      mb: 0.5,
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#2563eb",
                      fontWeight: 600,
                      mb: 2,
                      opacity: 0.9,
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    {item.company} • {item.period}
                  </Typography>

                  {/* TECHNOLOGY CHIPS */}
                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    sx={{
                      mb: 3,
                      flexWrap: "wrap",
                      justifyContent: {
                        xs: "center",
                        sm: "flex-start",
                      },
                    }}
                  >
                    {item.tech.map((technology) => (
                      <Box
                        key={technology}
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: "4px",
                          bgcolor: "rgba(37,99,235,0.1)",
                          border: "1px solid rgba(37,99,235,0.3)",
                          color: "#93c5fd",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          whiteSpace: "nowrap",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {technology}
                      </Box>
                    ))}
                  </Stack>

                  {/* DETAILS */}
                  <Stack spacing={1.5}>
                    {item.details.map((detail) => (
                      <Typography
                        key={detail}
                        variant="body2"
                        sx={{
                          color: "rgba(255,255,255,0.6)",
                          lineHeight: 1.7,
                          position: "relative",
                          pl: 2,
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: "10px",
                            width: "4px",
                            height: "4px",
                            bgcolor: "#2563eb",
                            borderRadius: "50%",
                          },
                        }}
                      >
                        {detail}
                      </Typography>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}