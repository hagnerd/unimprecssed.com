---
title: Centering things vertically, and horizontally
date: '2018-12-17'
published: false
---

Centering things with CSS can sometimes be tricky. There are tools like Flexbox
and Grid that make it easier, but when you aren't comfortable with them they
can seem like formidable beasts. 

I lied about the post being about centering things veritcally and horizontally though. It's actually about the Flexbox API. If you want to know how to center things vertically and horizontally... 

## TLDR;

If your goal is to vertically, and horizontally center a single element, whether it's an
image, a paragraph, a div, etc. the easiest way is to make a parent container,
with `display: flex;`, and an explicit `height`. 

Then make the child element and give it `margin: auto;`. This will make the
child element centered within the parent container unless the parent is not
large enough to contain the child element. 

```html

<style>
  .container {
    display: flex;
    height: 100vh;
  }

  img {
    margin: auto;
  }
</style>

<div class="container">
  <img src="somecatimg.com/kittycat"/>
</div>

```

Have a more complex thing to center? Like a card with a blog title, and image?

```html
<style>
  .container {
    display: flex;
    height: 100vh;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 400px;
    width: 400px;
  }

  img {
    margin: 1rem auto;
  }
</style>

<div class="container">
  <div class="content">
    <h2>Centering Things With CSS</h2>
    <img src="someimg.com/img" />
  </div>
</div>

```

Or how about an image carousel:

```html
<div class="container">
  <button>Prev</button>
  <img src="someimg.com/img" />
  <button>Next</button>
</div>
  
```

This may look complex, but if you continue reading I promise that you'll feel
comfortable enough to start writing css like that.

---

## Exploring The Flexbox API

When working with the Flexbox API, there are two types of elements:
1. Parents/containers 
2. Children/content/items

Flex containers only effect direct children. If you have a complex heirarchy
though you can nest flex containers within other flex containers. Neat.

### Parent specific flex properties 

#### Display 

The parent is what receives the `display: flex;` property. This is the bread and
butter of the Flexbox API. All HTML elements default to a specific `display` type. For
example a `div` is `display: block;` by default, which is why when you write:

```html
<div>Thing 1</div>
<div>Thing 2</div>

```

They appear on separate lines, but when you write:
```html
<span>Thing 1</span>
<span>Thing 2</span>
```

They do not appear on separate lines.

When you set an element to `display: flex;` it receives a few flex-specific css
properties by default including: 
* `flex-direction: row;` 
* `flex-wrap: nowrap;`
* `justify-content: flex-start;`
* `align-items: stretch;`
* `align-content: stretch;`

Meaning if you set a parent to `display: flex;`, but don't set any other
flex-specific properties it will create a flex container across the horizontal
axis, that does not allow wrapping, that defaults to its children piling up on
the left (or `flex-start`) of the container, and the children will stretch their
height to fit the container's height unless explicity overriden on the child
elements.


#### Flex Direction

`flex-direction: row;` sets the main axis to the horizontal axis, and means that the children will be flexible across the WIDTH of the container. 

`flex-direction` can take `column`, `row-reverse` and `column-reverse` as values as well. 

Setting `flex-direction` to `column` makes the vertical axis the main
axis, and means the content will be flexible across the HEIGHT of the container.

Reversing simply means that instead of starting at the left, or top of
the container, the items will start at the right, or bottom of the container.

#### Flex Wrap

Default: `flex-wrap: nowrap;`

By default a flex container will not automatically wrap its children to a new
line if they take up more than the allotted width of the container.


#### Justify Content



You might look at the flexbox API and see properties like `justify-content`, and `align-items` and think "What the heck are those?". These are referring to the spacing of the parents children.

#### Align Items

### Child specific flex propertiers
