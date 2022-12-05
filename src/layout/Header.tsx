import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { makeStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';

import './Headers.scss';

const useStyles = makeStyles({
    select: {
        '&.MuiOutlinedInput-root': {
            width: '200px',
            borderColor: grey[300],
            '& svg': {
                color: grey[300]
            },
            '&.Mui-focused fieldset': {
                borderColor: grey[300],
                border: 'none',
                color: grey[300]
            },
            '&.makeStyles-select-13.MuiOutlinedInput-root.Mui-focused fieldset':
                {
                    border: 'none',
                    color: grey[300]
                },
            '&.css-6hp17o-MuiList-root-MuiMenu-list': {
                width: '200px'
            }
        },
        backgroundColor: 'transparent',
        borderColor: grey[300],
        'css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
            color: grey[300]
        }
    },
    formControl: {
        '&.MuiFormControl-root': {
            border: `1px solid ${grey[300]}`,
            borderColor: grey[300]
        }
    },
    label: {
        '&.MuiFormLabel-root': {
            color: grey[300]
        },
        '&.MuiInputLabel-outlined': {
            color: grey[300]
        },
        '&.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
            color: grey[300],
            top: '-14px'
        }
    },
    '&.MuiList-root': {
        width: '200px'
    }
});

interface IHeaderProps {
    isEditAddPage?: boolean;
    title: string;
}

const Header: React.FC<IHeaderProps> = ({ isEditAddPage, title }) => {
    const classes = useStyles();
    // const handleChange = (e: SelectChangeEvent) => {
    //     console.log('e', e);
    // };

    return (
        <header className="header">
            {isEditAddPage && <ArrowBackIcon className="header__back-arrow" />}
            <div className="header__content">
                <h2>{title}</h2>
                <FormControl className={classes.formControl}>
                    <InputLabel
                        className={classes.label}
                        id="demo-select-small"
                    >
                        Any author
                    </InputLabel>
                    <Select
                        className={classes.select}
                        sx={{ color: grey[300] }}
                    >
                        <MenuItem value="1"> Foo 1</MenuItem>
                        <MenuItem value="2"> Foo 2</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </header>
    );
};

export default Header;
