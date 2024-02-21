import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CssBaseline, makeStyles } from '@material-ui/core';
import Navbar from '../../components/Molecules/Navbar';
import Sidebar from '../../components/Molecules/Sidebar';
import CustomTable from '../../components/Molecules/Table';
import { RootState } from '../../store/store';
import { fetchEmployee } from '../../store/features/employeeSlice';

const useStyles = makeStyles(theme => ({
  content: {
    marginTop: theme.spacing(8),
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch<any>();
  const { employee, status, error } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEmployee());
    }
  }, [status, dispatch]);

  const handleDrawerOpen = () => {
    setSidebarOpen(true);
  };

  const handleDrawerClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <CssBaseline />
      <Navbar handleDrawerOpen={handleDrawerOpen}/>
      <Sidebar isOpen={sidebarOpen} onClose={handleDrawerClose} />
      <Container className={classes.content}>
        <h1>Posts</h1>
        {status === 'loading' && <div>Loading...</div>}
        {status === 'failed' && <div>Error: {error}</div>}
        {status === 'succeeded' && <CustomTable employee={employee} />}
      </Container>
    </div>
  );
};

export default Home;
