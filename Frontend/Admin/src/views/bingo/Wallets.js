import {
    CCard,
    CCardBody, CCol,
    CRow
} from '@coreui/react';
import React, { useState, useCallback } from 'react';
import DataGrid from 'react-data-grid';

import axios from "axios";
import Swal from "sweetalert2";

const Wallets = () => {

    const rowKeyGetter = (row) => {
        return row.id;
    }

    const columns = [
        { key: 'id', name: 'No' },
        { key: 'address', name: 'Wallet Address' },
        { key: 'connected_on', name: 'Connected On' }
    ];

    const createFakeRowObjectData = (index) => {
        return {
            id: `${index + 1}`,
            address: 'VQGNB5ASZEBGFWY7L3DIMUQTOAV3KDTJ4QO7DBP2NHV3IKWPVSHQOFB5RQ',
            connected_on: "2021-11-22"
        };
    }

    const createRows = (numberOfRows) => {
        const rows = [];

        for (let i = 0; i < numberOfRows; i++) {
            rows[i] = createFakeRowObjectData(i);
        }

        return rows;
    }

    const isAtBottom = ({ currentTarget }) => {
        return currentTarget.scrollTop + 10 >= currentTarget.scrollHeight - currentTarget.clientHeight;
    }

    const loadMoreRows = (newRowsCount, length) => {
        return new Promise((resolve) => {
            const newRows = [];

            for (let i = 0; i < newRowsCount; i++) {
                newRows[i] = createFakeRowObjectData(i + length);
            }

            setTimeout(() => resolve(newRows), 1000);
        });
    }

    const [rows, setRows] = useState(() => createRows(50));
    const [isLoading, setIsLoading] = useState(false);

    async function handleScroll(event) {
        if (isLoading || !isAtBottom(event)) return;

        setIsLoading(true);

        const newRows = await loadMoreRows(50, rows.length);

        setRows([...rows, ...newRows]);
        setIsLoading(false);
    }

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardBody>
                        <DataGrid
                            className="t_height_78vh"
                            columns={columns}
                            rows={rows}
                            rowKeyGetter={rowKeyGetter}
                            onRowsChange={setRows}
                            rowHeight={40}
                            headerRowHeight={50}
                            onScroll={handleScroll}
                        />
                        {isLoading && <div className={'loadMoreRowsClassname'}>Loading more rows...</div>}
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
}

export default Wallets
