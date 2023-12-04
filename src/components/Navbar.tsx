import { getServerSession } from 'next-auth';
import { options } from '@/lib/auth';
import Nav from './Nav';

const Navbar = async () => {
  const session = await getServerSession(options)
  
  return (
    <Nav user={session?.user}/>
  );
};

export default Navbar;
