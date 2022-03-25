import productCategoryService from 'src/services/inventoryCategory.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { CategoryStateInterface } from './state';

const actions: ActionTree<CategoryStateInterface, StateInterface> = {
  async addProductCat(context, payload: any): Promise<any> {
    const result = await productCategoryService.create(payload);
    context.commit('setNewProductCategory', result);
    await context.dispatch('getAllProductCategory');
  },

  async editProductCat(context, payload: any): Promise<any> {
    const result = await productCategoryService.create(payload);
    context.commit('updateProductCategory', result);
    await context.dispatch('getAllProductCategory');
  },

  async deleteProductCat(context, productID: number): Promise<any> {
    const result = await productCategoryService.delete(productID);
    context.commit('deleteProductCategory', result);
  },

  async getAllProductCategory(context): Promise<any> {
    const res = await productCategoryService.getAll();
    context.commit('getAllProductCategory', res);
  },

  async getOneProductCategory(context, categoryID: number): Promise<any> {
    const res = await productCategoryService.getOne(categoryID);
    context.commit('getOneUser', res);
  },
};

export default actions;
