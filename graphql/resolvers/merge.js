const User = require("../../models/user");
const Product = require("../../models/product");
const Address = require("../../models/address");
const DataLoader = require("dataloader");
const { dateToString } = require("../../helpers/date");

const userLoader = new DataLoader(userIds => {
  return getUsers(userIds);
});

const getUsers = async userIds => {
  try {
    const users = await User.find({ _id: { $in: userIds } });
    return users.map(user => {
      return transformUser(user);
    });
  } catch (err) {
    throw err;
  }
};

const getUser = async userId => {
  try {
    return await userLoader.load(userId.toString());
  } catch (err) {
    throw err;
  }
};

const addressLoader = new DataLoader(addressIds => {
  return getAddresses(addressIds);
});

const getAddresses = async addressIds => {
  try {
    const addresses = await Address.find({ _id: { $in: addressIds } });
    return addresses.map(address => {
      return { ...address._doc };
    });
  } catch (err) {
    throw err;
  }
};

const getAddress = async addressId => {
  try {
    return await addressLoader.load(addressId.toString());
  } catch (err) {
    throw err;
  }
};

const productLoader = new DataLoader(productIds => {
  return getProducts(productIds);
});

const getProducts = async productIds => {
  try {
    const products = await Product.find({ _id: { $in: productIds } });
    return products.map(product => {
      return transformProduct(product);
    });
  } catch (err) {
    throw err;
  }
};

const getProduct = async productId => {
  try {
    return await productLoader.load(productId.toString());
  } catch (err) {
    throw err;
  }
};

const transformProduct = product => {
  return {
    ...product._doc,
    subcategories: () => subcategoryLoader.loadMany(product._doc.subcategories)
  };
};

const transformUser = user => {
  console.log("transforming user")
  console.log(user._doc.addresses)
  let res={...user._doc,
    password: null,
    address: getAddress.bind(this, user.address),
  }
  if(user._doc.addresses.length>0){
    console.log("caso mayor a 0")
    res.addresses= () => addressLoader.loadMany(user._doc.addresses)
  }
  else{res.addresses=null}
  return res
};

const transformCategory = category => {
  return {
    ...category._doc,
    subcategories: () => subcategoryLoader.loadMany(category._doc.subcategories)
  };
};


exports.transformProduct = transformProduct;
exports.transformUser = transformUser;
exports.transformCategory = transformCategory;