// !FUNZIONI
const renderIcons = (iconsArray, targhetElement) => {
  let iconsTemplate = "";
  iconsArray.forEach((icon, index) => {
    let hasOffset = "";
    if (index == 0 || index % 5 == 0) {
      hasOffset = "offset-md-1";
    }
    iconsTemplate += `
        <div class="col col-sm-4 col-md-2 ${hasOffset}">
            <div class="card">
                <div class="card-body">
                    <i class="${icon.family} ${icon.prefix}${icon.name}
                    fa-2x ${icon.type}"></i>
                    <h6>${icon.name.toUpperCase()}</h6>
                </div>
            </div>
        </div>
        `;
  });
  targhetElement.innerHTML = iconsTemplate;
};

// !STAMPA IN PAGINA
const iconsSection = document.querySelector("#icons .row");
renderIcons(icons, iconsSection);

//! filtri

const selectField = document.getElementById("type-filter");

selectField.addEventListener("change", () => {
  const filterValue = selectField.value;

  if (filterValue === "all") {
    renderIcons(icons, iconsSection);
    return;
  }
  const filteredIcons = icons.filter((icon) => filterValue === icon.type);
  renderIcons(filteredIcons, iconsSection);
});
