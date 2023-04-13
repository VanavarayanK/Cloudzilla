import React from 'react'
import DataTable from 'react-data-table-component';
import ListFile from './../../images/home/listFile.svg'
import { Box, Typography } from '@mui/material';
import SortIcon from './../../images/home/sortIcon.svg'

import Menu from './../../components/Card/Menu.jsx'

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
            padding: '0 1rem'
        },
    },
    rows: {
        style: {
            padding: '0 1rem'
        },
    },
    headCells: {
        style: {
            // padding: '0px 32px',
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
            // padding: '0px 32px',
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

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
        cell: (row) => {
            return (<>
                <Box sx={{ background: "#F6EAE6", p: '11px', borderRadius: 1 }}>
                    <img src={ListFile} alt="" />
                </Box>
                <Typography variant="settingLable" ml={1}>{row.folderName}</Typography>
            </>)
        }
    },
    {
        name: 'File Size',
        selector: row => row.fileSize,
        sortable: true,
    },
    {
        name: 'File Size',
        sortable: true,
        selector: row => row.lastModified,
    },
    {
        name: 'Content Type',
        sortable: true,
        selector: row => row.type,
    },
    {
        name: 'Path',
        sortable: true,
        selector: row => row.path,
    },
    {
        name: '',
        right: true,
        cell: () => {
            return (<Box>
                <Menu />
            </Box>)
        }
    },
]

const data = [
    {
        id: 1,
        folderName: 'Folder 1',
        fileSize: '2.8 MB',
        lastModified: 'Dec 13, 2022',
        type: 'File Folder',
        path: 'C:\Users\murali\Downloads',

    },
    {
        id: 2,
        folderName: 'Folder 2',
        fileSize: '2.8 MB',
        lastModified: 'Dec 14, 2022',
        type: 'File Folder',
        path: 'C:\Users\murali\Downloads',

    },
    {
        id: 3,
        folderName: 'Folder 3',
        fileSize: '2.8 MB',
        lastModified: 'Dec 15, 2022',
        type: 'File Folder',
        path: 'C:\Users\murali\Downloads',

    },
    {
        id: 4,
        folderName: 'Folder 4',
        fileSize: '2.8 MB',
        lastModified: 'Dec 13, 2022',
        type: 'File Folder',
        path: 'C:\Users\murali\Downloads',

    },
    {
        id: 5,
        folderName: 'Folder 5',
        fileSize: '2.8 MB',
        lastModified: 'Dec 13, 2022',
        type: 'File Folder',
        path: 'C:\Users\murali\Downloads',

    },
    {
        id: 6,
        folderName: 'Folder 6',
        fileSize: '2.8 MB',
        lastModified: 'Dec 18, 2022',
        type: 'File Folder',
        path: 'C:\Users\murali\Downloads',

    },
    {
        id: 7,
        folderName: 'Folder 7',
        fileSize: '2.8 MB',
        lastModified: 'Dec 13, 2022',
        type: 'File Folder',
        path: 'C:\Users\murali\Documents',

    },
    {
        id: 8,
        folderName: 'Folder 8',
        fileSize: '2.8 MB',
        lastModified: 'Dec 13, 2022',
        type: 'File Folder',
        path: 'C:\Users\murali\Downloads',

    },
    {
        id: 9,
        folderName: 'Folder 9',
        fileSize: '2.8 MB',
        lastModified: 'Dec 13, 2022',
        type: 'File Folder',
        path: 'C:\Users\murali\Desktop',

    },
    {
        id: 10,
        folderName: 'Folder 10',
        fileSize: '2.8 MB',
        lastModified: 'Dec 13, 2022',
        type: 'File Folder',
        path: 'C:\Users\murali\Downloads',

    },
    {
        id: 11,
        folderName: 'Folder 11',
        fileSize: '2.8 MB',
        lastModified: 'Dec 13, 2022',
        type: 'File Folder',
        path: 'C:\Users\murali\Downloads',

    },
    {
        id: 12,
        folderName: 'Folder 12',
        fileSize: '2.8 MB',
        lastModified: 'Dec 13, 2022',
        type: 'File Folder',
        path: 'C:\Users\murali\Downloads',

    },
    {
        id: 13,
        folderName: 'Folder 13',
        fileSize: '2.8 MB',
        lastModified: 'Dec 13, 2022',
        type: 'File Folder',
        path: 'C:\Users\murali\Downloads',

    },
]

const Table = () => {
    return (
        <div style={{ width: '100%' }}>
            <DataTable
                dense
                noDataComponent="No data available"
                pagination
                noBorder
                sortIcon={<img style={{ margin: "0px 0 -2px 6px ", }} src={SortIcon} alt="" />}
                columns={columns}
                data={data}
                customStyles={customStyles} />
        </div>
    )
}

export default Table