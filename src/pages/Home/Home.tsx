import './Home.scss'
import OfficeCard from "../../components/office-card/OfficeCard";
import { Button, Container, Stack } from 'react-bootstrap';
import { PlusIcon } from '../../assets/icons';
import OfficeModal from '../modals/office-modal/office-modal';

function Home() {
  return (
    <Container className='home'>
      <Stack direction='vertical'>
        <h3 className='header pt-4 pb-2'>All Offices</h3>
        <OfficeCard/>
      </Stack>
      <Button variant='primary' className='button rounded-circle  position-absolute bottom-0 end-0'>
        <PlusIcon/>
      </Button>
      <OfficeModal/>
    </Container>
  )
}


export default Home;