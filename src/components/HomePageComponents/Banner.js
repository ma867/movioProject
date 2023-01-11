export default function Banner({title, description}){
    return (

      <>
      
      <div id="header">
        <div >
        <h1 className="display-1">{title}</h1>
        <p>
          {description}
        </p>
        </div>
      </div>
      </>
    
      );
}


