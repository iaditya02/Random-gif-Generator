import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import Tags from './components/Tags';

function App() {
  return (
    <div className=' bg-green-700 w-full h-full flex flex-col items-center'>
      <h1 className=' bg-slate-100 w-11/12 text-4xl text-center mt-[40px] rounded-md px-3 py-4 mx-auto font-bold'>RANDOM GIFS</h1>
      <div className='w-full flex items-center flex-col gap-y-10 mt-8'>
        <Random/>
        <Tags/>
      </div>
    </div>
  );
}

export default App;
