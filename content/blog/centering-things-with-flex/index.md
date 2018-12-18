---
title: Centering things with flex - v0.2.0
date: '2018-12-18'
published: true
---

Centering things with CSS can be frustrating 😤. It seems like such a simple thing,
and something that _everyone_ should know how to do. So surely, you think to yourself, I
know exactly how to do it. 

I'll just add `margin: auto;`! And you do. And the element you applied
it to is horizontally centered, but not veritcally centered.

__*What in the actual hell?*__

You start adding every centering property you can remember. `float`s, `align-self`s, `text-align`s. Before you know it you've created a frankenstein and nothing
is working the way you wanted it to.

__*What went wrong?*__

The reason `margin: auto;` didn't work is because it wasn't designed that
way for the normal document flow. 

For some strange reason while working on CSS2.1 it was decided that an element with `margin: auto;`, even if placed inside of a container element with explicit height, should be treated as if `margin-top` and `margin-bottom` were set to `0`.

__*How do we fix this then?*__

## Say hi 👋 to Flexbox

Flexbox can be scary if you haven't worked with it very much. There are quite a few flex specific properties. But the good news is, that _most_ use
cases are pretty easy. So easy that the next time you have to align some stuff,
you'll probably reach for it.

### The Basics
When working with flexbox there are two types of elements:
1. Parent
2. Children

A 💪 parent is any element with `display: flex;`.  

A 💪 child is any **direct** child of a flex parent.

The flex children are the elements that get aligned. 

The flex parent provides a safe space for the children to do their thing.

Just like your parents are someone elses children, flex children can be
another elements flex parent. Trippy.

#### Step 1) Don't forget to flex 

First we set up our container with `display: flex;`. I'm using a `div` as the
container, but any HTML element can be used.

```html

<style>
  .container {
    /* not related to flex, just to give an outline */
    border: 1px solid red;

    display: flex;
  }

  .child {
    /* not related to flex, just to give an outline */
    border: 1px solid green;
    height: 100px;
    width: 100px;
  }
</style>

<div class="container">

  <div class="child" />

</div>

```

The default behavior when only `display: flex;` is set, is for the flex children
to flow across the horizontal axis. 

In our case, we are only working with one element, so it isn't a big concern. However, if we added a second child it
would be added to the right of our little green square.

#### Step 2) Slide to the left, slide to the right

Right now or little green square is sitting up against the top left edge of our
big red parent. Let's make it horizontally aligned. Baby steps.

```css
  .container {
    /* ... */
    justify-content: center;
  }

```

We add `justify-content: center;` to the flex parent. The `justify-content`
property is used for setting the alignment of the children across the main axis. 

In flexbox the main axis is the same axis that the content flows across. By
default items are added from left to right across the width, or horizontal axis,
of the screen. 

`justify-content` can take a few other values, but I'll leave those for another
time 😉.

<span style="background-color:#F6CB97;">*NOTE*</span>: Be mindful of `justify-content: center;` potentially squashing the width
of your children. If a child's width is being sqaushed, you probably need to set an
explicit `width` or `padding` on it to prevent them from being
squished.

#### Step 3) "There's so much room for activities" 

![step brothers](https://media.giphy.com/media/yrFrXTTTcHIY0/giphy.gif)

Now onto vertical alignment. 

This is a little trickier with CSS because of
those darn CSS2 decisions regarding `height`, and `margin`. We need to explicitly
set `height` on our parent container. This is what allows us the space to center
our child within.

```css
  .container {
    /* ... */

    height: 500px;
  }

```

Remember that if the container height is 0, or smaller than the height of the children, then you can't vertically align the child.

#### Step 4) Center yourself  

Finally after all that hard work we can vertically align our element. 

```css
  .container {
    /* ... */
    align-items: center;
  }

```

We set the property `align-items` to `center` on our flex parent. `align-items`
is the property that effects how children are aligned across the cross axis. By default
it is the height, or vertical axis, of the screen.

<span style="background-color: #F6CB97;">*NOTE*</span>: When `align-items: center;` is set, you'll want to be mindful about the height
of your children, because sometimes their height will be squashed. If that
happens, add an explicit `height`.

Now the element is both vertically and horizontally centered. 👍

----

There are of course some caveats. This will probably __not__ work the way you want it to if
the parent has more than one direct child. Having all of your elements
bunched together in the direct center of the screen is probably not what you
want. 

This is where you might want to explore some of the other `justify-content`
values, and some neat tricks like `margin`s on flex children.

Speaking of `margin`s on flex children...

You can also acheive a centered element by doing the following:
```css
  .container {
    /* ... */
    display: flex;
    height: 500px;
  }

  .child {
    /* ... */

    margin: auto;
  }

```

Wait!? "Why does adding `margin: auto;` suddenly work when applied to a child of a flex
parent?", you might be asking.

Setting any of the `margin-*` properties to auto on a flex child will push the child element the
furthest it can be from the opposite side. For example, `margin-left: auto;`
would push the child element to the right side of the screen. `margin-top: auto;` would push it to the bottom.

Setting `margin: auto;` sets all of the margin properties to auto, resulting in
a perfectly centered element.

Flexbox is a more modern addition to CSS and was designed with some of the
quirks of past decisions in mind. Flexbox was added to make layouts more
intuitive, and part of that intuitiveness effected `margin`s on flex children.

---

So what did we learn today?

* Flexbox allows you to quickly, and easily center an element, or group of elements
* `margin: auto;` does not work the same way vertically, that it does
horizontally except when it does 
* CSS doesn't have to be scary


