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
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    readOnly?: boolean;
}

const Input: React.FC<IInputProps> = ({
    fullWidth,
    label,
    defaultValue,
    maxWidth,
    isUploadImage,
    onChange,
    type = 'text',
    readOnly
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
                    InputProps={{
                        readOnly
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
                InputProps={{
                    readOnly
                }}
                type={type}
                fullWidth={fullWidth}
                onChange={onChange ? (e) => onChange(e) : () => {}}
            />
        </Box>
    );
};
export default Input;
