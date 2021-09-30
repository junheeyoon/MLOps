import React, { useContext } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../Title';
import moment from 'moment';
import { DataContext } from '../../Providers/DataProvider';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Node() {
  const classes = useStyles();
  const { data } = useContext(DataContext);
  const rows = Object.values(data);
  return (
    <React.Fragment>
      <Title>Load Average</Title>
      
            <iframe frameborder={0} height={400}
                src={'http://localhost:3000/d-solo/-ZMj5jH7z/node-exporter-quickstart-and-dashboard?orgId=1&from=1632984087531&to=1632987687531&theme=light&panelId=3"'} />
      
      
            <div className={classes.seeMore}>
      </div>
    </React.Fragment>
  );
}
