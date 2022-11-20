import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import '../../../sections/@dashboard/banner/Banner.css';
import {
  Card,
  Box,
  Grid,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
// import UserIcon from '../../../sections/@dashboard/user/UserIcon';
import Iconify from '../../Iconify';
import kitchen from '../../images/kitchen.jpg';
import diamond from '../../images/diamond.png';
import dots from '../../images/dots.png';
// import ProductImageTable from './ProductImageTable';
import Page from '../../Page';
import Label from '../../Label';
import Scrollbar from '../../Scrollbar';
import SearchNotFound from '../../SearchNotFound';
import { UserListHead, UserListToolbar } from '../../../sections/@dashboard/user';
import USERLIST from '../../../_mock/user';

const TABLE_HEAD = [
    { id: 'tName', label: 'Image', alignRight: false },
    { id: 'company', label: 'Description', alignRight: false },
    { id: 'role', label: 'Size', alignRight: false },
  //   { id: 'isVerified', label: 'Message', alignRight: false },
  //   { id: 'status', label: 'Status', alignRight: false },
    { id: '' },
  ];

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (query) {
      return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
  }
  

const VanityVan = () => {

  const [vanityVanTable, setVanityVanTable] = useState([]);

  useEffect(() => {
    const getVanityVanTableData = async () => {
      try{
        const {data} = await axios.get('http://localhost:8080/api/aparra/getVanityVan');
        setVanityVanTable(data);
        console.log(data);
      }catch(error){
        console.log(error);
      }
    }
    getVanityVanTableData();
  }, []);


  const [image, setImage] = useState();

  const handleImageFile = (e) => {
    setImage(e.target.files[0], '$$$$');
    console.log(image);
  };

  // console.log('image', image);

  const [vanityVan, setVanityVan] = useState({
    desc: '',
    size:''
  });

  const handleChange = ({ currentTarget: input }) => {
    setVanityVan({
      ...vanityVan,
      [input.name]: input.value,
    });
    console.log(vanityVan);
  };

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;

  

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      console.log('vanityVan', vanityVan);
      console.log('image', image);
      const formData = new FormData();
      formData.append('image', image);
      formData.append('desc', vanityVan.desc);
      formData.append('size', vanityVan.size);
      console.log('formData', formData);

      await axios.post(`http://localhost:8080/api/aparra/addVanityVan`, formData).then((res) => {
        console.log(res);
      }
      ).catch((err) => {
        console.log(err);
      });
      alert("Data submitted successfully!!");
    }catch(error){
      console.log(error);
    }
  }


  return (
    <>
      <Box >
      <Box >
        
      <form onSubmit={handleSubmit}>
            <Box mb={3}>
                <Typography variant="h6">
                    Add New Image
                </Typography>
            </Box>
            <Box >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    <Button variant="outlined" fullWidth component="label" sx={{ pt: 1.8, pb: 1.8,  }}
                    value = {image}
                    onChange = {(e) => handleImageFile(e)}
                    >
                Upload Image
                <input
                  hidden
                  // accept="image/*"
                  type="file"
                />
              </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="desc"
                    value={vanityVan.desc}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                <TextField
                    label="Size"
                    variant="outlined"
                    fullWidth
                    type="text"
                    name="size"
                    value={vanityVan.size}
                    onChange={handleChange}
                  />
                </Grid>
                    {/* <Grid item xs={3}>
                        <Box mt={1} mb={3}>
                        <Button variant="contained" type="submit">Submit</Button>
                        </Box>
                    
                    </Grid> */}

                </Grid>
              
              
            </Box>
            <Box mt={3} mb={3}>
                        <Button variant="contained" type="submit">Submit</Button>
                        </Box>
            </form>
          </Box>
          
          
            
            {/* <Box >
            <Box mb={3}>
                <Typography variant="h6">
                    Image List
                </Typography>
            </Box>
              <Grid container spacing={3}>
                <Grid item xs={6} md={3}>
                  <Box className="pic" sx={{ height: '150px', width: '210px' }}>
                    <UserIcon />
                    <img style={{ borderRadius: '8px' }} src={kitchen} alt="kitchen" />
                  </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Box className="pic" sx={{ height: '150px', width: '210px' }}>
                    <UserIcon />
                    <img style={{ borderRadius: '8px' }} src={kitchen} alt="kitchen" />
                  </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Box className="pic" sx={{ height: '150px', width: '210px' }}>
                    <UserIcon />
                    <img style={{ borderRadius: '8px' }} src={kitchen} alt="kitchen" />
                  </Box>
                </Grid>
                <Grid item xs={6} md={3}>
                  <Box className="pic" sx={{ height: '150px', width: '210px' }}>
                    <UserIcon />
                    <img style={{ borderRadius: '8px' }} src={kitchen} alt="kitchen" />
                  </Box>
                </Grid>
              </Grid>
            </Box> */}
            <Box>
            <Box mt={3} ml={-3} mr={-3}>
            <Container>
        {/* <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button>
        </Stack> */}

          <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {vanityVanTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, desc, size, image } = row;
                    const isItemSelected = selected.indexOf(id) !== -1;

                    return (
                      <TableRow
                        hover
                        key={id}
                        tabIndex={-1}
                        role="checkbox"
                        selected={isItemSelected}
                        aria-checked={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, id)} />
                        </TableCell>
                        {/* <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={name} src={avatarUrl} />
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                          </Stack>
                        </TableCell> */}
                        <TableCell align="left"><img src={image} alt="" height={50} /></TableCell>
                        <TableCell align="left">{desc}</TableCell>
                        <TableCell align="left">{size}</TableCell>
                        {/* <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell> */}
                        {/* <TableCell align="left">
                          <Label variant="ghost" color={(status === 'banned' && 'error') || 'success'}>
                            {sentenceCase(status)}
                          </Label>
                        </TableCell> */}
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
      </Container>
          </Box>
            </Box>
          
     
          
          
      </Box>
    </>
  );
};

export default VanityVan;
