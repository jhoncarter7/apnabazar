import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
export default function PaymentCanceled() {
  const navigation =  useNavigate()

  return (
    <section className="m-0  text-center p-24 ">
    <CloseIcon sx={{ fontSize: 100, color: red[500] }}/>
   <h1 className='text-4xl pt-9 pb-7'>Your Payment is Failed <SentimentVeryDissatisfiedIcon  sx={{ fontSize: 50, color: red[500] }}/>  </h1>
   <Button onClick={()=> navigation("/")} color='success' variant='contained'>go to Home</Button>
  </section>)
}
