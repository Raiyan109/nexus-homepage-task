import { useContext } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import { PageContext } from '../context/PageProvider';

const UpperNav2 = () => {
    const { upperNav2Open, setUpperNav2Open } = useContext(PageContext)
    return (
        <>
            <div className="bg-zinc-800 text-white w-full h-full p-2 pl-3 flex items-center justify-evenly">
                <p>Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400
                </p>
                <div
                    className='cursor-pointer'
                    onClick={() => setUpperNav2Open(!upperNav2Open)}>
                    <AiOutlinePlus />
                </div>
            </div>


        </>
    );
};

export default UpperNav2;