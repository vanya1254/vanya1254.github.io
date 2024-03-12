/**
 * Table
 */

const projectsData = await getData(URL, HEADERS.projects);

const tableRowsEl = document.getElementById("table-rows");
const tableRowTemplate = document.getElementById("template-table-row").content;

const renderTableRows = (data = { id: 0, workname: "", url: "", date: "" }) => {
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

if (projectsData) {
  projectsData.forEach((project) => renderTableRows(project));
}

/**
 * Footer
 */

const updateData = await getData(URL, HEADERS.updated);

if (updateData) {
  const updatedEl = document.querySelector(".updated");
  updatedEl.innerHTML = `Портфолио обновлено ${updateData[0].date} в ${updateData[0].time}`;
}
