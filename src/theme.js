import { createTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';

export const theme = createTheme({
  palette: {
    primary: {
      light: teal[100],
      main: teal[500],
      dark: teal[900]
    }
  },
  typography: {
    fontSize: 16
  },
})