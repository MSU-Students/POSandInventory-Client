import mediaService from 'src/services/media.service';
import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { MediaStateInterface } from './state';

const actions: ActionTree<MediaStateInterface, StateInterface> = {
  async uploadMedia(context, payload: any) {
    const result = await mediaService.uploadMedia(payload);
    context.commit('uploadMedia', result);
  },
  async getMedia(context, id: number): Promise<any> {
    const result = await mediaService.getMedia(id);
    context.commit('getMedia', result);
  },
};

export default actions;