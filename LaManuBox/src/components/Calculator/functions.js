import boxS from '../../assets/img/box-s.png'
import boxM from '../../assets/img/box-m.png'
import boxL from '../../assets/img/box-l.png'
import boxXL from '../../assets/img/box-xl.png'

const objects = [
    {
        id: 0,
        name: "Chaise",
        cubic: 0.15,
        img: 'https://www.dmax.fr/wp-content/uploads/2020/05/chaise-150x150.webp',
    },
    {
        id: 1,
        name: "Table",
        cubic: 1.5,
        img: 'https://www.dmax.fr/wp-content/uploads/2020/05/table-150x150.webp',
    },
    {
        id: 2,
        name: "Table de nuit",
        cubic: 0.5,
        img: 'https://www.dmax.fr/wp-content/uploads/2020/05/table-de-chevet-150x150.webp'
    },
    {
        id: 3,
        name: "Canapé",
        cubic: 2.5,
        img : 'https://www.dmax.fr/wp-content/uploads/2020/05/canape-3-places-150x150.webp',
    },
    {
        id: 4,
        name: "Fauteuil",
        cubic: 0.4,
        img: 'https://www.dmax.fr/wp-content/uploads/2020/05/fauteuil-150x150.webp',
    },
    {
        id: 5,
        name: "Tableau",
        cubic: 0.1,
        img: 'https://www.dmax.fr/wp-content/uploads/2020/05/tableau-1-150x150.webp',
    },
    {
        id: 6,
        name: "Lit 1 personne",
        cubic: 1.2,
        img: 'https://www.dmax.fr/wp-content/uploads/2020/05/Un-lit-1-personne-150x150.webp',
    },
    {
        id: 7,
        name: "Lit 2 personne",
        cubic: 3.25,
        img: 'https://www.dmax.fr/wp-content/uploads/2020/05/Un-lit-2-personnes-150x150.webp',
    },
    {
        id: 8,
        name: "Commode",
        cubic: 1.5,
        img: 'https://www.dmax.fr/wp-content/uploads/2020/05/commode-150x150.webp',
    },
    {
        id: 9,
        name: "Réfrigirateur",
        cubic: 1.5,
        img: 'https://www.dmax.fr/wp-content/uploads/2020/05/r‚frig‚rateur-haut-150x150.webp'
    },
    {
        id: 10,
        name: "Four",
        cubic: 0.7,
        img: 'https://www.dmax.fr/wp-content/uploads/2020/05/four-150x150.webp',
    },
    {
        id: 11,
        name: "Bibliothèque",
        cubic: 1.4,
        img: 'https://www.dmax.fr/wp-content/uploads/2020/05/petite-bibliotheque-150x150.webp',
    },
    {
        id: 12,
        name: "Placard",
        cubic: 2,
        img: 'https://www.dmax.fr/wp-content/uploads/2020/05/placard-150x150.webp',
    },
    {
        id: 13,
        name: "Machine à laver",
        cubic: 0.5,
        img: 'https://www.dmax.fr/wp-content/uploads/2020/05/lave-linge-150x150.webp',
    },
    {
        id: 14,
        name: "Scooter",
        cubic: 2,
        img: 'https://www.dmax.fr/wp-content/uploads/2020/05/scooter-150x150.webp',
    },
    {
        id: 15,
        name: "Vélo",
        cubic: 0.8,
        img: 'https://www.dmax.fr/wp-content/uploads/2020/05/velo-150x150.webp',
    },
    {
        id: 16,
        name: "Bibelots",
        cubic: 0.1,
        img: 'https://www.dmax.fr/wp-content/uploads/2020/05/bibelots-150x150.webp',
    },
]

const boxs = [
    {
        id: 0,
        name: "S",
        height: 2.5,
        squareMax: 3,
        cubic: 7.5,
        price: 50,
        img: boxS,
    },
    {   
        id: 1,
        name: "M",
        height: 2.5,
        squareMax: 6,
        cubic: 15,
        price: 80,
        img: boxM,
    },
    {   
        id: 2,
        name: "L",
        height: 2.5,
        squareMax: 10,
        cubic: 25,
        price: 140,
        img: boxL,
    },
    {   
        id: 3,
        name: "XL",
        height: 2.5,
        squareMax: 16,
        cubic: 40,
        price: 2,
        img: boxXL,
    },
]


export {objects, boxs}