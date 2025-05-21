---
layout: start.njk
title: Brutalism
description: "Discover the Beauty of Brutalism: Embrace a Bold New Way of Seeing!"
section1:
  title: "What is Brutalism"
  image: "https://images.unsplash.com/photo-1495584816685-4bdbf1b5057e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D"
  article: "Brutalism is an architectural style that emerged in the 1950s and flourished in the 1960s and 1970s. It is characterized by the use of exposed raw concrete and steel, angular forms and geometric shapes, and a focus on functionality rather than aesthetics. The term “Brutalism” is derived from the French phrase “béton brut”, which means “raw concrete”."
section2:
  title: "Origins"
  image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D"
  article: "Brutalism is a style of architecture that first emerged in the mid-twentieth century as a reaction against the sleek modernism of the International Style. It was initially associated with the works of Le Corbusier, who was one of the pioneers of the style. However, the term “Brutalism” was actually coined by British architects Alison and Peter Smithson in 1953."
pagination:
  data: collections.posts
  size: 3
  reverse: true
testdata:
  - item1
  - item2
  - item3
  - item4
permalink: "/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
show_popular_post: true
---
