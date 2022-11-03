import React,{ useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
// import {Box} from '@mui/material';
import { Menu, Box,MenuItem, IconButton, ListItemIcon, ListItemText,Modal, Button } from '@mui/material';
import Typography from '@mui/material/Typography';

// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius:'8px',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };


export default function UserIcon() {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

<Modal
// hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Typography variant="h6">
            Are you sure you want to delete?
          </Typography>
          <Box mt={3} sx={{display:'flex', justifyContent:'space-evenly'}}>
            <Button variant="contained">Delete</Button>
            <Button variant="contained" onClick={handleClose}>Cancel</Button>
          </Box>
        </Box>
      </Modal>

    <Box className='icon'>
    <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>
    </Box>      

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Iconify icon="eva:trash-2-outline" width={24} height={24} />
          </ListItemIcon>
          <Button onClick={handleOpen}>
          <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
          </Button>          
        </MenuItem>

        {/* <MenuItem component={RouterLink} to="#" sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Iconify icon="eva:edit-fill" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem> */}
      </Menu>
    </>
  );
}
