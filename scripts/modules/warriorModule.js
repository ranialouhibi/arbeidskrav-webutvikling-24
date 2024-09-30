const warriorModule =  () => {

  
    //data for alle krigere
    
     const warriors = [
        {
            id: 1,  
            name: "Snake",
            price: 200,
            image: "warrior-1.jpg"
        },
        {
        
            id: 2,  
            title: "Giant",
            price: 500,
            image: "warrior-2.jpg"
        },
        {
            id: 3,  
            title: "Big Axe",
            price: 150,
            image: "warrior-3.jpg"
        },
        {
            id: 4,
            title: "Thief",
            price: 50,
            image: "warrior-4.jpg"
        } ,
         {  
            id: 5,
            title: "Tanks",
            price: 250,
            image: "warrior-5.jpg"
        },    
         {
            id: 6,
            title: "Berseker",
            price: 275,
            image: "warrior6.jpg"
        }


     ];

   
     const getWarriors = () => {
        return structuredClone(warriors);

    } 
    return {
        getWarriors
    }
}

export default warriorModule;
