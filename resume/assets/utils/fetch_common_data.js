export default (data, common) => {
  return Object.assign(data, common[data.sku]);
};
