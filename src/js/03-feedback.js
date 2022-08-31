import throttle from 'lodash.throttle';

import { save, load, remove } from './storage';

let formObj = null;
const refs = {
  formEl: document.querySelector('.feedback-form'),
};

refs.formEl.addEventListener('input', throttle(onFormClick, 500));
refs.formEl.addEventListener('submit', onSubmit);

const loadedObj = load('feedback-form-state');
if (loadedObj) {
  refs.formEl.email.value = loadedObj.email;
  refs.formEl.message.value = loadedObj.message;
  formObj = {
    email: loadedObj.email,
    message: loadedObj.message,
  };
}

function onFormClick(evt) {
  // try {
  formObj = {
    email: evt.currentTarget.email.value,
    message: evt.currentTarget.message.value,
  };
  save('feedback-form-state', formObj);
  // } catch {}
}

function onSubmit(evt) {
  evt.preventDefault();

  if (formObj) {
    console.log(formObj);
    evt.currentTarget.reset();
    remove('feedback-form-state');
    formObj = null;
  }
}
