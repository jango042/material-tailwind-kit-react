import { Home, SignIn, About, SignUp, Services,  ContactUs } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "About",
    path: "/about",
    element: <About />,
  },
  {
    name: "Services",
    path: "/services",
    element: <Services />,
  },
  
  {
    name: "Contact us",
    path: "/contact-us",
    element: <ContactUs />,
  },
  // {
  //   name: "Sign In",
  //   path: "/sign-in",
  //   element: <SignIn />,
  // },
  {
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
   },
  
  
  // {
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;
