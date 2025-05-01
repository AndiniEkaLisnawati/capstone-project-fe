import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Label, TextInput, Checkbox, Button } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { BiSolidTrash } from "react-icons/bi";
import { FaTruck } from "react-icons/fa";
import Select from "react-select";

const Register = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
    phone: "",
    role: "", // user / collector
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    let key = id;
    if (id === "username3") key = "username";
    if (id === "email4") key = "email";
    setFormData({ ...formData, [key]: value });
  };

  const RoleOptions = [
    {value:"user", label:<><BiSolidTrash/> User</>},
    {value:"collector", label:<><FaTruck/> Collector</>}
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
        role: formData.role,
      }, {
        headers: { "Content-Type": "application/json" },
      });

      alert("Registration successful: " + response.data.message);
      setIsLoggedIn(true);
      localStorage.setItem("role", formData.role);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("token", response.token);
      localStorage.setItem("email", formData.email);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Terjadi kesalahan saat registrasi.";
      alert("Registration failed: " + errorMessage);
    }
  };

  return (
    <div className="bg-gray-50 md:py-25 dark:bg-gray-900 w-full min-h-screen flex justify-center items-center pt-20 " style={{ backgroundImage: "url('/BackgroundLR.png')" }}>
      <div className=" w-full bg-white/80 md:rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 md:p-8 leading-tight">
          <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
            Create your Account
          </h1>

          <div>
            <Label htmlFor="username3" className="mb-2 block">Username</Label>
            <TextInput onChange={handleChange} id="username3" placeholder="Input Username" addon="@" required />
          </div>

          <div>
            <Label htmlFor="email4" className="mb-2 block">Your email</Label>
            <TextInput onChange={handleChange} id="email4" type="email" icon={HiMail} placeholder="name@flowbite.com" required />
          </div>

          <div>
            <Label htmlFor="phone" className="mb-2 block">Phone</Label>
            <TextInput onChange={handleChange} id="phone" type="text" placeholder="08" required shadow />
          </div>

          <div>
            <Label htmlFor="password" className="mb-2 block">Your password</Label>
            <TextInput onChange={handleChange} id="password" type="password" required shadow />
          </div>

          <div>
            <Label htmlFor="repeatPassword" className="mb-2 block">Repeat password</Label>
            <TextInput onChange={handleChange} id="repeatPassword" type="password" required shadow />
          </div>

          <div>
            <Label htmlFor="role" className="mb-2 block">Pilih Role</Label>
            <Select 
            id="role"
            options={RoleOptions}
            onChange={(selectedOptionRole) => setFormData({...formData, role: selectedOptionRole.value})}
            />

          </div>

          <div className="flex items-center gap-2">
            <Checkbox id="agree" required />
            <Label htmlFor="agree" className="flex">
              I agree with the&nbsp;
              <Link to="#" className="text-[#00C81E] hover:underline dark:text-cyan-500">
                terms and conditions
              </Link>
            </Label>
          </div>

          <Button type="submit" className="bg-[#00C81E] hover:bg-[#009F18] text-white">
            Register new account
          </Button>

          <Link to="/login" className="text-[#00C81E] hover:underline dark:text-cyan-500 text-sm">
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
