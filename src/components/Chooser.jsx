import React from 'react'
import {Alert, Button, Card, Flex, Form, Input, message, Spin, Typography} from 'antd'
import '../App.css'
import { Link } from 'react-router-dom'
import SBanner from '../assets/SBanner.jpg'


const Chooser = () => {

const handleRegister = () =>{
    console.log
};
  return (
    <Card className="form-container">

        <Flex gap="large" align="center">
            
            <Flex vertical flex={1}>

                <Typography.Title level={3} strong className="title"> 
                    Create an account
                </Typography.Title>
                <Typography.Text type="secondary" level={3} strong className="slogan">
                    This is the only Account
                </Typography.Text>


                        <Form 

                            layout='vertical'
                         onFinish={handleRegister}
                         autoComplete="off"

                         >
                            <Form.Item 
                            labe="Full Name" 
                            name="name"
                            rule={[
                                {
                                    required: true,
                                    nessage: 'Please Input your full name!',
                                }
                            ]} >

                                <Input size="large" placeholder="Enter Full Name"
                                
                                


                                />

                            </Form.Item>
                            <Form.Item 
                            labe="Email" 
                            name="email"
                            rule={[
                                {
                                    required: true,
                                    nessage: 'Please Input your Email!',
                                },
                                {
                                    type: 'email',
                                    message: 'Please Input is not valid Email! '
                                }
                            ]} >
                                
                                <Input size="large" placeholder="Enter your email" />

                            </Form.Item>


                            <Form.Item 
                                    
                                    labe="Password" 
                                    name="password"
                                    rule={[
                                        {
                                            required: true,
                                            nessage: 'Please Input your Password',
                                        },
                                    
                                    ]} >
                                        
                                        <Input.Password  size="large" placeholder="Enter your Password" />

                            </Form.Item>

                            <Form.Item 
                                    
                                    labe="Password" 
                                    name="passwordConfirm"
                                    rule={[
                                        {
                                            required: true,
                                            nessage: 'Please Confirm Password',
                                        },
                                    
                                    ]} >
                                        
                                        <Input.Password  size="large" placeholder="Please Confirm Password" />

                            </Form.Item>

                                   {/* {     {
                                            error && <Alert
                                             description={error}
                                              type='error'
                                               showIcon 
                                               closable 
                                               className="alert"
                                               />
                                        } */}


                            <Form.Item>

                                <Button 
                                    // type={`${loading ? '' : 'primary' }`}
                                    
                                    size="large"
                                    className='btns'
                                    
                                    >


                                    
                                     
                                    {/* { loading ? <Spin /> : 'Create Account'} */}

                                    
                                    Create Account
                                 </Button>




                            </Form.Item>

                            <Form.Item>
                                <Link to="/Admin-Sign">
                                    <Button size="large" className='btns'> Sign In </Button>
                                </Link>  
                            </Form.Item>

                        </Form>

            </Flex>
            <Flex flex={1}>
                
                <img src={SBanner} className='auth-image'/>


            </Flex>
       
        </Flex>

    </Card>
  )
}

export default Chooser