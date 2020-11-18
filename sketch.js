var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10;

function setup() {
  createCanvas(400, 400);
  //create new building
  b1=new Building();
  //set the position of the building
  b1.position=0.2;
  //set the number of floors
  b1.floors=22;
  
  //create new building
  b2=new Building();
  //set the position of the building
  b2.position=1.2;
  //set the number of floors
  b2.floors=15;
  
  //create new building
  b3=new Building();
  //set the position of the building
  b3.position=2.2;
  //set the number of floors
  b3.floors=18;
  
  //create new building
  b4=new Building();
  //set the position of the building
  b4.position=3.3;
  //set the number of floors
  b4.floors=17;
  
  //create new building
  b5=new Building();
  //set the position of the building
  b5.position=4.3;
  //set the number of floors
  b5.floors=18;
  
  //create new building
  b6=new Building();
  //set the position of the building
  b6.position=5.3;
  //set the number of floors
  b6.floors=23;
  
  //create new building  
  b7=new Building();
  //set the position of building
  b7.position=6.3;
  //set the number of floors
  b7.floors=15;
  
  //create new building
  b8=new Building();
  //set the position of building
  b8.position=7.3;
  //set the number of floors
  b8.floors=16;
  
  //create new building
  b9=new Building();
  //set the position of building
  b9.position=8.3;
  //set the number of floors
  b9.floors=19;
  
  //create new building
  b10=new Building();
  //set the position of building
  b10.position=9.2;
  //set the number of floors
  b10.floors=17;
  
  
 
}

function draw() {
  //set background colour to purple
  background("purple");
  //fill colour in the moon
  fill('white');
  //create a moon
  ellipse(70,70,70,70);
  //fill black colour in buildings
  fill("black");
  //display the buildings
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
}