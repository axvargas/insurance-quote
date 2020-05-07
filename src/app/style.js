import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

    root: {
        width: '1',
        flexGrow: 1,
        margin: '0px', //ojo
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            flexGrow: 1,
            margin: '0px', //ojo
            
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: '#26C6DA',
        borderRadius: '0px',
        width: '75%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    grid: {
        width: '100%',
        margin: '0px'
    },
}));
export default useStyles;