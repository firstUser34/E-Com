import productImg01 from "../Images/double-sofa-01.png";
import productImg02 from "../Images/double-sofa-02.png";
import productImg03 from "../Images/double-sofa-03.png";

import productImg04 from "../Images/single-sofa-01.jpg";
import productImg05 from "../Images/single-sofa-02.jpg";
import productImg06 from "../Images/single-sofa-03.jpg";
import productImg007 from "../Images/single-sofa-04.png";

import productImg07 from "../Images/arm-chair-01.jpg";
import productImg08 from "../Images/arm-chair-02.jpg";
import productImg09 from "../Images/arm-chair-03.jpg";
import productImg10 from "../Images/arm-chair-01.jpg";

import phone01 from "../Images/phone-01.jpg";
import phone02 from "../Images/phone-02.jpg";
import phone03 from "../Images/phone-03.png";
import phone04 from "../Images/phone-04.jpg";
import phone05 from "../Images/phone-05.jpg";
import phone06 from "../Images/phone-06.jpg";
import phone08 from "../Images/phone-08.png";

import watch01 from "../Images/watch-01.jpg";
import watch02 from "../Images/watch-02.jpg";
import watch03 from "../Images/watch-03.jpg";
import watch04 from "../Images/watch-04.jpg";

import wireless01 from "../Images/wireless-01.png";
import wireless02 from "../Images/wireless-02.png";
import wireless03 from "../Images/wireless-03.png";
import wireless04 from "../Images/wireless-04.png";

import sofaSlide from "../Images/hero-img.png";
import watchSlide from "../Images/watch-07.png";

export const SliderData = [
  {
    id: 1,
    title: "Sustainable Savings: 50% Off Your First Purchase!",
    desc: "Discover eco-friendly products that are kind to the planet and your wallet. Shop now and make a difference!",
    cover: sofaSlide,
  },
  {
    id: 2,
    title: "Join the Green Revolution!",
    desc: "Enjoy 50% off your first order of sustainable home essentials. Together, we can create a greener future.",
    cover: phone08,
  },
  {
    id: 3,
    title: "Eco-Friendly Tech at Unbeatable Prices!",
    desc: "Upgrade to sustainable technology with our exclusive discounts. Shop now for eco-conscious gadgets.",
    cover: wireless01,
  },
  {
    id: 4,
    title: "Shop Sustainably, Live Beautifully!",
    desc: "Explore our curated collection of eco-friendly products and enjoy special discounts today.",
    cover: watchSlide,
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="car"></ion-icon>,
    title: "Free Eco-Friendly Shipping",
    subtitle: "We ship all orders with minimal environmental impact.",
    bg: "#fdefe6",
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Secure & Green Payments",
    subtitle: "Shop with confidence using our safe payment methods.",
    bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "Satisfaction Guarantee",
    subtitle: "Your happiness is our priority—shop risk-free!",
    bg: "#e2f2b2",
  },
  {
    icon: <ion-icon name="headset"></ion-icon>,
    title: "Dedicated Support",
    subtitle: "Our customer service team is here to help you every step of the way.",
    bg: "#d6e5fb",
  },
];

export const discoutProducts = [
  {
    id: "01",
    productName: "Stone and Beam Westview Eco Sofa",
    imgUrl: productImg01,
    category: "sofa",
    price: 193,
    discount: 30,
    shortDesc: "Stylish and sustainable, perfect for eco-conscious living.",
    description: "The Stone and Beam Westview Eco Sofa is crafted from sustainable materials, providing both comfort and style. This sofa not only enhances your living space but also supports a greener planet. Enjoy its modern design while contributing to environmental conservation.",
    reviews: [
      {
        rating: 4.7,
        text: "A beautiful addition to my home! Love the eco-friendly materials.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Rivet Bigelow Modern Eco Sofa",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    discount: 20,
    shortDesc: "Modern design meets sustainability in this eco-friendly sofa.",
    description: "The Rivet Bigelow Modern Eco Sofa combines a sleek aesthetic with environmentally responsible materials. Perfect for modern homes, this sofa is designed to provide comfort while minimizing your ecological footprint.",
    reviews: [
      {
        rating: 4.8,
        text: "Exceptional quality and sustainability! Highly recommend.",
      },
      {
        rating: 4.8,
        text: "Stylish and comfortable—great for eco-minded consumers!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Baltsar Eco Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 89,
    discount: 15,
    shortDesc: "Eco-friendly chair that adds style to any room.",
    description: "The Baltsar Eco Chair is designed with sustainability in mind. Made from recycled materials, this chair offers both comfort and a chic look, making it a perfect choice for environmentally conscious consumers.",
    reviews: [
      {
        rating: 4.6,
        text: "Great chair! Stylish and made from sustainable materials.",
      },
      {
        rating: 4.9,
        text: "I love that it's eco-friendly! Perfect for my home office.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "09",
    productName: "Helmar Eco Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 112,
    discount: 35,
    shortDesc: "Comfortable and stylish chair made from sustainable resources.",
    description: "The Helmar Eco Chair combines comfort with an eco-friendly design. Crafted from sustainably sourced materials, this chair is perfect for those looking to enhance their space while being kind to the environment.",
    reviews: [
      {
        rating: 4.6,
        text: "Very comfortable and I love that it's eco-conscious!",
      },
      {
        rating: 4.9,
        text: "Perfect addition to my living room—stylish and sustainable!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "13",
    productName: "OnePlus Nord Eco Edition",
    imgUrl: phone04,
    category: "mobile",
    price: 799,
    discount: 5,
    shortDesc: "Experience cutting-edge technology with a commitment to sustainability.",
    description: "The OnePlus Nord Eco Edition combines high-performance features with eco-friendly design. Crafted with sustainable materials and energy-efficient technology, this smartphone not only enhances your daily life but also contributes to a healthier planet. Enjoy seamless performance while making an environmentally conscious choice.",
    reviews: [
      {
        rating: 4.8,
        text: "An amazing phone! Love the eco-friendly features and performance.",
      },
      {
        rating: 4.9,
        text: "Perfect blend of style and sustainability. Highly recommend!",
      },
    ],
    avgRating: 4.8,
  },

]

export const products = [
  {
    id: "01",
    productName: "Stone and Beam Westview Eco Sofa",
    imgUrl: productImg01,
    category: "sofa",
    price: 193,
    shortDesc: "Stylish and sustainable, perfect for eco-conscious living.",
    description: "The Stone and Beam Westview Eco Sofa is crafted from sustainable materials, providing both comfort and style. This sofa enhances your living space while supporting a greener planet.",
    reviews: [
      {
        rating: 4.7,
        text: "A beautiful addition to my home! Love the eco-friendly materials.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Rivet Bigelow Modern Eco Sofa",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    shortDesc: "Modern design meets sustainability in this eco-friendly sofa.",
    description: "The Rivet Bigelow Modern Eco Sofa combines a sleek aesthetic with environmentally responsible materials. Perfect for modern homes, designed to provide comfort while minimizing your ecological footprint.",
    reviews: [
      {
        rating: 4.8,
        text: "Exceptional quality and sustainability! Highly recommend.",
      },
      {
        rating: 4.8,
        text: "Stylish and comfortable—great for eco-minded consumers!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "03",
    productName: "Amazon Brand Modern Eco Sofa",
    imgUrl: productImg03,
    category: "sofa",
    price: 173,
    shortDesc: "Eco-friendly design for a modern lifestyle.",
    description: "This Amazon Brand Modern Eco Sofa is made from recycled materials, offering a chic look that doesn’t compromise on comfort. Ideal for those who value style and sustainability in their home furnishings.",
    reviews: [
      {
        rating: 4.6,
        text: "Great sofa! Love that it's made from recycled materials.",
      },
      {
        rating: 4.9,
        text: "Perfect for my eco-friendly home!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Fluffy Sheep Eco Sofa",
    imgUrl: productImg04,
    category: "sofa",
    price: 163,
    shortDesc: "Cozy and sustainable, perfect for relaxation.",
    description: "The Fluffy Sheep Eco Sofa is designed with comfort in mind, using eco-friendly fabrics that are soft to the touch. This sofa is perfect for creating a cozy nook in your home while being kind to the environment.",
    reviews: [
      {
        rating: 4.6,
        text: "So comfortable! I love the eco-friendly materials.",
      },
      {
        rating: 4.9,
        text: "A great addition to my living room—stylish and sustainable!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "05",
    productName: "Faux Velvet Eco Sofa",
    imgUrl: productImg05,
    category: "sofa",
    price: 163,
    shortDesc: "Luxurious feel with sustainable design.",
    description: "This Faux Velvet Eco Sofa offers a touch of luxury while being environmentally friendly. Made with sustainable materials, it adds elegance to any room without compromising your values.",
    reviews: [
      {
        rating: 4.6,
        text: "Beautiful sofa! The fabric feels amazing and it's eco-conscious!",
      },
      {
        rating: 4.9,
        text: "Perfect blend of style and sustainability!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "26",
    productName: "Rivet Bigelow Modern Eco Sofa",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    shortDesc: "Stylish and sustainable design for modern living.",
    description: "The Rivet Bigelow Modern Eco Sofa combines contemporary aesthetics with eco-friendly materials. Crafted to provide exceptional comfort while being kind to the planet, this sofa is perfect for those who appreciate both style and sustainability in their home decor.",
    reviews: [
      {
        rating: 4.8,
        text: "Absolutely love this sofa! It's both stylish and eco-friendly.",
      },
      {
        rating: 4.8,
        text: "Perfect addition to my living room—highly recommend!",
      },
    ],
    avgRating: 4.7,
  },
  
  {
    id: "04",
    productName: "Fluffy Sheep Eco Sofa",
    imgUrl: productImg04,
    category: "sofa",
    price: 163,
    shortDesc: "Cozy and sustainable, perfect for relaxation.",
    description: "The Fluffy Sheep Eco Sofa is designed with comfort and sustainability in mind. Made from eco-friendly materials, this sofa offers a soft touch while ensuring your home remains stylish and environmentally responsible. Ideal for creating a cozy atmosphere in any space.",
    reviews: [
      {
        rating: 4.6,
        text: "So comfortable! I love that it's made from sustainable materials.",
      },
      {
        rating: 4.9,
        text: "A fantastic choice for an eco-conscious home!",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "Faux Velvet Eco Sofa",
    imgUrl: productImg05,
    category: "sofa",
    price: 163,
    shortDesc: "Luxurious comfort with a commitment to sustainability.",
    description: "The Faux Velvet Eco Sofa offers a touch of elegance while being environmentally friendly. Made from sustainable materials, this sofa combines style and comfort, making it an ideal choice for eco-conscious consumers. Enjoy the soft, plush feel without compromising your values.",
    reviews: [
      {
        rating: 4.6,
        text: "Beautiful sofa! The fabric feels amazing and it's eco-conscious!",
      },
      {
        rating: 4.9,
        text: "Perfect blend of style and sustainability!",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
  productName: "Fluffy Sheep Eco Sofa",
  imgUrl: productImg06,
  category: "sofa",
  price: 163,
  shortDesc: "Cozy comfort with sustainable materials.",
  description: "The Fluffy Sheep Eco Sofa is designed for ultimate comfort while being kind to the planet. Made from eco-friendly fabrics, this sofa provides a soft, inviting feel, perfect for creating a warm and stylish living space. Enjoy relaxation without compromising your commitment to sustainability.",
  reviews: [
    {
      rating: 4.6,
      text: "Incredibly comfortable! I love that it's made from sustainable materials.",
    },
    {
      rating: 4.9,
      text: "A fantastic choice for an eco-conscious home!",
    },
  ],
  avgRating: 4.7,
},

{
  id: "07",
  productName: "Sakarias Eco Armchair",
  imgUrl: productImg07,
  category: "chair",
  price: 99,
  shortDesc: "Stylish and sustainable seating solution.",
  description: "The Sakarias Eco Armchair combines modern design with eco-friendly materials. Perfect for any room, this chair offers both style and comfort while supporting sustainable practices. Its sleek design makes it a great addition to your eco-conscious home.",
  reviews: [
    {
      rating: 4.6,
      text: "Great chair! Stylish and made from sustainable resources.",
    },
    {
      rating: 4.9,
      text: "Perfect for my living room—love its eco-friendly design!",
    },
  ],
  avgRating: 4.7,
  },

  {
    id: "27",
    productName: "Modern Arm Eco Sofa",
    imgUrl: productImg007,
    category: "sofa",
    price: 173,
    shortDesc: "Stylish design with a commitment to sustainability.",
    description: "The Modern Arm Eco Sofa combines contemporary aesthetics with eco-friendly materials. Designed for comfort and style, this sofa is perfect for modern living spaces while promoting sustainable practices. Enjoy its sleek look and soft seating, all while making a positive impact on the environment.",
    reviews: [
      {
        rating: 4.6,
        text: "This sofa is not only beautiful but also eco-conscious!",
      },
      {
        rating: 4.9,
        text: "Perfect blend of style and comfort—highly recommend!",
      },
    ],
    avgRating: 4.7,
  },
  
  {
    id: "08",
    productName: "Baltsar Eco Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 89,
    shortDesc: "Comfortable seating with sustainable design.",
    description: "The Baltsar Eco Chair offers a stylish and comfortable seating solution made from sustainable materials. Its modern design fits seamlessly into any room, making it an ideal choice for environmentally conscious consumers looking to enhance their home decor without compromising on style.",
    reviews: [
      {
        rating: 4.6,
        text: "Great chair! Love the eco-friendly materials used.",
      },
      {
        rating: 4.9,
        text: "Perfect for my living room—stylish and sustainable!",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "Helmar Eco Chair",
    imgUrl: productImg09,
    category: "chair",
    price: 112,
    shortDesc: "Stylish seating with sustainable materials.",
    description: "The Helmar Eco Chair combines modern design with eco-friendly materials, providing both comfort and style. Perfect for any room, this chair is an ideal choice for environmentally conscious consumers looking to enhance their home decor while supporting sustainability.",
    reviews: [
      {
        rating: 4.6,
        text: "Great chair! Love the eco-friendly materials used.",
      },
      {
        rating: 4.9,
        text: "Perfect for my living room—stylish and sustainable!",
      },
    ],
    avgRating: 4.7,
  },
  
  {
    id: "10",
    productName: "Apple iPhone 12 Pro Eco Edition",
    imgUrl: phone01,
    category: "mobile",
    price: 799,
    shortDesc: "High performance meets eco-conscious design.",
    description: "The Apple iPhone 12 Pro Eco Edition features advanced technology with a commitment to sustainability. Made with recycled materials and designed for energy efficiency, this smartphone allows you to enjoy cutting-edge performance while minimizing your environmental impact.",
    reviews: [
      {
        rating: 4.8,
        text: "Incredible phone! Love the eco-friendly features.",
      },
      {
        rating: 4.9,
        text: "Perfect blend of style and sustainability!",
      },
    ],
    avgRating: 4.8,
  },
  
  {
    id: "25",
    productName: "Sakarias Eco Armchair",
    imgUrl: productImg10,
    category: "chair",
    price: 99,
    shortDesc: "Comfortable seating with sustainable design.",
    description: "The Sakarias Eco Armchair offers a stylish and comfortable seating solution made from sustainable materials. Its modern design fits seamlessly into any room, making it an ideal choice for environmentally conscious consumers looking to enhance their home decor without compromising on style.",
    reviews: [
      {
        rating: 4.6,
        text: "Great chair! Stylish and made from sustainable resources.",
      },
      {
        rating: 4.9,
        text: "Perfect for my living room—love its eco-friendly design!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "11",
    productName: "Apple iPhone 12 Max Eco Edition",
    imgUrl: phone02,
    category: "mobile",
    price: 799,
    shortDesc: "High performance with a commitment to sustainability.",
    description: "The Apple iPhone 12 Max Eco Edition combines cutting-edge technology with eco-friendly design. Made with recycled materials and energy-efficient components, this smartphone allows you to enjoy premium features while minimizing your environmental impact.",
    reviews: [
      {
        rating: 4.8,
        text: "Incredible phone! Love the eco-friendly features and performance.",
      },
      {
        rating: 4.9,
        text: "Perfect blend of style and sustainability!",
      },
    ],
    avgRating: 4.8,
  },
  
  {
    id: "12",
    productName: "Realme 8 Eco-Friendly Smartphone",
    imgUrl: phone03,
    category: "mobile",
    price: 599,
    shortDesc: "Sustainable technology for everyday use.",
    description: "The Realme 8 Eco-Friendly Smartphone is designed for those who care about the planet. Featuring energy-efficient technology and made from recyclable materials, this phone delivers excellent performance while supporting sustainable practices.",
    reviews: [
      {
        rating: 4.8,
        text: "Great phone with impressive sustainability features!",
      },
      {
        rating: 4.9,
        text: "Love the eco-conscious design—highly recommend!",
      },
    ],
    avgRating: 4.8,
  },
  
  {
    id: "13",
    productName: "One Plus Nord Eco Edition",
    imgUrl: phone04,
    category: "mobile",
    price: 799,
    discount: 5,
    shortDesc: "Affordable performance with eco-friendly design.",
    description: "The One Plus Nord Eco Edition offers high-end features at an affordable price while being environmentally responsible. Made from sustainable materials, this smartphone is perfect for tech enthusiasts who want to make a positive impact on the planet.",
    reviews: [
      {
        rating: 4.8,
        text: "Fantastic value! Love the eco-friendly aspects of this phone.",
      },
      {
        rating: 4.9,
        text: "Stylish and sustainable—great choice!",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "14",
  productName: "Apple iPhone 13 Pro Eco Edition",
  imgUrl: phone05,
  category: "mobile",
  price: 899,
  shortDesc: "Premium performance with a commitment to sustainability.",
  description: "The Apple iPhone 13 Pro Eco Edition combines cutting-edge technology with eco-friendly design. Made with recycled materials and energy-efficient components, this smartphone allows you to enjoy high-end features while minimizing your environmental impact.",
  reviews: [
    {
      rating: 4.8,
      text: "Incredible phone! Love the eco-friendly features and performance.",
    },
    {
      rating: 4.9,
      text: "Perfect blend of style and sustainability!",
    },
  ],
  avgRating: 4.8,
},

{
  id: "15",
  productName: "Samsung Galaxy S22 Eco-Friendly Smartphone",
  imgUrl: phone06,
  category: "mobile",
  price: 699,
  shortDesc: "Sustainable technology for modern living.",
  description: "The Samsung Galaxy S22 Eco-Friendly Smartphone is designed for those who care about the planet. Featuring energy-efficient technology and made from recyclable materials, this phone delivers excellent performance while supporting sustainable practices.",
  reviews: [
    {
      rating: 4.8,
      text: "Great phone with impressive sustainability features!",
    },
    {
      rating: 4.9,
      text: "Love the eco-conscious design—highly recommend!",
    },
  ],
  avgRating: 4.8,
},

{
  id: "16",
  productName: "Rolex Eco Watch",
  imgUrl: watch01,
  category: "watch",
  price: 299,
  shortDesc: "Timeless elegance with a focus on sustainability.",
  description: "The Rolex Eco Watch combines luxury with eco-friendly materials, ensuring you can make a statement while being environmentally responsible. This watch is crafted with sustainable practices in mind, making it a perfect accessory for the conscious consumer.",
  reviews: [
    {
      rating: 4.8,
      text: "Beautiful watch! Love the sustainable materials used.",
    },
    {
      rating: 4.9,
      text: "Perfect blend of luxury and eco-friendliness!",
    },
  ],
  avgRating: 4.8,
  },

  {
    id: "17",
    productName: "Timex Easy Reader Eco Watch",
    imgUrl: watch02,
    category: "watch",
    price: 299,
    shortDesc: "Classic design with a commitment to sustainability.",
    description: "The Timex Easy Reader Eco Watch combines timeless style with eco-friendly materials. This watch is crafted to provide durability and elegance while supporting sustainable practices, making it a perfect accessory for the environmentally conscious.",
    reviews: [
      {
        rating: 4.8,
        text: "Stylish and practical! Love the sustainable materials used.",
      },
      {
        rating: 4.9,
        text: "A great watch that looks good and is eco-friendly!",
      },
    ],
    avgRating: 4.8,
  },
  
  {
    id: "18",
    productName: "Rolex Eco Watch",
    imgUrl: watch03,
    category: "watch",
    price: 299,
    shortDesc: "Luxury meets sustainability in this elegant timepiece.",
    description: "The Rolex Eco Watch combines luxury craftsmanship with eco-friendly materials, ensuring you can make a statement while being environmentally responsible. This watch is designed with sustainability in mind, making it an ideal choice for the discerning consumer.",
    reviews: [
      {
        rating: 4.8,
        text: "Beautiful watch! Love the sustainable materials used.",
      },
      {
        rating: 4.9,
        text: "Perfect blend of luxury and eco-friendliness!",
      },
    ],
    avgRating: 4.8,
  },
  
  {
    id: "19",
    productName: "Samsung Galaxy S22 Eco-Friendly Smartphone",
    imgUrl: phone06,
    category: "mobile",
    price: 699,
    shortDesc: "Sustainable technology for modern living.",
    description: "The Samsung Galaxy S22 Eco-Friendly Smartphone is designed for those who care about the planet. Featuring energy-efficient technology and made from recyclable materials, this phone delivers excellent performance while supporting sustainable practices.",
    reviews: [
      {
        rating: 4.8,
        text: "Great phone with impressive sustainability features!",
      },
      {
        rating: 4.9,
        text: "Love the eco-conscious design—highly recommend!",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "19",
    productName: "Apple Watch Eco Edition",
    imgUrl: watch04,
    category: "watch",
    price: 399,
    shortDesc: "Smart technology with a commitment to sustainability.",
    description: "The Apple Watch Eco Edition combines advanced health tracking features with eco-friendly materials. Designed for those who value both functionality and sustainability, this watch is crafted from recycled materials, making it a perfect companion for the environmentally conscious.",
    reviews: [
      {
        rating: 4.8,
        text: "Incredible watch! Love the eco-friendly features and design.",
      },
      {
        rating: 4.9,
        text: "Stylish and practical—great for everyday use!",
      },
    ],
    avgRating: 4.8,
  },
  
  {
    id: "20",
    productName: "Timex Easy Reader Eco Watch",
    imgUrl: watch02,
    category: "watch",
    price: 299,
    shortDesc: "Classic design with sustainable materials.",
    description: "The Timex Easy Reader Eco Watch offers a timeless look while being environmentally responsible. Made with sustainable materials, this watch is perfect for those who appreciate classic style without compromising their values.",
    reviews: [
      {
        rating: 4.8,
        text: "Stylish and practical! Love the sustainable materials used.",
      },
      {
        rating: 4.9,
        text: "A great watch that looks good and is eco-friendly!",
      },
    ],
    avgRating: 4.8,
  },
  
  {
    id: "21",
    productName: "Beat Studio Wireless Eco Headphones",
    imgUrl: wireless01,
    category: "wireless",
    price: 199,
    shortDesc: "Premium sound quality with eco-friendly design.",
    description: "The Beat Studio Wireless Eco Headphones deliver exceptional audio performance while being mindful of the environment. Made from recyclable materials, these headphones are designed for music lovers who want to enjoy high-quality sound without compromising on sustainability.",
    reviews: [
      {
        rating: 4.8,
        text: "Great sound quality! Love the eco-friendly aspects of these headphones.",
      },
      {
        rating: 4.9,
        text: "Perfect for music lovers who care about the planet!",
      },
    ],
    avgRating: 4.8,
  },
  
  {
    id: "22",
    productName: "Beat EP Eco Headphones",
    imgUrl: wireless03,
    category: "wireless",
    price: 199,
    shortDesc: "Comfortable headphones with a focus on sustainability.",
    description: "The Beat EP Eco Headphones provide a comfortable listening experience while being environmentally conscious. Crafted from sustainable materials, these headphones are ideal for those who want to enjoy quality sound without harming the planet.",
    reviews: [
      {
        rating: 4.8,
        text: "Stylish and comfortable! Great for everyday use.",
      },
      {
        rating: 4.9,
        text: "Fantastic sound quality paired with an eco-friendly design!",
      },
    ],
    avgRating: 4.8
  },
  {
    id: "23",
    productName: "Bluetooth Eco Headphones",
    imgUrl: wireless04,
    category: "wireless",
    price: 139,
    shortDesc: "High-quality sound with a commitment to sustainability.",
    description: "The Bluetooth Eco Headphones deliver exceptional audio performance while being mindful of the environment. Made from recyclable materials, these headphones are designed for music lovers who want to enjoy high-quality sound without compromising their ecological values. Experience comfort and style while supporting eco-friendly practices.",
    reviews: [
      {
        rating: 4.8,
        text: "Great sound quality! Love the eco-friendly aspects of these headphones.",
      },
      {
        rating: 4.9,
        text: "Perfect for music lovers who care about the planet!",
      },
    ],
    avgRating: 4.8,
  },

];
