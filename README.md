# [atom-template-engine](http://atom.io/packages/atom-template-engine)

Convert to HTML from different templating engines within the editor.

## Usage
1. Open up command pallette (`cmd+shift+p`)
2. Search for Template Convert To:

![Screenshot](https://i.cloudup.com/IQmKARZgAp.png "Screenshot")

## Supported template engines

- [jade](https://github.com/visionmedia/jade) [(website)](http://jade-lang.com/)
- [haml](https://github.com/visionmedia/haml.js) [(website)](http://haml-lang.com/)

## Contribute templating engines

1. Create new `{{templateengine}}.js` file in `template-engines` directory
2. Export two methods, namely
  ````
  {
    toHTML: function (string), // Return string
    fromHTML: function (string) // Return string
  }
  ````
3. Check examples in the `template-engines` folder

## TODO
1. End to End testing
2. Add more templating engines

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)