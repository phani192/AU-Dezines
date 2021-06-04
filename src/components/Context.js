import React, { Component } from 'react';
import swal from 'sweetalert';

export const DataContext = React.createContext();
export class DataProvider extends Component {
    state = {
        menProducts: [
            {
                "_id": "M1",
                "title": "Mens Shirts",
                "src": "https://i.ibb.co/n60Kr5q/Mblue-Tennis-Shirt.jpg",
                "description": "Blue Tennis T-Shirt",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "M2",
                "title": "Mens Shirts",
                "src": "https://i.ibb.co/xMj68GF/Mdark-Blue-Tshirt.jpg",
                "description": "Dark Blue T-shirt",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 290",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "M3",
                "title": "Mens Shirts",
                "src": "https://i.ibb.co/mNySG75/Mgrey-Tshirt.jpg",
                "description": "Grey T-Shirt",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 270",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "M4",
                "title": "Mens Shirts",
                "src": "https://i.ibb.co/KN2h9LD/Mlight-Grey-Full.jpg",
                "description": "Light Grey full Sleeve",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 280",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "M5",
                "title": "Mens Shirts",
                "src": "https://i.ibb.co/3SjsRDv/MredFull.jpg",
                "description": "Red Full Sleeve",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 230",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "M6",
                "title": "Mens Shirts",
                "src": "https://i.ibb.co/rHH65ZK/Mred-Round-Neck.jpg",
                "description": "This is a Shirt",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 150",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "M7",
                "title": "Mens Shirts",
                "src": "https://i.ibb.co/tBMssVm/Mred-Tennis-Tshirt.jpg",
                "description": "Red Tennis T-shirt",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "M8",
                "title": "Mens Jeans",
                "src": "https://i.ibb.co/JrB3cnV/Mblack-Jeans.jpg",
                "description": "Black Jeans",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "M9",
                "title": "Mens Jeans",
                "src": "https://i.ibb.co/C0gDThV/Mblue-Jeans.jpg",
                "description": "Cool Blue Jeans",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "M10",
                "title": "Mens Jeans",
                "src": "https://i.ibb.co/vXxBM5b/Mgrey-Denim-Jeans.jpg",
                "description": "Grey denim Jeans",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "M11",
                "title": "Mens Jeans",
                "src": "https://i.ibb.co/Ykf4pdV/Blue-Stretch-Jeans.jpg",
                "description": "Blue stretch jeans",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "M12",
                "title": "Mens Jeans",
                "src": "https://i.ibb.co/JvzHC7r/Blue-Stone-Jeans.jpg",
                "description": "Blue Stone Jeans",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            }


        ],
        womenProducts: [
            {
                "_id": "W1",
                "title": "Womens Dress",
                "src": "https://i.ibb.co/PrVTKbf/Wgrey2-Pack.jpg",
                "description": "Grey 2 pack dress",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "W2",
                "title": "Womens Dress",
                "src": "https://i.ibb.co/bdms92r/Wgrey-Top-With-Knots.jpg",
                "description": "Grey Top With Knotst",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 350",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "W3",
                "title": "Womens Dress",
                "src": "https://i.ibb.co/Tt8ks15/Wpink-Flowers.jpg",
                "description": "Pink Floral Dress",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 290",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "W4",
                "title": "Womens Dress",
                "src": "https://i.ibb.co/1ZJtmcQ/Wred2-Pack.jpg",
                "description": "Red 2 pack dress",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 240",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "W5",
                "title": "Womens Dress",
                "src": "https://i.ibb.co/rtYJTF3/Wred-Top-With-Knots.jpg",
                "description": "Red Top With Knots",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 270",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "W6",
                "title": "Womens Dress",
                "src": "https://i.ibb.co/9n69tsS/Wwhite-Patterned.jpg",
                "description": "White Patterned Dress",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "W7",
                "title": "Womens Jeans",
                "src": "https://i.ibb.co/vXxBM5b/Mgrey-Denim-Jeans.jpg",
                "description": "Grey Denim Jeans",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "W8",
                "title": "Womens Jeans",
                "src": "https://i.ibb.co/C0gDThV/Mblue-Jeans.jpg",
                "description": "Blue Jeans",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "W9",
                "title": "Womens Dress",
                "src": "https://i.ibb.co/XVJfYYP/Gpink-Summer.jpg",
                "description": "Pink summer Dress",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "W10",
                "title": "Womens Dress",
                "src": "https://i.ibb.co/QmjmY0C/Gyellow-Knitted.jpg",
                "description": "Yellow Knitted Dress",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            }, {
                "_id": "W11",
                "title": "Womens Dress",
                "src": "https://i.ibb.co/bdms92r/Wgrey-Top-With-Knots.jpg",
                "description": "Grey Top With Knotst",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "W12",
                "title": "Womens Dress",
                "src": "https://i.ibb.co/Tt8ks15/Wpink-Flowers.jpg",
                "description": "Pink Floral Dress",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            }


        ],
        boysProducts: [
            {
                "_id": "B1",
                "title": " Boys Jeans ",
                "src": "https://i.ibb.co/X8Q6QTW/Bblue-Skinny-Jeans.jpg",
                "description": "Boys Blue Skinny",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 300",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "B2",
                "title": "Boys Jeans",
                "src": "https://i.ibb.co/x1nMW04/Bblue-Stretch-Jeans.jpg",
                "description": "Boys Rough Blue Stretch ",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 310",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "B3",
                "title": "Boys Jeans ",
                "src": "https://i.ibb.co/f8TDm5X/Bdark-Blue-Knit-Jeans.jpg",
                "description": "Boys Dark Blue Knit",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 320",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "B4",
                "title": "Boys Jeans",
                "src": "https://i.ibb.co/Xpy7Tn4/Bgrey-Soft-Jeans.jpg",
                "description": "Boys Grey Soft Jeans",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 200",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "B5",
                "title": "Boys Jeans",
                "src": "https://i.ibb.co/JvzHC7r/Blue-Stone-Jeans.jpg",
                "description": "Boys Blue stone",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 350",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "B6",
                "title": "Boys Jeans",
                "src": "https://i.ibb.co/Ykf4pdV/Blue-Stretch-Jeans.jpg",
                "description": "Boys Blue Stretch",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 270",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "B7",
                "title": "Boys Shirts",
                "src": "https://i.ibb.co/r4664r2/Blue-Round-Neck.jpg",
                "description": "Boys Blue Round Neck		",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "B8",
                "title": "Boys Shirts",
                "src": "https://i.ibb.co/nkJCyPs/Bgrey-London-TShirt.jpg",
                "description": "Boys Grey London",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "B9",
                "title": "Boys Shirts",
                "src": "https://i.ibb.co/sQH3mdC/Bblue-Round-Neck.jpg",
                "description": "Boys Blu Round Neck		",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "B10",
                "title": "Boys Shirts",
                "src": "https://i.ibb.co/2tR6X3m/Bsports-TShirts.jpg",
                "description": "Boys Sports Shirt",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            }, {
                "_id": "B11",
                "title": "Boys Shirts",
                "src": "https://i.ibb.co/28Mr6Ts/Bwhite-America-TShirt.jpg",
                "description": "Boys White America ",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            }, {
                "_id": "B12",
                "title": "Boys Shirts",
                "src": "https://i.ibb.co/hDTB7L8/Byellow-Shirt.jpg",
                "description": "Boys Yellow Shirt",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            }


        ],
        girlsProducts: [
            {
                "_id": "G1",
                "title": "Girls Dress",
                "src": "https://i.ibb.co/NsFBbnf/Gblue2-Pack.jpg",
                "description": "Blue 2 pack dress",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 280",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "G2",
                "title": "Girls Dress",
                "src": "https://i.ibb.co/3W77js1/Gjeans-Jumpsuit.jpg",
                "description": "Jeans JumpSuit",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 260",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "G3",
                "title": "Girls Dress",
                "src": "https://i.ibb.co/4g5xmnp/GBlue-Party.jpg",
                "description": "Girls Party Dress",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 350",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "G4",
                "title": "Girls Dress",
                "src": "https://i.ibb.co/0mLDjgw/Gjumpsuit.jpg",
                "description": "JumpSuit",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 320",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "G5",
                "title": "Girls Dress",
                "src": "https://i.ibb.co/j3V6fd7/Gmixed-Leaf.jpg",
                "description": "Mixed Leaf Dress",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 260",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "G6",
                "title": "Girls Dress",
                "src": "https://i.ibb.co/ZKLHTfL/Gpink2-Pack.jpg",
                "description": "2 Pack Pink dress",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 210",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "G7",
                "title": "Girls Dress",
                "src": "https://i.ibb.co/XVJfYYP/Gpink-Summer.jpg",
                "description": "Pink Summer dress",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "G8",
                "title": "Girls Dress",
                "src": "https://i.ibb.co/QmjmY0C/Gyellow-Knitted.jpg",
                "description": "Yellow Knitted Dress",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "G9",
                "title": "Girls Dress",
                "src": "https://i.ibb.co/Tt8ks15/Wpink-Flowers.jpg",
                "description": "Pink Floral dress",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "G10",
                "title": "Girls Dress",
                "src": "https://i.ibb.co/3W77js1/Gjeans-Jumpsuit.jpg",
                "description": "Jeans Jump Suit",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            },
            {
                "_id": "G11",
                "title": "Girls Dress",
                "src": "https://i.ibb.co/NsFBbnf/Gblue2-Pack.jpg",
                "description": "Blue 2-pack dress",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            }, {
                "_id": "G12",
                "title": "Girls Dress",
                "src": "https://i.ibb.co/NsFBbnf/Gblue2-Pack.jpg",
                "description": "Blue 2 pack dress",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "price": " 250",
                "colors": ["red", "blue", "teal", "white"],
                "size": ["S", "M", "L", "XL"],
                "count": "1"
            }


        ],
        cart: [],
        total: 0
    };
    addCart = (id) => {
        const { menProducts, cart } = this.state;
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = menProducts.filter(product => {
                return product._id === id
            })
            this.setState({ cart: [...cart, ...data] })
        }
        else {
            swal("The product has been added to Cart.")
        }
    };
    addCartW = (id) => {
        const { womenProducts, cart } = this.state;
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = womenProducts.filter(product => {
                return product._id === id
            })
            this.setState({ cart: [...cart, ...data] })
        }
        else {
            swal("The product has been added to Cart.")
        }
    };
    addCartB = (id) => {
        const { boysProducts, cart } = this.state;
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = boysProducts.filter(product => {
                return product._id === id
            })
            this.setState({ cart: [...cart, ...data] })
        }
        else {
            swal("The product has been added to Cart.")

        }
    };
    addCartG = (id) => {
        const { girlsProducts, cart } = this.state;
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = girlsProducts.filter(product => {
                return product._id === id
            })
            this.setState({ cart: [...cart, ...data] })
        }
        else {
            swal("The product has been added to Cart.")

        }
    };

    reduction = id => {
        const { cart } = this.state;

        cart.forEach(item => {
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }

        })
        this.setState({ cart: cart });
        this.getTotal();
    };

    increment = id => {
        const { cart } = this.state;
        cart.forEach(item => {
            if (item._id === id) {
                item.count += 1;
            }
        })
        this.setState({ cart: cart });
        console.log("increased");
        console.log({ cart });
        this.getTotal();
    };

    deleteItem = id => {
        if (window.confirm("Do you want to remove this product")) {
            const { cart } = this.state;
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })
            this.setState({ cart: cart });
            this.getTotal();
        }
    };
    getTotal = () => {
        const { cart } = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        }, 0)
        this.setState({ total: res })
    };


    render() {
        const { menProducts, womenProducts, boysProducts, girlsProducts, cart, total } = this.state;
        const { addCart, addCartW, addCartB, addCartG, reduction, increment, deleteItem, getTotal } = this;

        return (
            <DataContext.Provider value={{ menProducts, womenProducts, boysProducts, girlsProducts, addCart, addCartW, addCartB, addCartG, cart, reduction, increment, deleteItem, total, getTotal }}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

