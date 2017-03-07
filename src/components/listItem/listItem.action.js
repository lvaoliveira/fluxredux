import AppDispatcher from '../../dispatcher/dispatcher';

const ListItemActions = {
  loadItem(data) {
    AppDispatcher.handleAction({
      actionType: 'LOAD_ITEM',
      data,
    });
  },
  addItem(data) {
    AppDispatcher.handleAction({
      actionType: 'ADD_ITEM',
      data,
    });
  },
};
export default ListItemActions;
