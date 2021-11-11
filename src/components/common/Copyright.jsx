import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Copyright = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center"  {...props} >
            {'Copyright © '}
            <Link color="inherit" href="#">
                Farmly Kenya
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        );
}

export default Copyright;