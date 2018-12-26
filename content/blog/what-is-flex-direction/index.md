---
title: What is flex direction?
date: 2018-12-26
published: false
---

When working with Flexbox there are a few defaults that get set. One of those is
flex-direction: row. Today we're going to discover what flex-direction controls,
what it means for Flexbox and how you can use it to change your layouts.

---

The flex-direction property gets set on a flex parent.

By default when you put `display: flex;` on a parent, even if you don't add
anything else, `flex-direction` is implicitly set to `row`.

What does `flex-direction` do? Flex direction decides which axis is the main
axis, and which axis is the cross axis. When flex direction is set to row, the
main axis is set to the horizontal axis, and the cross axis is set to the
vertical axis. 

It also determines which end of the main axis to start from, and which end to
add content onto. When flex-direction is set to row, the first item will be on
the left, and the new content will be added to the right.

To make the first item start on the right, and have the new content be added to
the left, simply set flex-direction to row-reverse.

This is cool, but what about when you want to set the main xis to be vertical?
Set flex-direction to column. Now the content will start at the top of the
parent, and new content will be added to the bottom.

Similar to how you can set flex-direction to row-reverse, you can set
flex-direction to column-reverse. This will make the content start at the bottom
of the paren,t and be added to the top.

`flex-direction` accepts four possible options:
- `row`
- `row-reverse`
- `column`
- `column-reverse`

Setting the main and cross axis might seem arbitrary right now, but it affects
how other properties are interpreted.

`justify-content`, which I touched on in my previous post, will always pertain
to the main axis, while `align-items` will aways pertain to the cross axis. This
means that if you change the flex-direction from row, to column, this will have
an effect on how things are displayed on the screen.

You might think "Why not just always have justify-content be along the
horizontal-axis, and align-items always be along the vertical axis" and to that
I say, I'm not quite sure. It does seem like it would be easier to have some
sort of horizontal-align and vertical-align properties but that's not how they
decided to design the API. 

You will almost never use row-reverse or column-reverse. There are accessability
concerns when using those options. It will always be better to write your HTML
in the order that it will appear on the screen.

That being said, your choice of flex-direction row and column will most likely
be determined by how you want content to flow across the screen.

In modern layouts, you will probably have multiple nested Flex parents to
acheive approximate layouts.
