import './Home.scss'
import OfficeCard from "../../components/office-card/OfficeCard";
import { Button, Container, Stack } from 'react-bootstrap';
import { PlusIcon } from '../../assets/icons';
import OfficeModal from '../modals/office-modal/office-modal';
import { useEffect, useState } from 'react';
import { OfficesService } from '../../services';
import { Office } from '../../services/models/intefaces';

function Home() {
  const officesService = new OfficesService();
  const [offices, setOffices] = useState<Office[]>();
  useEffect(() => {
    const allOffices = async () => {
      try {
        const offices = await officesService.getAll();
        setOffices(offices);
      } catch ({message}: any) {
        console.log(message);
      }
    }
    allOffices()
  });
  return (
    <Container className='home'>
      <Stack direction='vertical'>
        <h3 className='header pt-4 pb-2'>All Offices</h3>
        {offices?.map(office => <OfficeCard office={office}/>)}
      </Stack>
      <Button variant='primary' className='button rounded-circle  position-absolute bottom-0 end-0'>
        <PlusIcon/>
      </Button>
      <OfficeModal/>
    </Container>
  )
}


export default Home;