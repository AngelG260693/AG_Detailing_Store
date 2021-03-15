const card2 = ({description, link, image, price}) => {

    return (
      <a href={link} className="card2">
      <img src= {image} layout="fixed" width={250} height={250} alt="Meg logo"/>
      <p>{description}</p>

         <div
         className="buttonprice">
        <p>{price}</p>
         </div>
         </a>
    )
  }

  export default card2;