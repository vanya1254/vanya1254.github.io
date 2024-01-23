const data = await fetch("https://e6530d7c6318dbc8.mokky.dev/projects").then(
  (res) => res.json()
); // [{id:'', workname:'', publishedUrl:'', url:'', date:''},]

const tableRowsEl = document.getElementById("table-rows");
const tableRowTemplate = document.getElementById("template-table-row").content;

const renderDataRows = (data = { id: 0, workname: "", url: "", date: "" }) => {
  const tableRow = tableRowTemplate.cloneNode(true);

  let workname = tableRow.querySelector(".workname");
  workname.innerHTML = data.workname;
  workname.href = data.publishedUrl;

  let url = tableRow.querySelector(".url");
  url.innerHTML = data.url;
  url.href = data.url;

  let date = tableRow.querySelector(".date");
  date.innerHTML = data.date;

  tableRowsEl.appendChild(tableRow);
};

data.forEach((elem) => renderDataRows(elem));
