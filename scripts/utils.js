export const openpPopup = config => {
  config.popup.classList.add("active");
  config.title.textContent = 'Success!'
  config.result.textContent = config.hash;
  config.result.href = 'https://stellar.expert/explorer/public/tx/' + config.hash;
}

export const closePopup = popup => {
  popup.classList.remove("active");
};
