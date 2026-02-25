let boy_names = ["Jacob", "Oxie", "Michael", "Joshua", "Quantavious", "Matthew", "Daniel", "Christopher", "Andrew", "Ethan", "Joseph", "William", "Anthony", "David", "Alexander", "Nicholas", "Ryan", "Tyler", "James", "John", "Jonathan", "Noah", "Brandon", "Christian", "Dylan", "Samuel", "Benjamin", "Zachary", "Nathan", "Logan", "Justin", "Gabriel", "Jose", "Austin", "Kevin", "Elijah", "Caleb", "Robert", "Thomas", "Jordan", "Cameron", "Jack", "Hunter", "Jackson", "Angel", "Isaiah", "Evan", "Isaac", "Mason", "Luke", "Jason", "Gavin", "Jayden", "Aaron", "Connor", "Aiden", "Aidan", "Kyle", "Juan", "Charles", "Luis", "Adam", "Lucas", "Brian", "Eric", "Adrian", "Nathaniel", "Sean", "Alex", "Carlos", "Bryan", "Ian", "Owen", "Jesus", "Landon", "Julian", "Chase", "Cole", "Diego", "Jeremiah", "Steven", "Sebastian", "Xavier", "Timothy", "Carter", "Wyatt", "Brayden", "Blake", "Hayden", "Devin", "Cody", "Richard", "Seth", "Dominic", "Jaden", "Antonio", "Miguel", "Liam", "Patrick", "Carson", "Jesse", "Tristan", "Alejandro", "Henry", "Victor", "Trevor", "Bryce", "Jake", "Riley", "Colin", "Jared", "Jeremy", "Mark", "Caden", "Garrett", "Parker", "Marcus", "Vincent", "Kaleb", "Kaden", "Brady", "Colton", "Kenneth", "Joel", "Oscar", "Josiah", "Jorge", "Cooper", "Ashton", "Tanner", "Eduardo", "Paul", "Edward", "Ivan", "Preston", "Maxwell", "Alan", "Levi", "Stephen", "Grant", "Nicolas", "Omar", "Dakota", "Alexis", "George", "Collin", "Eli", "Spencer", "Gage", "Max", "Cristian", "Ricardo", "Derek", "Micah", "Brody", "Francisco", "Nolan", "Ayden", "Dalton", "Shane", "Peter", "Damian", "Jeffrey", "Brendan", "Travis", "Fernando", "Peyton", "Conner", "Andres", "Javier", "Giovanni", "Shawn", "Braden", "Jonah", "Cesar", "Bradley", "Emmanuel", "Manuel", "Edgar", "Erik", "Mario", "Edwin", "Johnathan", "Devon", "Erick", "Wesley", "Oliver", "Trenton", "Hector", "Malachi", "Jalen", "Raymond", "Gregory", "Abraham", "Elias", "Leonardo", "Sergio", "Donovan", "Colby", "Marco", "Bryson", "Martin"];
let girl_names = ["Emily", "Aside", "Madison", "Emma", "Megatron", "Olivia", "Hannah", "Abigail", "Isabella", "Samantha", "Elizabeth", "Ashley", "Alexis", "Sarah", "Sophia", "Alyssa", "Grace", "Ava", "Taylor", "Brianna", "Lauren", "Chloe", "Natalie", "Kayla", "Jessica", "Anna", "Victoria", "Mia", "Hailey", "Sydney", "Jasmine", "Julia", "Morgan", "Destiny", "Rachel", "Ella", "Kaitlyn", "Megan", "Katherine", "Savannah", "Jennifer", "Alexandra", "Allison", "Haley", "Maria", "Kaylee", "Lily", "Makayla", "Brooke", "Mackenzie", "Nicole", "Addison", "Stephanie", "Lillian", "Andrea", "Zoe", "Faith", "Kimberly", "Madeline", "Alexa", "Katelyn", "Gabriella", "Gabrielle", "Trinity", "Amanda", "Kylie", "Mary", "Paige", "Riley", "Jenna", "Leah", "Sara", "Rebecca", "Michelle", "Sofia", "Vanessa", "Jordan", "Angelina", "Caroline", "Avery", "Audrey", "Evelyn", "Maya", "Claire", "Autumn", "Jocelyn", "Ariana", "Nevaeh", "Arianna", "Jada", "Bailey", "Brooklyn", "Aaliyah", "Amber", "Isabel", "Danielle", "Mariah", "Melanie", "Sierra", "Erin", "Molly", "Amelia", "Isabelle", "Madelyn", "Melissa", "Jacqueline", "Marissa", "Shelby", "Angela", "Leslie", "Katie", "Jade", "Catherine", "Diana", "Aubrey", "Mya", "Amy", "Briana", "Sophie", "Gabriela", "Breanna", "Gianna", "Kennedy", "Gracie", "Peyton", "Adriana", "Christina", "Courtney", "Daniela", "Kathryn", "Lydia", "Valeria", "Layla", "Alexandria", "Natalia", "Angel", "Laura", "Charlotte", "Margaret", "Cheyenne", "Mikayla", "Miranda", "Naomi", "Kelsey", "Payton", "Ana", "Alicia", "Jillian", "Daisy", "Mckenzie", "Ashlyn", "Caitlin", "Sabrina", "Summer", "Ruby", "Rylee", "Valerie", "Skylar", "Lindsey", "Kelly", "Genesis", "Zoey", "Eva", "Sadie", "Alexia", "Cassidy", "Kylee", "Kendall", "Jordyn", "Kate", "Jayla", "Karen", "Tiffany", "Cassandra", "Juliana", "Reagan", "Caitlyn", "Giselle", "Serenity", "Alondra", "Lucy", "Kiara", "Bianca", "Crystal", "Erica", "Angelica", "Hope", "Chelsea", "Alana", "Liliana", "Brittany", "Camila", "Makenzie", "Veronica", "Lilly", "Abby", "Jazmin", "Adrianna", "Karina", "Delaney", "Ellie", "Jasmin"];
let surnames = ["Smith", "Johnson", "Bocse", "Codon", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson", "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes", "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez", "Powell", "Jenkins", "Perry", "Russell", "Sullivan", "Bell", "Coleman", "Butler", "Henderson", "Barnes", "Gonzales", "Fisher", "Vasquez", "Simmons", "Romero", "Jordan", "Patterson", "Alexander", "Hamilton", "Graham", "Reynolds", "Griffin", "Wallace", "Moreno", "West", "Cole", "Hayes", "Bryant", "Herrera", "Gibson", "Ellis", "Tran", "Medina", "Aguilar", "Stevens", "Murray", "Ford", "Castro", "Marshall", "Owens", "Harrison", "Fernandez", "Mcdonald", "Woods", "Washington", "Kennedy", "Wells", "Vargas", "Henry", "Chen", "Freeman", "Webb", "Tucker", "Guzman", "Burns", "Crawford", "Olson", "Simpson", "Porter", "Hunter", "Gordon", "Mendez", "Silva", "Shaw", "Snyder", "Mason", "Dixon", "Munoz", "Hunt", "Hicks", "Holmes", "Palmer", "Wagner", "Black", "Robertson", "Boyd", "Rose", "Stone", "Salazar", "Fox", "Warren", "Mills", "Meyer", "Rice", "Schmidt", "Garza", "Daniels", "Ferguson", "Nichols", "Stephens", "Soto", "Weaver", "Ryan", "Gardner", "Payne", "Grant", "Dunn", "Kelley", "Spencer", "Hawkins", "Arnold", "Pierce", "Vazquez", "Hansen", "Peters", "Santos", "Hart", "Bradley", "Knight", "Elliott", "Cunningham", "Duncan", "Armstrong", "Hudson", "Carroll", "Lane", "Riley", "Andrews", "Alvarado", "Ray", "Delgado", "Berry", "Perkins", "Hoffman", "Johnston", "Matthews", "Pena", "Richards", "Contreras", "Willis", "Carpenter", "Lawrence", "Sandoval", "Guerrero", "George", "Chapman", "Rios", "Estrada", "Ortega", "Watkins", "Greene", "Nunez", "Wheeler", "Valdez", "Harper", "Burke", "Larson", "Santiago", "Maldonado", "Morrison", "Franklin", "Carlson", "Austin", "Dominguez", "Carr", "Lawson", "Jacobs", "Obrien", "Lynch", "Singh", "Vega", "Bishop", "Montgomery", "Hines", "Mullins", "Castaneda", "Malone", "Cannon", "Tate", "Mack", "Sherman", "Hubbard", "Hodges", "Zhang", "Guerra", "Wolf", "Valencia", "Franco", "Saunders", "Rowe", "Gallagher", "Farmer", "Hammond", "Hampton", "Townsend", "Ingram", "Wise", "Gallegos", "Clarke", "Barton", "Schroeder", "Maxwell", "Waters", "Logan", "Camacho", "Strickland", "Norman", "Person", "Colon", "Parsons", "Frank", "Harrington", "Glover", "Osborne", "Buchanan", "Casey", "Floyd", "Patton", "Ibarra", "Ball", "Tyler", "Suarez", "Bowers", "Orozco", "Salas", "Cobb", "Gibbs", "Andrade", "Bauer", "Conner", "Moody", "Escobar", "Mcguire", "Lloyd", "Mueller", "Hartman", "French", "Kramer", "Mcbride", "Pope", "Lindsey", "Velazquez", "Norton", "Mccormick", "Sparks", "Flynn", "Yates", "Hogan", "Marsh", "Macias", "Villanueva", "Zamora", "Pratt", "Stokes", "Owen", "Ballard", "Lang", "Brock", "Villarreal", "Charles", "Drake", "Barrera", "Cain", "Patrick", "Pineda", "Burnett", "Mercado", "Santana", "Shepherd", "Bautista", "Ali", "Shaffer", "Lamb", "Trevino", "Mckenzie", "Hess", "Beil", "Olsen", "Cochran", "Morton", "Nash", "Wilkins", "Petersen", "Briggs", "Shah", "Roth", "Nicholson", "Holloway", "Lozano", "Flowers", "Rangel", "Hoover", "Arias", "Short", "Mora", "Valenzuela", "Bryan", "Meyers", "Weiss", "Underwood", "Bass", "Greer", "Summers", "Houston", "Carson", "Morrow", "Clayton", "Whitaker", "Decker", "Yoder", "Collier", "Zuniga", "Carey", "Wilcox", "Melendez", "Poole", "Roberson", "Larsen", "Conley", "Davenport", "Copeland", "Massey", "Lam", "Huff", "Rocha", "Cameron", "Jefferson", "Hood", "Monroe", "Anthony", "Pittman", "Huynh", "Randall", "Singleton", "Kirk", "Combs", "Mathis", "Christian", "Skinner", "Bradford", "Richard", "Galvan", "Wall", "Boone", "Kirby", "Wilkinson", "Bridges", "Bruce", "Atkinson", "Velez", "Meza", "Roy", "Vincent", "York", "Hodge", "Villa", "Abbott", "Allison", "Tapia", "Gates", "Chase", "Sosa", "Sweeney", "Farrell", "Wyatt", "Dalton", "Horn", "Barron", "Phelps", "Yu", "Dickerson", "Heath", "Foley", "Atkins", "Mathews", "Bonilla", "Acevedo", "Benitez", "Zavala", "Hensley", "Glenn", "Cisneros", "Harrell", "Shields", "Rubio", "Choi", "Huffman", "Boyer", "Garrison", "Arroyo", "Bond", "Kane", "Hancock", "Callahan", "Dillon", "Cline", "Wiggins", "Grimes", "Arellano", "Melton", "Oneill", "Savage", "Ho", "Beltran", "Pitts", "Parrish", "Ponce", "Rich", "Booth", "Koch", "Golden", "Ware", "Brennan", "Mcdowell", "Marks", "Cantu", "Humphrey", "Baxter", "Sawyer", "Clay", "Tanner", "Hutchinson", "Kaur", "Berg", "Wiley", "Gilmore", "Russo", "Villegas", "Hobbs", "Keith", "Wilkerson", "Ahmed", "Beard", "Mcclain", "Montes", "Mata", "Rosario", "Vang", "Walter", "Henson", "Oneal", "Mosley", "Mcclure", "Beasley", "Stephenson", "Snow", "Huerta", "Preston", "Vance", "Barry", "Johns", "Eaton", "Blackwell", "Dyer", "Prince", "Macdonald", "Solomon", "Guevara", "Stafford", "English", "Hurst", "Woodard", "Cortes", "Shannon", "Kemp", "Nolan", "Mccullough", "Merritt", "Murillo", "Moon", "Salgado", "Strong", "Kline", "Cordova", "Barajas", "Roach", "Rosas", "Winters", "Jacobson", "Lester", "Knox", "Bullock", "Kerr", "Leach", "Meadows", "Davila", "Orr", "Whitehead", "Pruitt", "Kent", "Conway", "Mckee", "Barr", "David", "Dejesus", "Marin", "Berger", "Mcintyre", "Blankenship", "Gaines", "Palacios", "Cuevas", "Bartlett", "Durham", "Dorsey", "Mccall", "Odonnell", "Stein", "Browning", "Stout", "Lowery", "Sloan", "Mclean", "Hendricks", "Calhoun", "Sexton", "Chung", "Gentry", "Hull", "Duarte", "Ellison", "Nielsen", "Gillespie", "Buck", "Middleton", "Sellers", "Leblanc", "Esparza", "Hardin", "Bradshaw", "Mcintosh", "Howe", "Livingston", "Frost", "Glass", "Morse", "Knapp", "Herman", "Stark", "Bravo", "Noble", "Spears", "Weeks", "Corona", "Frederick", "Buckley", "Mcfarland", "Hebert", "Enriquez", "Hickman", "Quintero", "Randolph", "Schaefer", "Walls", "Trejo", "House", "Reilly", "Pennington", "Michael", "Conrad", "Giles", "Benjamin", "Crosby", "Fitzpatrick", "Donovan", "Mays", "Mahoney", "Valentine", "Raymond", "Medrano", "Hahn", "Mcmillan", "Small", "Bentley", "Felix", "Peck", "Lucero", "Boyle", "Hanna", "Pace", "Rush", "Hurley", "Harding", "Mcconnell", "Bernal", "Nava", "Ayers", "Everett", "Ventura", "Avery", "Pugh", "Mayer", "Bender", "Shepard", "Mcmahon", "Landry", "Case", "Sampson", "Moses", "Magana", "Blackburn", "Dunlap", "Gould", "Duffy", "Vaughan", "Herring", "Mckay", "Espinosa", "Rivers", "Farley", "Bernard", "Ashley", "Friedman", "Potts", "Truong", "Costa", "Correa", "Blevins", "Nixon", "Clements", "Fry", "Delarosa", "Best", "Benton", "Lugo", "Portillo", "Dougherty", "Crane", "Haley", "Phan", "Villalobos", "Blanchard", "Horne", "Finley", "Quintana", "Lynn", "Esquivel", "Bean", "Dodson", "Mullen", "Xiong", "Hayden", "Cano", "Levy", "Huber", "Richmond", "Moyer", "Lim", "Frye", "Sheppard", "Mccarty", "Avalos", "Booker", "Waller", "Parra", "Krueger", "Brandt", "Peralta", "Donaldson", "Stuart", "Faulkner", "Maynard", "Galindo", "Coffey", "Estes", "Sanford", "Burch", "Maddox", "Oconnell", "Andersen", "Spence", "Church", "Schmitt", "Stanton", "Leal", "Cherry", "Compton", "Dudley", "Sierra", "Pollard", "Alfaro", "Hester", "Proctor", "Hinton", "Novak", "Good", "Madden", "Terrell", "Jarvis", "Rollins", "Whitney", "Duke", "Travis", "Tang"]
let birth_reasons = ["i was born in a normal, healthy way.","i was born after my father's condom broke","i was summoned at a cult ritual","i was born in a normal way, however my mother died to due maternal death","i was an inhome birth"]
let eventPool = [
    new LifeEvent({
        title: "Plis No BroColly.",
        description: () => 0 == rand_int(2) 
            ? "Your father is forcing you to eat your greens." 
            : "Your mother is forcing you to eat your greens.",
        chance: 0.25,
        minAge: 2,
        maxAge: 6,
        effect: (p) => {
            presentChoice("Will you make it easy?", [
                {
                    text: "Accept regardless of taste.",
                    callback: () => {
                        p.intelligence += 5;
                        p.happiness -= 5;
                        p.health += 5;
                        print("Never again.");
                    }
                },
                {
                    text: "Throw your plate at them.",
                    callback: () => {
                        p.health += 5;
                        print("You were forced to eat it anyways.");
                    }
                }
            ]);
        }
    }),
    new LifeEvent({
        title: "I feel like shit!",
        description: "You caught a common cold.",
        chance: 0.05,
        minAge: 5,
        maxAge: 999,
        effect: (p) => {
            p.effects.push(sickness["cold"])
            noticeSFX.play();
            print("You spent a week in bed shivering.");
        }
    }),
    new LifeEvent({
        title: "Bully",
        description: () => "Someone named " + boy_names[rand_int(boy_names.length)] + " wants your lunch money.",
        chance: () => 1 - ((your.looks + your.strength) / 2)/100,
        minAge: 6,
        maxAge: 14,
        criteria: (p) => (p.looks + p.strength)/2 < 75,
        effect: (p) => {
            p.happiness -= 5;
            presentChoice("Will you let this slide?", [
                {
                    text: "Fight them.",
                    callback: () => {
                        if (p.strength > rand_int(50) + 40) {
                            p.happiness += 15;
                            p.money += rand_int(20) + 5;
                            p.strength += 5;
                            print("You won and got theirs instead.");
                        } else {
                            p.money = 0;
                            p.strength += 5; //this is Sline 67 hahahahaha
                            print("You lost the battle (and all your money too).");
                        }
                    }
                },
                {
                    text: "Give it up.",
                    callback: () => {
                        if (p.money <= 0) {
                            print("You had nothing to give.");
                        } else {
                            p.money /= 2;
                        }
                    }
                }
            ]);
        }
    }),
    new LifeEvent({
        title: "Tweaker Alert!!!",
        description: "A tweaker on the street assaulted you.",
        chance: 0.05,
        minAge: 15,
        maxAge: 50,
        effect: (p) => {
            p.happiness -= 30;
            p.health -= 30;
            print("Your entire body hurts.");
        }
    }),
    new LifeEvent({
        title: "Fresh meat",
        description: "You're starting school.",
        chance: 1,
        minAge: 6,
        maxAge: 6,
        effect: (p) => {
            if (p.intelligence > 50) {
                print("You're hyped.");
                p.happiness += 10;
            } else {
                print("You're anxious.");
                p.happiness -= 10;
            }
        }
    }),
    new LifeEvent({
        title: "Found a Wallet",
        description: "You found a wallet on the floor with $50 inside.",
        chance: 0.08,
        minAge: 10,
        maxAge: 70, // cant bend over after that age
        effect: (p) => {
            presentChoice("What do you do with the cash?", [
                {
                    text: "Keep it",
                    callback: () => {
                        p.money += 50;
                        p.happiness += 5;
                        print("You're $50 richer. No regrets.");
                    }
                },
                {
                    text: "Return it",
                    callback: () => {
                        p.happiness += 20;
                        p.intelligence += 2;
                        print("The owner was so grateful! You feel like a saint.");
                    }
                }
            ]);
        }
    }),
    new LifeEvent({
        title: "Good morning.",
        description: "You're done with school.",
        chance: 1.,
        minAge: 18,
        maxAge: 18,
    }),
    new LifeEvent({
        title: "I'm interested...",
        description: "There's an old person in an alleyway promising you happiness",
        chance: 0.1,
        minAge: 14,
        maxAge: 40,
        effect: (p) => {
            presentChoice("What do you do?", [
                {
                    text: "Accept the deal.",
                    callback: () => { 
                        if (rand_int(2)) {
                            p.happiness += 15;
                            p.health += 15;
                            print("He gave you a smoothie and a cookie."); 
                         } else {
                             p.effects.push(addictions["nicotine"])
                             update_meters();
                             noticeSFX.play();
                             print("He gave a cigarette and now you're addicted."); 

                    }
                }},
                {
                    text: "Leave.",
                    callback: () => {
                        print("You left safely.");
                    }
                }
            ]);
        }
    }),
    new LifeEvent({
        title: "Hop on Space Shooters",
        description: "You've been having the urge to go to the nearby arcade",
        chance: 0.1,
        minAge: 7,
        maxAge: 15,
        effect: (p) => {
            presentChoice("Do you go?", [
                {
                    text: "Yes. (-20 dollars, +30 happiness).",
                    callback: () => { 
                        if (p.money >= 20) {
                            p.happiness += 30;
                            p.money -= 20;
                            print("You played some damn good games.");
                        } else {
                            p.happiness -= 30;
                            print("You didn't have enough money")
                    }
                }},
                {
                    text: "No. (-30 happiness, +15 intelligence).",
                    callback: () => {
                        p.happiness -= 30;
                        p.intelligence += 15;
                        print("You stayed at home.");
                    }
                }
            ]);
        }
    }),
    new LifeEvent({
        title: "The vast internet.",
        description: "You just got a phone. You've now unlocked features related to the internet. (normally yeah you would unlock stuff but we havent made that yet so TODO)",
        chance: 1.,
        minAge: 12,
        maxAge: 12,
    }),
    new LifeEvent({
        title: "Growing up.",
        description: "You're now a teenager. You've now unlocked features related to being a teenager. (normally yeah you would unlock stuff but we havent made that yet so TODO)",
        chance: 1.,
        minAge: 13,
        maxAge: 13,
    }),
    new LifeEvent({
        title: "Growing up... again.",
        description: "You're now an adult. You've now unlocked features related to being an adult. (normally yeah you would unlock stuff but we havent made that yet so TODO)",
        chance: 1.,
        minAge: 18,
        maxAge: 18,
    }),
    new LifeEvent({
        title: "Lucky.",
        description: "You found a dollar while walking down the street.",
        chance: 0.2,
        minAge: 4,
        effect: (p) => {
            p.money += 1;
            p.happiness += 5;
            print("You're one dollar richer.");
        }
    }),
    new LifeEvent({
        title: "Depression.",
        description: "You have depression.",
        chance: 0.05,
        minAge: 19,
        maxAge: 60,
        effect: (p) => {
            p.effects.push(sickness["depression"])
            noticeSFX.play();
        }
    }),
    new LifeEvent({
        title: "I feel like shit!",
        description: "You caught a fever.",
        chance: 0.05,
        minAge: 5,
        maxAge: 999,
        effect: (p) => {
            p.effects.push(sickness["fever"])
            noticeSFX.play();
            print("You spent a week in bed sweating.");
        }
    }),
    new LifeEvent({
        title: "Thief!",
        description: "While walking down the street, a man pickpocketed you and stole 10 dollars!.",
        chance: 0.1,
        minAge: 4,
        effect: (p) => {
            p.money -= 10;
            p.happiness -= 5;
            print("Nobody saw him.");
        }
    }),
];
 
let addictions = {
    nicotine: new Effect({
        health: -5,
        happiness: -5,
        monetary: -10,
        icon: "🚬",
        name: "Tobacco",
        description: "It's poison for you."
    }),
    alcoholism: new Effect({
        health: -1,
        happiness: -5,
        intelligence: -5,
        monetary: -40,
        icon: "🍺",
        name: "Alcohol",
        description: "Numbs the mind."
    }),
}

let sickness = {
    depression: new Effect({
        health: -5,
        happiness: -50,
        monetary: -10,
        icon: "💧",
        name: "Depression",
        description: "Makes everything worse."
    }),
    fever: new Effect({
        health: -15,
        happiness: -5,
        monetary: 0,
        icon: "🔥",
        name: "Fever",
        description: "On fire."
    }),
    cold: new Effect({
        health: -15,
        happiness: -5,
        monetary: 0,
        icon: "❄",
        name: "Common cold",
        description: "You miss the time you could breathe through your nose."
    }),
}

let consumables = {
    alfajor: new Consumable({
        name: "Alfajor",
        softness: 0.8,
        sweetness: 0.6,
        spicyness: 0.0,
        bitterness: 0.0,
        crunchyness: 0.3,
        price: 2
    }),
    potato_chips: new Consumable({
        name: "Potato Chips",
        softness: 0.1,
        sweetness: 0.0,
        spicyness: 0.2,
        bitterness: 0.0,
        crunchyness: 0.6,
        price: 2
    }),
    cigarettes: new Consumable({
        name: "Cigarettes",
        softness: 0.8,
        sweetness: 0.0,
        spicyness: 0.0,
        bitterness: 0.75,
        crunchyness: 0.1,
        widthdrawal: addictions["nicotine"],
        price: 5
    }),
    beer: new Consumable({
        name: "Beer",
        softness: 1.0,
        sweetness: 0.0,
        spicyness: 0.0,
        bitterness: 0.8,
        crunchyness: 0.1,
        widthdrawal: addictions["alcoholism"],
        price: 5
    }),
};

let shopItems = [consumables["potato_chips"], consumables["alfajor"], consumables["cigarettes"], consumables["beer"]];

let infoBoxPanels = {
    family: () => {
        let mainTreeDiv = document.createElement("div");
        mainTreeDiv.classList.add("tree");
        const finalOutput = `<ul>${createTreeHTML(your)}</ul>`;
        mainTreeDiv.innerHTML = finalOutput;
        infoBox.append(mainTreeDiv);
    },
    shop: () => {
        for (let i in shopItems) {
            let item = shopItems[i];
            let name = item["name"];
            let price = item["price"];
            let consumableDiv = document.createElement("div");
            let new_entry = document.createElement("span");
            new_entry.classList.add("button");
            new_entry.style.marginRight = "4px";
            consumableDiv.style.marginBottom = "4px";
            new_entry.textContent = name;
            new_entry.onclick = () => {
                if (your.money >= price) {
                    your.money -= price;

                    let softness_match = item.softness * your.softness;
                    let sweetness_match = item.sweetness * your.sweetness;
                    let spicyness_match = item.spicyness * your.spicyness;
                    let bitterness_match = item.bitterness * your.bitterness;
                    let crunchyness_match = item.crunchyness * your.crunchyness;

                    let total_enjoyment = softness_match + sweetness_match + spicyness_match + bitterness_match + crunchyness_match;

                    total_enjoyment *= 20;
                    total_enjoyment = Math.floor(total_enjoyment);

                    your.happiness += total_enjoyment;

                    print(`You bought and consumed ${name}, it made you ${total_enjoyment}% happier`)
                    if (item.widthdrawal) {
                        if (rand_int(2) == 0) {
                            your.effects.push(item.widthdrawal);
                            noticeSFX.play();
                            print(`You now have a ${item.widthdrawal.name} addiction.`);
                        }
                    }
                    canInteract = true;
                } else {
                    print(`You don't have enough money for ${name}, you need $${price-your.money} more`);
                }
                update_meters();
            };
            
            let priceElement = document.createElement("span");
            priceElement.textContent = `$${price}`;
            consumableDiv.append(new_entry)
            consumableDiv.append(priceElement)
            infoBox.append(consumableDiv);
        }
    },
}