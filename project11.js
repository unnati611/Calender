function showmonth(date) {
  var date = new Date(date);
  var y = date.getFullYear();
  var m = date.getMonth();
  var firstDay = new Date(y, m, 1);
  var lastDate = new Date(y, m + 1, 0);

  // let trow = document.createElement("tr");
  // document.getElementById("table").appendChild(trow)
  let count = 1;
  let days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  let startday = days[firstDay.getDay()];
  let lastday = lastDate.getDate();

  for (let index = 0; index < 6; index++) {
    let trow = document.createElement("tr");
    for (let i = 0; i < 7; i++) {
      let tdata = document.createElement("td");
      if (index === 0 && days[i] === startday) {
        tdata.innerHTML = count;
        count++;
      } else if (count <= lastday && count > 1) {
        tdata.innerHTML = count;
        count++;
      } else {
        tdata.innerHTML = "";
      }
      trow.appendChild(tdata);
    }
    document.getElementById("table2").appendChild(trow);
  }
}
showmonth("January 01 2000");

function showclick() {
  let heading = document.getElementById("header");
  heading.innerHTML = "";
  let table = document.getElementById("table2");
  table.innerHTML = "";
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  showmonth(`${month} 01 ${year}`);
  heading.innerHTML = `${month}  ${year}`;
}
