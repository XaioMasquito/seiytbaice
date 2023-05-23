import Accordion from "react-bootstrap/Accordion";
import "../../css3/snopq.css";
function AllCollapseExample() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Birthday Boqutets</Accordion.Header>
        <Accordion.Body>
          <p className="p">
            Aster <br />
          </p>
          <p className="p">
            Aubrieta <br />
          </p>
          <p className="p">
            Basket Of Gold <br />
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Funeral Flowers</Accordion.Header>
        <Accordion.Body>
          <p className="p">
            Cleome <br />
          </p>
          <p className="p">
            Columbine <br />
          </p>
          <p className="p">
            Coneflower <br />
          </p>
          <p className="p">
            Corepsis <br />
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Interior Decor</Accordion.Header>
        <Accordion.Body>
         <p className="p"> Calendula <br /></p>
         <p className="p"> Castor Bean <br /></p>
         <p className="p">Catmint <br /></p> 
         <p className="p">Chives <br /></p> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Custom Orders</Accordion.Header>
        <Accordion.Body>
         <p className="p">Lily <br /></p> 
         <p className="p">Rose <br /></p> 
         <p className="p">Sunflower <br /></p> 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;
