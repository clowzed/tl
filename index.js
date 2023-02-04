let get_table_data = table => { return [...table.querySelectorAll('tr')].map((row) => [...row.querySelectorAll('td, th')].map((cell) => cell.textContent)); };

let download = (type, filename, data) => {
    let _ = document.createElement('a');
    _.href = `data:attachment/${type},` + encodeURIComponent(data);
    _.target = '_blank';
    _.download = filename;
    _.click();
};

let tl = {
    csv: (table, filename = "export.csv") => download('csv', filename, get_table_data(table).map((row) => row.join(",")).join('\n')),
    xlsx: (table, filename = "export.xlsx") => download('excel', filename, get_table_data(table).map((row) => row.join("\t")).join('\n')),
};