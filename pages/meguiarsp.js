import Head from 'next/head'
import Title2 from "src/components/Title2"
import Description2 from "src/components/Description2"
import Button from "src/components/Button"
import Card2 from "src/components/Card2"
import Card3 from "src/components/Card3"
import Footer from "src/components/Footer"

export default function Home() {
  return ( 
<div className="container">
      <Head>
        <title>AG Store</title>
        <link rel="icon" href="/AG Logo.png" />
      </Head>

<img src="/meguiarpost.png" layout="intrinsic" width={1518} height={510} alt="AG logo"/>
  
<Title2 title2= "Hybrid Ceramic" />
<Description2 description2= "Designed by professionals, for professionals" />       
<Button button= "Featured Products" />
 
 <main className="main">
 <div className="grid2">

<Card2 description= "Hybrid Ceramic Clay Kit" image= "/ceramickit.png" price= "$29.99" />
<Card2 description= "Ceramic Quick Detailer" image= "/ceramicdetailer.png" price= "$16.99" />
<Card2 description= "Hybrid Ceramic Liquid Wax" image= "/ceramicliquid.png" price= "$24.99" />
<Card2 description= "Hybrid Paint Coating" image= "/hybridcoating.png" price= "$59.99" />
<Card2 description= "Hybrid Wash Mitt" image= "/hybridwashmitt.png" price= "$9.99" />
<Card2 description= "Hybrid Ceramic Wax" image= "/ceramicwax.png" price= "$22.99" />

          
<div className="container2">
  <div className="grid2"> 
   <a href="http://localhost:3000/producto" className="card3">
    <img  src="/MT300.png" layout="fixed" width={450} height={450} alt="Rupes logo"/> 
   </a>

<Card3 title3= "Double Action Polisher MT 300" price= "$259.99" description= "Designed by professionals, for professionals with an ergonomic variable speed design that fits into the handle. Digital torque and speed management control, ensures adequate torque to maintain constant speed level, steel counterweight with multiple bearings for better balancing, wide speed range 3000-7500 OPM for maximum control. 8mm orbit optimized for polishing, polishing and waxing on both large surfaces and small contours." />

  </div>
 </div>
</div> 
    <img src="/banner2.jpg" layout="intrinsic" width={1518} height={280} alt="AG logo"/>
</main>
<Footer description= "AG Detailing Store" image= "/AG Logo.png" />
    </div>
  )
}




