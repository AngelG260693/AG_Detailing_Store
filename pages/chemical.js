import Head from 'next/head'
import Card2 from "src/components/Card2"
import Description2 from 'src/components/Description2'
import Title2 from 'src/components/Title2'
import Button from "src/components/Button"
import Card2_chemical from "src/components/Card2_chemical"
import Footer from "src/components/Footer"


export default function Home() {
  return (
    
 <div className="container">
      <Head>
        <title>AG Store</title>
        <link rel="icon" href="/AG Logo.png" />
      </Head>

 <img src="/chemical_banner.jpg" layout="intrinsic" width={1518} height={510} alt="AG logo"/>
  
  <Title2 title2= "Chemical Guys" />
  <Description2 description2= "Finish to Perfection" />
  <Button button= "Featured Products" />
        
  <main className="main">
   <div className="grid2">
<Card2_chemical description= "Ceramic Coating Hyperwax" image="/chemical_hydroslick.png" price= "$69.99" />
<Card2_chemical description= "Water Spot Remover" image="/chemical_spotremover.png" price= "$29.99" />
<Card2_chemical description= "Intense Gloss Booster" image="/chemical_gloss.png" price= "$12.99" />
<Card2_chemical description= "Diablo Gel Wheel Cleaner" image="/chemical_diablo.png" price= "$12.99" />
<Card2_chemical description= "Innerclean Interior Detailer" image="/chemical_inner.png" price= "$5.99" />
<Card2_chemical description= "Streak Free Window Cleaner" image="/chemical_glass.png" price= "$16.99" />
<Card2_chemical description= "Sticky Citrus Wheel Cleaner" image="/chemical_citrus.png" price= "$9.99" />
<Card2_chemical description= "Vinyl Wrap Detailer" image="/chemical_wrap.png" price= "$14.99" />
 </div> 
 </main>

<div> <Button button= "Customer's Gallery" /> </div>

<main className= "main">
<div className= "grid2">
<img src="/chemical_1.jpg" layout="intrinsic" width={300} height={510} alt="AG logo"/>
<img src="/chemical_2.jpg" layout="intrinsic" width={300} height={510} alt="AG logo"/>
<img src="/chemical_3.jpg" layout="intrinsic" width={300} height={510} alt="AG logo"/>
<img src="/chemical_4.jpg" layout="intrinsic" width={300} height={510} alt="AG logo"/>
</div>
</main>
 <img src="/chemical_banner2.jpg" layout="intrinsic" width={1518} height={280} alt="AG logo"/>
      <Footer description= "AG Detailing Store" image= "/AG Logo.png" />
    </div>
  )
}