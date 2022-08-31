import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
};

refs.formEl.addEventListener('input', throttle(onFormClick, 500));

function onFormClick(evt) {
  console.log(evt.target.value);
}
