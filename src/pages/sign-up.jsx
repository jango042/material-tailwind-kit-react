import {
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";


export function SignUp() {

  const [post, setPost] = useState({
      name: '',
      rcNumber: '',
      phone: '',
      email: '',
      address: ''
  })
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [checked, setChecked] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')


  //validate form input
  const validate =  (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.name) {
      errors.name = "company name is required"
    }
    if(!values.rcNumber) {
      errors.rcNumber = "rc number is required"
    }
    if(!values.phone) {
      errors.phone = "phone number is required"
    } 
    if(!values.email) {
      errors.email = "Email is required"
    }
    if(!values.clientType) {
      errors.clientType = "Choose client type"
    }
    if(!values.address) {
      errors.address = "Enter address"
    }
    return errors;
  }


  //handle controlled input fields
  const handleInput = (event) => {
      event.preventDefault();
      setPost({...post, [event.target.name]: event.target.value})
  }

  

  //handle file change
  const handleFileChange = (e) => {
    if(e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  }


  //handle form submit
  const handleSubmit = async(event)  => {
    event.preventDefault()
    setIsLoading(true)
    const errors = validate(post);
    try {
      let logo = "";
      if(file) {
        const formData = new FormData();
        formData.append("file", file);
        const uploadResponse = await axios.post('https://safe-hands-8aabe3ab7b5b.herokuapp.com/file/', formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        //this is the upload url
        logo = uploadResponse.data.data

        setError(errors)
        setIsSubmitted(true)
      }
      const response = await axios.post('https://safe-hands-8aabe3ab7b5b.herokuapp.com/api/clients', {...post, clientType: selectedValue, logo}, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      setIsLoading(false);
      if(response.status !== 200) {
        throw new Error("Network error was not ok")
      }
    } catch (error) {
      console.error("Error submitting form", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/Fingerprint-cuate-black.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Join Us Today</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your company details to register.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2" >
          <div className="mb-1 flex flex-col gap-6">
            <div className="flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium" >
              Company Name
            </Typography>
            <div>
            <Input
              size="lg"
              placeholder="company name"
              onChange={handleInput}
              name="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
             {error.name && (<span className="text-sm text-red-500">{error.name}</span>)}
             </div>
            </div>

            <div className="flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium" >
              Address
            </Typography>
            <div>
            <Input
              size="lg"
              placeholder="Address"
              onChange={handleInput}
              name="address"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
             {error.address && (<span className="text-sm text-red-500">{error.address}</span>)}
             </div>
            </div>
            
           
            
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Rc Number
            </Typography>
            <div>
            <Input
              size="lg"
              placeholder="Rc Number"
              onChange={handleInput}
              name="rcNumber"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
             {error.rcNumber && (<span className="text-sm text-red-500">{error.rcNumber}</span>)}
            </div>
            
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Phone Number
            </Typography>
            <div>
            <Input
              size="lg"
              placeholder="Phone Number"
              onChange={handleInput}
              name="phone"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
             {error.phone && (<span className="text-sm text-red-500">{error.phone}</span>)}
            </div>
            
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Upload Logo
            </Typography>
            <Input
              size="lg"
              type="file"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={handleFileChange}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Company email
            </Typography>
            <div>
            <Input
              size="lg"
              placeholder="name@mail.com"
              onChange={handleInput}
              name="email"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
             {error.email && (<span className="text-sm text-red-500">{error.email}</span>)}
            </div>

            <div className="flex flex-col gap-4">
          <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">Select Institution</Typography>

          <div className="w-full">
              <Select
              onChange={(val) => {setSelectedValue(val)}}
              value={post.clientType}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            >
            <Option className="uppercase" value="CHURCH">
              Church
            </Option>
            <Option className="uppercase" value="SCHOOL">
              School
            </Option>
          </Select>
          
            </div>
          </div>
            
          </div>
          
          <Checkbox
          onClick={() => setChecked(!checked)}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                I agree the&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button disabled={!checked} className="mt-6" fullWidth onClick={handleSubmit}>
            {isLoading ? "Loading..." : "Register Now"}
          </Button>

          {/* <div className="space-y-4 mt-8">
            <Button size="lg" color="white" className="flex items-center gap-2 justify-center shadow-md" fullWidth>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1156_824)">
                  <path d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z" fill="#4285F4" />
                  <path d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z" fill="#34A853" />
                  <path d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z" fill="#FBBC04" />
                  <path d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z" fill="#EA4335" />
                </g>
                <defs>
                  <clipPath id="clip0_1156_824">
                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span>Sign in With Google</span>
            </Button>
            <Button size="lg" color="white" className="flex items-center gap-2 justify-center shadow-md" fullWidth>
              <img src="/img/twitter-logo.svg" height={24} width={24} alt="" />
              <span>Sign in With Twitter</span>
            </Button>
          </div> */}
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Already have an account?
            <Link to="/sign-in" className="text-gray-900 ml-1">Sign in</Link>
          </Typography>
        </form>

      </div>
    </section>
  );
}

export default SignUp;
