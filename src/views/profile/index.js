import { Button, Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import Cookies from "js-cookie";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { fundWalletWithMonnify } from 'store/actions';
import { CustomTextField } from 'ui-component/basic-inputs';
import MainCard from 'ui-component/cards/MainCard';
import * as yup from 'yup';


const Profile = () => {
      const { loggedInUser } = useSelector((state) => state);
    const { user, error, loading } = loggedInUser;
    const navigate = useNavigate();
    const dispatch = useDispatch()
     useEffect(() => {
        !Cookies.get('user') && navigate('/pages/login/login3');
    }, []);
     const INITIAL_FORM_VALUES = {
       
        amount: '',
     
    };
    const VALIDATIONS = yup.object().shape({
        
        amount: yup.number().integer().required('Please enter airtime amount').typeError('amount must be a number'),
     
    });
    const handleSubmit = (values) => {
      dispatch(
            fundWalletWithMonnify({
               amount:{
                   data:{...values}
               }
            })
        );
    };
   
  return (
        
        <MainCard title="Select a Payment Method">
       
            <Typography variant='h4'sx={{ fontSize: '1.2rem', fontWeight: 500, mr: 0.4, mt: 1, mb: 1.75 }}>Bank Transfer</Typography>
            <Typography variant="subtile" color="initial" sx={{ fontSize: '1.1rem', fontWeight: 200, mr: 0.4, mt: 10, mb: 0.75 }}>You can Transfer into your dedicated bank account for auto wallet funding</Typography>
            <ul >
                <li style={{marginBottom:"10px"}}><Typography variant="subtile" color="initial" sx={{ fontSize: '1.1rem', fontWeight: 500, mr: 0.4, mt: 10, mb: 0.75 }}> BANK: Wema Bank</Typography></li>
                <li style={{marginBottom:"10px"}}><Typography variant="subtile" color="initial" sx={{ fontSize: '1.1rem', fontWeight: 500, mr: 0.4, mt: 10, mb: 0.75 }}> ACCOUNT NUMBER: {user?.AccountNumber}</Typography></li>
                <li style={{marginBottom:"10px"}}><Typography variant="subtile" color="initial" sx={{ fontSize: '1.1rem', fontWeight: 500, mr: 0.4, mt: 10, mb: 0.75 }}> ACCOUNT NAME: {user?.username}</Typography></li>
            </ul>

            <Typography variant='h4'sx={{ fontSize: '1.2rem', fontWeight: 500, mr: 0.4, mt: 2.5, mb: 1.75 }}>Card Payment</Typography>
            <Typography variant="subtile" color="initial" sx={{ fontSize: '1.1rem', fontWeight: 200, mr: 0.4, mt: 10, mb: 1.75 }}>Fill the form below to fund using your atm card</Typography>
              <Formik initialValues={{ ...INITIAL_FORM_VALUES }} onSubmit={handleSubmit} validationSchema={VALIDATIONS}>
                {({ values, setFieldValue }) => (
                    <Form>
            <Grid container spacing={4} >
            <Grid item xs={6} sx={{mt:2}}>
             <CustomTextField name="amount" label="Amount"   />
          </Grid>
             </Grid>
           
             <Button onClick={()=>handleSubmit(values)} variant='contained' color='primary' sx={{mt:2}} >Pay Now</Button>
             
             
       </Form>
         )}
            </Formik>
        </MainCard>
  )
}

export default Profile