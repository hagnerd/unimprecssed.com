---
title: What is flex direction?
date: 2018-12-26
published: false
---

When working with Flexbox there are a few defaults that get set. One of those is
`flex-direction: row;`. Today we're going to learn what `flex-direction` controls,
what it means for Flexbox, and how you can use it to change your layouts.

---

> Before Flexbox and CSS Grid, designing layouts was extremely hard and ugly.
>
> In this series of blog posts we're going to explore Flexbox together, and hopefully build a better understanding of how it works, and how to use it effectively.

Take a moment and stroll down memory lane with me. Think back to math class in highschool. No grumbling I promise it won't be that painful.

Remember graphs? And plotting graphs? Flexbox is a lot like plotting graphs, but instead of saying "I want this div at x1,y2 and another div at x2,y2", you say "I want the elements to be spaced evenly across the x axis, and centered on the y axis" and you let Flexbox do its thing.

So how do we determine the spacing of the horizontal (x), and vertical (y) axes with Flexbox? First we have to to learn a little about the internals of the Flexbox API.

It could have been decided that there should just be a `horizontal-align` and a `vertical-align` property, but instead we have `justify-content` and `align-items`.

I wouldn't blame you if you assumed that `justify-content` was equivalent to this fictictious `horizontal-align`, and `align-items` to `vertical-align`. That's not how it works though. I'm not sure why it was designed this way but in Flexbox `justify-content` always controls the main axis, and `align-items` always controls the cross axis.

So what the hell are the main axis and cross axis?

---

This is where `flex-direction` comes in. At the top of this post I said that when you add `display: flex;` to a parent it implicitly sets `flex-direction` to `row;`. This is of course overrideable, but let us discuss what this default behavior means.

What does `flex-direction` do? Flex direction decides which axis is the main
axis, and which axis is the cross axis. When flex direction is set to `row`, the
main axis is set to the horizontal axis, and the cross axis is set to the
vertical axis.

It also determines which end of the main axis to start from, and which end to
add content onto. \* When `flex-direction` is set to row, the first item will be on the left, and the new content will be added to the right.

\* Small caveat, `flex-direction: row;` is language aware. In left to right languages `flex-direction: row;` will start at the left edge of the screen and end at the right edge of the screen. In right to left languages, `flex-direction: row;` will start the content at the right edge of the screen and end at the left edge of the screen.

To make the first item start on the right, and have the new content be added to
the left, simply set `flex-direction` to `row-reverse`.

This is cool, but what about when you want to set the main xis to be vertical?
Set `flex-direction` to `column`. Now the content will start at the top of the
parent, and new content will be added to the bottom.

Similar to how you can set `flex-direction` to `row-reverse`, you can set
`flex-direction` to `column-reverse`. This will make the content start at the bottom
of the parent and be added to the top.

`flex-direction` accepts four possible options:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

---

Setting the main and cross axis might seem arbitrary right now, but it affects
how other properties are interpreted.

You will almost never use row-reverse or column-reverse. There are accessability
concerns when using those options. It will always be better to write your HTML
in the order that it will appear on the screen.

That being said, your choice of flex-direction row and column will most likely
be determined by how you want content to flow across the screen.

In modern layouts, you will probably have multiple nested Flex parents to
acheive approximate layouts.
