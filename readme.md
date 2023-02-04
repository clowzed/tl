
# TL

This libriray provides functions for downloading tables from html 

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## [Click to see demo](https://tl-demo.surge.sh)

## Installation
```html
<script src="https://cdn.jsdelivr.net/gh/clowzed/tl@1.0.0/index.min.js"></script>
```

## Usage

```html
<button onclick="tl.csv(document.getElementById('some-id');">
    Download as csv
</button>

<button onclick="tl.xlsx(document.getElementById('some-id');">
    Download as xlsx
</button>

<table id="some-id">
    ...
</table>
```
    