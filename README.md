# Nasnav interview task

for [live demo](https://mohammed-taysser.github.io/nasnav-task/)

- The only required functionality is **add to cart**.
- Task should be delivered as a github public repository and deployed to github pages.

The task is to implement [this design](https://xd.adobe.com/view/2186e175-b022-45db-a2f4-c9ba6e4bde30-74d5/) in react following these rules:

- [x] File types should be js + jsx + scss.
- [x] Folder structure:
  - [x] public/images for static images.
  - [x] src/images for dynamic images (dummy data images).
  - [x] src/services for api calls (dummy data for the test).
  - [x] src/components for other react components.
  - [x] src/pages for router pages.
- [x] Data should be passed via props or returned by an api.
- [x] Should depend on two colors in css variables ( --primary-color , --secondary-color ).
- [x] Should use lazy loading at least at one component.
- [x] Shouldn't use hooks. **(use only for cart context)**
- [x] Shouldn't use redux.
- [x] add to cart functionality can be divided in 2 cases:
  - [x] Empty cart:
    - [x] Cart icon should have a badge containing 0 when cart is empty
    - [x] Clicking on the top cart icon should show the empty cart dropdown
  - [x] Non empty cart:
    - [x] Cart icon should have a badge containing the number of cart items
    - [x] Clicking on the top cart icon should show cart items dropdown
  - [x] In both cases Pressing the "Add to cart" button should increment the items at cart by quantity.
