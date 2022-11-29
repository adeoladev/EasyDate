# EasyDate

EasyDate is a library that can generate an accurate date format from a simple sentence.

## Installation

**JavaScript**
```HTML
<script src='path/to/easydate.js'></script>
```
**PHP** 
```PHP
composer require adeoladev/easydate
```

## Usage

**JavaScript**
```Javascript
EDate('10 days ago').format('dmy');
```
**PHP**
```PHP
EDate('10 days ago','dmy');
```

Supported sentences include any amount of days, weeks or months in the future and the past. Such as ``3 weeks ago`` or ``10 days from now``. Anything extra will result in an error string.

Supported formats include any combination of date/month/year such as ``dmy`` or ``mdy``. It also supports ``seconds`` and ``unix``. You can only use seconds for future dates.

## License
MIT. Copyright (c) 2021 Adeola Boye.
