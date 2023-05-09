import Sidebar from './components/Shared/Sidebar';
import { FaApple, FaPhoenixSquadron, FaWineGlassAlt, FaAlignRight, FaRegWindowClose, FaAngleDown} from "react-icons/fa";
import { useState } from 'react';
import Card from './components/Shared/Card';
import Foto1 from './img/plato2.png';
import Foto2 from './img/plato1.png';
import Foto3 from './img/plato3.png';
import Foto4 from './img/plato4.png';
import Header from './components/Shared/Header';
function App() {
    
    const [showMenu, setShowMenu] = useState(false);
    
    const [showOrder, setShowOrder] = useState(false);




    const toggleMenu = () => {
      setShowMenu(!showMenu);
      setShowOrder(false);
    }
    const toggleOrder = () =>{
      setShowOrder(!showOrder);
      setShowMenu(false);
    }



    return (
    <div className="bg-[#262837] w-full min-h-screen">
    <Sidebar showMenu={showMenu}/>
    <Card showOrder={showOrder} setShowOrder={setShowOrder}/>
    {/* menu movil */}
    <nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 px-8 flex item-center justify-between rounded-tl-xl rounded-tr-xl'>
      <button className='p-2'>
        <FaApple />
      </button>
      <button className='p-2'>
        <FaPhoenixSquadron />
      </button>  
      <button onClick={toggleOrder} className='p-2'>
        <FaWineGlassAlt />
      </button>
      <button onClick={toggleMenu} className='text-white p-2'>
        {showMenu  ? <FaRegWindowClose/> :<FaAlignRight/>  }
      </button>
      
    </nav>
    <main className='lg:pl-32 lg:pr-96 pb-20'>
      <div className='md:p-8 p-4'>
        {/* header */}
        <Header />
        {/* Title content */}
        <div className='flex items-center justify-between mb-20'>
            <h2 className='text-xl text-gray-300'>Choose Dishes</h2>
            <button className='flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg'><FaAngleDown />Dine in </button>
        </div>
        {/* Content */}
        <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
          {/* Card */}
          <Card img={Foto1} description="Speacy seasoned seafood nodless" price="$2.29" inventory="20" />
          {/* Card */}
          <Card img={Foto3} description="Speacy seasoned seafood nodless" price="$2.29" inventory="20" />
          {/* Card */}
          <Card img={Foto4} description="Speacy seasoned seafood nodless" price="$2.29" inventory="20" />
          {/* Card */}
          <Card img={Foto1} description="Speacy seasoned seafood nodless" price="$2.29" inventory="20" />
          {/* Card */}
          <Card img={Foto1} description="Speacy seasoned seafood nodless" price="$2.29" inventory="20" />
          {/* Card */}
          <Card img={Foto3} description="Speacy seasoned seafood nodless" price="$2.29" inventory="20" />
          {/* Card */}
          <Card img={Foto4} description="Speacy seasoned seafood nodless" price="$2.29" inventory="20" />
          {/* Card */}
          <Card img={Foto3} description="Speacy seasoned seafood nodless" price="$2.29" inventory="20" />
          {/* Card */}
          <Card img={Foto1} description="Speacy seasoned seafood nodless" price="$2.29" inventory="20" />
          {/* Card */}
          <Card img={Foto2} description="Speacy seasoned seafood nodless" price="$2.29" inventory="20" />
        </div>
      </div>
    </main>
    </div>
  )
}

export default App
