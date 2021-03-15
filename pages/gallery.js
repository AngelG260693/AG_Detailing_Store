import Head from 'next/head'
import Button from "src/components/Button"
import Footer from "src/components/Footer"
import Gallery_grid from "src/components/Gallery_grid"

export default function Home() {
  return (

    <div className="container">
    <div class="bg-gradient-to-r from-green-400 to-blue-500 ..."></div>
<Head>
    <title>AG Store</title>
    <link rel="icon" href="/AG Logo.png" />
</Head>
            
    <img src="/gallery_banner.png" layout="intrinsic" width={1818} height={5510} alt="AG logo"/>  
      
<Button button= "The Best Brands On The Market" />
<Gallery_grid/>
<Footer description= "AG Detailing Store" image= "/AG Logo.png" />
      
    </div>
  )
}


