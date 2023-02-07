

//question no-1;-how to compare two JSON have the same proprties without order


let obj1={
    name:"person",
    age:30
}

let obj2={
    age:30,
    name:"person"
}

var ans=true;
if(Object.keys(obj1).length===Object.keys(obj2).length){
    for(key in obj1){
        if(obj1[key]==obj2[key]){
            continue;
        }else{
            ans=false;
            break;
        }
    }

}else{
    ans=false;
}
console.log(ans);

 //output: true
       

// question no-2;-use the rest countries API URL- and display all countries flags in the console. 

var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all/");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response); 
    for(let i=0;i<result.length;i++){
    var res=result[i].flags.alt;
    console.log(res);
   }
  }
//output:
//The flag of Turkey has a red field bearing a large fly-side facing white crescent and a smaller five-pointed white star placed just outside the crescent opening. The white crescent and star are offset slightly towards the hoist side of center.


// question no-3;- print all countries names,regions,subregions and population.

var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all/");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
     for(let i=0;i<result.length;i++){
    
    console.log(`name-${result[i].name.common},population-${result[i].population},region-${result[i].region},subregion-${result[i].subregion}`);
    
   }
}

//output- 
          //name-Turkey,population-84339067,region-Asia,subregion-Western Asia
