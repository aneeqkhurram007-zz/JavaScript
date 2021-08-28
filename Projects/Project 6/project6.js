const addButton = document.querySelector("#addButton");

const addNewNote = (text = '') => {

  const note = document.createElement('div');
  note.classList.add("note");
  note.style = ` width: 300px;
background: var(--bs-warning);
height: 200px;
border-radius: 7px;
border-style: solid;
border-color: var(--bs-dark);
margin-bottom: 15%;`
  const htmlData = ` <div
    style="
      text-align: right;
      background: var(--bs-warning);
      border-style: solid;
      border-radius: 2px;
    "
  >
    <button
      class="btn btn-primary edit"
      type="button"
      style="background: var(--bs-secondary); font-size: 11px"
    >
      <i class="fa fa-pencil"></i></button
    ><button
      class="btn btn-primary delete"
      type="button"
      style="background: var(--bs-gray); font-size: 10px"
    >
      <i class="fa fa-trash"></i>
    </button>
  </div>
  <div style="height: inherit">
  <div class="divText"  style="
  width: 100%;
  border-style: solid;
  border-color: var(--bs-white);
  background: var(--bs-light);
  height: 75%;
  display:${!text ? "none" : ""}

"></div>
    <textarea
    class="textArea"
      style="
        width: 100%;
        border-style: solid;
        border-color: var(--bs-white);
        background: var(--bs-light);
        height: 75%;
display:${text ? "none" : ""}

      "
    ></textarea>
  </div>`;
  note.insertAdjacentHTML("afterbegin", htmlData)
  const eidtButton = note.querySelector(".edit");
  const delButton = note.querySelector(".delete");
  const divText = note.querySelector(".divText");
  const textArea = note.querySelector(".textArea");

  delButton.addEventListener('click', () => note.remove())

  textArea.value = text;
  divText.innerHTML = text;
  //Same as above
  // !text ? divText.style.display = "none" : textArea.style.display = "none";

  eidtButton.addEventListener('click', () => {
    // textArea.classList.toggle another method
    if (textArea.style.display === "none") {
      divText.style.display = "none";
      textArea.style.display = "";
    }
    else {
      textArea.style.display = "none";
      divText.style.display = "";
    }

  })
  textArea.addEventListener('change', (event) => {
    const value = event.target.value;
    divText.innerHTML = value;
  })

  document.querySelector("#noteSection").appendChild(note);
}

addButton.addEventListener("click", () => addNewNote())