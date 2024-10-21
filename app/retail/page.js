import React from 'react'
import Layout from '@/components/layout/Layout'
const retail  = () => {
  return (
//     <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img class="d-block w-100" src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26" alt="First slide"/>
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100" src="..." alt="Second slide"/>
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100" src="..." alt="Third slide"/>
//     </div>
//   </div>
// </div>
<Layout headerStyle={1} footerStyle={1} logoWhite>

<div className="p-5 text-center bg-image rounded-3" style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    height: "400px"
}}>
  <div className="mask" style={{backgroundColor: "rgba(0, 0, 0, 0.6)}}"}}>
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-white">
        <h1 className="mb-3 py-5">Retail</h1>
        <h4 className="mb-3">Lead the next frontier of retail</h4>
        <a data-mdb-ripple-init className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
      </div>
    </div>
  </div>
</div>

<div className='flex justify-content-center align-items-center text-center'>
    <h4 style={{padding:"20px"}}>RETAIL</h4>
    <h2 style={{fontWeight:"normal", padding:"25px"}}>Lead with Zylivo Innvoations <sup className='font-weight-light' style={{fontWeight:"lighter", fontSize:"30px"}}>TM</sup></h2>
    <p className='' style={{fontSize:"20px"}}>We help you fuel growth and innovate continuously by enabling end-to-end business <br/>transformation across digital strategy, customer experience, operations, and commercial <br/> proposition optimization. Our deep industry expertise, unique outcome-driven engagement <br/> model, AI-powered products and platforms, innovation hubs, and partnership ecosystems <br/> accelerate your journey to a data-led, nimble enterprise of the future.</p>
</div>
      </Layout>
  )
}

export default retail 