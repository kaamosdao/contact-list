import { put, takeEvery, call } from 'redux-saga/effects';

import {
  addContactSuccess,
  setContactsSuccess,
  deleteContactSuccess,
  updateContactSuccess,
  addContact,
  deleteContact,
  updateContact,
  getContacts,
  setLoading,
} from '../slices/contactSlice';

import httpClient from '../../utils/httpClient';
import handleErrors from '../../utils/handleErrors';

function* addContactWorker(action) {
  try {
    yield put(setLoading(true));
    const contact = yield httpClient
      .setContact(action.payload)
      .then((response) => response.json());
    yield put(addContactSuccess(contact));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    yield call(handleErrors, e);
  }
}

function* getContactsWorker() {
  try {
    yield put(setLoading(true));
    const contacts = yield httpClient
      .getContacts()
      .then((response) => response.json());

    yield put(setContactsSuccess(contacts));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    yield call(handleErrors, e);
  }
}

function* updateContactWorker(action) {
  try {
    yield put(setLoading(true));
    const contact = yield httpClient
      .updateContact(action.payload)
      .then((data) => data.json());
    yield put(updateContactSuccess(contact));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    yield call(handleErrors, e);
  }
}

function* deleteContactWorker(action) {
  try {
    yield put(setLoading(true));
    yield httpClient.deleteContact(action.payload);
    yield put(deleteContactSuccess(action.payload));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setLoading(false));
    yield call(handleErrors, e);
  }
}

function* contacWatcher() {
  yield takeEvery(addContact, addContactWorker);
  yield takeEvery(getContacts, getContactsWorker);
  yield takeEvery(updateContact, updateContactWorker);
  yield takeEvery(deleteContact, deleteContactWorker);
}

export default contacWatcher;
