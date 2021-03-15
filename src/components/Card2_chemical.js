const card2_chemical = ({description, link, image, price}) => {

    return (
      <a href={link} className="card2_chemical">
     <img src= {image} layout="fixed" width={250} height={250} alt="Meg logo"/>
      <p>{description}</p>
     
         <div
         className="buttonprice_card_chemical">
        <p>{price}</p>
         </div>
         </a>
    )
  }

  export default card2_chemical;