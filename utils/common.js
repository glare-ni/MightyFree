const productList = [
  {
    name: "白菜",
    id: 3,
    price: 3.50,
    src: "/images/xigua.jpg",
    src1: "/images/xigua1.jpg",
    src2: "/images/xigua2.jpg",
    src3: "/images/xigua3.jpg",
    src4: "/images/xigua4.jpg",
    src5: "/images/xigua1.jpg",
    src6: "/images/xigua2.jpg",
    classid: 1
  },
  {
    name: "青菜",
    id: 4,
    price: 5.00,
    src: "/images/caomei.jpg",
    src1: "/images/xigua1.jpg",
    src2: "/images/xigua2.jpg",
    src3: "/images/xigua3.jpg",
    src4: "/images/xigua4.jpg",
    src5: "/images/xigua1.jpg",
    src6: "/images/xigua2.jpg",
    classid: 1
  },
  {
    name: "西瓜",
    id: 1,
    price: 10.00,
    src: "/images/xigua.jpg",
    src1: "/images/xigua1.jpg",
    src2: "/images/xigua2.jpg",
    src3: "/images/xigua3.jpg",
    src4: "/images/xigua4.jpg",
    src5: "/images/xigua1.jpg",
    src6: "/images/xigua2.jpg",
    classid: 2
  },
  {
    name: "草莓",
    id: 2,
    price: 15.00,
    src: "/images/caomei.jpg",
    src1: "/images/xigua1.jpg",
    src2: "/images/xigua2.jpg",
    src3: "/images/xigua3.jpg",
    src4: "/images/xigua4.jpg",
    src5: "/images/xigua1.jpg",
    src6: "/images/xigua2.jpg",
    classid: 2
  },
  {
    name: "猪肉",
    id: 5,
    price: 20.00,
    src: "/images/xigua.jpg",
    src1: "/images/xigua1.jpg",
    src2: "/images/xigua2.jpg",
    src3: "/images/xigua3.jpg",
    src4: "/images/xigua4.jpg",
    src5: "/images/xigua1.jpg",
    src6: "/images/xigua2.jpg",
    classid: 3
  },
  {
    name: "牛肉",
    id: 6,
    price: 45.00,
    src: "/images/caomei.jpg",
    src1: "/images/xigua1.jpg",
    src2: "/images/xigua2.jpg",
    src3: "/images/xigua3.jpg",
    src4: "/images/xigua4.jpg",
    src5: "/images/xigua1.jpg",
    src6: "/images/xigua2.jpg",
    classid: 3
  },
  {
    name: "鲫鱼",
    id: 7,
    price: 15.00,
    src: "/images/xigua.jpg",
    src1: "/images/xigua1.jpg",
    src2: "/images/xigua2.jpg",
    src3: "/images/xigua3.jpg",
    src4: "/images/xigua4.jpg",
    src5: "/images/xigua1.jpg",
    src6: "/images/xigua2.jpg",
    classid: 4
  },
  {
    name: "鲤鱼",
    id: 8,
    price: 25.00,
    src: "/images/caomei.jpg",
    src1: "/images/xigua1.jpg",
    src2: "/images/xigua2.jpg",
    src3: "/images/xigua3.jpg",
    src4: "/images/xigua4.jpg",
    src5: "/images/xigua1.jpg",
    src6: "/images/xigua2.jpg",
    classid: 4
  }
]

const classList = [
  {
    id: 1,
    name: "蔬菜",
    src:"/images/timg.jpg"

  },
  {
    id: 2,
    name: "水果",
    src: "/images/timg.jpg"
  },
  {
    id: 3,
    name: "肉类",
    src: "/images/timg.jpg"
  },
  {
    id: 4,
    name: "鱼类",
    src: "/images/timg.jpg"
  }
]
function getProductList() {
  let list = [];
  for (var i = 0; i < productList.length; i++) {
    let obj = {};
    obj.id = productList[i].id;
    obj.name = productList[i].name;
    obj.price = productList[i].price;
    obj.src = productList[i].src;
    obj.classid = productList[i].classid;
    list.push(obj);
  }
  return list;
}

function getClassList() {
  let list=[];
  for(var i=0; i<classList.length;i++)
  {
    let obj={};
    obj.id=classList[i].id;
    obj.name=classList[i].name;
    obj.src=classList[i].src;
    list.push(obj);
  }
  return list;
}


function getProductDetail(productId) {
  let message = {
    code: '404',
    product: {}
  }
  for (var i = 0; i < productList.length; i++) {
    if (productId == productList[i].id) {
      message.code = '200',
        message.product = productList[i];
      break;
    }
  }
  return message;
}

module.exports = {
  getProductList: getProductList,
  getProductDetail: getProductDetail,
  getClassList:getClassList
}
