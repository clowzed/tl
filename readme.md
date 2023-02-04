
# TL

This libriray provides functions for downloading tables from html 

## [Click here to see demo](https://tl-demo.surge.sh)

## Installation
```html
<script src="https://cdn.jsdelivr.net/gh/clowzed/tl/index.js"></script>
or minified version
<script src="https://cdn.jsdelivr.net/gh/clowzed/tl/index.min.js"></script>

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
    