import Head from 'next/head'
import Title2 from "src/components/Title2"
import Description2 from "src/components/Description2"
import Button from "src/components/Button"
import Footer from "src/components/Footer"
import Main_index from "src/components/Main_index"
import Card3_gallery from "src/components/Card3_gallery"

export default function Home() {
  return (

   <div className="container">
     <div class="bg-gradient-to-r from-green-400 to-blue-500 ..."></div>
<Head>
    <title>AG Store</title>
    <link rel="icon" href="/AG Logo.png" />
</Head>
            
<img src="/Cartel-5.jpg" layout="intrinsic" width={1818} height={5510} alt="AG logo"/>  

<Title2 title2= "The best online site for detailers" />
<Description2 description2= "Just The Best Brands On The Market" />       
<Button button= "The Best Brands On The Market" />

<hr class="rounded"></hr>
<img src="/ultimate_banner.png" layout="intrinsic" width={1818} height={5510} alt="AG logo"/>

<Main_index/>

    <div className="main">
<Card3_gallery title3_MT300= "Customer's Gallery" link="http://localhost:3000/meguiarsp"/>
    </div>

 <a href="http://localhost:3000/producto2" className="main">   
<a href="http://localhost:3000/producto2" className="title3_mypolisher" > AG Double Action Polisher For Sale Soon</a>    
<img src="/Cartel_5.jpg" layout="intrinsic" width={1518} height={510} alt="AG logo"/>
</a>   

    <img href="http://localhost:3000/meguiarsp" src="/meguiars_new.jpg"  layout="intrinsic" width={1518} height={510} alt="AG logo"/>
    <hr class="rounded"></hr>
    <img src="/sonax_new.jpg" layout="intrinsic" width={1518} height={510} alt="AG logo"/>

<Footer description= "AG Detailing Store" image= "/AG Logo.png" />
      
    </div>
  )
}


