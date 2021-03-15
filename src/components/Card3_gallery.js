const Card3_gallery = ({title3_MT300, description, title3_MT3002}) => {

    return (
 <a href= "http://localhost:3000/gallery" className="card3_gallery">

 <p className="title3_MT300"> {title3_MT300} </p>
 <hr class="rounded"></hr>
 <div className= "grid2">
<img src="/chemical_1.jpg" layout="intrinsic" width={300} height={510} alt="AG logo"/>
<img src="/chemical_2.jpg" layout="intrinsic" width={300} height={510} alt="AG logo"/>
<img src="/chemical_3.jpg" layout="intrinsic" width={300} height={510} alt="AG logo"/>
<img src="/chemical_4.jpg" layout="intrinsic" width={300} height={510} alt="AG logo"/>
</div>
<p> {description} </p>
<hr class="rounded"></hr>



<p className="title3_MT300"> {title3_MT3002} </p>
</a>
        
    )
  }

  export default Card3_gallery;