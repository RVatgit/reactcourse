import React,{Component} from 'react';
import {Card, CardBody,CardImg,CardText,CardImgOverlay,CardTitle} from 'reactstrap'


class Menu extends Component{

    constructor (props){
        super(props);
        this.state={
            selected:null
        }
    }
    dishselect(dish){
        this.setState({selected:dish});
    }

    renderdish(dish){
        if(dish){
            return(
                <Card>
                    <CardImg object src={dish.image} alt={dish.name} />
                    <CardBody>
                            <CardTitle> {dish.name} </CardTitle>
                            <CardText> {dish.description} </CardText>
                    </CardBody>
                  
                </Card>
            )
        }
    }

    render(){
        const menu = this.props.dishes.map(dish=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.dishselect(dish)}>
                        <CardImg object src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle> {dish.name} </CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {this.renderdish(this.state.selected)}
                </div>
            </div>
        )
    }
}

export default Menu;