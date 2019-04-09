import IconButton from "./IconButton";
import "styles/ExportButtons.css";

let path = require('path')
path.join(__dirname, 'src')
/**
 * Contains buttons to export data in multiple formats
 */
export default class ExportButtons {
  /**
   * Create a ExportButtons component
   */
  constructor() {
    this._container = document.createElement("div");
  }

  /**
   * Get the component's HTMLElement
   * @return {HTMLElement}
   */
  getElement() {
    this._container.className = "export-buttons";

    const title = document.createElement("h2");
    title.className = "export-buttons-title";
    title.innerText = "Export";

    const pdfButton = new IconButton("file-pdf");
    const excelButton = new IconButton("file-excel");
    //this.addListener(excelButton)
    const csvButton = new IconButton("file-csv");
    let pdfButtonElement = pdfButton.getElement()
    this.addListener(pdfButtonElement)
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "export-buttons-container";
    buttonContainer.appendChild(pdfButtonElement);
    buttonContainer.appendChild(excelButton.getElement());
    buttonContainer.appendChild(csvButton.getElement());

    this._container.append(title);
    this._container.append(buttonContainer);

    return this._container;
  }

  addListener(pdfButton) {

    pdfButton.addEventListener('click', () => {
      this.downloadData()
    })
  }

  downloadData() {
    console.log('skdjf');
    var req = new XMLHttpRequest();
    req.open("GET", "../src/data.js", true);
    req.responseType = "blob";

    req.onload = function(event) {
      var blob = req.response;
      // console.log(blob.size);
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = "data.js";
      link.click();
    };

    req.send();

  }
}