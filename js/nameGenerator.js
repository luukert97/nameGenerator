var NameGen = function(){

    /**
     * In this function, we get a random name from the array with names and put them into the variables for men and women. After that, we search the DOM element with the fitting attribute to print the text to
     */
    var Name = function(name) {
        
    /**
     * The array with female first names
     */    
        var arrayFemale = ['Demi', 'Anne', 'Iris', 'Sanne', 'Rieke', 'Esther', 'Lieve']; 
    
    /**
     * Random get one of the female first names
     */
        var femaleName = arrayFemale[(Math.random()*arrayFemale.length)|0];  

    /**
     * The array with male first names
     */
        var arrayMale = ['Jan', 'Kees', 'Piet', 'Olaf', 'Ferry', 'Luuk', 'Peter'];  

    /**
     * Random get one of the male first names
     */
        var maleName = arrayMale[(Math.random()*arrayMale.length)|0];
    
    /**
     * The array with last names
     */
        var array2 = ['Janssen', 'Bakker', 'de Winter', 'van Gerwen', 'Molenaar'];    
    
    /**
     * Random get one of the last names for males
     */
        var lastnameMale = array2[(Math.random()*array2.length)|0]; 
    
     /**
     * Random get one of the last names for females
     */
        var lastnameFemale = array2[(Math.random()*array2.length)|0]; 

     /**
     * Get the male first name, last name and put them together
     */
        var fullmaleName = maleName+" "+lastnameMale;
    
    /**
     * Get the female first name, last name and put them together
     */
        var fullfemaleName = femaleName+" "+lastnameFemale;

  
    
        document.querySelector("[fill-with-female-name]").innerHTML = fullfemaleName;   //insert a full female name to DOM elements with the attribute 'fill-with-female-name'
    
        document.querySelector("[fill-with-male-name]").innerHTML = fullmaleName;    //insert a full male name to DOM elements with the attribute 'fill-with-male-name'          
      
        
    };
    /**
     * Let's make our initialize function, to run the Name() function
     */
    var init = function(){
        Name(); 
    };
    
    
    /**
     * Return the only function that has to be accessible from the outside
     */
     return {
        init: init
    };
    
};
