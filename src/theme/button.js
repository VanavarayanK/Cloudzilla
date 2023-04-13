const button = {
    MuiButton: {
        variants: [
            {
                props: { variant: 'oulined' },
                style: {
                    '&:hover': {
                        boxShadow:
                            '3px 6px 0px -4px rgb(24 12 12 / 99%), 3px 2px 2px 0px rgb(0 0 0 / 98%), 3px 3px 0px 0px rgb(0 0 0 / 95%)',
                    },
                    border: '1px solid black',
                    fontFamily: '',
                    backgroundColor: "black",
                    //   fontSize: FONT.SIZES[12],
                    //   fontWeight: FONT.WEIGHT.SEMI_BOLD,
                    borderRadius: '25px',
                },
            },
            {
                props: { variant: 'conatined' },
                style: {
                    fontFamily: "Open Sans",
                    fontSize: "16px",
                    lineHeight: "22px",
                    padding: '4px 0',
                    fontWeight: "400",
                    fontStyle:'regular',
                    backgroundColor:'#F0682C'
                },
            },

            {
                props: { variant: 'MyCustomButton2' },
                style: {
                    fontFamily: "Open Sans",
                    fontSize: "16px",
                    lineHeight: "22px",
                    padding: '4px 0',
                    fontWeight: "400",
                    fontStyle:'regular',
                    backgroundColor:'#1d1d1d'
                },
            }
        ]
    },
  
}

export default button