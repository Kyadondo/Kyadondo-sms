import React from 'react'
import {Alert, Button, Card, Flex, Form, Input, message, Spin, Typography} from 'antd'
import '../App.css'
import { Link } from 'react-router-dom'
import SBanner from '../assets/SBanner.jpg'

const Home = () => {

const handleLogin = async(values) =>{
    console.log(values);
}


  return (
    <Card className="form-container">

        <Flex gap="large" align="center">
             <Flex flex={1}>
                
                <img src={SBanner} className='auth-image'/>
           

            </Flex>
            <Flex vertical flex={1}>

                <Typography.Title level={3} strong className="title"> 
                
                Choose Your Role 

                </Typography.Title>
            

 
                        <Form 

                        layout='vertical'
                         onFinish={handleLogin}
                         autoComplete="off"

                         >

                            <Form.Item>
                                <Link to="/AdminSign">
                                <Button 
                                    
                                    size="large"
                                    className='btn'>
                                
                                Admin Sign In

                                 </Button>
                                 </Link>
                            </Form.Item>



                            <Form.Item>
                         <Link to={"/Enrollment-Sign"} >    
                            <Button 
                                size="large"
                                className='btn'>
                                Enrollement Office
                                
                            </Button>
                         </Link>       
                            </Form.Item>
                            


                            <Form.Item>
                            <Link to="/Teacher-Sign">
                                <Button 
                                    
                                    size="large"
                                    className='btn'>
                                   Tutor Sign In
                                 </Button>
                            </Link>
                            </Form.Item>


                        </Form>

            </Flex>
       
        </Flex>

    </Card>
  )
}

export default Home;