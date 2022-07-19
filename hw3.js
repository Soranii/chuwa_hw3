const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

const generateTable = ((tableInfo, container) => {
  let table = document.createElement("table");
  table.id = "students-table";
  //draw the first row
  let tr1 = document.createElement("tr");
  for (ele of tableInfo.tableHeader) {
    let th = document.createElement("th");
    th.className = "cell";
    th.textContent = ele;
    tr1.appendChild(th);
  }
  table.appendChild(tr1);

  //draw other rows
  for (ele of tableInfo.tableContent) {
    let tr = document.createElement("tr");
    for (tdInfo of tableInfo.tableHeader) {
      let td = document.createElement("td");
      td.className = "cell";
      td.textContent = ele[tdInfo];
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  container.appendChild(table);
})(tableInfo, document.getElementById("table-container"));

/************************************************************************* */

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const generateLists = ((list, container) => {
  let ol = document.createElement("ol");
  let ul = document.createElement("ul");
  for (ele of list) {
    let oLli = document.createElement("li");
    let uLli = document.createElement("li");
    oLli.textContent = ele;
    uLli.textContent = ele;
    ol.appendChild(oLli);
    ul.appendChild(uLli);
  }
  container.appendChild(ol);
  container.appendChild(ul);
})(list, document.querySelector("#lists-container"));

/************************************************************************* */

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const generateDrpDwnLst = ((list, container) => {
  let select = document.createElement("select");
  list.forEach(({ value, content }) => {
    let option = document.createElement("option");
    option.value = value;
    option.textContent = content;
    select.appendChild(option);
  });
  container.appendChild(select);
})(dropDownList, document.querySelector("#drp-dwn-list-container"));
