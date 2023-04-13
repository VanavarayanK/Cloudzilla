// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button(theme) {
    const disabledStyle = {
        '&.Mui-disabled': {
            backgroundColor: theme.palette.grey[200]
        }
    };

    return {
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },
            styleOverrides: {
                root: {
                    fontWeight: 400
                },
                contained: {
                    fontFamily: "Open Sans",
                    fontSize: "11px",
                    lineHeight: "15px",
                    padding: '4px 0',
                    fontWeight: "400",
                    fontStyle: 'regular',
                    color: "#fff",
                    backgroundColor: '#F0682C'
                },
                outlined: {
                    ...disabledStyle
                }
            }
        }
    };
}
