import { put, takeEvery } from 'redux-saga/effects';

import {
  addContactSuccess,
  setContactsSuccess,
  deleteContactSuccess,
  updateContactSuccess,
  addContact,
  deleteContact,
  updateContact,
  getContacts,
} from '../slices/contactSlice';

import httpClient from '../../utils/httpClient';
import showToast from '../../utils/showToast';
import { toastType } from '../../types/types';

function* addContactWorker(action) {
  try {
    const contact = yield httpClient
      .setContact(action.payload)
      .then((response) => response.json());
    yield put(addContactSuccess(contact));
  } catch (e) {
    showToast('Network error!', toastType.error);
  }
}

function* getContactsWorker() {
  try {
    const contacts = yield httpClient
      .getContacts()
      .then((response) => response.json());

    yield put(setContactsSuccess(contacts));
  } catch (e) {
    showToast('Network error!', toastType.error);
  }
}

function* updateContactWorker(action) {
  try {
    const contact = yield httpClient
      .updateContact(action.payload)
      .then((data) => data.json());
    yield put(updateContactSuccess(contact));
  } catch (e) {
    showToast('Network error!', toastType.error);
  }
}

function* deleteContactWorker(action) {
  try {
    yield httpClient.deleteContact(action.payload);
    yield put(deleteContactSuccess(action.payload));
  } catch (e) {
    showToast('Network error!', toastType.error);
  }
}

function* contacWatcher() {
  yield takeEvery(addContact, addContactWorker);
  yield takeEvery(getContacts, getContactsWorker);
  yield takeEvery(updateContact, updateContactWorker);
  yield takeEvery(deleteContact, deleteContactWorker);
}

export default contacWatcher;
