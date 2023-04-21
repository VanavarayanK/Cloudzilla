import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import typography from './typography';
import * as colors from '@mui/material/colors';
import button from './button';
const theme = createTheme({

  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white
    },

    primary: {
      main: '##E8E9EA',
      color: "FE6244"
    },
    secondary: {
      main: colors.grey[600]
    },
    outlined: {
      main: '#7149C6',
      border: '1px solid #2f2f2f'
    },
    text: {
      primary: '#2f2f2f',
      secondary: colors.grey[800]
    },
    signup: {
      color: "red !important"
    }
  },
  components: {
    MyCustomButton2: {
      styleOverrides: {
        root: {
          backgroundColor: 'yellow',

        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontFamily: "Open Sans",
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "19px",
          letterSpacing: "0em",
          textAlign: "left",
          marginBottom: '-7px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Open Sans",
          fontSize: "12px",
          fontWeight: "400",
          lineHeight: "16px",
          letterSpacing: "0em",
          textAlign: "left",
          paddingBottom: '5px',
          marginTop: 1

        }
      }
    },
    button,
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "Open Sans",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "16px",
          letterSpacing: "0em",
          textAlign: "left",
        }
      }
    },
    MyCustomInput1: {
      styleOverrides: {
        input: {
          backgroundColor: "red",
          color: "white",
        },
      },
    },
    MuiAlert: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            '& .MuiAlert-icon': {
              alignSelf: 'center'
            },
            position: 'absolute',
            zIndex: 30,
            right: '90px',
            top: '0px',
            color: '#7C7C7C',
            border: 'none',
            borderRadius: 0,
            alignSelf: 'center',
            backgroundColor: '#fff',
            width: "calc(450px)",
            overflow: 'unset',
            boxShadow: '0px -1px 6px 4px #0000000D'
          }
        },
        {
          props: { variant: 'alertToast' },
          style: {
            // position: 'absolute',
            // zIndex: 30,
            // bottom: '55px',
            color: '#7C7C7C',
            padding: "20px",
            backgroundColor: '#FFF7F4',
            width: "100%",
            overflow: 'unset',
            boxShadow: '0px -1px 6px 4px #0000000D'
          }
        },
        {
          props: { variant: 'action' },
          style: {
            textTransform: "none",
            padding: "0px",
            "&:disabled": {
              color: 'white'
            }
          }
        },
      ],
      // styleOverrides: {
      //   root: {
      //     // margin:'0 rem',
      //     position: 'absolute',
      //     zIndex: 30,
      //     bottom: '55px',
      //     color: '#7C7C7C',
      //     padding: "20px",
      //     backgroundColor: '#FFF7F4',
      //     width: "calc(100vw - 162px)",
      //     overflow: 'unset',
      //     boxShadow: '0px -1px 6px 4px #0000000D'
      //   }
      // }
    },
    MuiAvatar: {
      variants: [
        {
          props: { variant: 'accessAvatar' },
          style: {
            width: 16,
            height: 16,
            padding: '4px',
            fontSize: "12px"
          }
        },
      ]
    },
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
          props: { variant: 'buyButton' },
          style: {
            border: "1px solid #ADADAD",
            backgroundColor: "#fff",
            fontFamily: "Inter",
            fontSize: "18px",
            lineHeight: "32px",
            padding: '13px',
            color: "#F0682C",
            fontWeight: "700",
            position: 'absolute',
            bottom: '10px',
            boxSizing: 'border-box',
            borderRadius: '16px',
            width: 'inherit',
            marginBottom: '16px',
            textTransform: 'none',
            "&:hover": {
              backgroundColor: '#F0682C',
              border: 'none',
              fontSize: "24px",
              color: '#fff'
            }
          },
        },
        {
          props: { classes: 'action' },
          style: {
            textTransform: "none",
            fontFamily: "Open Sans",
            fontSize: "14px",
            lineHeight: "16px",
            padding: '4px 0',
            fontWeight: "600",
            fontStyle: 'regular',
            textTransform: "none",
            color: "#878787",
            padding:'10px 0px'
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
            fontStyle: 'regular',
            backgroundColor: '#F0682C'
          },
        },

        {
          props: { variant: 'iconButton' },
          style: {
            maxWidth: "10px",
            marginTop: "-8px",
            minWidth: "10px"
          },
        },

        {
          props: { variant: 'started' },
          style: {
            width: "150px",
            marginTop: "50px",
            fontFamily: "Nunito",
            fontSize: "18px",
            lineHeight: "25px",
            padding: '13px',
            color: "#F0682C",
            fontWeight: "600",
            fontStyle: 'regular',
            backgroundColor: '#FFF',
            textTransform: 'none'
          },
        },

        {
          props: { variant: 'learnMore' },
          style: {
            marginTop: "22px",
            fontFamily: "Nunito",
            fontSize: "16px",
            lineHeight: "21px",
            padding: '13px',
            borderRadius: "10px",
            fontWeight: "400",
            fontStyle: 'regular',
            color: '#F0682C',
            textTransform: 'none',
          },
        },
        {
          props: { variant: 'tabButton' },
          style: {
            // width:"150px",
            marginTop: "50px",
            fontFamily: "Nunito",
            fontSize: "18px",
            lineHeight: "25px",
            padding: '13px',
            borderRadius: "10px",
            fontWeight: "600",
            fontStyle: 'regular',
            color: '#F0682C',
            textTransform: 'none',
            "&:hover": {
              backgroundColor: '#F0682C',
              color: '#fff'
            }
          },
        },
        {
          props: { variant: 'save' },
          style: {
            fontFamily: "Open Sans",
            fontSize: "14px",
            lineHeight: "22px",
            padding: '4px 0',
            fontWeight: "400",
            color: '#fff',
            textTransform: 'none',
            fontStyle: 'regular',
            backgroundColor: '#F0682C',
            "&:hover": {
              backgroundColor: '#F0682C',
            }
          },
        },
        {
          props: { variant: 'cancel' },
          style: {
            fontFamily: "Open Sans",
            fontSize: "14px",
            lineHeight: "22px",
            padding: '4px 0',
            fontWeight: "400",
            color: '#959595',
            textTransform: 'none',
            fontStyle: 'regular',
            "&:hover": {
            }
          },
        }
      ]
    },
  },
  // button,
  shadows,
  typography,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
});

export default theme;
