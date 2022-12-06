import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        justifyContent: 'center',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100%',
        background: 'rgba(0, 0, 0, 1)',
        zIndex: 6000
    }
});

const LoadingSpinner = () => {
    const classes = useStyles();

    return (
        <Box sx={{ display: 'flex' }} className={classes.root}>
            <CircularProgress />
        </Box>
    );
};

export default LoadingSpinner;
