import React, {useState}  from 'react';
import Home from './components/pages/home/home'
import Button from './components/atoms/button/button'
import { theme } from './styles/theme'
import {ThemeProvider} from 'styled-components';
import darkTheme from './styles/darkTheme'
import GlobalStyle from './styles/GlobalStyle'

function App () {
    const [isDark, setIsDark] = useState(false)
    return (
      <ThemeProvider theme={isDark ? darkTheme : theme}>
          <GlobalStyle />
          <Button raised onClick={()=>{
          setIsDark(!isDark)
          }}
          >Dark</Button> 
          <Home />

      </ThemeProvider>

    )

  };
  
  export default App;

