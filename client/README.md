  <!--  -->

- GLITCH MOBILE LOGIN FORM
- GLITCH MOBILE CHECKOUT FORM
- IF A USER KEEPS ITEMS IN CART WITHOUT CHECKING OUT, ITEM CAN BE OUT OF STOCK. FIX BY CLEARING CART AT SOME POINT
- MARQUEE

- User logs in, adds item, cart timer starts.

Case 1: Timer expires, user still on page:

- API Call to clear cart and restock

Case 2: Timer expires but user left the page before it happened, therefore timer no longer active

- At login/ or Cookie validation, SERVER checks cart and clears the expired, before granting access to user
