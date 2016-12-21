# Mixgen

**Mixgen** is a library that will help you to simplify your css.

The idea of this library is to generate classes that will be directly used in your HTML, you will not have to create weird class name because you need to add a specific css property.

### Current Version 1.2.1

# Getting stated
Optionally: to install with bower, use:

```
bower install mixgen --save
npm install mixgen --save
```

# Add Mixin Styles

Add the sass module you need, and call the mixin to generate your classes.

Ex: If you want to generate generic padding classes you will add the padding.scss file and call the mixin like that:

```sass
@include generate-paddings();
```

By default some mixin are using default values located in the variables.scss

# Generic Mixin Class Generator

All mixin used to generate your css classes are using the generic mixin called css-generator, this mixin allows you to generate any css class you need.

## How it's work

### Mixin definition :
```sass
@mixin css-generator($className, $cssProperty, $values, $breakpoints);
```

| Arguments    | Type                   | Description                                                                                      |
|--------------|------------------------|--------------------------------------------------------------------------------------------------|
| $className   | String                 | The name of your generated class name                                                            |
| $cssProperty | Css property           | The css property to use (Ex: padding, background-color, ...)                                     |
| $values      | (List of map) or (map) | The generated values for the css property and optionally class name concatenated with $className |
| $breakpoints | Map                    | The breakpoints values (Ex: ('xs': 0, 'sm': 544px, 'md': 768px, 'lg': 992px, 'xl': 1200px))      |

### Example 1

```sass
@include css-generator($className: 'color', $cssProperty: color, $values: ('red': #ff0000), $breakpoints: (xs: 0, sm: 544px));
```

will generate

```css
.color-red-xs {
  color: #ff0000 !important; }

@media (min-width: 544px) {
  .color-red-sm {
    color: #ff0000 !important; } }
```

### Example 2

```sass
@include css-generator($className: 'border-top', $cssProperty: border-top, $values: (('xs': 1px), solid, ('red': #ff0000)), $breakpoints: null);
```

will generate

```css
.border-top-xs-red {
  border-top: 1px solid #ff0000 !important; }
```

### Advanced example :

```sass
css-generator('box-shadow', box-shadow, (('h10': 10px), ('v10': 10px), ('s5': 5px), ('red': red)), null);
```

will generate

```css
.box-shadow-h10-v10-s5-red {
  box-shadow: 10px 10px 5px red !important; }
```

# Included mixin

All mixin using the breakpoints to disable it you have to set the $breakpoints value to null

## Borders

| Arguments    | Type         | Required                                           | Description                                                                                 |
|--------------|--------------|----------------------------------------------------|---------------------------------------------------------------------------------------------|
| $colors      | Map          | true                                               | The color you want to apply to the border (Ex: ('red': #ffffff, 'blue': #ffffff))           |
| $values      | Map          | optional (default values used from variables.scss) | The differents values to apply to this border (Ex: ('xs': 1px, 'sm': 2px))                  |
| $type        | Css property | optional (default value is solid)                  | The type of the border (Ex: solid, dotted ...)                                              |
| $breakpoints | Map          | optional (default values used from variables.scss) | The breakpoints values (Ex: ('xs': 0, 'sm': 544px, 'md': 768px, 'lg': 992px, 'xl': 1200px)) |

## Colors (will generate the background-color and text-color class)

| Arguments    | Type        | Required                                           | Description                                                                                 |
|--------------|-------------|----------------------------------------------------|---------------------------------------------------------------------------------------------|
| $colors      | List or Map | true                                               | The color you want to apply to the border (Ex: ('red': red, 'white': white))                |
| $breakpoints | Map         | optional (default values used from varaibles.scss) | The breakpoints values (Ex: ('xs': 0, 'sm': 544px, 'md': 768px, 'lg': 992px, 'xl': 1200px)) |

## Float (will generate the pull-left and pull-right)

| Arguments    | Type | Required                                           | Description                                                                                 |
|--------------|------|----------------------------------------------------|---------------------------------------------------------------------------------------------|
| $breakpoints | Map  | optional (default values used from varaibles.scss) | The breakpoints values (Ex: ('xs': 0, 'sm': 544px, 'md': 768px, 'lg': 992px, 'xl': 1200px)) |

## Line Height

| Arguments    | Type | Required                                           | Description                                                                                 |
|--------------|------|----------------------------------------------------|---------------------------------------------------------------------------------------------|
| $values      | Map  | optional (default values used from variables.scss) | The differents values to apply to this border (Ex: ('xs': 1, 'sm': 2))                      |
| $breakpoints | Map  | optional (default values used from varaibles.scss) | The breakpoints values (Ex: ('xs': 0, 'sm': 544px, 'md': 768px, 'lg': 992px, 'xl': 1200px)) |

## Margins and Paddings

| Arguments    | Type                 | Required                                           | Description                                                                                 |
|--------------|----------------------|----------------------------------------------------|---------------------------------------------------------------------------------------------|
| $sizes       | Map                  | optional (default values used from variables.scss) | The differents values to apply to this border (Ex: ('xs': 1px, 'sm': 2px))                  |
| $sides       | List of css property | optional (default value used from variables.scss)  | The type of the border (Ex: left, right, bottom)                                            |
| $breakpoints | Map                  | optional (default values used from varaibles.scss) | The breakpoints values (Ex: ('xs': 0, 'sm': 544px, 'md': 768px, 'lg': 992px, 'xl': 1200px)) |

## Text align

| Arguments    | Type                 | Required                                           | Description                                                                                 |
|--------------|----------------------|----------------------------------------------------|---------------------------------------------------------------------------------------------|
| $sides       | List of css property | optional (default value used from variables.scss)  | The type of the border (Ex: left, center, right)                                            |
| $breakpoints | Map                  | optional (default values used from varaibles.scss) | The breakpoints values (Ex: ('xs': 0, 'sm': 544px, 'md': 768px, 'lg': 992px, 'xl': 1200px)) |

## Texts

| Arguments    | Type | Required                                           | Description                                                                                 |
|--------------|------|----------------------------------------------------|---------------------------------------------------------------------------------------------|
| $sizes       | Map  | optional (default values used from variables.scss) | The differents values to apply to this border (Ex: ('xs': 10px, 'sm': 15px))                |
| $breakpoints | Map  | optional (default values used from varaibles.scss) | The breakpoints values (Ex: ('xs': 0, 'sm': 544px, 'md': 768px, 'lg': 992px, 'xl': 1200px)) |



