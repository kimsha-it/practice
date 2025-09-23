const terminalWidth = process.stdout.columns;
const border = "=".repeat(terminalWidth);

import axios from "axios";
const BASE_URL = "https://dummyjson.com";

const testRoute = async () => {
  const data = await axios.get(`${BASE_URL}/test`);
  console.log(data["data"]);
  // { status: 'ok', method: 'GET' }
};
testRoute();

// TODO: 모든 장바구니 목록 조회(Get all carts)
// 아래 요구사항을 참고하여 코드를 작성한다
// 1. 모든 장바구니 조회(Get all carts) 요청
// 2. 응답 데이터 객체 출력
async function getAllCarts() {
  try {
    const response = await axios.get(`${BASE_URL}/carts`);
    console.log(response.data);
  } catch (error) {
    console.error("장바구니 조회 실패:", error);
  }
}
getAllCarts();
/* 출력 결과
{
  "carts": [
    {
      "id": 1,
      "products": [
        {
          "id": 144,
          "title": "Cricket Helmet",
          "price": 44.99,
          "quantity": 4,
          "total": 179.96,
          "discountPercentage": 11.47,
          "discountedTotal": 159.32,
          "thumbnail": "<https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png>"
        },
        {...}
        // more products
      ],
      "total": 4794.8,
      "discountedTotal": 4288.95,
      "userId": 142,
      "totalProducts": 5,
      "totalQuantity": 20
    },
    {...},
    {...},
    {...}
    // 30 items
  ],
  "total": 50,
  "skip": 0,
  "limit": 30
}
*/
console.log(border);

// TODO: 단일 장바구니 조회(Get a single cart)
// 아래 요구사항을 참고하여 코드를 작성한다
// 1. 10번 장바구니 조회(Get a single cart) 요청
// 2. 응답 데이터 객체 출력
async function getCartById(n) {
  const response = await axios.get(`${BASE_URL}/carts/${n}`);
  console.log(response.data);
}
getCartById(10);
/* 출력 결과
{
  id: 10,
  products: [
    {
      id: 190,
      title: 'IWC Ingenieur Automatic Steel',
      price: 4999.99,
      quantity: 5,
      total: 24999.949999999997,
      discountPercentage: 12.34,
      discountedTotal: 21914.96,
      thumbnail: '<https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/thumbnail.png>'
    },
    {
      id: 94,
      title: 'Longines Master Collection',
      price: 1499.99,
      quantity: 3,
      total: 4499.97,
      discountPercentage: 16.44,
      discountedTotal: 3760.17,
      thumbnail: '<https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/thumbnail.png>'
    }
  ],
  total: 29499.92,
  discountedTotal: 25675.13,
  userId: 160,
  totalProducts: 2,
  totalQuantity: 8
}
*/
console.log(border);

// TODO: 단일 장바구니에 포함된 상품의 수(total products) 조회
// 아래 요구사항을 참고하여 코드를 작성한다
// 1. 10번 장바구니 조회(Get a single cart) 요청
// 2. 응답 데이터 객체에서 상품의 수(total products) 데이터 출력
async function getCartById2(n) {
  try {
    const response = await axios.get(`${BASE_URL}/carts/${n}`);
    const cart = response.data;
    console.log(cart.totalProducts);
  } catch (error) {
    console.log("에러 발생:", error);
  }
}
getCartById2(10);
/* 출력 결과
2
*/
console.log(border);

// TODO: 단일 장바구니에 포함된 상품의 목록(products) 조회
// 아래 요구사항을 참고하여 코드를 작성한다
// 1. 10번 장바구니 조회(Get a single cart) 요청
// 2. 응답 데이터 객체에서 상품의 목록(products) 배열 데이터 출력
async function getCartById3(n) {
  try {
    const response = await axios.get(`${BASE_URL}/carts/${n}`);
    const cart = response.data;
    console.log(cart.products);
  } catch (error) {
    console.log("에러 발생:", error);
  }
}
getCartById3(10);
/* 출력 결과
[
  {
    id: 190,
    title: 'IWC Ingenieur Automatic Steel',
    price: 4999.99,
    quantity: 5,
    total: 24999.949999999997,
    discountPercentage: 12.34,
    discountedTotal: 21914.96,
    thumbnail: '<https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/thumbnail.png>'
  },
  {
    id: 94,
    title: 'Longines Master Collection',
    price: 1499.99,
    quantity: 3,
    total: 4499.97,
    discountPercentage: 16.44,
    discountedTotal: 3760.17,
    thumbnail: '<https://cdn.dummyjson.com/products/images/mens-watches/Longines%20Master%20Collection/thumbnail.png>'
  }
]
*/
console.log(border);

// TODO: 단일 장바구니에 포함된 상품의 이름 추출 및 출력
// 아래 요구사항을 참고하여 코드를 작성한다
// 1. 10번 장바구니 조회(Get a single cart) 요청
// 2. 응답 데이터 객체에서 상품의 목록(products) 배열 데이터 추출
// 3. map() 메서드를 활용해서 배열 데이터에서 상품의 이름만 모아서 새로운 배열 생성
// 4. 상품의 이름만 모은 배열 출력

async function getCartById4(n, propertyName) {
  try {
    const response = await axios.get(`${BASE_URL}/carts/${n}`);
    const cart = response.data;
    const value = cart.products.map((product) => product[propertyName]);
    console.log(value);
  } catch (error) {
    console.log("에러 발생:", error);
  }
}
getCartById4(10, "title");
/* 출력 결과
[
  'IWC Ingenieur Automatic Steel',
  'Longines Master Collection'
]
*/
console.log("border");
