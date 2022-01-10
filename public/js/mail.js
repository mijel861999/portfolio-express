
let form_id_js = "javascript_form"

let data_js = {
  "acess_token": "{your access token}" //
}

const js_onSuccess = () => {
  //redirect
  window.location = window.location.pathname + "";
}

const js_onError = () => {
  window.location = window.location.pathname = "";
}

const sendButton = document.getElementById("js_send");

const js_send = () => {
  sendButton.value = "Sending...";
  sendButton.disabled = true;
}


/* Se puede ejecutar una función así */
sendButton.onclick = js_send;
/*
sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Click')
})
*/

const toParams = (data_js) => {
  let form_data = [];

  for( var key in data_js ) {
    form_data.pus)
  }
}
