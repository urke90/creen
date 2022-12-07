import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';

interface IInputProps {
    fullWidth?: boolean;
    label: string;
    defaultValue: string | number;
    maxWidth?: string;
    isUploadImage?: boolean;
    type?: 'text' | 'number';
}

const Input: React.FC<IInputProps> = ({
    fullWidth,
    label,
    defaultValue,
    maxWidth,
    isUploadImage,
    type = 'text'
}) => {
    const queries = useMediaQuery('(min-width:769px)');
    if (isUploadImage) {
        return (
            <Box
                sx={{
                    width: '100%',
                    marginBottom: '20px',
                    display: 'flex'
                }}
            >
                <TextField
                    label={label}
                    id="standard-size-small"
                    defaultValue={defaultValue}
                    size="small"
                    variant="standard"
                    sx={{
                        maxWidth
                    }}
                    fullWidth={queries ? false : true}
                />
                <Button
                    sx={{
                        marginLeft: '10px',
                        width: queries ? '148px' : '30px'
                    }}
                    variant="outlined"
                    disabled
                    size="small"
                >
                    Upload Image
                </Button>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                width: '100%',
                marginBottom: '20px'
            }}
        >
            <TextField
                label={label}
                id="standard-size-small"
                defaultValue={defaultValue}
                size="small"
                variant="standard"
                sx={{
                    maxWidth
                }}
                type={type}
                fullWidth={fullWidth}
            />
        </Box>
    );
};
export default Input;
