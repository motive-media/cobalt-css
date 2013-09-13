# Install via Bower

    bower install cobalt-less

# Include in your project
Locate the vendor folder ```cobalt-less``` where ever you set your bower path to.

Inside your projects less file ```@import``` the ```cobalt.less``` file and that is it.

### Example
```css
@import "../vendor/cobalt-less/cobalt.less";

/* start your less here */
```

# Documentation

## Animate.less

### Transition
```css
.transition(@transition);
```
Adds all known browser prefixes to transition property.

For multiple transition definitions use ```.transition(~'transition1, transition2');```

## Border_Radius.less

### Border Radius
```css
.border-radius(@radius);
```

### Background Clip
```css
.clip-radius();
```

## Gradient.less

### Gradient
```css
.gradient(@bg: #efefef, @start: #ffffff, @stop: #eeeeee);
```

### Linear Gradient
```css
.linear-gradient(@start: #fff, @stop: #eee);
```
Creates a vertical linear gradient from @start (top) to @stop (bottom). [Supports transparency]

### Transparent Background Color
```css
.transparent-background-color(@color);
```
Sets the background to a color with an alpha channel. This mixin does not support the use of a simultaneous background-image in IE.