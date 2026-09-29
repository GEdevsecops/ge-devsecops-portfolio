import { Button as MuiButton } from '@mui/material';
// FIX: Using 'import type' satisfies the verbatimModuleSyntax requirement
import type { SxProps, Theme } from '@mui/material/styles';

interface ButtonProps {
  label: string;
  sx?: SxProps<Theme>;
  variant?: "text" | "outlined" | "contained";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Custom Button component for the Engineering Platform.
 * Supports DevSecOps lifecycle demonstrations by maintaining strict type safety.
 */
export const Button = ({ label, sx, variant = "contained", onClick }: ButtonProps) => {
  return (
    <MuiButton 
      sx={{
        textTransform: 'none',
        borderRadius: '8px',
        fontWeight: 600,
        // Allows the parent component (like Navigation) to pass custom styling
        ...sx
      }} 
      variant={variant} 
      onClick={onClick}
    >
      {/* Wrapping the label in a string template ensures that any special 
        characters like '>' or '}' do not trigger SonarQube HTML entity errors.
      */}
      {`${label}`}
    </MuiButton>
  );
};