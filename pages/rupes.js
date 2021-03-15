import Head from 'next/head'
import Title from "src/components/Title"
import Description2_rupes from "src/components/Description2_rupes"
import Card3_rupes from "src/components/Card3_rupes"
import Card3_rupes2 from "src/components/Card3_rupes2"
import Footer from "src/components/Footer"


export default function Home() {
  return (
    
   <div className="container">
      <Head>
        <title>AG Store</title>
        <link rel="icon" href="/AG Logo.png" />
      </Head>

   <img src="/rupes_banner2.jpg" layout="intrinsic" width={1518} height={510} alt="AG logo"/>
   
<Title title= "RUPES" />
<Description2_rupes description2_rupes= "INNOVATION TECHNOLOGY DESIGN" />

<main>
  <Card3_rupes image= "/rupes_polisher2.jpg" title3= "ORBITAL ALETORY POLISHER - BIGFOOT LHR15 MARK III" price= "$964.99" description= "Designed to be used in any situation, the new LHR 15 MarkIII is the new frontier in detailing. The ergonomic design allows for precise paint correction in complete comfort, on curved surfaces and hard-to-reach areas. The LHR 15 MarkIII runs at a higher speed compared to the LHR21 MarkIII. This higher speed provides equivalent correction and does so with a plate diameter and orbit that are more conducive to curved surfaces or different detailing surfaces." />
  <Card3_rupes2 image= "/rupes_nano1.jpg" title3= "IBRID NANO POLISHER LONG NECK" price= "$539.99" description= "The iBrid Nano Polisher Long Neck Bigfoot is more than technology, it is a design philosophy that will lead us to the future evolution of RUPES. The mini polisher is considered one of the most versatile on the market today thanks to several factors, such as functionality, both as a cordless and corded tool. Also, the ability to configure with 3 different functional movements, including 3mm random orbital, 12mm random orbital, and rotary. These movements can be combined with a variety of backing plates and brush accessories for various tasks. Orbital motion, rotary motion, polishing, sanding, cleaning, compact and easy to use all-in-one system." />
</main>   

<main className="main">
   <img src="/rupes_banner5.jpg" layout="intrinsic" width={1518} height={280} alt="AG logo"/>
</main>

<Footer description= "AG Detailing Store" image= "/AG Logo.png" />
    </div>
  )
}