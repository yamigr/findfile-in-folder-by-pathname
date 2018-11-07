# findfile-in-folder-by-pathname

> Find a file in a folder by the pathname.

<a name="installing"></a>
## Installing

```sh
npm install findfile-in-folder-by-pathname --save
```

## Use

```js
var findfile = require('findfile-in-folder-by-pathname')

findfile.byPathname(__dirname, '/some/path/to/mfile', { normalize : true } function(data){
    if(data){
        //handle the data
    }
})

```
<a name="authors"></a>

## Authors

* **Yannick Grund** - [yamigr](https://github.com/yamigr)

<a name="license"></a>

## License

This project is licensed under the MIT License

