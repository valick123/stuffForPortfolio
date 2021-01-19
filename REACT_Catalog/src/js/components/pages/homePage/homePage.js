import React from 'react';
import Slider from "react-slick";
import { Container, Row , Col, Spinner} from 'reactstrap';
import {connect} from 'react-redux'
import PostCard from './postCard';
import NewsCard from './newsCard'


 class HomePage extends React.Component{
    constructor(props){
      super(props)
      this.state={
          isLoading:true
      }
    }
    componentDidMount(){
        if(!this.props.posts.length){
            fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response=>response.json())
        .then(posts=>{
            this.props.dispatch({
                type:'GET_POSTS',
                payload:posts
            })
        }).then(
            fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response=>response.json())
        .then(imgs=>{
            this.props.dispatch({
                type:'GET_POSTS_IMGS',
                payload:imgs
            })
        }).then(
            fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(imgs=>{
            this.props.dispatch({
                type:'GET_NEWS',
                payload:imgs
            })
        })))
            
        }
        
            this.setState({
                isLoading:false
            })
        
    }
    render(){
        const settings = {
            className: "",
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            autoplay:true,
            autoplaySpeed:2000
        };
        return (
            <Container>
                <Row>
                    <Col lg={12}>
                        <Slider {...settings}>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus id elit sed auctor. Praesent gravida tellus at facilisis interdum. Nunc non rhoncus enim, eu interdum nulla. Nam dictum posuere iaculis. Nam metus erat, interdum quis accumsan id, maximus at mi. Nulla ut quam placerat dui blandit elementum eu in risus. Curabitur interdum mi et justo posuere, id congue ante eleifend. Fusce in egestas enim. Maecenas ut nibh lobortis, tempus tellus in, condimentum sem. Vivamus lobortis ullamcorper tincidunt.
                                    Etiam metus neque, condimentum id orci ac, sagittis tincidunt ante. Sed venenatis placerat odio, eget mollis tellus aliquet et. Praesent at purus vel ante porta commodo. Cras vel molestie turpis, eget maximus ligula. Maecenas pulvinar arcu urna, ac vehicula metus convallis ac. Integer feugiat purus lorem, at efficitur eros pretium et. Etiam gravida ultricies massa, et aliquet purus accumsan vel. Ut quis viverra arcu, at pharetra odio. In purus mi, ullamcorper in metus nec, sollicitudin tempor augue. Sed et erat tortor. Pellentesque ante enim, volutpat sit amet lacus id, bibendum feugiat dolor. In hac habitasse platea dictumst. Donec erat risus, accumsan vitae leo id, pulvinar ornare lacus. Curabitur vitae nisi in odio imperdiet dignissim.
                                    Nam id est eu dolor feugiat interdum nec et quam. Fusce nibh purus, eleifend sed aliquet et, porta quis est. Aliquam suscipit, mauris at egestas imperdiet, tortor quam convallis nisl, quis tincidunt magna magna sit amet neque. Integer ac laoreet nunc. Nunc eget pretium sem, vel viverra libero. Vestibulum et aliquet magna, et ultrices leo. Vivamus vestibulum mi vitae nulla commodo euismod. Nam vitae enim pretium, viverra lorem ac, elementum libero. Nulla facilisi. Vivamus tincidunt, libero at pretium ullamcorper, dui nisi congue turpis, ac mollis libero nisi in nibh. In dictum sem non tortor dictum, a sollicitudin nisi dapibus. In placerat diam quam, sed congue mauris porttitor ac. Vivamus non massa ut dui dictum iaculis. Nulla sodales leo in arcu blandit, vel ultricies justo porttitor. Fusce ipsum quam, dictum in libero in, fringilla luctus odio.
                                </p>
                            </div>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et velit in diam laoreet elementum non a lacus. Pellentesque lacus magna, scelerisque id gravida sed, tincidunt ut augue. Maecenas rhoncus, felis a tempus rhoncus, est lectus pellentesque nunc, eu fermentum lectus mi eu sem. Sed urna quam, feugiat sed mauris pretium, sodales commodo erat. Aliquam maximus, arcu ut mollis molestie, nulla metus pellentesque turpis, non dictum elit felis et risus. Integer semper lorem metus, quis vehicula ligula molestie nec. Sed luctus mauris vel velit auctor interdum. Vestibulum pellentesque sollicitudin tincidunt. Maecenas suscipit ac dolor vel blandit.
                                    Curabitur pharetra pharetra bibendum. Phasellus magna nisi, consectetur vitae magna eget, fringilla posuere velit. Vivamus at odio volutpat, malesuada libero ut, facilisis dui. Donec tortor sapien, faucibus vitae tortor ut, lobortis ullamcorper turpis. Pellentesque pharetra tortor quis lorem laoreet, ac imperdiet mauris tincidunt. Duis hendrerit venenatis neque ac mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam maximus orci nibh, sed blandit mauris consectetur luctus. Sed lacinia vestibulum accumsan. Duis fermentum nunc volutpat odio egestas, iaculis imperdiet nisl sodales. Duis et leo at odio feugiat porta. Curabitur porta, neque eu porttitor aliquam, felis orci pulvinar quam, vitae lacinia justo nibh gravida ipsum. Donec eu dui nec nisl ullamcorper bibendum eu sit amet elit. Sed interdum, ex eu cursus dictum, est risus ornare turpis, vitae lobortis dolor justo nec mauris.
                                </p>
                            </div>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac dolor vel libero viverra molestie et ut purus. Suspendisse vel purus in metus tincidunt dignissim. Sed eget nisi semper, pharetra lorem eget, suscipit velit. Aenean consectetur, metus eu bibendum pretium, purus orci sodales est, at pharetra felis ipsum vitae sapien. Vestibulum tincidunt purus urna, pharetra tincidunt magna fermentum vitae. Donec laoreet arcu ut ligula luctus congue. Etiam vel enim non neque pulvinar mollis ac at ligula. Vestibulum sit amet ex lorem. Sed vehicula facilisis neque, at bibendum orci imperdiet tempus. Quisque vel lectus libero. Cras maximus quis tellus sit amet blandit. Nam semper euismod urna, eget condimentum tortor ornare et. Etiam aliquam augue viverra justo vehicula, ut vulputate massa faucibus. Quisque ac scelerisque massa. Ut erat nulla, gravida a ligula sit amet, mattis fermentum diam. Sed sodales, tellus sed rutrum blandit, mauris mi rutrum erat, ac venenatis erat urna ut odio.
                                </p>
                            </div>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac dui nunc. Proin at dolor ac dui rutrum rhoncus. Praesent ut congue diam. Pellentesque molestie id nisi pharetra eleifend. Nunc sollicitudin neque quis velit hendrerit dapibus. In hac habitasse platea dictumst. Curabitur augue tortor, suscipit eget justo non, lobortis efficitur urna. Quisque mi libero, sollicitudin et elit in, aliquet vulputate libero. Mauris molestie lacinia gravida. Curabitur rutrum urna vel est volutpat tempus.
                                    Quisque lacinia convallis ante at semper. Quisque tincidunt pulvinar justo, non finibus ipsum tincidunt vel. Vivamus leo odio, iaculis vitae ultrices a, tincidunt a sapien. Donec et finibus purus. Suspendisse eget pharetra velit, feugiat tempus magna. Morbi vel dui eget diam sagittis mattis et id dui. Maecenas euismod enim eget lacus porta, in bibendum ex euismod. Maecenas orci odio, tincidunt sed nisl ac, porta porta quam. Phasellus volutpat faucibus ex, ut ultrices sem ornare a. Donec sed risus mauris.
                                    Nam metus arcu, euismod vel fermentum et, volutpat commodo purus. Nullam dapibus ultrices ante non feugiat. Donec rhoncus sapien id vehicula eleifend. Nullam vitae massa dictum, malesuada dolor ac, interdum justo. Fusce pharetra sem vitae est vestibulum, nec vehicula orci bibendum. Suspendisse pellentesque tempus quam et malesuada. Cras eu condimentum orci. Donec ultrices quis quam at tincidunt. Sed venenatis tellus ac turpis porta suscipit. Phasellus urna nisl, aliquam at elit sit amet, mattis euismod ipsum. Curabitur hendrerit ornare arcu, sed tincidunt lectus dignissim ut. Etiam porttitor dolor at sem volutpat, sed rhoncus odio luctus. Nunc id enim volutpat, elementum ante ut, suscipit sapien. Morbi varius purus vel ligula tempus tempor at tempor purus.
                                    
                                Nunc et sollicitudin massa. Maecenas tortor risus, bibendum id ante a, fermentum rhoncus nisl. Aenean in sagittis urna. Donec a mi ut nisl fermentum vehicula. Morbi ac suscipit tortor. Phasellus aliquet, libero id commodo ultrices, diam nisi cursus justo, quis pellentesque quam nisl a orci. Nam luctus sed velit a tristique. Pellentesque faucibus sollicitudin libero, in elementum elit iaculis euismod. Quisque quis bibendum ante. Vestibulum ut orci ornare, facilisis dolor non, luctus orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ornare, dui at blandit rhoncus, felis purus mattis lectus, a condimentum dui turpis nec neque. Cras ac metus urna. Vestibulum iaculis pulvinar dui, venenatis dignissim velit sodales non. Donec a aliquet neque, et porta orci.
                                </p>
                            </div>          
                        </Slider>
                    </Col>
                </Row>
                {!this.state.isLoading
                ?<Row>
                    <Col md={4}>
                        <h1>News</h1>
                        {           
                            this.props.news.map((item)=>{
                                return <NewsCard info={item} key={item.id} />
                            })
                        }
                    </Col>
                    <Col md={8}>
                        <h1>Posts</h1>
                                                    
                            {this.props.posts.map((item)=>{
                            return this.props.postsImgs.map((img)=>{
                                if(item.id === img.id){
                                     return <PostCard info={item} img={img} key={item.id} />
                                    }
                                })
                           
                            }) } 
                                                    
                    </Col>
                </Row>                
                :<Spinner type="grow" color="primary"/>
                
                }
                
            </Container>
        )
    }
} 

const mapStateToProps = (store)=>{
    return {
        ...store.homePage
    }
}
export default connect(mapStateToProps)(HomePage)