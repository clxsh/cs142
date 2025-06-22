'use strict';

class TableTemplate {
    static fillIn(id, dict, columnName="") {
        let table = document.getElementById(id);
        const rows = table.rows;
        const header = rows[0];
        const headerProcessor = new Cs142TemplateProcessor(header.innerHTML);
        header.innerHTML = headerProcessor.fillIn(dict);

        let targetColumnIndex = -1;
        for (let i = 0; i < header.cells.length; i++) {
            if (header.cells[i].innerHTML === columnName) {
                targetColumnIndex = i;
            }
        }

        for (let i = 1; i < rows.length; i++) {
            if (columnName !== "" && targetColumnIndex !== -1) {
                let elem = columnName ? rows[i].cells[targetColumnIndex] : rows[i];
                const cellProcessor = new Cs142TemplateProcessor(elem.innerHTML);
                elem.innerHTML = cellProcessor.fillIn(dict);
            }
        }

        table.style.visibility = "visible";
    }
}

// class TableTemplate {
//     static fillIn(id, dict, columnName="") {
//         let table = document.getElementById(id);
//         let tbody = table.getElementsByTagName("tbody");
//         if (tbody.length != 1) {
//             return
//         }

//         let trs = tbody[0].getElementsByTagName("tr");

//         // process header
//         let headerTds = trs[0].getElementsByTagName("td");
//         for (let td of headerTds) {
//             let headerProcessor = new Cs142TemplateProcessor(td.innerHTML);
//             td.innerHTML = headerProcessor.fillIn(dict);
//         }

//         // find the target column index
//         let targetColumnIndex = -1;
//         if (columnName != "") {
//             for (let i = 0; i < headerTds.length; i++) {
//                 if (headerTds[i].innerHTML === columnName) {
//                     targetColumnIndex = i;
//                     break;
//                 }
//             }
//         }

//         // fill
//         if (targetColumnIndex === -1) {
//             for(let i = 1; i < trs.length; i++) {
//                 let trProcessor = new Cs142TemplateProcessor(trs[i].innerHTML);
//                 trs[i].innerHTML = trProcessor.fillIn(dict);
//             }
//         } else {
            
//             for (let i = 1; i < trs.length; i++) {
//                 let tds = trs[i].getElementsByTagName("td");
//                 for (let j = 0; j < tds.length; j++) {
//                     if (j == targetColumnIndex) {
//                         tds[j].innerHTML = (new Cs142TemplateProcessor(tds[j].innerHTML)).fillIn(dict);
//                     }
//                 }
//             }
//         }

//         table.style.visibility = "visible";
//     }
// }