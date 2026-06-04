import { Box, Container, Typography, Paper, Stack, Grid } from "@mui/material";
import { Security, Extension } from "@mui/icons-material";

const projects = [
  {
    title: "Security Scanner CLI",
    subtitle: "Python-Based Vulnerability Detection",
    icon: <Security sx={{ color: "#2563eb" }} />,
    tech: ["Python", "AST", "Security Auditing"],
    description: "Developing a static analysis tool that identifies critical vulnerabilities like SQL Injection (SQLi) and Cross-Site Scripting (XSS) by scanning Abstract Syntax Trees.",
    workflow: "Scans source code patterns and generates risk reports directly in the terminal."
  },
  {
    title: "PCI-DSS Compliance Assistant",
    subtitle: "Real-Time Browser Audit Tool",
    icon: <Extension sx={{ color: "#2563eb" }} />,
    tech: ["JavaScript", "Chrome API", "PCI-DSS"],
    description: "A browser extension designed to help developers maintain compliance by identifying unencrypted sensitive data or hardcoded credentials in real-time.",
    workflow: "Triggers UI alerts for policy violations to ensure secure handling of payment industry data."
  }
];

export default function Building() {
  const brandFeatures = [
    "Turborepo Monorepo Architecture",
    "Integrated Jest Automation Suite",
    "Secure CI/CD Deployment Flow",
    "Drizzle ORM Schema Management"
  ];

  return (
    <Box id="building" component="section" sx={{ py: 12, scrollMarginTop: "80px" }}>
      <Container maxWidth="lg">
        {/* FIX: Moved span logic inside Typography to maintain clean DOM structure */}
        <Typography variant="h3" sx={{ fontWeight: 800, color: "white", mb: 6, letterSpacing: "-0.02em" }}>
          CURRENTLY {" "}
          <Box component="span" sx={{ color: "#2563eb", fontFamily: "monospace" }}>
            // BUILDING
          </Box>
        </Typography>

        <Paper sx={{ 
          p: { xs: 4, md: 6 }, 
          bgcolor: "rgba(2, 6, 23, 0.4)", 
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: 4,
          backdropFilter: "blur(10px)",
          mb: 6
        }}>
          <Typography variant="overline" sx={{ color: "#2563eb", fontWeight: 800, letterSpacing: 2 }}>
            Lead DevSecOps Engineer • 2024 — Present
          </Typography>
          <Typography variant="h4" sx={{ color: "white", fontWeight: 800, my: 2 }}>
            Personal Brand & Engineering Platform
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)", maxWidth: "800px", mb: 4, lineHeight: 1.8 }}>
            Architecting a high-performance monorepo to unify frontend and backend services. This platform serves as a 
            live demonstration of secure CI/CD pipelines, automated testing with Jest, and modern full-stack architecture 
            using the DevSecOps lifecycle.
          </Typography>
          
          <Grid container spacing={2}>
            {brandFeatures.map((item) => (
              // FIX: Using the item text as a key to satisfy SonarQube S6479
              <Grid key={item} size={{ xs: 12, sm: 6 }}>
                <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
                  <Box sx={{ width: 6, height: 6, bgcolor: "#2563eb", borderRadius: "50%" }} />
                  <Typography variant="body2" sx={{ color: "white", fontWeight: 500 }}>{item}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Paper>

        <Grid container spacing={4}>
          {projects.map((proj) => (
            <Grid key={proj.title} size={{ xs: 12, md: 6 }}>
              <Paper sx={{ 
                p: 4, 
                height: "100%",
                bgcolor: "rgba(2, 6, 23, 0.4)", 
                border: "1px solid rgba(37, 99, 235, 0.1)",
                borderRadius: 4,
                transition: "0.3s",
                "&:hover": { borderColor: "#2563eb", bgcolor: "rgba(37, 99, 235, 0.05)" }
              }}>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ p: 1, bgcolor: "rgba(37, 99, 235, 0.1)", borderRadius: 1 }}>{proj.icon}</Box>
                    <Box>
                      <Typography variant="h6" sx={{ color: "white", fontWeight: 700 }}>{proj.title}</Typography>
                      <Typography variant="caption" sx={{ color: "#2563eb", fontWeight: 700, textTransform: 'uppercase' }}>
                        {proj.subtitle}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                    {proj.description}
                  </Typography>

                  <Box sx={{ pt: 2 }}>
                    <Typography variant="caption" sx={{ color: "white", fontWeight: 800, display: 'block', mb: 1 }}>
                      WORKFLOW:
                    </Typography>
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)", fontStyle: 'italic' }}>
                      {proj.workflow}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, pt: 2 }}>
                    {proj.tech.map(t => (
                      <Box key={t} sx={{ px: 1, py: 0.5, bgcolor: "rgba(255,255,255,0.05)", borderRadius: 1 }}>
                        <Typography sx={{ color: "#2563eb", fontSize: '0.65rem', fontWeight: 800 }}>{t}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}