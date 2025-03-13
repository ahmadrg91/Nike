import { faShoppingBag, faUser } from "@fortawesome/free-solid-svg-icons";
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
  
  shoePairFront,
  shoePairTop,
  shoePairSideTop,
  shoeSide,
  shoeAllSides,

} from "../assets/images";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact Us" },
];

export const navLinksRight = [
  { href: "/cart", label: "Cart", icon: faShoppingBag },
  { href: "/account", label: "Account", icon: faUser },
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
    name: "Nike Vomero 18",
    price: 150.0,
    gender: "man",
    sport: "training",
    category: "shoes",
    color: "hm6803-100",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 4.5
  },
  {
    name: "Nike Vomero 18",
    price: 150.0,
    gender: "unisex",
    sport: "running",
    category: "shoes",
    color: "hm6803-103",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.8
  },
  {
    name: "Nike Vomero 18",
    price: 150.0,
    gender: "woman",
    sport: "running",
    category: "shoes",
    color: "hm6803-101",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.6
  },
  {
    name: "Nike Vomero 18",
    price: 150.0,
    gender: "woman",
    sport: "football",
    category: "accessories",
    color: "hm6803-001",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.9
  },
  {
    name: "Nike Vomero 18",
    price: 150.0,
    gender: "man",
    sport: "running",
    category: "clothing",
    color: "hm6803-002",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 5.0
  },
  {
    name: "Nike Vomero 18",
    price: 150.0,
    gender: "unisex",
    sport: "training",
    category: "accessories",
    color: "hm6804-100",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.9
  },
  {
    name: "Nike Vomero 18",
    price: 150.0,
    gender: "unisex",
    sport: "football",
    category: "clothing",
    color: "hm6804-101",
    size: [
      8,
      9,
      10,
      11,
      12
    ],
    ratings: 4.6
  },
  {
    name: "Nike Vomero 18",
    price: 150.0,
    gender: "unisex",
    sport: "basketball",
    category: "accessories",
    color: "hm6804-102",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.6
  },
  {
    name: "Nike Vomero 18",
    price: 150.0,
    gender: "woman",
    sport: "basketball",
    category: "accessories",
    color: "hm6804-105",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.8
  },
  {
    name: "Nike Vomero 18",
    price: 120.0,
    gender: "woman",
    sport: "football",
    category: "clothing",
    color: "hq2157-103",
    size: [
      8,
      9,
      10,
      11,
      12
    ],
    ratings: 4.7
  },
  {
    name: "Nike Vomero 18",
    price: 120.0,
    gender: "woman",
    sport: "football",
    category: "clothing",
    color: "hq2157-102",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 4.6
  },
  {
    name: "Nike Air Max Dn8",
    price: 190.0,
    gender: "woman",
    sport: "running",
    category: "clothing",
    color: "fq7860-002",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 4.9
  },
  {
    name: "Nike Air Max Dn8",
    price: 190.0,
    gender: "woman",
    sport: "casual",
    category: "accessories",
    color: "fq7860-003",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.8
  },
  {
    name: "Nike Air Max Dn8",
    price: 190.0,
    gender: "man",
    sport: "football",
    category: "shoes",
    color: "fq7860-006",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.8
  },
  {
    name: "Nike Air Max Dn8",
    price: 190.0,
    gender: "unisex",
    sport: "training",
    category: "shoes",
    color: "fq7860-008",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.7
  },
  {
    name: "Nike Air Max Dn8",
    price: 190.0,
    gender: "woman",
    sport: "football",
    category: "shoes",
    color: "fq7860-500",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 4.5
  },
  {
    name: "Nike Air Max Plus",
    price: 180.0,
    gender: "man",
    sport: "running",
    category: "shoes",
    color: "dm0032-013",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 4.5
  },
  {
    name: "Nike Air Max Plus",
    price: 180.0,
    gender: "unisex",
    sport: "basketball",
    category: "clothing",
    color: "dm0032-014",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 4.5
  },
  {
    name: "Nike Air Max Plus",
    price: 180.0,
    gender: "man",
    sport: "running",
    category: "accessories",
    color: "dm0032-200",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 4.5
  },
  {
    name: "Nike Life",
    price: 110.0,
    gender: "man",
    sport: "training",
    category: "clothing",
    color: "",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 4.5
  },
  {
    name: "Nike 24.7 PerfectStretch",
    price: 125.0,
    gender: "woman",
    sport: "running",
    category: "accessories",
    color: "hq6918-010",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 5.0
  },
  {
    name: "Nike 24.7 PerfectStretch",
    price: 125.0,
    gender: "woman",
    sport: "running",
    category: "accessories",
    color: "hq6918-320",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.6
  },
  {
    name: "Nike 24.7 PerfectStretch",
    price: 125.0,
    gender: "unisex",
    sport: "training",
    category: "shoes",
    color: "hq6918-451",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.9
  },
  {
    name: "Nike 24.7 PerfectStretch",
    price: 125.0,
    gender: "unisex",
    sport: "training",
    category: "clothing",
    color: "hq6918-251",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 5.0
  },
  {
    name: "Nike 24.7 PerfectStretch",
    price: 125.0,
    gender: "unisex",
    sport: "casual",
    category: "clothing",
    color: "hq6918-084",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.5
  },
  {
    name: "Nike V5 RNR",
    price: 90.0,
    gender: "unisex",
    sport: "casual",
    category: "shoes",
    color: "hq7901-100",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 5.0
  },
  {
    name: "Nike V5 RNR",
    price: 90.0,
    gender: "woman",
    sport: "casual",
    category: "accessories",
    color: "hq7901-101",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.6
  },
  {
    name: "Nike V5 RNR",
    price: 90.0,
    gender: "unisex",
    sport: "basketball",
    category: "clothing",
    color: "hq7901-102",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.9
  },
  {
    name: "Nike Air Max Dn8",
    price: 190.0,
    gender: "woman",
    sport: "casual",
    category: "shoes",
    color: "hf5509-001",
    size: [
      8,
      9,
      10,
      11,
      12
    ],
    ratings: 4.5
  },
  {
    name: "Nike Air Max Dn8",
    price: 190.0,
    gender: "man",
    sport: "running",
    category: "accessories",
    color: "hf5509-002",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.8
  },
  {
    name: "Nike Air Max Dn8",
    price: 190.0,
    gender: "man",
    sport: "basketball",
    category: "shoes",
    color: "hf5509-600",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 4.7
  },
  {
    name: "Nike 24.7 PerfectStretch",
    price: 130.0,
    gender: "woman",
    sport: "casual",
    category: "accessories",
    color: "hm8385-004",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.6
  },
  {
    name: "Nike 24.7 PerfectStretch",
    price: 130.0,
    gender: "woman",
    sport: "training",
    category: "shoes",
    color: "hm8385-010",
    size: [
      8,
      9,
      10,
      11,
      12
    ],
    ratings: 4.8
  },
  {
    name: "Nike 24.7 PerfectStretch",
    price: 130.0,
    gender: "unisex",
    sport: "running",
    category: "accessories",
    color: "hm8385-133",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 4.6
  },
  {
    name: "Nike 24.7 PerfectStretch",
    price: 130.0,
    gender: "unisex",
    sport: "training",
    category: "clothing",
    color: "hm8385-455",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.7
  },
  {
    name: "Nike Sportswear",
    price: 105.0,
    gender: "woman",
    sport: "running",
    category: "shoes",
    color: "hm8385-455",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.6
  },
  {
    name: "Nike Air Max Dn8",
    price: 160.0,
    gender: "unisex",
    sport: "basketball",
    category: "clothing",
    color: "hf7310-001",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.7
  },
  {
    name: "Nike Air Max Dn8",
    price: 160.0,
    gender: "unisex",
    sport: "running",
    category: "accessories",
    color: "hf7310-004",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 5.0
  },
  {
    name: "Nike Air Max Dn8",
    price: 160.0,
    gender: "man",
    sport: "training",
    category: "shoes",
    color: "hf7310-005",
    size: [
      8,
      9,
      10,
      11,
      12
    ],
    ratings: 4.6
  },
  {
    name: "Nike Dunk Low SE",
    price: 100.0,
    gender: "unisex",
    sport: "football",
    category: "accessories",
    color: "hf7310-005",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.6
  },
  {
    name: "Nike Sportswear",
    price: 80.0,
    gender: "woman",
    sport: "running",
    category: "clothing",
    color: "hf8205-010",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.8
  },
  {
    name: "Nike Sportswear",
    price: 80.0,
    gender: "woman",
    sport: "training",
    category: "shoes",
    color: "hf8205-480",
    size: [
      8,
      9,
      10,
      11,
      12
    ],
    ratings: 4.8
  },
  {
    name: "Nike Sportswear Club",
    price: 45.0,
    gender: "woman",
    sport: "training",
    category: "shoes",
    color: "hf8141-010",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.8
  },
  {
    name: "Nike Sportswear Club",
    price: 45.0,
    gender: "man",
    sport: "football",
    category: "accessories",
    color: "hf8141-084",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 4.7
  },
  {
    name: "Nike Sportswear Club",
    price: 45.0,
    gender: "unisex",
    sport: "running",
    category: "accessories",
    color: "hf8141-297",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.5
  },
  {
    name: "Nike Sportswear Club",
    price: 45.0,
    gender: "woman",
    sport: "football",
    category: "shoes",
    color: "hf8141-410",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 5.0
  },
  {
    name: "Nike Sportswear Club",
    price: 45.0,
    gender: "woman",
    sport: "training",
    category: "accessories",
    color: "hf8141-489",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.5
  },
  {
    name: "Air Jordan 3 Retro \"Lucky Shorts\"",
    price: 200.0,
    gender: "unisex",
    sport: "running",
    category: "clothing",
    color: "hf8141-489",
    size: [
      8,
      9,
      10,
      11,
      12
    ],
    ratings: 4.8
  },
  {
    name: "Air Jordan 3 Retro \"Lucky Shorts\"",
    price: 150.0,
    gender: "unisex",
    sport: "casual",
    category: "clothing",
    color: "hf8141-489",
    size: [
      8,
      9,
      10,
      11,
      12
    ],
    ratings: 4.7
  },
  {
    name: "Air Jordan Skyline GORE-TEX",
    price: 500.0,
    gender: "man",
    sport: "football",
    category: "shoes",
    color: "hf8141-489",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.5
  },
  {
    name: "Air Jordan Skyline GORE-TEX",
    price: 200.0,
    gender: "woman",
    sport: "football",
    category: "shoes",
    color: "hf8141-489",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 4.9
  },
  {
    name: "Nike Air Max 90 GORE-TEX",
    price: 96.97,
    gender: "unisex",
    sport: "running",
    category: "accessories",
    color: "dj9779-003",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.6
  },
  {
    name: "Nike Air Max 90 GORE-TEX",
    price: 160.0,
    gender: "woman",
    sport: "running",
    category: "clothing",
    color: "fd5810-102",
    size: [
      8,
      9,
      10,
      11,
      12
    ],
    ratings: 5.0
  },
  {
    name: "Nike Air Max 90 GORE-TEX",
    price: 112.97,
    gender: "man",
    sport: "football",
    category: "shoes",
    color: "fd5810-201",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.5
  },
  {
    name: "Nike Air Max 90 GORE-TEX",
    price: 112.97,
    gender: "man",
    sport: "football",
    category: "clothing",
    color: "fd5810-003",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 5.0
  },
  {
    name: "Nike Air Max 1",
    price: 140.0,
    gender: "man",
    sport: "running",
    category: "shoes",
    color: "fd9082-107",
    size: [
      8,
      9,
      10,
      11,
      12
    ],
    ratings: 4.8
  },
  {
    name: "Nike Air Max 1",
    price: 98.97,
    gender: "man",
    sport: "football",
    category: "shoes",
    color: "fn6952-100",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.8
  },
  {
    name: "Nike Air Max 1",
    price: 84.97,
    gender: "woman",
    sport: "running",
    category: "accessories",
    color: "hm9936-001",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.5
  },
  {
    name: "Nike Air Max 1 Essential",
    price: 97.97,
    gender: "unisex",
    sport: "training",
    category: "accessories",
    color: "fz5808-101",
    size: [
      8,
      9,
      10,
      11,
      12
    ],
    ratings: 4.5
  },
  {
    name: "Nike Air Max 1 Essential",
    price: 99.97,
    gender: "woman",
    sport: "basketball",
    category: "accessories",
    color: "fz5808-100",
    size: [
      8,
      9,
      10,
      11,
      12
    ],
    ratings: 5.0
  },
  {
    name: "Nike Air Max 1 Essential",
    price: 84.97,
    gender: "man",
    sport: "casual",
    category: "accessories",
    color: "fz5808-004",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.8
  },
  {
    name: "Nike Air Max 1 Essential",
    price: 84.97,
    gender: "man",
    sport: "casual",
    category: "clothing",
    color: "fz5808-006",
    size: [
      8,
      9,
      10,
      11,
      12
    ],
    ratings: 4.9
  },
  {
    name: "Nike Air Max 1 Essential",
    price: 105.97,
    gender: "man",
    sport: "basketball",
    category: "shoes",
    color: "fz5808-007",
    size: [
      8,
      9,
      10,
      11,
      12
    ],
    ratings: 4.6
  },
  {
    name: "Nike Air Max 1 Essential",
    price: 105.97,
    gender: "man",
    sport: "basketball",
    category: "clothing",
    color: "fz5808-008",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.7
  },
  {
    name: "Nike Air Max 1 Essential",
    price: 140.0,
    gender: "unisex",
    sport: "casual",
    category: "shoes",
    color: "fz5808-009",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 4.8
  },
  {
    name: "Nike Air Max 1 Essential",
    price: 105.97,
    gender: "unisex",
    sport: "running",
    category: "accessories",
    color: "fz5808-010",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 4.8
  },
  {
    name: "Nike Air Max 1 Essential",
    price: 140.0,
    gender: "unisex",
    sport: "running",
    category: "clothing",
    color: "fz5808-102",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.6
  },
  {
    name: "Nike Air Max 1 Essential",
    price: 105.97,
    gender: "man",
    sport: "basketball",
    category: "shoes",
    color: "fz5808-400",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 5.0
  },
  {
    name: "Nike Solo Swoosh",
    price: 105.0,
    gender: "man",
    sport: "casual",
    category: "shoes",
    color: "dq5209-063",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.6
  },
  {
    name: "Nike Solo Swoosh",
    price: 105.0,
    gender: "man",
    sport: "training",
    category: "shoes",
    color: "dq5209-010",
    size: [
      8,
      9,
      10,
      11,
      12
    ],
    ratings: 4.7
  },
  {
    name: "Nike Solo Swoosh",
    price: 68.97,
    gender: "unisex",
    sport: "casual",
    category: "accessories",
    color: "dq5209-051",
    size: [
      8,
      9,
      10,
      11,
      12
    ],
    ratings: 4.6
  },
  {
    name: "Nike Solo Swoosh",
    price: 105.0,
    gender: "man",
    sport: "football",
    category: "accessories",
    color: "dq5209-072",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.9
  },
  {
    name: "Nike Solo Swoosh",
    price: 105.0,
    gender: "unisex",
    sport: "training",
    category: "accessories",
    color: "dq5209-412",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.8
  },
  {
    name: "Nike Solo Swoosh",
    price: 105.0,
    gender: "man",
    sport: "running",
    category: "accessories",
    color: "dq5209-844",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 4.6
  },
  {
    name: "Nike Solo Swoosh",
    price: 100.0,
    gender: "man",
    sport: "running",
    category: "shoes",
    color: "dx1364-010",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 4.8
  },
  {
    name: "Nike Solo Swoosh",
    price: 100.0,
    gender: "woman",
    sport: "casual",
    category: "shoes",
    color: "dx1364-051",
    size: [
      5,
      6,
      7,
      8,
      9
    ],
    ratings: 5.0
  },
  {
    name: "Nike Solo Swoosh",
    price: 100.0,
    gender: "woman",
    sport: "running",
    category: "clothing",
    color: "dx1364-063",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.9
  },
  {
    name: "Nike Solo Swoosh",
    price: 100.0,
    gender: "woman",
    sport: "running",
    category: "accessories",
    color: "dx1364-072",
    size: [
      8,
      9,
      10,
      11,
      12
    ],
    ratings: 4.6
  },
  {
    name: "Nike Solo Swoosh",
    price: 100.0,
    gender: "man",
    sport: "training",
    category: "accessories",
    color: "dx1364-231",
    size: [
      8,
      9,
      10,
      11,
      12
    ],
    ratings: 4.7
  },
  {
    name: "Nike Solo Swoosh",
    price: 75.97,
    gender: "woman",
    sport: "casual",
    category: "clothing",
    color: "dx1364-412",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.8
  },
  {
    name: "Nike Solo Swoosh",
    price: 70.97,
    gender: "man",
    sport: "running",
    category: "accessories",
    color: "dx1364-464",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.7
  },
  {
    name: "Nike Solo Swoosh",
    price: 100.0,
    gender: "unisex",
    sport: "football",
    category: "clothing",
    color: "dx1364-844",
    size: [
      7,
      8,
      9,
      10,
      11
    ],
    ratings: 4.8
  },
  {
    name: "Nike V2K Run",
    price: 120.0,
    gender: "man",
    sport: "running",
    category: "clothing",
    color: "hv4314-030",
    size: [
      6,
      7,
      8,
      9,
      10
    ],
    ratings: 4.9
  }
];