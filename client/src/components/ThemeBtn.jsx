import { IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../context/Theme';


function ThemeBtn() {
     const {themeMode, darkMode, lightMode} = useTheme()

     const onChangeBtn = () =>{
     if(themeMode === 'dark'){
       lightMode()   
     }
     else{
       darkMode()
     }
    }
  return (
    <IconButton sx={{ ml: 1 }} onClick={onChangeBtn} color="inherit">
        {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
  )
}

export default ThemeBtn