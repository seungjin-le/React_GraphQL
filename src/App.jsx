import ProtoType from './components/layout/ProtoType'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Orders from './components/layout/Orders'


function App() {
  return (
    <>
      <Header/>
      <div className='container'>
        <ProtoType></ProtoType>
        <Orders></Orders>
        <Footer/>
      </div>
    </>
  );
}

export default App;
