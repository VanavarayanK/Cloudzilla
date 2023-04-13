import React from 'react'
import DataTable from 'react-data-table-component';
import { Box, IconButton, make, Typography } from '@mui/material';
import SortIcon from './../../images/home/sortIcon.svg'
import Checked from './../../images/home/checked.svg'
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@mui/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const useStyles = makeStyles((theme) => ({
    right: {
        display: "flex",
        justifyContent: "flex-end",
    }
}))
const customStyles = {
    rows: {
        style: {
            minHeight: '800px',
            // override the row height
            '&:not(:last-of-type)': {
                borderBottom: 'none',
            },
        },
    },
    noData: {
        style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "Open Sans",
            fontSize: "16px",
            lineHeight: "18px",
            fontWeight: "500",
            fontStyle: 'regular',
            color: "#A7A7A7",
        },
    },
    headRow: {
        style: {
            borderBottomColor: '#EFEFEF',
            // padding: '0 1rem'
        },
    },
    headCells: {
        style: {
            padding: '0px 32px',
            fontFamily: "Open Sans",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "18px",
            letterSpacing: "0em",
            textAlign: "center",
        },
    },
    cells: {
        style: {
            padding: '0px 32px',
            margin: '10px 0',
            fontFamily: "Open Sans",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "18px",
            letterSpacing: "0em",
            textAlign: "center",
        },
    },
    pagination: {
        style: {
            float: 'right'
        }
    }
}

const colors = [
    {
        text: '#FF7800',
        bg: '#FCBB818F'
    },
    {
        text: '#BD00FF',
        bg: '#DC81FC8F'
    },
    {
        text: '#1400FF',
        bg: '#81BAFC8F'
    },
    {
        text: '#C9AB42',
        bg: '#FCE8818F'
    },
]





const columns = [
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
        cell: (row) => {
            const color = Math.floor(Math.random() * colors.length)
            return (<>
                <Box >
                    <Avatar sx={{ bgcolor: colors[color].bg, color: colors[color].text }}>{row.name.charAt(0)}</Avatar>
                </Box>
                <Typography variant="settingLable" ml={1}>{row.name}</Typography>
            </>)
        }
    },
    {
        name: 'User  ID',
        selector: row => row.userId,
        sortable: true,
    },
    {
        name: 'Created On',
        sortable: true,
        selector: row => row.createdOn,
    },
    {
        name: 'Access Over',
        sortable: true,
        selector: row => row.count,
        cell: (row) => {
            return (<>
                <Box sx={{ border: '1px solid #F0682C', p: '7px 21px' }}>
                    <Typography variant="settingLable">{row.count}</Typography>
                </Box>
            </>)
        }
    },
    {
        name: 'View Access',
        // sortable: true,
        center: true,
        selector: row => row.path,
        cell: (row) => {
            return (
                <Checkbox
                    sx={{ color: '#ADAAAA' }}
                    checkedIcon={<img src={Checked} alt="jkh" />}
                    size="small" />
            )
        }
    },
    {
        name: 'Edit Access',
        center: true,
        cell: () => {
            return (
                <Checkbox
                    sx={{ color: '#ADAAAA' }}
                    checkedIcon={<img src={Checked} alt="jkh" />}
                    size="small" />)
        }
    },
]

const viewColumns = [
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
        cell: (row) => {
            const color = Math.floor(Math.random() * colors.length)
            return (<>
                <Box >
                    <Avatar sx={{ bgcolor: colors[color].bg, color: colors[color].text }}>{row.name.charAt(0)}</Avatar>
                </Box>
                <Typography variant="settingLable" ml={1}>{row.name}</Typography>
            </>)
        }
    },
    {
        name: 'User  ID',
        selector: row => row.userId,
        sortable: true,
    },
    {
        name: 'Created On',
        sortable: true,
        selector: row => row.createdOn,
    },
    {
        name: 'Access Over',
        sortable: true,
        selector: row => row.count,
        cell: (row) => {
            return (<>
                <Box sx={{ border: '1px solid #F0682C', p: '7px 21px' }}>
                    <Typography variant="settingLable">{row.count}</Typography>
                </Box>
            </>)
        }
    },
    {
        name: 'View Access',
        // sortable: true,
        // center: true,
        selector: row => row.path,
        cell: (row) => {
            return (
                <CheckCircleIcon style={{color:'#3AB874'}} fontSize="small"/>
            )
        }
    },
    {
        name: 'Edit Access',
        cell: () => {
            return (
                <CancelIcon style={{color:'#B83A3A'}} fontSize="small"/>
                )
        }
    },
    {
        name: '',
        center: true,
        cell: () => {
            return (
               <>
                <IconButton style={{backgroundColor:'#E9E9E9', marginRight:'24px'}}>   
                    <EditIcon  style={{color:'#000000'}} fontSize="small"/>
                </IconButton>
                <IconButton  style={{backgroundColor:'#E9E9E9'}}>   
                    <DeleteIcon style={{color:'#000000'}} fontSize="small"/>
                </IconButton>
                </>
                )
        }
    },
]


const data = [
    {
        id: 1,
        name: 'Muralidharan',
        fileSize: '2.8 MB',
        userId: 'ID76763334287',
        createdOn: '11:00 P.M ,01/01/2023',
        count: '12 Folders',

    },
    {
        id: 2,
        name: 'Naren',
        fileSize: '2.8 MB',
        userId: 'ID76763334287',
        createdOn: '11:00 P.M ,01/01/2023',
        count: '12 Folders',

    },
    {
        id: 3,
        name: 'Vanavarayan',
        fileSize: '2.8 MB',
        userId: 'ID76763334287',
        createdOn: '11:00 P.M ,01/01/2023',
        count: '12 Folders',

    },
    {
        id: 4,
        name: 'Pradeep',
        fileSize: '2.8 MB',
        userId: 'ID76763334287',
        createdOn: '11:00 P.M ,01/01/2023',
        count: '12 Folders',

    },
    {
        id: 5,
        name: 'Ganesh',
        fileSize: '2.8 MB',
        userId: 'ID76763334287',
        createdOn: '11:00 P.M ,01/01/2023',
        count: '12 Folders',

    },
    {
        id: 6,
        name: 'Karthik',
        fileSize: '2.8 MB',
        userId: 'ID76763334287',
        createdOn: '11:00 P.M ,01/01/2023',
        count: '12 Folders',

    },
    {
        id:7,
        name: 'Komathi',
        fileSize: '2.8 MB',
        userId: 'ID76763334287',
        createdOn: '11:00 P.M ,01/01/2023',
        count: '12 Folders',

    },
    {
        id: 8,
        name: 'Monish',
        fileSize: '2.8 MB',
        userId: 'ID76763334287',
        createdOn: '11:00 P.M ,01/01/2023',
        count: '12 Folders',

    },
    {
        id: 9,
        name: 'Muralidharan',
        fileSize: '2.8 MB',
        userId: 'ID76763334287',
        createdOn: '11:00 P.M ,01/01/2023',
        count: '12 Folders',

    },
    {
        id: 10,
        name: 'Muralidharan',
        fileSize: '2.8 MB',
        userId: 'ID76763334287',
        createdOn: '11:00 P.M ,01/01/2023',
        count: '12 Folders',

    },
    {
        id: 11,
        name: 'Muralidharan',
        fileSize: '2.8 MB',
        userId: 'ID76763334287',
        createdOn: '11:00 P.M ,01/01/2023',
        count: '12 Folders',

    },
    {
        id: 12,
        name: 'Muralidharan',
        fileSize: '2.8 MB',
        userId: 'ID76763334287',
        createdOn: '11:00 P.M ,01/01/2023',
        count: '12 Folders',

    },
    {
        id: 13,
        name: 'Muralidharan',
        fileSize: '2.8 MB',
        userId: 'ID76763334287',
        createdOn: '11:00 P.M ,01/01/2023',
        count: '12 Folders',

    },
]


const Table = () => {
    const classes = useStyles()
    return (
        <div style={{width:'100%'}}>
            <DataTable
                dense
                noDataComponent="No users available"
                pagination

                sortIcon={<img style={{ margin: "0px 0 -2px 6px ", }} src={SortIcon} alt="" />}
                columns={viewColumns}
                data={data}
                customStyles={customStyles} />
        </div>
    )
}

export default Table