const Grid2_sonax = ({image, title3, description, buttonprice2_sonax, width}) => {

    return (
        <div className="grid2_sonax">
      <div className="card3_sonax_image_product">
        <img src= {image} layout="fixed" width= {width} height={450} alt="Rupes logo"/> 
      </div>
         <div className="card3_sonax">
           <p className="title3"> {title3} </p>
           <p> {description} </p>
          <div className="buttonprice2_sonax"> {buttonprice2_sonax} </div>
        </div>
    </div>
        
    )
  }

  export default Grid2_sonax;