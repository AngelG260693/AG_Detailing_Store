import Head from 'next/head'
import Title_sonax from "src/components/Title_sonax"
import Description2_sonax from "src/components/Description2_sonax"
import Button_sonax_main from "src/components/Button_sonax_main"
import Grid2_sonax from "src/components/Grid2_sonax"
import Footer from "src/components/Footer"

export default function Home() {
  return (

   <div className="container">
      <Head>
        <title>AG Store</title>
        <link rel="icon" href="/AG Logo.png" />
      </Head>

  <img src="/sonaxbanner1.jpg" layout="intrinsic" width={1518} height={410} alt="AG logo"/>
  <Title_sonax title_sonax= "SONAX" />  
  <Description2_sonax description2_sonax= " A good idea that became car care brand No. 1" />            
  <Button_sonax_main button_sonax_main= "Featured Products" />
  

<main className="main">
<div className="container2_sonax">
   <Grid2_sonax image= "/sonax_cutmax.png" width= "150" buttonprice2_sonax= "$49.99" title3= "SONAX CutMax Cutting Compound" description= "SONAX CutMax is designed to achieve the highest cutting and polishing results without severely damaging the clear coat. Sanded areas up to P1500 can quickly and safely be removed with excellent gloss effect. SONAX CutMax is water-based which offers a long working window and will not dry out like other compounds. It is also dust-free for easy clean up after use. Simply wipe off the polished area. Solvent-free & silicone-free makes it safe for use in body shops and collision centers." />
   <Grid2_sonax image= "/sonax_glosscoat2.png" width= "130" buttonprice2_sonax= "$29.99" title3= "SONAX Glosscoat 2" description= "SONAX Polymer Net Shield is the latest arsenal in performance car care, complimenting its counterparts in both the Top-Of-The-Line Graded ProfiLine products." />
   <Grid2_sonax image= "/sonax_wheel.png" width= "150" buttonprice2_sonax= "$15.99" title3= "SONAX Wheel Cleaner" description= "SONAX Wheel Cleaner full effect is a highly effective, acid-free and pH balanced rim and wheel cleaner that is safe for all wheels, including aluminum and alloys. This formulation is also effective and safe for use on painted wheels and will not deteriorate clear coats." />
</div>


      <img src="/sonaxbanner2.png" layout="responsive" width={1518} height={480} alt="AG logo"/>
      </main>

     <Footer description= "AG Detailing Store" image= "/AG Logo.png" />
    </div>
  )
}












