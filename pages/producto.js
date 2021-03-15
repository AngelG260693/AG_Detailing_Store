import Head from 'next/head'
import Footer from "src/components/Footer"
import Description2_MT300 from "src/components/Description2_MT300"
import Card3_MT300 from "src/components/Card3_MT300"
import Container_MT300 from "src/components/Container_MT300"

export default function Home() {
  return ( 
<div className="container">
      <Head>
        <title>AG Store</title>
        <link rel="icon" href="/AG Logo.png" />
      </Head>

<img src="/MT300_banner4.png" layout="intrinsic" width={1518} height={510} alt="AG logo"/>  
<Description2_MT300 description2_MT300= "Double Action Polisher MT 300" />      

<main className="main">
 <div className="container2">
  <div className="grid2"> 
   <a className="card3">
    <img  src="/MT300.png" layout="fixed" width={550} height={450} alt="Rupes logo"/> </a>
    <Card3_MT300 title3_MT300= "Reflect Your Passion" title3_MT3002= "$259.99" description= "Designed by professionals, for professionals with an ergonomic variable speed design that fits into the handle. Digital torque and speed management control, ensures adequate torque to maintain constant speed level, steel counterweight with multiple bearings for better balancing, wide speed range 3000-7500 OPM for maximum control. 8mm orbit optimized for polishing, polishing and waxing on both large surfaces and small contours." />
   </div>
 </div> 

<Container_MT300/>

<p className="title3_MT300" > Recomended</p>
<img src="/DApower_banner.jpg" layout="intrinsic" width={1518} height={510} alt="AG logo"/>  
  
</main>
<Footer description= "AG Detailing Store" image= "/AG Logo.png" />
</div>
  )
}




