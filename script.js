const inputNIM = document.getElementById("nim");
const inputNama = document.getElementById("nama");
const inputJurusan = document.getElementById("jurusan");
const inputKelas = document.getElementById("kelas");

function addData() {
  const nim = inputNIM.value;
  const nama = inputNama.value;
  const jurusan = inputJurusan.value;
  const kelas = inputKelas.value;

  const tableData = document
    .getElementById("data-table")
    .getElementsByTagName("tbody")[0];
  const row = document.createElement("tr");

  const value = [nim, nama, jurusan, kelas];

  for (let i = 0; i < value.length; i++) {
    const cell = document.createElement("td");
    cell.innerHTML = value[i];
    row.appendChild(cell);
  }

  tableData.appendChild(row);
}
