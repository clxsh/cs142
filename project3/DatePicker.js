"use strict";

class DatePicker {
    constructor(elemId, callbackF) {
        this.elementId = elemId;
        this.callbackFunction = callbackF;
        this.lastSelectedTd = null;
    }
    
    render(date) {
        this.date = date;

        let selecedtDay = date.getDate();

        date.setDate(1);
        let curWeekday = date.getDay();
        let curMonth = date.getMonth();
        let curYear = date.getFullYear();

        let table = document.createElement("table");

        // year-month
        let tr = document.createElement("tr");
        let yearMonth = tr.insertCell(-1);
        yearMonth.colSpan = 3;
        yearMonth.innerHTML = curYear + "-" + (curMonth+1);
        let leftArrow = tr.insertCell(0);
        leftArrow.innerHTML = "<";
        leftArrow.onclick = () => {
            let month = this.date.getMonth();
            this.date.setMonth(month-1);
            this.render(this.date);
        };
        leftArrow.className = "date-arrow";
        let rightArrow = tr.insertCell(-1);
        rightArrow.innerHTML = ">";
        rightArrow.onclick = () => {
            let month = this.date.getMonth();
            this.date.setMonth(month+1);
            this.render(this.date);
        };
        rightArrow.className = "date-arrow";
        tr.insertCell(0);
        table.appendChild(tr);

        // table head
        let thead = document.createElement("tr");
        let weekdays = ["Sun", "Mon", "Tus", "Wed", "Thu", "Fri", "Sat"];
        weekdays.forEach(
            (day) => {
                const th = document.createElement("th");
                th.innerHTML = day;
                thead.append(th)
            }
        )
        table.appendChild(thead);

        // table body
        let tbody = document.createElement("tbody");
        let startDate = new Date(date);
        startDate.setDate(-curWeekday+1); // to get the start date of the calendar
        for (let iMonth = startDate.getMonth(); iMonth != (curMonth + 1) % 12; ) {
            let tr = document.createElement("tr");
            for (let i = 0; i < 7; i++) {
                let day = startDate.getDate();
                iMonth = startDate.getMonth();
                let cell = tr.insertCell(-1);
                cell.innerText = day;

                if (iMonth != curMonth) {
                    cell.className = "not-cur-month";
                }

                if (day == selecedtDay && iMonth == curMonth) {
                    cell.id = "selected-day";
                }

                startDate.setDate(day+1);    
            }
            iMonth = startDate.getMonth();

            tbody.appendChild(tr);
        }
        table.appendChild(tbody);

        table.querySelector("tbody").addEventListener('click', function(event) {
            const selectedTd = event.target.closest("td");
            if (!selectedTd) return;

            if (this.lastSelectedTd) {
                this.lastSelectedTd.classList.remove("clicked-td");
            }

            selectedTd.classList.add("clicked-td");
            this.lastSelectedTd = selectedTd;
        })

        document.getElementById(this.elementId).replaceChildren(table);

        this.table = table;
    }

    dayClick() {
        this
    }
};
