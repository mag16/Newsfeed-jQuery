/* Using jQuery, select all the article elements */
let articles = $(".article *");


class Article {
  /* The constructor will take an element as it's only argument */
  constructor(element) {
    
 
    /* 
      We need to make sure the element being passed to us is a jQuery element.
      To do so, wrap the element in jQuery syntax. 
    */
    this.element = $(element);
    /* 
      Using our new reference to the element, find the expand button within 
      the element and set a new property on the Article class. 
    */
    this.expandButton = this.element.find(".expandButton");
     
    }
    /* 
      Using our new reference to the expandButton, use jQuery to set the inner
      text on the button. 
      
    */
  this.
  expandButton(event) {
    console.log("button has been clicked!")
  }

    /* 
      Set a click handler on the expand button (or article element), calling 
      the expandArticle method. 
    */
    buttonClick(event){
     console.log("button clicked") 
   } 
  }

  expandArticle() {
    /* Using our reference to the article element, add or remove a class */
  articles.toggleClass("article-open"); 
}


/* 
  Use jQuery's .map function to map over the array of jQuery elements
  Within .map, we create a new instance of Article passing in each article element 
  to the constructor*/
articles = articles.map(function (i, elem) {
  new Article(elem);
  });

articles = articles.map();
