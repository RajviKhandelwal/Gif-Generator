
import './App.css';
import Random from './comonents/Random';
import Tag from './comonents/Tag';
// pudtpGHuY0gHN9HOOvsLga2w7gRdCOjQ

function App() {
  return ( 

    <div className='w-full h-screen flex flex-col background relative overflow-x-hidden items-center'>

      <h1 className=' rounded-sm  w-11/12 text-center mt-[40px] px-10 y-2 text-4xl font-bold'>GIF Generator</h1>

      <div className='flex flex-col w-full items-center '>
        <Random/>
        <Tag/>     
      </div>

    </div>

  );
}

export default App;
