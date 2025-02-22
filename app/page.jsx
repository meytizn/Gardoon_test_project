import Image from 'next/image'
import AddIcon from '@mui/icons-material/Add';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Link } from '@mui/material';
import AddressBar from './components/AddressBar';
import ButtonBar from './components/buttonbar';
import Table from './components/Table';

import GetApi from './api/GetApi';
import PostApi from './api/PostApi';


export default function Dashboard() {
  return (
    <>
    <AddressBar/>
    <ButtonBar/>
    <Table/>
  
  <GetApi/>
  
  <PostApi/>
    </>
  )
}
