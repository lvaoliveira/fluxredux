import { EventEmitter } from 'events';
import _ from 'lodash';
import AppDispatcher from '../../dispatcher/dispatcher';
import data from '../../data';

let items = {};
function addItem(item) {
  const now = new Date();
  items.unshift({
    time: `${now.getHours()}:${now.getMinutes()}`,
    date: `${now.getDate()}/${(now.getMonth() + 1)}/${now.getFullYear()}`,
    title: item.title,
    text: item.text,
    origin: 'desktop',
  });
}

const ListItemStore = _.extend({}, EventEmitter.prototype, {

  getItem() {
    items = data;
    return items;
  },

  // Emit Change event
  emitChange() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  },
});

// Register callback with AppDispatcher
AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action.actionType) {
    case 'ADD_ITEM':
      addItem(action.data);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  ListItemStore.emitChange();
  return true;
});

export default ListItemStore;
