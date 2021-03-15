const Card3_rupes = ({title3, price, description, image }) => {

    return (
 <div className="card3_rupes">
     <img src= {image} layout="fixed" width={950} height={250} alt="Meg logo"/>
 <p className="title3"> {title3} </p>
<p> {description} </p>

<div
             className="buttonprice2_rupes">
             <p> {price} </p>
             </div>

             
<div className= "grid2">
<img src="/rupes_polisher3.jpg" layout="intrinsic" width={500} height={510} alt="AG logo"/>
<img src="/rupes_polisher4.jpg" layout="intrinsic" width={500} height={510} alt="AG logo"/>
<img src="/rupes_polisher5.jpg" layout="intrinsic" width={500} height={510} alt="AG logo"/>
<img src="/rupes_polisher6.jpg" layout="intrinsic" width={500} height={510} alt="AG logo"/>
<img src="/rupes_polisher7.jpg" layout="intrinsic" width={500} height={510} alt="AG logo"/>
<img src="/rupes_polisher8.jpg" layout="intrinsic" width={500} height={510} alt="AG logo"/>
</div>

</div>
        
    )
  }

  export default Card3_rupes;