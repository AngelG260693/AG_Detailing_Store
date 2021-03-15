const card3 = ({title3, price, description }) => {

    return (
 <div className="card3">
 <p className="title3"> {title3} </p>
<p> {description} </p>

<div
             className="buttonprice2">
             <p> {price} </p>
             </div>
</div>
        
    )
  }

  export default card3;