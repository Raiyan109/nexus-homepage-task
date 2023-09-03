import { useContext } from 'react';
import UpperNav1 from '../components/UpperNav1';
import UpperNav2 from '../components/UpperNav2';
import { PageContext } from '../context/PageProvider';

const Home = () => {
    const { upperNav2Open } = useContext(PageContext)
    return (
        <div>
            <div className='fixed transition-all'>
                {upperNav2Open && (
                    <aside className='w-full h-full bg-white'>
                        This is sideNav
                    </aside>
                )}
            </div>
            <UpperNav1 />
            <UpperNav2 />
        </div>
    );
};

export default Home;