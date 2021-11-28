import {popup} from './constants.js';

export const openpPopup = popup => {
  popup.classList.add("active");
}

export const closePopup = popup => {
  popup.classList.remove("active");
};
