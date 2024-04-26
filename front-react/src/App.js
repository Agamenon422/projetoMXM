import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div className='bg-bottom bg-no-repeat bg-slate-50 dark:bg-[#0B1120] h-screen p-10'>
      <div>
          <h1 className='text-slate-900 font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white'>ProjetoMXM</h1>
      </div>
      <div className='grid grid-cols-2 gap-4 py-10'>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Comando SQL:</label>
          <input className='w-full h-32 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"'></input>
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Saída JSON:</label>
          <input className='w-full h-32 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"'></input>
        </div>
        
        
      </div>

      <div className='text-center'>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Executar comando</button>

      </div>
   </div>
  );
}

export default App;
