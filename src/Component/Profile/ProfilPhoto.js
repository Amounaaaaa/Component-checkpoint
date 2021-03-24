import React from 'react'
import './ProfilPhoto.css'
import {Col,Image} from 'react-bootstrap';



const ProfilPhoto = () => {
    return (
        <div>
             <Col xs={6} md={4}>
               <Image className="img" src={"/image.jpeg"} alt=""  roundedCircle />
          </Col>
       
   
    </div>
    )
}

export default ProfilPhoto
