import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        borderRadius: '0px',

        backgroundColor: '#26C6DA',
        color: '#FFFFFF',
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: theme.spacing(2),
        },

    },
    typo: {
        margin: '5px'
    },
    gridHeader: {
        width: '100%',
        margin: '0px',
        padding: '0px',

    },
}));
export default useStyles;