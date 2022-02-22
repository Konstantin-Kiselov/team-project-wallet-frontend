import React from 'react';

import zxcvbn from 'zxcvbn';

import { Box, LinearProgress } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const createPasswordLabel = () => {
    switch (testResult.score) {
      case 0:
        return 'Очень простой';
      case 1:
        return 'Простой';
      case 2:
        return 'Средней сложности';
      case 3:
        return 'Хароший';
      case 4:
        return 'Очень хороший';
      default:
        return 'none';
    }
  };

  const progressColor = () => {
    switch (testResult.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#69f0ae';
      case 4:
        return '#24CCA7';
      default:
        return 'none';
    }
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: progressColor(),
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', marginTop: '6px', mb: '10px' }}>
        <LinearProgress
          variant="determinate"
          value={num}
          sx={{
            width: '100%',
            backgroundColor: '#E5F1EF',
            borderRadius: '2px',
          }}
        />
      </Box>
      {/*<p style={{ color: progressColor() }}>{createPasswordLabel()}</p>*/}
    </ThemeProvider>
  );
};

export default PasswordStrengthMeter;
