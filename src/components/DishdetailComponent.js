import React,{Component} from "react"
import {Card,CardImg,CardImgOverlay,CardBody,CardTitle, CardText} from 'reactstrap'

class Dishdetail extends Component{


    renderComments(comments){
      //  alert("r")
      const test=  comments.map(
            elmt=>{
                return(
                    <div key={elmt.id} >
                    
                        <p>{elmt.comment}</p>
                        <p>--{elmt.author},
                       {elmt.date}</p>
                   
                 </div>
                )
            }
        )

        return(
            <div>
                {test}
            </div>
        )
    }

    render(){
  
   const dish=this.props.dish;
   const cmt=this.renderComments(dish.comments)
        return(
        <div className="container">
            <div className="row">

            <div  className="col-12 col-md-5  m-1" >
                
                <Card>
                         <CardImg object src={dish.image}></CardImg>
                        <CardBody>
                        <CardTitle >{dish.name} </CardTitle>
                        <CardText>{dish.description}</CardText>
                        </CardBody> 
                </Card>
            </div>
            <div  className="col-12 col-md-5  m-1" >
                          <h4>Comments</h4>  
                          {cmt}
                           
            </div>
            
               

            </div>

        </div>
        )
    }
}

export default Dishdetail;