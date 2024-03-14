import CheckIcon from '@mui/icons-material/Check';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
function PaymentSuccess() {
 const navigation =  useNavigate()
  return (
    <section className="m-0  text-center p-24 dark:text-white">
      <CheckIcon sx={{ fontSize: 100 }} color='success'/>
     <h1 className='text-4xl pt-9 pb-7'>Thankyou for Shoping with Us </h1>
     <Button onClick={()=> navigation("/")} color='success' variant='contained'>go to Home</Button>
    </section>
  )
}

export default PaymentSuccess