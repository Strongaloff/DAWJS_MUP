const joinBtn = document.getElementById("join");
const createBtn = document.getElementById("create");
const userName = document.getElementById("userName");
const partyManagementUrl = "http://localhost:8001";

const http = new XMLHttpRequest();

joinBtn.onclick = join;

function getInputValue(bttn) {}

function join(ev) {
  const inputValue = ev.target.parentNode.childNodes[3].value;
  let params = `party_name=${inputValue}`;

  http.open("POST", partyManagementUrl + "?" + params, true);

  http.onreadystatechange = () => {
    console.log(http.responseText);
  };

  http.send();
}

function create(event) {
  const inputValue = ev.target.parentNode.childNodes[3].value;
  let params = `party_name=${inputValue}&host_name=${userName}`;

  http.open("POST", partyManagementUrl + "?" + params, true);

  http.onreadystatechange = () => {
    console.log(http.responseText);
  };

  http.send();
}
