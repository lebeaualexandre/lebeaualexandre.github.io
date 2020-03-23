export const construct = (item, datas) => {
  return Object.assign(item, datas[ item.sku ])
};
