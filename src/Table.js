import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import CancelIcon from "material-ui/svg-icons/navigation/cancel";
import TrashIcon from "material-ui/svg-icons/action/delete";


const row = (x, i, header, handleRemove,) =>
  <TableRow key={`tr-${i}`}>
    {header.map((y, k) =>
      <TableRowColumn key={`trc-${k}`}>
        {x[y.prop]}
      </TableRowColumn>
    )}
    <TableRowColumn>
       <CancelIcon className="icon" onClick={() => {if (window.confirm('Are you sure you wish to delete this User?')) handleRemove(i) }} />
    </TableRowColumn>
  </TableRow>;

  
const myTable = ({data, header, handleRemove, i, handleRemoveAll, handleSort, }) => (
  <Table>
    <TableHeader>
      <TableRow>
        {header.map((x, i) =>
          <TableHeaderColumn key={`thc-${i}`}>
           <div className="th" onClick={() => handleSort(x.prop)}> {x.name} </div>
          </TableHeaderColumn>
        )}
         <TableHeaderColumn>
            <TrashIcon className="icon" onClick={() => {if (window.confirm('Are you sure you wish to delete all Users?')) handleRemoveAll(i)}} />
          </TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((x, i) => row(x, i, header, handleRemove))}
    </TableBody>
  </Table>
);

export default myTable;
