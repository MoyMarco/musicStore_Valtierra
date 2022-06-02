const products = [
    { 
        id: 1, 
        title:'Dance Fever', 
        artist: 'Florence + the Machine', 
        description:'Dance Fever es el quinto álbum de estudio del grupo británico, Florence and the Machine, lanzado mundialmente el 13 de mayo de 2022 por el sello discográfico Polydor. El álbum, fue precedido por tres sencillos: «King», «Heaven is Here» y «My Love».', 
        price:'120.00', 
        pictureUrl:'dance_fever.jpg', 
        pictureArtistUrl:'florence-the-machine.jpg', 
        stock:10  
    },
    { 
        id: 2, 
        title:'Harrys House', 
        artist: 'Harry Styles',
        description:'El tercer álbum de estudio del cantautor británico Harry Styles lanzado el 20 de mayo de 2022 a través de las discográficas Columbia y Erskine Records. Principalmente, presenta géneros como pop-funk, pop rock, synth-pop y R&B. Fue apoyado por los sencillos "As It Was" y "Late Night Talking".', 
        price:'120.00', 
        pictureUrl:'harrys_house.jpg', 
        pictureArtistUrl:'harry-styles.jpg',
        stock:10 
    },
    { 
        id: 3, 
        title:'Will Of The People', 
        artist: 'Muse',
        description:'Will of the People es el próximo noveno álbum de estudio de la banda de rock británica Muse, cuyo lanzamiento está previsto para el 26 de agosto de 2022 por Warner Records y Helium 3.', 
        price:'120', 
        pictureUrl:'will_of_the_people.jpg',
        pictureArtistUrl: 'muse.jpg',
        stock:10 
    },
    { 
        id: 4, 
        title:'So Far So Good', 
        artist: 'The Chainsmokers',
        description:'Con un total de 13 canciones, el nuevo disco de The Chainsmokers, se escribió en Hawái, Joshua Tree (California), la ciudad de Nueva York y Los Ángeles entre 2020 a 2021.', 
        price:'120', 
        pictureUrl:'so_far_so_good.jpg', 
        pictureArtistUrl: 'chain-smokers',
        stock:10 
    },
    { 
        id: 5, 
        title:'Mercury', 
        artist: 'Imagine Dragons',
        description:'sexto álbum de estudio de la banda estadounidense de pop rock Imagine Dragons. Se lanzará el 1 de julio de 2022 a través de KIDinaKORNER e Interscope Records. Se trata de una secuela del álbum Mercury Act 1 de 2021 de la banda; se lanzará como parte de un álbum doble que contiene ambos discos. Al igual que con su predecesor, el álbum fue producido por Rick Rubin.', 
        price:'120', 
        pictureUrl:'mercury.jpg', 
        pictureArtistUrl: 'imagine-dragons.jpg',
        stock:10 
    },
    { 
        id: 6, 
        title:'Evolve', 
        artist: 'Imagine Dragons',
        description:'El tercer álbum de estudio de la banda estadounidense de rock, Imagine Dragons, fue lanzado el 23 de junio de 2017 a través de KIDinaKORNER y la discográfica Interscope Records. El álbum es el sucesor de su segundo álbum de estudio, Smoke + Mirrors (2015).', 
        price:'120', 
        pictureUrl:'evolve.jpg', 
        pictureArtistUrl: 'imagine-dragons.jpg',
        stock:10 
    },
    { 
        id: 7, 
        title:'Origins', 
        artist: 'Imagine Dragons',
        description:'Origins ha recibido críticas generalmente mixtas de los críticos, pero muchos afirman que el álbum es una mejora de su trabajo anterior, Evolve. El álbum fue precedido por cuatro singles: "Natural", "Zero", "Machine" y "Bad Liar".', 
        price:'120', 
        pictureUrl:'origins.jpg', 
        pictureArtistUrl: 'imagine-dragons.jpg',
        stock:10 
    },
    

    { 
        id: 8, 
        title:'Scorcha', 
        artist: 'Sean Paul',
        description:'Scorcha es el octavo álbum de estudio del cantante jamaiquino de reggae y dancehall Sean Paul, que se lanzará a través del sello Island Records.', 
        price:'120', 
        pictureUrl:'scorcha.jpg', 
        pictureArtistUrl: 'sean-paul.jpg',
        stock:10 
    }
];


const categories = [ 'Florence + the Machine', 'Harry Styles', 'Muse', 'The Chainsmokers','Imagine Dragons', 'Sean Paul' ];

export default products;
export { categories }