const mongoose = require("mongoose");
const id = mongoose.Types.ObjectId();

// FILL THIS WITH USER ID:
const postid = "fill this with user id from compass";

const mockProducts = [
  //  JANUARY
  {
    title: ".TWEET-KIWI.",
    price: 19873,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1616532157866-dd0c68bf37e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHN0cmVldCUyMGFydHxlbnwwfDB8MHx8&auto=format&fit=crop&w=2000&q=60",
    identity: 0,
    artist: "Milley School",
    location: "Wynnwood",
    view: "landscape",
    stock: 7,
    issue: "january",
  },
  {
    title: ".LIT.",
    price: 9894,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1533157726070-bc55faa2a9cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN0cmVldCUyMGFydHxlbnwwfDF8MHx8&auto=format&fit=crop&w=2000&q=60",
    identity: 1,
    artist: "Milley School",
    location: "Wynnwood",
    view: "portrait",
    stock: 7,
    issue: "january",
  },

  {
    title: ".BANANA.",
    price: 23897,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1615484398670-d04028664303?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHN0cmVldCUyMGFydHxlbnwwfDB8MHx8&auto=format&fit=crop&w=2000&q=60",
    identity: 2,
    artist: "Milley School",
    location: "Wynnwood",
    view: "landscape",
    stock: 3,
    issue: "january",
  },
  {
    title: ".ZOMBIE.",
    price: 9894,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1572886264704-f2d75d989199?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHN0cmVldCUyMGFydHxlbnwwfDF8MHx8&auto=format&fit=crop&w=2000&q=60",
    identity: 4,
    artist: "Milley School",
    location: "Wynnwood",
    view: "portrait",
    stock: 3,
    issue: "january",
  },

  {
    title: ".DIE-A-BETES.",
    price: 23897,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1603792992315-8dee3ea765b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHN0cmVldCUyMGFydHxlbnwwfDB8MHx8&auto=format&fit=crop&w=2000&q=60",
    identity: 5,
    artist: "Milley School",
    location: "Wynnwood",
    view: "landscape",
    stock: 3,
    issue: "january",
  },

  // FEBRUARY
  {
    title: ".FUN-ALLEY.",
    price: 9999,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1542772144-515ddfae17e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHN0cmVldCUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    identity: 0,
    artist: "Milley School",
    location: "Wynnwood",
    view: "portrait",
    stock: 16,
    issue: "february",
  },
  {
    title: ".STAR-WAY.",
    price: 11999,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1592795694700-d3ac8a1e2f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHN0cmVldCUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
    identity: 1,
    artist: "D'Azevedo",
    location: "Wynnwood",
    view: "portrait",
    stock: 4,
    issue: "february",
  },
  {
    title: ".HEROES-MEET.",
    price: 18768,
    description:
      "R.I.P The king. An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1588172322851-f706729f9df6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA2fHxzdHJlZXQlMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    identity: 2,
    artist: "Mil Armstrong",
    location: "Las olas",
    view: "landscape",
    stock: 2,
    issue: "february",
  },
  {
    title: ".LHAMA.",
    price: 14598,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1553685353-8783b52a4750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYzfHxzdHJlZXQlMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    identity: 3,
    artist: "Edd Dutra",
    location: "North Beach",
    view: "portrait",
    stock: 17,
    issue: "february",
  },
  {
    title: ".DAY-FACE.",
    price: 12358,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1522080406259-930a07a15a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUzfHxzdHJlZXQlMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
    identity: 4,
    artist: "Elias Bezerro",
    location: "North Beach",
    view: "landscape",
    stock: 14,
    issue: "february",
  },
  {
    title: ".DEEP-JAM.",
    price: 6722,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1568578728608-3606b14e85fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80",
    identity: 5,
    artist: "Elias Bezerro",
    location: "North Beach",
    view: "portrait",
    stock: 8,
    issue: "february",
  },

  {
    title: ".OHM.",
    price: 12389,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1572280935179-bad2474e2646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxzdHJlZXQlMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    identity: 6,
    artist: "Lindor Fauwn",
    location: "Las olas",
    view: "portrait",
    stock: 9,
    issue: "february",
  },
  {
    title: ".ZÖE.",
    price: 42722,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1580214686817-877a60a021bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    identity: 7,
    artist: "Elias Bezerro",
    location: "North Beach",
    view: "portrait",
    stock: 2,
    issue: "february",
  },
  {
    title: ".ALIVE.",
    price: 22289,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1548457782-67c976e1e7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    identity: 8,
    artist: "Elias Bezerro",
    location: "North Beach",
    view: "landscape",
    stock: 3,
    issue: "february",
  },
  // MARCH
  {
    title: ".ROAM.",
    price: 15183,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1563204800-6434a22e842f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhbGwlMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
    identity: 0,
    artist: "Elias Bezerro",
    location: "North Beach",
    view: "portrait",
    stock: 6,
    issue: "march",
  },
  {
    title: ".MEMORY.",
    price: 4291,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1571596825787-640e72bbb2f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHdhbGwlMjBhcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    identity: 1,
    artist: "Elias Bezerro",
    location: "North Beach",
    view: "landscape",
    stock: 12,
    issue: "march",
  },
  {
    title: ".153.",
    price: 9123,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1585436249848-3a8210d46a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHdhbGwlMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
    identity: 2,
    artist: "Elias Bezerro",
    location: "North Beach",
    view: "portrait",
    stock: 6,
    issue: "march",
  },
  {
    title: ".MUERTO-VIVO.",
    price: 4291,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1573298256586-be921484f4f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fHdhbGwlMjBhcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    identity: 3,
    artist: "Elias Bezerro",
    location: "North Beach",
    view: "landscape",
    stock: 5,
    issue: "march",
  },

  {
    title: ".WONDERLAND.",
    price: 4291,
    description:
      "An intricate and elaborate resolution of impactful concepts. A total abstratiction that makes perfect sense.",
    url: "https://images.unsplash.com/photo-1588534876368-6f3d9362d349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHdhbGwlMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
    identity: 4,
    artist: "Elias Bezerro",
    location: "North Beach",
    view: "portrait",
    stock: 3,
    issue: "march",
  },
];

const mockUsers = [
  {
    _id: id,
    username: "seeduser",
    email: "med@med.com",
    password: "seeduser",
  },
];

module.exports = { mockProducts, mockUsers };
