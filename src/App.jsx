import Card from "./Card"
import Footer from "./Footer"
import Navbar  from "./Navbar"

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <div className="cards"> 
       <Card title="card 1" description="card 1 descr"></Card>
       <Card title="card 2" description="card 2 descr"></Card>
       <Card title="card 3" description="card 3 descr"></Card>
       <Card title="card 4" description="card 4 descr"></Card>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
