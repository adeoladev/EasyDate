# EasyDate

EasyDate is a library that can generate an accurate date format from a simple sentence.

## Installation

**JavaScript**
```sh
npm i @adeoladev/easydate
```
**PHP** 
```sh
composer require adeoladev/easydate
```

## Usage

```Javascript
EDate('10 days ago','dmy','short');
```

Supported sentences include any amount of days, weeks or months in the future and the past. Such as ``3 weeks ago`` or ``10 days from now``. You can also use ``today`` to get the current date.

Supported formats include any combination of day/month/year such as ``dmy`` or ``mdy``. And you can display it in either ``short`` or ``long`` form.

## License
MIT. Copyright (c) 2021 Adeola Boye.
