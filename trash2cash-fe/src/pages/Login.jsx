'use client'
import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    phone: "",
    role: "user",
  });


  const handleChange = (e) => {
    const { id, value } = e.target;
    let key = id;
    // Mapping id input ke properti state yang sesuai
    if (id === "username3") key = "username";
    if (id === "email4") key = "email";
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("/api/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        role: formData.role,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      alert("Registration successful: " + response.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
    }

  };

  return (
    <>
      <div className="bg-white max-w-[1440px] w-full h-auto flex justify-center">
       
        <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-4 pt-30">
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="username3">Username</Label>
            </div>
            <TextInput onChange={handleChange} id="username3" placeholder="Input Username" addon="@" required />
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="email4">Your email</Label>
            </div>
            <TextInput onChange={handleChange} id="email4" type="email" icon={HiMail} rightIcon={HiMail} placeholder="name@flowbite.com" required />
          </div>

          <div>
            <div>
              <label htmlFor="phone">phone</label>
            </div>
            <TextInput onChange={handleChange} id="phone" type="text" placeholder="08" required shadow></TextInput>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password">Your password</Label>
            </div>
            <TextInput onChange={handleChange} id="password" type="password" required shadow />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeatPassword">Repeat password</Label>
            </div>
            <TextInput onChange={handleChange} id="repeatPassword" type="password" required shadow />
          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="agree" required />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                terms and conditions
              </Link>
            </Label>
          </div>
          <Button type="submit" className="bg-[#00C81E] hover:bg-[#009F18] text-white">
            Register new account
          </Button>
        </form>
  </div>
    </>
  )
}

export default Login