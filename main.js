var images = ["Family_Book.jpg","Father.jpg","Mother.jpg","Child.jpg"];
var names = ["Fmaily Book","Manoj B","Anjana AK","M Deva Nanda"];
var i = 0;
function update(){
    i++;
    var numbers_of_family_member_in_array=4;
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      } 
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage=["Father.jpg","Mother.jpg","Child.jpg"];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName=["Manoj B","Anjana AK","M Deva Nanda"];
     document.getElementById("family_member_image").src=updatedImage;
    document.getElementById("family_member_name").innerHTML=updatedName;
}