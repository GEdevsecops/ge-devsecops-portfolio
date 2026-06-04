import { Box, Container, Typography, Stack, Paper } from "@mui/material";
import { Terminal, Group } from "@mui/icons-material";

const experiences = [
  {
    title: "Full-Stack DevSecOps Engineer",
    company: "Freelance / Personal Brand Platform",
    period: "2024 - Present",
    icon: <Terminal sx={{ color: "#2563eb" }} />,
    tech: ["React", "TypeScript", "Node.js", "CI/CD", "Turborepo", "Drizzle ORM"],
    details: [
      "Architected high-performance monorepos using Turborepo to unify frontend, backend, and shared packages, streamlining the engineering lifecycle.",
      "Engineered secure full-stack applications with a React/TypeScript frontend and Node.js/Express backend for scalable performance.",
      "Automated deployment pipelines and CI/CD workflows across Vercel and Plesk, ensuring rapid and reliable delivery.",
      "Integrated Jest for automated unit and integration testing to maintain high code quality and system stability.",
      "Designed secure administrative dashboards to provide real-time operational visibility and infrastructure monitoring."
    ]
  },
  {
    title: "Team Leader & Performance Coach",
    company: "Bandanna Fitness / Bandanna Performance",
    period: "2017 - Present",
    icon: <Group sx={{ color: "#2563eb" }} />,
    tech: ["Agile Leadership", "Operations", "Team Management", "Strategy"],
    details: [
      "Directed high-performance teams through structured coaching, operational planning, and performance-driven development strategies.",
      "Designed personalized training systems and coordinated complex team workflows to achieve consistent organizational goals.",
      "Managed multifaceted business operations including recruitment coordination and client relationship management for high-profile stakeholders.",
      "Oversaw facility technical operations and inventory management to ensure peak performance and safety standards."
    ]
  }
];

export default function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        py: 12,
        scrollMarginTop: "80px",
        bgcolor: "transparent"
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
            fontSize: { xs: '2.2rem', md: '3rem' }, // Responsive font size
            letterSpacing: "-0.02em",
            textAlign: { xs: "center", md: "left" }
          }}
        >
          EXPERIENCE{" "}
          <Box component="span" sx={{ color: "#2563eb", fontFamily: "monospace", display: { xs: 'block', sm: 'inline' } }}>
            // PERFORMANCE
          </Box>
        </Typography>

        <Stack spacing={4}>
          {experiences.map((exp, index) => (
            <Paper
              key={index}
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
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                }
              }}
            >
              <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                {/* ICON CONTAINER */}
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
                    // Center icon on mobile
                    mx: { xs: 'auto', sm: 0 }
                  }}
                >
                  {exp.icon}
                </Box>

                {/* CONTENT AREA */}
                <Box flex={1}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      fontWeight: 700,
                      mb: 0.5,
                      textAlign: { xs: 'center', sm: 'left' }
                    }}
                  >
                    {exp.title}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "#2563eb",
                      fontWeight: 600,
                      mb: 2,
                      opacity: 0.9,
                      textAlign: { xs: 'center', sm: 'left' }
                    }}
                  >
                    {exp.company} • {exp.period}
                  </Typography>

                  {/* TECH STACK CHIPS - FIXED OVERFLOW */}
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap // Enables proper spacing when items wrap
                    sx={{ 
                      mb: 3,
                      justifyContent: { xs: 'center', sm: 'flex-start' } 
                    }}
                  >
                    {exp.tech.map((tech, i) => (
                      <Box
                        key={i}
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: "4px",
                          bgcolor: "rgba(37,99,235,0.1)",
                          border: "1px solid rgba(37,99,235,0.3)",
                          color: "#93c5fd",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          whiteSpace: 'nowrap', // Keeps single tag names together
                          textTransform: "uppercase",
                          letterSpacing: "0.05em"
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Stack>

                  {/* DETAILS BULLETS */}
                  <Stack spacing={1.5}>
                    {exp.details.map((detail, i) => (
                      <Typography
                        key={i}
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
                            borderRadius: "50%"
                          }
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