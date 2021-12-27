import './App.css';

function App() {
  return (
    <div>
      <section className='max-w-full h-screen bg-dunes bg-cover bg-center overflow-hidden'>
        <header>
          <img
            className='object-cover max-w-full max-h-full overflow-hidden'
            src='https://source.unsplash.com/1920x1080/'
            alt=''
          />

          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'>
            <div className='container mx-auto px-4 py-16'>
              <h1 className='text-white text-8xl font-bold'>Some text</h1>
            </div>
          </div>
        </header>
      </section>
    </div>
  );
}

export default App;
