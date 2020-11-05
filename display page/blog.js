export default class Blog {
    constructor( title, body, likes) {
      this.title = title;
      this.body = body;
      this.el=null;
      this.likes =likes;
      
    }
    getelement(){
        var temp= this.gettemplate(this.title,this.body,this.likes);
        var temp_div= document.createElement('div');
        temp_div.innerHTML =temp;
        this.el=temp_div.children[0];
        
        return this.el;
    }
    gettemplate(title,body,likes){

     return `
                <div class="my_blog">

                    <div class="blog-title"> ${title}</div>

                    <div class="blog-titlebar">Posted on : lol</div>

                    <div class="blog-img"><img src="fort_collins_winter.jpg"></div>

                    <div class="blog-body"> ${body}
                    </div>

                    <div class="blog-likes">
                        <button class="like-button"><img src="images.png"></button>
                        ${likes}</div>
                    
                    <div class="blog-comments">
                        <h5>Comments</h5>
                        ye kya bavasir bana diye ho
                        <input type="text"> 
                        <button>Post</button> 
                    </div>
                </div>
      `;
     }
     eventlisteners(){
        const likebtn = this.el.querySelector(".blog-likes");
        
        likebtn.onclick = () => {
          console.log("lol");
        };
     }
}
   