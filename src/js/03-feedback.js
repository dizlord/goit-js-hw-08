import throttle from 'lodash.throttle';

import { save, load, remove } from './storage';

const refs = {
  formEl: document.querySelector('.feedback-form'),
};

refs.formEl.addEventListener('input', throttle(onFormClick, 500));
refs.formEl.addEventListener('submit', onSubmit);

const loadedObj = load('feedback-form-state');
if (loadedObj) {
  Object.entries(loadedObj).forEach(([name, value]) => {
    refs.formEl.elements[name].value = value;
  });
}

function onFormClick(evt) {
  const { name, value } = evt.target;
  let formObj = load('feedback-form-state');
  formObj = formObj || {};
  formObj[name] = value;
  save('feedback-form-state', formObj);
}

function onSubmit(evt) {
  evt.preventDefault();

  let formObj = load('feedback-form-state');
  if (formObj) {
    console.log(formObj);
    evt.currentTarget.reset();
    remove('feedback-form-state');
  }
}
