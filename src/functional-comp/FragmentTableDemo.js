import React from "react";
import TableCellComp from './TableCellComp';

function FragmentTableDemo(){

    return(
        <React.Fragment>
            <h1>Fragment Demo With Table</h1>
            <table border="1">
                <tr>
                    <TableCellComp/>
                </tr>
            </table>
        </React.Fragment>
    )
}

export default FragmentTableDemo;