import Head from 'next/head'
import Footer from "src/components/Footer"
import Card3_T800 from "src/components/Card3_T800"
import Container_T800 from "src/components/Container_T800"

export default function Home() {
  return ( 
<div className="container">
      <Head>
        <title>AG Store</title>
        <link rel="icon" href="/AG Logo.png" />
      </Head>

<img src="/My_Polisher/my_polisher_1.jpg" layout="intrinsic" width={1518} height={510} alt="AG logo"/>    
<p className= "description2_T800">T-800 Double Action Polisher</p>   

<main className="main">
 <div className="container2">
  <div className="grid2"> 
   <a className="card3_T800">
    <img  src="/My_Polisher/my_polisher_13.png" layout="fixed" width={950} height={450} alt="Rupes logo"/> </a>
    <Card3_T800 title3_T800= "All Purpose Polisher" title3_T8002= "Available Soon" description= "Designed in carbon fiber reinforced polymer and anodized aluminum, for polishing, waxing and compounding " />
  <img src="/My_Polisher/my_polisher_2.jpg" layout="intrinsic" width={1518} height={510} alt="AG logo"/> 
   </div>
 </div> 

<Container_T800/>
</main>

<Footer description= "AG Detailing Store" image= "/AG Logo.png" />
</div>
  )
}




