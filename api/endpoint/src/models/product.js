export default (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    title: DataTypes.STRING
  });

  Product.associate = models => {};

  return Product;
}
