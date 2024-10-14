import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const popularProducts = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
    ratings: 4.7,
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
    ratings: 4.4,
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
    ratings: 4.5,
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
    ratings: 4.9,
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo", link: "https://facebook.com" },
  { src: twitter, alt: "twitter logo", link: "https://twitter.com" },
  { src: instagram, alt: "instagram logo", link: "https://instagram.com" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: 200.2,
    gender: "man",
    sport: "basketball",
    category: "shoes",
    color: "black",
    ratings: 4.7,
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: 210.2,
    gender: "man",
    sport: "basketball",
    category: "shoes",
    color: "red",
    ratings: 4.4,
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: 220.2,
    gender: "man",
    sport: "basketball",
    category: "shoes",
    color: "white",
    ratings: 4.5,
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: 230.2,
    gender: "woman",
    sport: "basketball",
    category: "shoes",
    color: "black",
    ratings: 4.9,
  },
  {
    imgURL: shoe4,
    name: "Nike Air Max 270",
    price: 180.0,
    gender: "man",
    sport: "running",
    category: "shoes",
    color: "white",
    ratings: 4.6,
  },
  {
    imgURL: shoe5,
    name: "Nike React Infinity Run",
    price: 160.0,
    gender: "woman",
    sport: "running",
    category: "shoes",
    color: "yellow",
    ratings: 4.3,
  },
  {
    imgURL: shoe6,
    name: "Nike Air Zoom Pegasus",
    price: 130.0,
    gender: "man",
    sport: "running",
    category: "shoes",
    color: "red",
    ratings: 4.8,
  },
  {
    imgURL: shoe7,
    name: "Nike Court Vision Low",
    price: 90.0,
    gender: "woman",
    sport: "basketball",
    category: "shoes",
    color: "white",
    ratings: 4.5,
  },
  {
    imgURL: shoe4,
    name: "Nike Dri-FIT T-Shirt",
    price: 25.0,
    gender: "man",
    sport: "football",
    category: "clothing",
    color: "black",
    ratings: 4.2,
  },
  {
    imgURL: shoe5,
    name: "Nike Pro Shorts",
    price: 35.0,
    gender: "woman",
    sport: "football",
    category: "clothing",
    color: "red",
    ratings: 4.4,
  },
  {
    imgURL: shoe6,
    name: "Nike Elite Basketball Socks",
    price: 15.0,
    gender: "man",
    sport: "basketball",
    category: "accessories",
    color: "white",
    ratings: 4.7,
  },
  {
    imgURL: shoe7,
    name: "Nike Heritage86 Cap",
    price: 30.0,
    gender: "woman",
    sport: "basketball",
    category: "accessories",
    color: "black",
    ratings: 4.5,
  },
  {
    imgURL: shoe4,
    name: "Nike Air Vapormax",
    price: 250.0,
    gender: "man",
    sport: "running",
    category: "shoes",
    color: "black",
    ratings: 4.9,
  },
  {
    imgURL: shoe5,
    name: "Nike Air Zoom Structure",
    price: 150.0,
    gender: "woman",
    sport: "running",
    category: "shoes",
    color: "white",
    ratings: 4.6,
  },
  {
    imgURL: shoe6,
    name: "Nike Windrunner Jacket",
    price: 120.0,
    gender: "man",
    sport: "football",
    category: "clothing",
    color: "yellow",
    ratings: 4.4,
  },
  {
    imgURL: shoe7,
    name: "Nike Sportswear Essentials",
    price: 75.0,
    gender: "woman",
    sport: "football",
    category: "clothing",
    color: "red",
    ratings: 4.3,
  },
  {
    imgURL: shoe4,
    name: "Nike Everyday Plus Training Socks",
    price: 20.0,
    gender: "man",
    sport: "basketball",
    category: "accessories",
    color: "white",
    ratings: 4.5,
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan Backpack",
    price: 85.0,
    gender: "woman",
    sport: "basketball",
    category: "accessories",
    color: "black",
    ratings: 4.6,
  },
  {
    imgURL: shoe6,
    name: "Nike Team Hustle D 9",
    price: 100.0,
    gender: "man",
    sport: "basketball",
    category: "shoes",
    color: "red",
    ratings: 4.7,
  },
  {
    imgURL: shoe7,
    name: "Nike Air Max 90",
    price: 110.0,
    gender: "woman",
    sport: "running",
    category: "shoes",
    color: "yellow",
    ratings: 4.8,
  },
];
