# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode

### Links

- Solution URL: [Github](https://github.com/000xzhou/REST-Countries-API)
- Live Site URL: [Page](https://000xzhou.github.io/REST-Countries-API/)

## My process
I routed the page.
Add the components needed.
Set up the API.
Filter out the API for detail page.
Add in light and dark mode.
Make it look like the design.

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learn routing. The following is the routing for this API

```
```js
    <Routes>
      <Route path="/" exact element={<Layout />} >
        <Route index element={<Countires
          countries={countries}
        />} />

        <Route path="country/:id">
          <Route index element={<Country
            countries={countries}
          />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />

      </Route>
    </Routes>
}
```

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

I save to local storage the same way as in javascript. I don't think it's the best way in react. I would learn more about it in the future.
I want to work on my folder structures and my naming sense.
Will future improve my knowledge on when to add a separate file or not.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

## Author

- Website - [Github](https://github.com/000xzhou)
- Frontend Mentor - [@000xzhou](https://www.frontendmentor.io/profile/000xzhou)
- Twitter - [@XiangZh98969146](https://twitter.com/XiangZh98969146)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**
