import all_product from './all_product';

let new_collections = all_product.filter((item) => [5, 6, 7, 8, 9, 10, 11, 12].includes(item.id));

export default new_collections;