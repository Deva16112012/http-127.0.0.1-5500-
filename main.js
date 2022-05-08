var updatedImage=["Family_Book.jpg","Father.jpg","Mother.jpg","Child.jpg"];
var updatedName=["Family Book","Manoj B","Anjana AK","M Deva Nanda"];
var i = 0;
function update(){
    i++;
    var numbers_of_family_member_in_array=4;
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      } 
    //Debug the code to store list of images in updatedImage. Use images[i]
    //Debug the code to store list of names in updatedName. Use names[i]
     document.getElementById("family_member_image").src=updatedImage[i];
    document.getElementById("family_member_name").innerHTML=updatedName[i];
}