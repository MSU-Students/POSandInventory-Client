import { User } from 'src/interfaces/user.interface';
import { MutationTree } from 'vuex';
import { AccountStateInterface } from './state';

const mutation: MutationTree<AccountStateInterface> = {
  setNewAccount(state, payload: User) {
    state.newUser = payload;
  },
  updateAccount(state, payload: any) {
    state.allAccount.push(payload);
  },
  deleteAccount(state, payload: any) {
    state.allAccount.push(payload);
  },

  getAllUser(state, payload: any) {
    state.allAccount = [];
    state.allAccount.push(...payload);
  },

  getOneUser(state, payload) {
    state.allAccount = payload;
  },

  getProfile(state, payload) {
    state.allAccount = payload;
  },
};
export default mutation;
