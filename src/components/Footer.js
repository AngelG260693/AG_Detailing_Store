const button = ({description, image}) => {

    return (
        <footer className="footer">
        <a> {description} </a>
         <img src= {image} alt="Vercel Logo" className="logo" />
      </footer>
        
    )
  }

  export default button;