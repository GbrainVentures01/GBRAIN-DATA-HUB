import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { useNavigate } from 'react-router';
const FeedBack = ({message, variant}) => {
     const [showAlert, setshowAlert] = useState(true)
       const navigate = useNavigate();
      const onClickButton=()=>{
            setshowAlert(false)
            window.location.replace("/")
        }

      const SuccessFullAlert = ({message})=>{
       
        return(
            <SweetAlert
            success
            title="Successful!"
            show={showAlert}
            onConfirm={()=>setshowAlert(false)}
            onCancel={()=>setshowAlert(false)}
            customButtons={
                <>
                   <Button fullWidth onClick={onClickButton} variant="contained" color="primary">Ok</Button>
                    
                </>
    }
            >
                
           <Typography variant='subtitle1'>{message}</Typography>
</SweetAlert>
        )
    }
    const FailureAlert = ({message})=>{
        return(
                <SweetAlert
                danger
                showCancel
                confirmBtnText="Yes, delete it!"
                confirmBtnBsStyle="danger"
                title="Failed"
                onConfirm={onClickButton}
                onCancel={onClickButton}
                focusCancelBtn
                customButtons={
                    <>
                     <Button  onClick={onClickButton} sx={{mr:2}} variant="contained" color="primary">Back</Button>
                     <Button  onClick={()=> navigate("/fund-wallet")} variant="contained" color="primary">Top up now</Button>
               </>
               }
                >
                {message}
                </SweetAlert>
        )
    }
   if (variant === "success") {
       return(
  <SuccessFullAlert message={message}/>
       )
   } else {
      return (
 <FailureAlert message={message}/>
  )  
   }
 
}

export default FeedBack