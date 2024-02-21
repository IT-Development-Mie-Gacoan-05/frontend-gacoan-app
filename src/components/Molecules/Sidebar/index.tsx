// src/components/Sidebar.tsx

import React from 'react';
import { Drawer, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  drawer: {
    width: '240px',
  },
});

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const classes = useStyles();

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <div className={classes.drawer}>
        <List>
          <ListItem button>
            <ListItemText primary="Sidebar Link 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Sidebar Link 2" />
          </ListItem>
          {/* Add more sidebar links as needed */}
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
