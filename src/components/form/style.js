import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#26C6DA',
        borderRadius: '0px',
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: theme.spacing(2),

        },
    },
    typo: {
        margin: '5px',
        color: 'black'
    },
    radioGender: {
        marginTop: '25px',
        margin: '5px',
        color: 'black',
        '& .MuiFormLabel-root.Mui-focused': {
            color: '#26C6DA',
        },
        '& .MuiRadio-colorPrimary.Mui-checked': {
            color: '#26C6DA !important'
        },
        '& .MuiFormGroup-root': {
            flexDirection: 'row',
        }
    },

    gridHeader: {

        width: '100%',
        margin: '0px',
        padding: '0px',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: theme.spacing(0),

        },
    },
    cmb: {
        '& label.Mui-focused': {
            color: '#26C6DA',
        },
        '& label': {
            color: 'black',

        },
        
        '& .MuiFilledInput-underline.Mui-error:before': {
            borderBottom: '2px solid #f44336',
        },
        '& .MuiFilledInput-underline.Mui-error:after': {
            borderBottom: '2px solid #f44336',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#26C6DA',
        },
        '& .MuiInput-underline': {
            borderBottomColor: '#26C6DA',
        },
        '& .MuiInput-input:focus': {
            color: '#26C6DA',

        },
        '& .MuiInput-input': {
            color: '#26C6DA',
        },
        '& label..MuiInputLabel-outlined': {
            fontSize: 50
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#26C6DA',
            },


            '&:hover fieldset': {
                borderColor: '#26C6DA',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#26C6DA',
            },
            color: '#26C6DA',


        },
        '& .MuiFilledInput-underline:after': {
            borderBottom: '2px solid #26C6DA',
        },
        marginTop: 30,



    },
    button: {
        width: '100%',
        backgroundColor: 'rgba(77, 174, 189, 0.90)',
        color: 'white',
        textTransform: 'none',
        '&:hover': {

            backgroundColor: 'rgba(77, 174, 189, 0.87)',
        },
    },
    helper:{
        textAlign:'center',
    },


}));
export default useStyles;