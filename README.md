# nameGenerator

A simple JavaScript library that generates random male and female names. Handy to use instead of placeholder names.

## Getting Started

First, download the nameGenerator.js file and insert it in your page. Then add the attribute to a DOM element you want to display a name in. Last, initialize a new NameGen in a script tag in your HTML. 

### Insert nameGenerator in your page
```
<script src="js/nameGenerator.js" type="application/javascript"></script>
```

### Create DOM elements in your HTML in which you want your names to show
Add the following as attribute to your DOM element to display a male name:
```
fill-with-male-name
```
And this one for a female name to display in your element:
```
fill-with-female-name
```

### Create a new script tag in your HTML, make a new instance of the NameGen function and initialize it
```
<script>
    var naam = new NameGen();
    naam.init();
</script>
```

### Done!
Random chosen names will appear in your HTML.
