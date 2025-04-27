import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import image from '../../assets/image.jpg'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const [user, setUser] = useState()
  const [pass, setPass] = useState()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async () => {
    setLoading(true)
    try {
      const res = await axios.post("https://back.ifly.com.uz/api/auth/login", {login: user, password: pass},
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
       )

       console.log(res);
       
       toast.success(res?.data?.data?.message);
       localStorage.setItem("access_token", res?.data?.data?.access_token)
       navigate('/admin')
    }
    catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message?.message)
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <>
      <div className='relative'>
        <img className='w-screen h-screen object-cover' src={image} alt="background image" />
      </div>
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[350px] h-auto bg-[#ffffff3f] backdrop-blur-md p-6 rounded-[12px]'>
          <Form
            name="basic"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={handleLogin}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout='vertical'
          >
            <Form.Item
              label={<span className="text-white">Username</span>}
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input onChange={(e)=>setUser(e.target.value)} className='!bg-[#ffffff88] backdrop-blur-sm' />
            </Form.Item>

            <Form.Item
              label={<span className='text-white'>Password</span>}
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password onChange={(e)=>setPass(e.target.value)} className='!bg-[#ffffff88] backdrop-blur-sm' />
            </Form.Item>

            <Form.Item label={null}>
              <Button loading={loading} type="primary" htmlType="submit" className='w-full'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
    </>
  )
}

export default Login