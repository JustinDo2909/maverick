import { countUpItemsProps, NavLink, ProjectProps, ServiceProps, ContactsProps } from "@/Types";
import { BsFillTaxiFrontFill } from "react-icons/bs";
const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/cars", label: "Cars" },
  { path: "/services", label: "Services" },
  { path: "/skilllevel", label: "Skills" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];
const countUpItems: countUpItemsProps[] = [
  {
    id: 1,
    number: 21,
    text: "Year Of Experience",
  },
  {
    id: 2,
    number: 157,
    text: "Satisfied Customer",
  },
  {
    id: 3,
    number: 743,
    text: "Design Items",
  },
  {
    id: 4,
    number: 112,
    text: "Clients Served",
  },
];
const projects: ProjectProps[] = [
  {
    id: 1,
    img: "/project1.jpg",
    name: "Porsche Taycan Sport",
    des: "The Porsche Taycan Sport delivers luxury, performance, and zero emissions in a sleek, all-electric package with premium comfort and advanced tech.",
    detail: ["+More Details"],
  },
  {
    id: 2,
    img: "/project2.jpg",
    name: "Tesla Model S Plaid",
    des: "The Tesla Model S Plaid , offering incredible speed, range, and minimalist luxury with cutting-edge autopilot features.",
    detail: ["+More Details"],
  },
  {
    id: 3,
    img: "/project3.jpg",
    name: "BMW i8 Roadster",
    des: "The BMW i8 Roadster combines eco-friendly hybrid power with stunning design, agility, and BMW’s signature performance.",
    detail: ["+More Details"],
  },
  {
    id: 4,
    img: "/project4.jpg",
    name: "Audi e-tron GT",
    des: "The Audi e-tron GT combines style and electric performance with dual-motor power, a refined interior, and eco-conscious design.",
    detail: ["+More Details"],
  },
  {
    id: 5,
    img: "/project2.jpg",
    name: "Mercedes-Benz EQS",
    des: "The Mercedes-Benz EQS offers a quiet, smooth ride in a luxurious electric sedan with advanced tech and a range over 400 miles.",
    detail: ["+More Details"],
  },
  {
    id: 6,
    img: "/project1.jpg",
    name: "Lucid Air",
    des: "The Lucid Air is a luxury electric sedan with exceptional range, high-end features, and spacious, sustainable design.",
    detail: ["+More Details"],
  },
];

const services: ServiceProps[] = [
  {
    id: 1,
    title: 'Car Rental with Driver',
    icon: <BsFillTaxiFrontFill />,
    description: 'Enhance your rental experience with additional options.'
  },
  {
    id: 2,
    title: 'Airport Transfer',
    icon: <BsFillTaxiFrontFill />,
    description: 'Convenient transfers to and from the airport.'
  },
  {
    id: 3,
    title: 'City Tours',
    icon: <BsFillTaxiFrontFill />,
    description: 'Discover the city with our guided tour services.'
  },
  {
    id: 4,
    title: 'Luxury Vehicle Rental',
    icon: <BsFillTaxiFrontFill />,
    description: 'Experience luxury and comfort with our premium vehicles.'
  },
  {
    id: 5,
    title: 'Wedding Car Hire',
    icon: <BsFillTaxiFrontFill />,
    description: 'Make your special day memorable with our wedding car rentals.'
  },
  {
    id: 6,
    title: 'Corporate Chauffeur Services',
    icon: <BsFillTaxiFrontFill />,
    description: 'Professional chauffeur services for business needs.'
  },
  {
    id: 7,
    title: 'Hourly Rental',
    icon: <BsFillTaxiFrontFill />,
    description: 'Flexible hourly rentals to suit your schedule.'
  },
  {
    id: 8,
    title: 'Outstation Trips',
    icon: <BsFillTaxiFrontFill />,
    description: 'Reliable transportation for out-of-town journeys.'
  }
];

const skills = [
  { name: 'Professional', level: 90 },
  { name: 'Communication', level: 85 },
  { name: 'Teamwork', level: 80 },
  { name: 'Problem Solving', level: 75 }
];

const gallery = [
  {
    id: 1,
    name: 'Lamborghini Urus',
    image: '/7.jpg',
    link: ''
  },
  {
    id: 2,
    name: 'Ferrari F8 Tributo',
    image: '/14.jpg',
    link: ''
  },
  {
    id: 3,
    name: 'Porsche 911 Carrera',
    image: '/12.jpg',
    link: ''
  },
  {
    id: 4,
    name: 'Aston Martin DB11',
    image: '/9-1.jpg',
    link: ''
  },
  {
    id: 5,
    name: 'McLaren 720S',
    image: '/8-1.jpg',
    link: ''
  },
  {
    id: 6,
    name: 'Bugatti Chiron',
    image: '/12.jpg',
    link: ''
  }
];

const contacts: ContactsProps[] = [
  {
    id: 1,
    title: 'Address',
    text: 'Schoonboomstraat 109, Nederland'
  },
  {
    id: 2,
    title: 'Phone',
    text: '+31 123 456 789'
  },
  {
    id: 3,
    title: 'Email',
    text: 'info@example.com'
  }
];



export { navLinks, countUpItems, projects , services , skills , gallery, contacts};
