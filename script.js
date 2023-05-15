// resetTheGame() resets the following arrays to their starting values. 
// !!! This function is very long right now because of urls pointing to images on google photos. You need to scroll like 2/3 of the way to get past it.
let allCharacters = [];
let allRooms = [];
let itemDeck = [];
let kluddeDeck = [];
let damage = [];
function resetTheGame(){
  // allCharacters is an array of objects where each object is a playable character. Selected characters get moved into a seperate array called katundianCrew.
  //'role' is used when the game needs to refer to a specific character in text. (maybe change 'role' to 'name'?)
  //'description' tells the user about the the character.
  //'charAction' is a special action which only that character can do.
  //'room' is the character's location on the ship. 
  //'items' array gets fill with objects from 'itemDeck'.
  //'actions' array gets filled with possible actions during turn.
  //'selected' is whether the user selects the character in the start selection screen.
  //'stagger' can cause the character to lose a turn. 
  //'infections' array gets filled with objects from 'kluddeDeck'.
  //'picture' points to an image, a colored circle with character portrait inside.
  allCharacters = [
    {role: 'android', description: "Android: Kit 10 \n Special action, Computer: Activate 1 undamaged ship system in any room.", charAction:{label: 'Computer'}, room: 0, items: [], actions:[], selected: false, stagger: 0, infections:[], picture:'Android.png'},
    {role: 'captain', room: 0, items: [], description: "Captain: Purrseus Starpouncer \n Special action, Captain's Orders: Choose another character. That character takes 1 action.", charAction:{label: "Captain's Orders"}, actions:[], selected: false, stagger: 0, infections:[], picture:'Captain.png'},
    {role: 'cook', room: 0, items: [], description: "Cook: Purrina Wan Cannoli \n Special action, Chow Time: Remove all stagger from any number of characters in your room.", charAction:{label: 'Chow Time'}, actions:[], selected: false, stagger: 0, infections:[], picture:'Cook.png'},
    {role: 'mechanic', room: 0, items: [], description: "Mechanic: Diesel T Wrench \n Special Action, Quick Fix: Repair up to 2 damage tokens in your room.", charAction:{label: 'Quick Fix'}, actions:[], selected: false, stagger: 0, infections:[], picture:'Mechanic.png'},
    {role: 'medic', room: 0, items: [], description: "Medic: Dr Keratin Claw \n Special action, Treat: Remove all infections from all characters in your room.", charAction:{label: 'Treat'}, actions:[], selected: false, stagger: 0, infections:[], picture:'Medic.png'},
    {role: 'scout', room: 0, items: [], description: "Scout: Cudds Lee Munchkin \n Special action, Spot: Reveal 1 Kludde that is attacking any room of the ship.", charAction:{label: 'Spot'}, actions:[], selected: false, stagger: 0, infections:[], picture:'Scout.png'},
    {role: 'teleporter', room: 0, items: [], description: "Teleporter: Emmitt Tor \n Special action, Blip: Move to any room.", charAction:{label: 'Blip'}, actions:[], selected: false, stagger: 0, infections:[], picture:'Teleporter.png'}
  ]

  // allRooms is an array of objects, where each object represents a room of the ship. 
  // 'room' is used to refer to the room in text. (maybe change 'room' to 'name'?)
  // 'description' tells the user about the special action they can take inside the room.
  // 'action' gives a label to the 'actionSelector', during the possibleActions() function.
  // 'kludde' is an array of objects that come from kluddeDeck. 
  allRooms = [
    {room: 'Bridge', description: "Bridge \n System action, Grabby Paws: Spend 1 ship energy to defeat 1 kludde that is attacking any room of the ship.", action:{label: 'Grabby Paws'}, kludde: []},
    {room: 'Infirmary', description: "Infirmary \n System action, Wellness Enforcer: Spend 1 ship energy to remove all infections from all characters.", action:{label: 'Wellness Enforcer'}, kludde: []},
    {room: 'Loading bay', description: "Loading Bay, \n System action, Quantifoam Tank: Spend 1 ship energy to refresh all quantifoam items for all characters.", action:{label: 'Quantifoam Tank'}, kludde: []},
    {room: 'Engine Room', description: "Engine Room, \n System action, Dank Fusion Reactor: Spend 1 ship energy to refresh all dank matter items for all characters.", action:{label: 'Dank Fusion Reactor'}, kludde: []},
    {room: 'Hold', description: "Hold, \n System action, Nanite Nest: Spend 1 ship energy to refresh all nanite items for all characters.", action:{label: 'Nanite Nest'}, kludde: []},
    {room: 'Galley', description: "Galley, \n System action, Sustinance Replicator: Spend 1 ship energy to remove all stagger from all characters.", action:{label: 'Sustinance Replicator'}, kludde: []},
    {room: 'Hub', description: "Hub \n System action, Power Core: Spend 1 ship energy to repair all damaged ship systems.", action:{label: 'Power Core'}, kludde: []}  
]

// itemDeck is an array of objects, where each object represents an item your characters can pick up and use.
// 'name' is used to refer to the item in text.
// 'description' tells the player what the item can do.
// 'picture' points to an image of the item card.
// 'actions' gives 1 or 2 labels to the actionSelector.
// 'selected' keeps track of whether the item is chosen on start selection screen.
// 'refreshed' keeps track of whether the item is ready to use. (false=cannot use item)
// 'charge' is a number which tells how to refresh the item. 
// | 1 = nanites | 2 = dank matter | 3 = quantifoam. | 0 = consumable, cannot be refreshed. |
  itemDeck = [
    {name: 'Alkashitzer', description: "Alkashitzer [consumable] ...You know what it's for. \n Action: Remove all infection and stagger from all players in your room.", picture:'Alkashitzer.png', icon:'Alkashitzer Icon.png', grayIcon:'Alkashitzer GrayIcon.png', actions:[{label: 'Alkashitzer'}], selected: false, refreshed: true, charge:0},
    {name: 'Atomic Deconstructor', description: "Atomic Deconstructor [nanites] Point at your problems and click! The nanites make them dissapear. \n Action 1: Defeat 1 revealed 'snake vine' that is attacking yoru room. \n Action 2: defeat 1 revealed 'green matter blob that is attacking your room.", picture:'Atomic Deconstructor.png', icon:'Atomic Deconstructor Icon.png', grayIcon:'Atomic Deconstructor GrayIcon.png', actions:[{label: 'Atomic Deconstructor 1'}, {label: 'Atomic Deconstructor 2'}], selected: false, refreshed: true, charge:1},
    {name: 'Atomic Reconstructor', description: "Atomic Reconstructor [nanites] Point at your problems and click! The nanites fix them for you. \n Action 1: Defeat 1 kaboom pod that is attacking your room. \n Action 2: Repair all damage tokens in your room.", picture:'Atomic Reconstructor.png', icon:'Atomic Reconstructor Icon.png', grayIcon:'Atomic Reconstructor GrayIcon.png', actions:[{label: 'Atomic Reconstructor 1'}, {label: 'Atomic Reconstructor 2'}], selected: false, refreshed: true, charge:1},
    {name: 'BFGG', description: "BFGG [dank matter] Baryonic Fusion Grenade Gun. \n Action 1: Defeat 1 revealed 'lashing root' that is attacking your room. \n Action 2: defeat 1 revealed 'shadow seeder' that is attacking your room.", picture:'BFGG.png', icon:'BFGG Icon.png', grayIcon:'BFGG GrayIcon.png', actions:[{label: 'BFGG 1'}, {label: 'BFGG 2'}], selected: false, refreshed: true, charge:2},
    {name: 'Battle Biscuits', description: "Battle Biscuits [consumable] Katundian Interstellar Battle Biscuits, Large Edition. \n Action 1: Remove all stagger from any number of characters in your room.", picture:'Battle Biscuits.png', icon:'Battle Biscuits Icon.png', grayIcon:'Battle Biscuits GrayIcon.png', actions:[{label: 'Battle Biscuits'}], selected: false, refreshed: true, charge:0},
    {name: 'Dank Nugget', description: "Dank Nugget [consumable] Next generation energy. \n Action 1: All players refresh all dank matter items. \n Action 2: The ship gains 3 energy", picture:'Dank Nugget.png', icon:'Dank Nugget Icon.png', grayIcon:'Dank Nugget GrayIcon.png', actions:[{label: 'Dank Nugget 1'}, {label: 'Dank Nugget 2'}], selected: false, refreshed: true, charge:0},
    {name: 'Dimensional Scanner', description: "Dimensional Scanner [nanites] Scans in all dimensions. \n Action 1: Defeat 1 'shadow seeder' that is attacking your room. \n Action 2: Reveal all Kludde that are attacking your room.", picture:'Dimensional Scanner.png', icon:'Dimensional Scanner Icon.png', grayIcon:'Dimensional Scanner GrayIcon.png', actions:[{label: 'Dimensional Scanner 1'}, {label: 'Dimensional Scanner 2'}], selected: false, refreshed: true, charge:1},
    {name: 'Eye Drone', description: "Eye Drone [quantifoam] Eyes that appear wherever you need them. \n Action 1: Defeat 1 'shadow seeder' that is attacking your room. \n Action 2: Choose a space zone. Reveal up to 2 kludde in that space zone.", picture:'Eye Drones.png', icon:'Eye Drones Icon.png', grayIcon:'Eye Drones GrayIcon.png', actions:[{label: 'Eye Drone 1'}, {label: 'Eye Drone 2'}], selected: false, refreshed: true, charge:3},
    {name: 'Fixit Grenade', description: "Fixit Grendae [consumable] State of the art incendiary reconstruction technology. \n Action: Repair all damage tokens on any 1 room of the ship.", picture:'Fix It Grenade.png', icon:'Fix It Grenade Icon.png', grayIcon:'Fix It Grenade GrayIcon.png', actions:[{label: 'Fixit Grenade'}], selected: false, refreshed: true, charge:0},
    {name: 'Handi Boots', description: "Handi Boots [quantifoam]: The quantifoam creates tools as you walk. \n Action 1: Defeat 1 'kaboom pod' that is attacking your room. \n Action 2: repair all damaged doorways in your room, then you may move through 1 doorway.", picture:'Handi boots.png', icon:'Handi Boots Icon.png', grayIcon:'Handi Boots GrayIcon.png', actions:[{label: 'Handi Boots 1'}, {label: 'Handi Boots 2'}], selected: false, refreshed: true, charge:3},
    {name: 'Hypersonic Wrench', description: "Hypersonic Wrench [dank matter]: When you need it fixed in a hurry. \n Action 1: Defeat 1 'kaboom pod' that is attacking your room. \n Action 2: Repair up to 4 damage tokens anywhere on the ship.", picture:'Hypersonic Wrench.png', icon:'Hypersonic Wrench Icon.png', grayIcon:'Hypersonic Wrench GrayIcon.png', actions:[{label: 'Hypersonic Wrench 1'}, {label: 'Hypersonic Wrench 2'}], selected: false, refreshed: true, charge:2},
    {name: 'Implosion Launcher', description: "Implosion Launcher [nanites]: Point and click and the nanites condense into an implosion. \n Action 1: Defeat 1 'lashing root' that is attacking your room. \n Action 2: Divert the kludde's attention towards a specific room.", picture:'Implosion Launcher.png', icon:'Implosion Launcher Icon.png', grayIcon:'Implosion Launcher GrayIcon.png', actions:[{label: 'Implosion Launcher 1'}, {label: 'Implosion Launcher 2'}], selected: false, refreshed: true, charge:1},
    {name: 'Inferno Blaster', description: "Inferno Blaster [quantifoam]: Squeeze your paw to spray a torrent of flame. \n Action 1: Defeat 1 'big bamboo' that is attacking your room. \n Action 2: Defeat 1 'green matter blob' that is attacking your room.", picture:'Inferno Blaster.png', icon:'Inferno Blaster Icon.png', grayIcon:'Inferno Blaster GrayIcon.png', actions:[{label: 'Inferno Blaster 1'}, {label: 'Inferno Blaster 2'}], selected: false, refreshed: true, charge:3},
    {name: 'KEM Spray', description: "KEM Spray [quantifoam]: Katundian Electrostabilizing Milk. \n Action 1: Defeat 1 'green matter blob' that is attacking your room. \n Action 2: Remove 1 infection and all stagger from 1 player in your room.", picture:'KEM Spray.png', icon:'KEM Spray Icon.png', grayIcon:'KEM Spray GrayIcon.png', actions:[{label: 'KEM Spray 1'}, {label: 'KEM Spray 2'}], selected: false, refreshed: true, charge:3},
    {name: 'Lumination Stick', description: "Lumination Stick [consumable]: Crack it, throw it, close your eyes. \n Action: Reveal all kludde that are attacking any 1 room of the ship.", picture:'Lumination Stick.png', icon:'Lumination Stick Icon.png', grayIcon:'Lumination Stick GrayIcon.png', actions:[{label: 'Lumination Stick'}], selected: false, refreshed: true, charge:0},
    {name: 'Nanite Cluster', description: "Nanite Cluster [consumable]: Send in the nanites! \n Action 1: All players refresh all nanite cards. \n Action 2: The ship gains 3 energy.", picture:'Nanite Cluster.png', icon:'Nanite Cluster Icon.png', grayIcon:'Nanite Cluster GrayIcon.png', actions:[{label: 'Nanite Cluster 1'}, {label: 'Nanite Cluster 2'}], selected: false, refreshed: true, charge:0},
    {name: 'NIP', description: "NIP. [consumable]: Nerve Ignition Powder! \n Action: Take 3 extra actions this turn.", picture:'NIP.png', icon:'NIP Icon.png', grayIcon:'NIP GrayIcon.png', actions:[{label: 'NIP'}], selected: false, refreshed: true, charge:0},
    {name: 'Photon Emitter', description: "Photon Emitter [dank matter]: It has 3 settings 'make visible', 'ultra violent', and 'red dot.' \n Action 1: Defeat 1 'shadow seeder' that is attacking your room. \n Action 2: Reveal up to 2 Kludde cards that are attacking your room. Remove any infections revealed this way.", picture:'Photon Emitter.png', icon:'Photon Emitter Icon.png', grayIcon:'Photon Emitter GrayIcon.png', actions:[{label: 'Photon Emitter 1'}, {label: 'Photon Emitter 2'}], selected: false, refreshed: true, charge:2},
    {name: 'Pounce Suit', description: "Pounce Suit [quantifoam] Blip through the quantifoam field, wheeeeeee. \n Action 1: Defeat 1 'green matter blob' that is attacking your room. \n Action 2: move to any room of the ship.", picture:'Pounce Suit.png', icon:'Pounce Suit Icon.png', grayIcon:'Pounce Suit GrayIcon.png', actions:[{label: 'Pounce Suit 1'}, {label: 'Pounce Suit 2'}], selected: false, refreshed: true, charge:3},
    {name: 'Power Suit', description: "Power Suit [dank matter] Heavily armed. \n Action 1: Defeat 1 'big bamboo' that is attacking your room. \n Action 2: take 2 additional actions this turn.", picture:'Power Suit.png', icon:'Power Suit Icon.png', grayIcon:'Power Suit GrayIcon.png', actions:[{label: 'Power Suit 1'}, {label: 'Power Suit 2'}], selected: false, refreshed: true, charge:2},
    {name: 'Quantifoam Canister', description: "Quantifoam Canister [consumable] Be careful, it gets everywhere. \n Action 1: All players refresh all quantifoam cards. \n Action 2: the ship gains 3 energy.", picture:'Quantifoam Canister.png', icon:'Quantifoam Canister Icon.png', grayIcon:'Quantifoam Canister GrayIcon.png', actions:[{label: 'Quantifoam Canister 1'}, {label: 'Quantifoam Canister 2'}], selected: false, refreshed: true, charge:0},
    {name: 'Reboot Gloves', description: "Reboot Gloves [dank matter] Wiggle your fingers to create floating hands. \n Action 1: Defeat 1 'kaboom pod' that is attacking your room. \n Action 2: Activate any ship system. Repair that system first if it is damaged.", picture:'Reboot Gloves.png', icon:'Reboot Gloves Icon.png', grayIcon:'Reboot Gloves GrayIcon.png', actions:[{label: 'Reboot Gloves 1'}, {label: 'Reboot Gloves 2'}], selected: false, refreshed: true, charge:2},
    {name: 'Temporal Loop', description: "Temporal Loop [consumable] This again?! \n Action: Defeat 1 kludde that is attacking any room of the ship.", picture:'Temporal Loop.png', icon:'Temporal Loop Icon.png', grayIcon:'Temporal Loop GrayIcon.png', actions:[{label: 'Temporal Loop'}], selected: false, refreshed: true, charge:0},
    {name: 'Viral Erasure Tool', description: "Viral Erasure Tool [nanites] Click the box open and let the nanites fix things. \n Action 1: Defeat 1 'green matter blob' that is attacking your room. \n Action 2: Remove all infections from all players in your room.", picture:'Viral Erasure Tool.png', icon:'Viral Erasure Tool Icon.png', grayIcon:'Viral Erasure Tool GrayIcon.png', actions:[{label: 'Viral Erasure Tool 1'}, {label: 'Viral Erasure Tool 2'}], selected: false, refreshed: true, charge:1},
  ]

// kluddeDeck is an array of objects with 60 Kludde. Each kludde represents a threat to the katundian ship.
// 'name' is used to refer to the kludde in text. 
// 'fleet' is the value of the kludde when it is defeated. Think victory points. The player(s) wins the game when they defeat a total fleet count equal to the difficulty set at the beginning.
// 'clockwise' is used to determine where the kludde will attack next. The attacks move clockwise around the ship by an amount of rooms equal to the clockwise value.
// there are 3 'types': 'defeatable' kludde remain in the space zone when they are revealed, and can be defeated using the appropriate item. 'event' means that something happens when the kludde is revealed, and then the event is gone. 'infection' cards infect the active character when they are revealed (ex: If it's the captain's turn, the captain gets infected.)
// 'icon' points to a small image that appears in a space zone.
// 'picture' points to a card image which appears when the icon is clicked.
// 'revealed' is a boolean value of whether or not the player knows what the kludde is.
  kluddeDeck = [
    {name: 'Big Bamboo', fleet: 3, clockwise: 1, type: 'defeatable', picture: bigBambooPicture, icon: bigBambooIcon, revealed: false},
    {name: 'Big Bamboo', fleet: 3, clockwise: 2, type: 'defeatable', picture: bigBambooPicture, icon: bigBambooIcon, revealed: false},
    {name: 'Big Bamboo', fleet: 3, clockwise: 3, type: 'defeatable', picture: bigBambooPicture, icon: bigBambooIcon, revealed: false},
    {name: 'Big Bamboo', fleet: 3, clockwise: 4, type: 'defeatable', picture: bigBambooPicture, icon: bigBambooIcon, revealed: false},
    {name: 'Big Bamboo', fleet: 3, clockwise: 5, type: 'defeatable', picture: bigBambooPicture, icon: bigBambooIcon, revealed: false},
    {name: 'Electrostatic Shock', fleet: 0, clockwise: 1, type: 'event', picture: electrostaticShockPicture, revealed: false},
    {name: 'Electrostatic Shock', fleet: 0, clockwise: 2, type: 'event', picture: electrostaticShockPicture, revealed: false},
    {name: 'Electrostatic Shock', fleet: 0, clockwise: 3, type: 'event', picture: electrostaticShockPicture, revealed: false},
    {name: 'Electrostatic Shock', fleet: 0, clockwise: 4, type: 'event', picture: electrostaticShockPicture, revealed: false},
    {name: 'Electrostatic Shock', fleet: 0, clockwise: 5, type: 'event', picture: electrostaticShockPicture, revealed: false},
    {name: 'Glare', fleet: 0, clockwise: 1, type: 'event', picture: glarePicture, revealed: false},
    {name: 'Glare', fleet: 0, clockwise: 2, type: 'event', picture: glarePicture, revealed: false},
    {name: 'Glare', fleet: 0, clockwise: 3, type: 'event', picture: glarePicture, revealed: false},
    {name: 'Glare', fleet: 0, clockwise: 4, type: 'event', picture: glarePicture, revealed: false},
    {name: 'Glare', fleet: 0, clockwise: 5, type: 'event', picture: glarePicture, revealed: false},
    {name: 'Green Matter Blob', fleet: 2, clockwise: 1, type: 'defeatable', picture: greenMatterBlobPicture, icon: greenMatterBlobIcon, revealed: false},
    {name: 'Green Matter Blob', fleet: 2, clockwise: 2, type: 'defeatable', picture: greenMatterBlobPicture, icon: greenMatterBlobIcon, revealed: false},
    {name: 'Green Matter Blob', fleet: 2, clockwise: 3, type: 'defeatable', picture: greenMatterBlobPicture, icon: greenMatterBlobIcon, revealed: false},
    {name: 'Green Matter Blob', fleet: 2, clockwise: 4, type: 'defeatable', picture: greenMatterBlobPicture, icon: greenMatterBlobIcon, revealed: false},
    {name: 'Green Matter Blob', fleet: 2, clockwise: 5, type: 'defeatable', picture: greenMatterBlobPicture, icon: greenMatterBlobIcon, revealed: false},
    {name: 'Kaboom Pod', fleet: 2, clockwise: 1, type: 'defeatable', picture: kaboomPodPicture, icon: kaboomPodIcon, revealed: false},
    {name: 'Kaboom Pod', fleet: 2, clockwise: 2, type: 'defeatable', picture: kaboomPodPicture, icon: kaboomPodIcon, revealed: false},
    {name: 'Kaboom Pod', fleet: 2, clockwise: 3, type: 'defeatable', picture: kaboomPodPicture, icon: kaboomPodIcon, revealed: false},
    {name: 'Kaboom Pod', fleet: 2, clockwise: 4, type: 'defeatable', picture: kaboomPodPicture, icon: kaboomPodIcon, revealed: false},
    {name: 'Kaboom Pod', fleet: 2, clockwise: 5, type: 'defeatable', picture: kaboomPodPicture, icon: kaboomPodIcon, revealed: false},
    {name: 'Lashing Root', fleet: 3, clockwise: 1, type: 'defeatable', picture: lashingRootPicture, icon: lashingRootIcon, revealed: false},
    {name: 'Lashing Root', fleet: 3, clockwise: 2, type: 'defeatable', picture: lashingRootPicture, icon: lashingRootIcon, revealed: false},
    {name: 'Lashing Root', fleet: 3, clockwise: 3, type: 'defeatable', picture: lashingRootPicture, icon: lashingRootIcon, revealed: false},
    {name: 'Lashing Root', fleet: 3, clockwise: 4, type: 'defeatable', picture: lashingRootPicture, icon: lashingRootIcon, revealed: false},
    {name: 'Lashing Root', fleet: 3, clockwise: 5, type: 'defeatable', picture: lashingRootPicture, icon: lashingRootIcon, revealed: false},
    {name: 'Shadow Seeder', fleet: 2, clockwise: 1, type: 'defeatable', picture: shadowSeederPicture, icon: shadowSeederIcon, revealed: false},
    {name: 'Shadow Seeder', fleet: 2, clockwise: 2, type: 'defeatable', picture: shadowSeederPicture, icon: shadowSeederIcon, revealed: false},
    {name: 'Shadow Seeder', fleet: 2, clockwise: 3, type: 'defeatable', picture: shadowSeederPicture, icon: shadowSeederIcon, revealed: false},
    {name: 'Shadow Seeder', fleet: 2, clockwise: 4, type: 'defeatable', picture: shadowSeederPicture, icon: shadowSeederIcon, revealed: false},
    {name: 'Shadow Seeder', fleet: 2, clockwise: 5, type: 'defeatable', picture: shadowSeederPicture, icon: shadowSeederIcon, revealed: false},
    {name: 'Snake Vine', fleet: 3, clockwise: 1, type: 'defeatable', picture: snakeVinePicture, icon: snakeVineIcon, revealed: false},
    {name: 'Snake Vine', fleet: 3, clockwise: 2, type: 'defeatable', picture: snakeVinePicture, icon: snakeVineIcon, revealed: false},
    {name: 'Snake Vine', fleet: 3, clockwise: 3, type: 'defeatable', picture: snakeVinePicture, icon: snakeVineIcon, revealed: false},
    {name: 'Snake Vine', fleet: 3, clockwise: 4, type: 'defeatable', picture: snakeVinePicture, icon: snakeVineIcon, revealed: false},
    {name: 'Snake Vine', fleet: 3, clockwise: 5, type: 'defeatable', picture: snakeVinePicture, icon: snakeVineIcon, revealed: false},
    {name: 'Spicy Air', fleet: 0, clockwise: 1, type: 'event', picture: spicyAirPicture, revealed: false},
    {name: 'Spicy Air', fleet: 0, clockwise: 2, type: 'event', picture: spicyAirPicture, revealed: false},
    {name: 'Spicy Air', fleet: 0, clockwise: 3, type: 'event', picture: spicyAirPicture, revealed: false},
    {name: 'Spicy Air', fleet: 0, clockwise: 4, type: 'event', picture: spicyAirPicture, revealed: false},
    {name: 'Spicy Air', fleet: 0, clockwise: 5, type: 'event', picture: spicyAirPicture, revealed: false},
    {name: 'Bio Rage', fleet: 1, clockwise:1, type: 'infection', picture: 'Bio Rage.png', revealed: false},
    {name: 'Botanophobia', fleet: 1, clockwise:2, type: 'infection', picture: 'Botanophobia.png', revealed: false},
    {name: 'BTD Visions', fleet: 1, clockwise:3, type: 'infection', picture: 'BTD Visions.png', revealed: false},
    {name: 'Crop Duster', fleet: 1, clockwise:4, type: 'infection', picture: 'Crop Duster.png', revealed: false},
    {name: 'Frazzled', fleet: 1, clockwise:5, type: 'infection', picture: 'Frazzled.png', revealed: false},
    {name: 'Fung Eye', fleet: 1, clockwise:1, type: 'infection', picture: 'Fungeye.png', revealed: false},
    {name: 'Intoxicated', fleet: 1, clockwise:2, type: 'infection', picture: 'Intoxicated.png', revealed: false},
    {name: 'Destruction', fleet: 1, clockwise:3, type: 'infection', picture: 'Kludde Destruction.png', revealed: false},
    {name: 'Kludde Poisoning', fleet: 1, clockwise:4, type: 'infection', picture: 'Kludde Poisoning.png', revealed: false},
    {name: 'Kludde Sensitivity', fleet: 1, clockwise:5, type: 'infection', picture: 'Kludde Sensitivity.png', revealed: false},
    {name: 'Kludde Vengence', fleet: 1, clockwise:1, type: 'infection', picture: 'Kludde Vengence.png', revealed: false},
    {name: 'Kluddefused', fleet: 1, clockwise:2, type: 'infection', picture:'Kluddefused.png', revealed: false},
    {name: 'Overwhelmed', fleet: 1, clockwise:3, type: 'infection', picture: 'Overwhelmed.png', revealed: false},
    {name: 'Turning Green', fleet: 1, clockwise:4, type: 'infection', picture: 'Turning Green.png', revealed: false},
    {name: 'Whiplash', fleet: 1, clockwise:5, type: 'infection', picture: 'Whiplash.png', revealed: false}
  ]

  // damage is an array of 19 boolean values. Positions 0 through 6 represent the systems in each room of the ship. Positions 7 through 18 represent the doors leading between the room. A value of true means that particular door or system has been damaged. 
  damage = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  for (z=0;z<19;z++){
    z < 7 ? document.getElementById(`damagePicture${z}`).src = systemDamage : document.getElementById(`damagePicture${z}`).src = doorDamage;
    document.getElementById(`damagePicture${z}`).style.display = 'none';
  }
  crewSize(4);
  showSelect();
}

const bigBambooPicture = 'Big Bamboo.png';
const bigBambooIcon = 'Big Bamboo Icon.png';
const greenMatterBlobPicture = 'Green Matter Blob.png';
const greenMatterBlobIcon = 'Green Matter Blob Icon.png';
const kaboomPodPicture = 'Kaboom Pod.png';
const kaboomPodIcon = 'Kaboom Pod Icon.png';
const lashingRootPicture = 'Lashing Root.png';
const lashingRootIcon = 'Lashing Root Icon.png';
const shadowSeederPicture = 'Shadow Seeder.png';
const shadowSeederIcon = 'Shadow Seeder Icon.png';
const snakeVinePicture = 'Snake Vine.png';
const snakeVineIcon = 'Snake Vine Icon.png';
const electrostaticShockPicture = 'Electrostatic Shock.png';
const glarePicture = 'Glare.png';
const spicyAirPicture = 'Spicy Air.png';
const hiddenKludde = 'Unrevealed.png';

// emptyImage is used for <img id='messageImage'> which changes src values constantly. I could set messageImage to style.display="none" instead of displaying an empty image, but then I would need to change the style.display value back to block every single time that the src is changed. I prefer how the code looks with an empty image for this particular <img>.
const emptyImage = 'Blank.png';

// systemDamage and doorDamage point to images which show the damage the katundian ship has taken. 
const systemDamage = 'SystemDamage.png';
const doorDamage = 'DoorDamage.png'; 

// show functions are used to display different sections of html to the user: main menu, load screen, start selection screen, or the game itself. 
function showMainMenu (){
  document.getElementById('mainMenu').style.display="block";
  document.getElementById('loadScreen').style.display="none";
  document.getElementById('selectionScreen').style.display="none";
  document.getElementById('theGame').style.display="none";
  document.getElementById('userMessage').innerText = 'Your M30W class space cruiser, the H.I.S.S. Ender Paws, is ambushed by a dreadfuly deadly Kludde mothership. OH NO!!! She exhales a cloud of infectious spores that press up against your clear coat shield as her viscious fleet swarms in like a hive of omnivorous space plants preparing to devour a delicious meal. It will take courage, wit, and cooperation to get out of this mess alive.';
}
function showLoad (){
  document.getElementById('userMessage').innerText = 'The code for loading and saving has not been written yet. Try new game instead.';
  /*
  document.getElementById('loadScreen').style.display="block";
  document.getElementById('mainMenu').style.display="none"; 
  document.getElementById('selectionScreen').style.display="none";
  document.getElementById('theGame').style.display="none";
  */
}
function showSelect (){
  document.getElementById('selectionScreen').style.display="block";
  document.getElementById('mainMenu').style.display="none";
  document.getElementById('loadScreen').style.display="none";
  document.getElementById('theGame').style.display="none";
  document.getElementById('userMessage').innerText = 'Select game difficulty and crew size. \n Then select characters, starting items, and starting rooms.';
}
function showGame (){
  document.getElementById('theGame').style.display="block";
  document.getElementById('mainMenu').style.display="none"; 
  document.getElementById('loadScreen').style.display="none";
  document.getElementById('selectionScreen').style.display="none";
}

// 
function showInstructions (){
  document.getElementById('userMessage').innerText = 'Each character gets 3 actions on their turn. \n "peak" at kludde cards to reveal them, then use items to defeat them. \n "paw" to gain new items \n "scamper" to move. \n \n After each character turn, the kludde attack. \n kludde will damage your ship and reduce ship energy. \n \n Win the game when kludde fleet reaches zero. \n Lose the game when ship energy reaches zero.';
}
//hideActionOptions() is a function that hides several radio buttons, checkboxes, drop down menus. These buttons let the user select different options for their actions. Only certain options are possible. The rest need to stay hidden. 
function hideActionOptions(){
  for (x=0;x<19;x++){
    if (x < 7){
      document.getElementById(`moveTo${x}`).style.display="none";
      document.getElementById(`moveTo${x}`).checked = false;
    }
    if (x < 6){
      document.getElementById(`spaceZone${x}`).style.display="none";
      document.getElementById(`spaceZone${x}`).checked = false;
    }
    document.getElementById(`dmg${x}`).style.display="none";
    document.getElementById(`dmg${x}`).checked = false;
  }
}

// sendMessage() prints a message at the bottom of the screen, by changing the inner text of a <p> element called userMessage.
function sendMessage(msg){
  document.getElementById('userMessage').innerText = msg;
}

// crewSize(num) shows or hides the character selection inputs based on the num. 
function crewSize(num){
  for (z=0;z<num;z++){
    document.getElementById(`character${z}Start`).style.display="block";
  }
  for (y=num;y<7;y++){
     document.getElementById(`character${y}Start`).style.display="none";
  }
}

// Description functions are used on the selection screen at the start of a new game. When the user selects a character, item, or room from the dropdown menu, a Description function is used to provide them information about that character, item or room.
function characterDescription(num){
  num < 7 ? document.getElementById('userMessage').innerText = allCharacters[num].description : document.getElementById('userMessage').innerText = 'Character will be chosen randomly.';
  document.getElementById('messageImage').src = emptyImage;
}
function roomDescription(num){
  num < 7 ? document.getElementById('userMessage').innerText = allRooms[num].description : document.getElementById('userMessage').innerText = 'Starting room will be chosen randomly.';
  document.getElementById('messageImage').src = emptyImage;
}
function itemDescription(num){
  if (num < 24){
    document.getElementById('userMessage').innerText = itemDeck[num].description;
    document.getElementById('messageImage').src = itemDeck[num].picture;
  } else {
    document.getElementById('userMessage').innerText = 'Starting item will be chosen randomly.';
    document.getElementById('messageImage').src = emptyImage;
  }
}

// checkItems() is called when the user presses the start game button. It gathers all the information from the form and checks whether the starting choices are valid. If the choices are not valid, the user gets a message. otherwise the starting choices get passed into the startTheGame() function.
function checkItems(){
  let msg = ''
  let num = 1;
  num = document.getElementById('crew').value;
  let itemsValid = true;
  itemsValid = true;
  let itemList = [];
  itemList = [];
  let charList = [];
  charList = [];
  let roomList = [];
  roomList = [];
  for (z=0;z<num;z++){
    itemList.push(document.getElementById(`item${z}`).value);
    charList.push(document.getElementById(`character${z}`).value);
    roomList.push(document.getElementById(`room${z}`).value);
  }
  for (let y=1; y<num; y++){
    for (let x=0; x<y; x++){
      if (itemList[y] === itemList[x] && itemList[y] < 24){
        itemsValid = false;
        msg = `You have too many ${itemDeck[itemList[y]].name}'s! \n Each character and each item is unique.'`;
      }
      if (charList[y] === charList[x] && charList[y] < 7){
        itemsValid = false;
        msg = `You have too many ${allCharacters[charList[y]].role}'s! \n Each character and each item is unique.'`;
      }
    }
  }
  itemsValid ? startTheGame(charList, itemList, roomList) : document.getElementById('userMessage').innerText = msg;
}

// activePlayer, actionsRemaining, kluddeFleet, shipEnergy, and katundianCrew are all global variables used for the main game.  
let activePlayer = 0;
let actionsRemaining = 3;
let kluddeFleet = 20;
let shipEnergy = 20;
let katundianCrew =[];

// startTheGame() takes the users choices from the select menu, and applies them to the "katundianCrew" array. Extra steps are necessary if the user choses "random", because each character and each item are unique. Two characters cannot be the same, nor can they hold the same item, but they can be in the same room. For random characters, first I remove all the selected characters from the allCharacters array and then I randomly choose a character from what remains. Random items are done the exact same way, except they need to be done after the characters. This is because the items are held by the characters. Random characters need to be assigned before those characters can be given an item.
// random character: charList[u]=7. || random room: roomList[u]=7. || random item: itemList[x]=24 
function startTheGame(charList, itemList, roomList){
  for (z=0; z < charList.length; z++){
    if (roomList[z] > 6){
      roomList[z] = Math.floor(Math.random()*7);
    }
    if (charList[z] < 7){
      katundianCrew.push(allCharacters[charList[z]]);
      allCharacters[charList[z]].selected = true;
    } else {
      katundianCrew.push({});
    }
  }
  for (y=6; y>=0; y--){
    if (allCharacters[y].selected){
      allCharacters.splice(y,1);
    }
  }
  for (x=0; x<charList.length; x++){
    if (charList[x]>6){
      charList[x] = Math.floor(Math.random()*allCharacters.length);
      katundianCrew[x] = allCharacters[charList[x]];
      allCharacters.splice(charList[x],1);
    }
  }
  for (w=0; w < itemList.length; w++){
    katundianCrew[w].room = parseInt(roomList[w]);
    if (itemList[w] < 24){
      katundianCrew[w].items.push(itemDeck[itemList[w]]);
      itemDeck[itemList[w]].selected = true;
    }
  }
  for (v=23; v>=0; v--){
    if (itemDeck[v].selected){
      itemDeck.splice(v,1)
    }
  }
  itemDeck = shuffle(itemDeck);
  kluddeDeck = shuffle(kluddeDeck);
  kluddeFleet = document.getElementById('difficulty').value;
  for (u=0; u < itemList.length; u++){
    if (itemList[u]>23){
      katundianCrew[u].items.push(itemDeck[0]);
      itemDeck.shift();
    }
  }
  possibleActions('The game begins!');
  activePlayer = katundianCrew.length-1;
  hideActionOptions(); 
  showGame();
  assignImages();
  createInventory();
  document.getElementById('kluddeNumber').innerText = kluddeFleet;
  for (t=0;t<6;t++){
      drawKluddeCard(t);
  }
  document.getElementById(`kluddeAmount${targetRoom}`).style.outline= "3px solid red";
  nextPlayerTurn('');
}

// shuffle(deck) takes an array and shuffles the order of the elements in that array.
function shuffle(deck){
  let newDeck = [];
    let randInt = 0;
    while(deck.length>0){
      randInt = Math.floor(Math.random()*deck.length);
      newDeck.push(deck[randInt]);
      deck.splice(randInt,1);
    }
    return newDeck;
}

// characterImages() assigns the src value for the character images which move about on the game board. 
function assignImages(){
  let elemId = 'characterImage';
  for (x=0;x<katundianCrew.length;x++){
    elemID = `characterImage${x}`;
    document.getElementById(elemID).src = katundianCrew[x].picture;
    characterPosition(x);
  }
}

// characterPosition(x) assigns the style.top and style.left values of a character image. character images are the colored circles with the character image inside. This function moves 1 image to the appropriate spot on the board, based on the room and the position within the katundianCrew array. 
function characterPosition(x){
  let elemId = 'characterImage';
  const roomPositions = [
    [[400,240], [600,230], [560,320], [450,320], [470,210], [530,210], [505,315]],  //Bridge
    [[690,280], [785,460], [635,375], [680,460], [730,320], [735,445], [660,330]],  //Infirmary
    [[680,540], [690,720], [620,630], [790,550], [730,670], [670,670], [730,550]], //Loading Bay
    [[460,670], [610,770], [400,770], [560,670], [560,780], [450,780], [510,790]],  //Engine Room
    [[220,550], [325,730], [330,545], [385,640], [275,560], [270,680], [330,670]],  //Hold
    [[320,280], [335,430], [215,460], [350,330], [280,320], [255,430], [295,465]],  //Galley
    [[450,410], [550,590], [560,410], [480,590], [600,500], [410,480], [425,570]]];  //Hub
    
  elemID = `characterImage${x}`;
  document.getElementById(elemID).style.left = `${roomPositions[katundianCrew[x].room][x][0]}px`;
  document.getElementById(elemID).style.top = `${roomPositions[katundianCrew[x].room][x][1]}px`;
}

// possibleActions(msg) populates a drop down menu with a list of possible choices. These are the actions that the user can take on their turn. First the action list is created. Action list has peak, paw, scamper, plus the character action, room action, and item actions. A while loop is used to remove all of the previous actions from the "actionSelector" dropdown menu. Then a for loop is used to add new options from actionList to "actionSelector." Lastly the userMessage is updated.
function possibleActions(msg){
  document.getElementById('shipNumber').innerText = shipEnergy;
  document.getElementById('kluddeNumber').innerText = kluddeFleet;
  document.getElementById('userMessage').innerText = `${msg} \n \n ${katundianCrew[activePlayer].role}'s turn. \n ${allRooms[katundianCrew[activePlayer].room].room} \n Stagger:${katundianCrew[activePlayer].stagger} \n Infections: ${katundianCrew[activePlayer].infections.length} \n ${actionsRemaining} actions remaining.`;
  if(msg===''){document.getElementById('messageImage').src = emptyImage;}
  while (document.getElementById('actionSelector').options.length > 0){
    document.getElementById('actionSelector').options.remove(0);
  }
  activeInfections(katundianCrew[activePlayer].infections);
  let actionList = [];
  actionList = [{label: "-select an action-"}, {label:'nap (end turn)'}, {label: 'peak'}, {label: 'paw'}, {label: 'scamper'}];
  if (!(infectionList[9])){
    actionList.push(katundianCrew[activePlayer].charAction);
  }
  if (infectionList[5]){
    actionList.splice(2,1);
    if (katundianCrew[activePlayer].role==='scout'){
      actionList.splice(3,1);
    }
  }
  if (shipEnergy > 1 && !(damage[katundianCrew[activePlayer].room])){
    actionList.push(allRooms[katundianCrew[activePlayer].room].action);
  }
  if (kluddefused) {
    for (x=0; x < katundianCrew[activePlayer].items.length; x++){
      if (katundianCrew[activePlayer].items[x].refreshed){
        actionList.push(katundianCrew[activePlayer].items[x].actions[0]);
        if (katundianCrew[activePlayer].items[x].actions.length > 1) {
          actionList.push(katundianCrew[activePlayer].items[x].actions[1]);
        }
      } 
    }
  }
  if (shipEnergy < 1){
    document.getElementById('userMessage').innerText = `${msg} \n \n Your ship ran out of energy. \n Game over, the kludde win.`;
    actionList =[{label: "new game"}];
  }
  if (kluddeFleet < 1){
    document.getElementById('userMessage').innerText = `${msg} \n \n The kludde fleet has been defeated. \n You win!!`;
    actionList =[{label: "new game"}];
  }
  for (y=0; y < actionList.length; y++){
    var act = document.createElement('option');
    act.value = actionList[y].label;
    act.innerHTML = actionList[y].label;
    document.getElementById('actionSelector').appendChild(act);
  }
}

// actionDescription(act) is called when the user selects an action from the "actionSelector". The name of that actions is passed into the function as "act" a switch is used with different cases for every possible action. The user is given instructions on how to finish that action. Any necessary controls for that action are set to style.display="block". All the unecessary controls get set to style.display="none" by the hideActionOptions() function.
const roomConnection = [[[1,9],[5,7],[6,8]],[[0,9],[2,11],[6,10]],[[1,11],[3,13],[6,12]],[[2,13],[4,15],[6,14]],[[3,15],[5,17],[6,16]],[[0,7],[4,17],[6,18]],[[0,8],[1,10],[2,12],[3,14],[4,16],[5,18]]];
function actionDescription(act){
  const systemList = ['Grabby Paws', 'Wellness Enforcer', 'Quantifoam Tank', 'Dank Fusion Reactor', 'Nanite Nest', 'Sustinance Replicator', 'Power Core'];
  document.getElementById('messageImage').src = emptyImage;
  document.getElementById('confirmAction').style.display = 'inline'
  hideActionOptions();
  let num = 0;
  switch(act){
    case '-select an action-':
      possibleActions('');
      break;
    case 'nap (end turn)':
      document.getElementById('userMessage').innerText = 'Nap: Press confirm to end your turn.';
      break;
    case 'peak':
      num = 0;
      for (z=0; z<allRooms[katundianCrew[activePlayer].room].kludde.length; z++){
        if (!allRooms[katundianCrew[activePlayer].room].kludde[z].revealed){
          num++;
        }
      }
      num > 0 ? document.getElementById('userMessage').innerText = `There are ${num} hidden kludde attacking your room! \n Press confirm to reveal 1 kludde.` : document.getElementById('userMessage').innerText = 'Peak: You cannot peak. There are no hidden Kludde attacking your room.';
      break;
    case 'paw':
      itemDeck.length > 0 ? document.getElementById('userMessage').innerText = 'Paw: Press confirm to draw an item.' : document.getElementById('userMessage').innerText = 'You cannot paw. There are no items left to draw.';
      break;
    case 'scamper':
      document.getElementById('userMessage').innerText = 'Scamper: Select a room on the ship. Then click confirm to move to that room. \n If you scamper through a damaged doorway, you will be staggered.';
      for (z=0;z<roomConnection[katundianCrew[activePlayer].room].length;z++){
        document.getElementById(`moveTo${roomConnection[katundianCrew[activePlayer].room][z][0]}`).style.display="block";
      }
      break;
    case 'Computer':
      if (shipEnergy < 2){
        document.getElementById('userMessage').innerText = 'The ship does not have enough energy to activate the computer.'
        break;
      }
      while (document.getElementById('actionSelector').options.length > 0){
    document.getElementById('actionSelector').options.remove(0);
      }
      for (z=0; z<7; z++){
        if(!damage[z]){
          var act = document.createElement('option');
          act.value = systemList[z];
          act.innerHTML = systemList[z];
          document.getElementById('actionSelector').appendChild(act);
        }
      }
      var act = document.createElement('option');
      act.value = 'Back';
      act.innerHTML = 'Exit computer';
      document.getElementById('actionSelector').appendChild(act);
      document.getElementById('userMessage').innerText = 'Computer: select any undamaged system to activate'
      break;
    case 'Back':
      possibleActions('');
      break;
    case "Captain's Orders":
      while (document.getElementById('actionSelector').options.length > 0){
    document.getElementById('actionSelector').options.remove(0);
      }
      for (y=0;y<katundianCrew.length;y++){
        if (!(y===activePlayer)){
          var act = document.createElement('option');
          act.value = y;
          act.innerHTML = katundianCrew[y].role;
          document.getElementById('actionSelector').appendChild(act);
        }
      }
      var act = document.createElement('option');
      act.value = 'Back';
      act.innerHTML = 'Belay that';
      document.getElementById('actionSelector').appendChild(act);
      break;
    case 'Chow Time':
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        if (katundianCrew[z].room === katundianCrew[activePlayer].room){
          num += katundianCrew[z].stagger;
        }
      }
      document.getElementById('userMessage').innerText = `Chow Time: Remove all stagger from all characters in your room. \n Press confirm to remove a total of ${num} stagger.`
      break;
    case "Quick Fix":
      num = 0;
      for (z=0;z<damageMatrix[katundianCrew[activePlayer].room].length;z++){
        if (damage[damageMatrix[katundianCrew[activePlayer].room][z]]){
          document.getElementById(`dmg${damageMatrix[katundianCrew[activePlayer].room][z]}`).style.display="block";
          num++;
        }
      }
      num > 0 ? document.getElementById('userMessage').innerText = `Quick Fix: Select up to 2 damage tokens in your room. \n Press confirm to repair the selected tokens.` : document.getElementById('userMessage').innerText = `Quick Fix: Repair up to 2 damage in your room. \n There is no damage in your room.`;
      break;
    case "Treat":
      for (z=0;z<katundianCrew.length;z++){
        if (katundianCrew[z].room === katundianCrew[activePlayer].room){
          num += katundianCrew[z].infections.length;
        }
      }
      document.getElementById('userMessage').innerText = `Treat: Remove all infections from all characters in your room. \n Press confirm to remove a total of ${num} infections.`
      break;
    case 'Spot':
      for (z=0;z<6;z++){
        for (y=0;y<allRooms[z].kludde.length;y++){
          if (!allRooms[z].kludde[y].revealed){
            document.getElementById(`spaceZone${z}`).style.display="block";
          }
        }
      }
      document.getElementById('userMessage').innerText = 'Select a space zone with a hidden kludde to spot.';
      break;
    case "Blip":
      document.getElementById('userMessage').innerText = 'Blip: Select a room on the ship. Then click confirm to move to that room.';
      for (z=0;z<7;z++){
        if (!(katundianCrew[activePlayer].room===z)){
          document.getElementById(`moveTo${z}`).style.display="block";
        }
      }
      break;
    case "Grabby Paws":
      clickedKludde =[];
      document.getElementById('userMessage').innerText = `Grabby Paws: Spend 1 Energy to defeat any 1 revealed kludde. \n Click on a kludde then click Confirm.`;
      break;
    case "Dank Fusion Reactor":
      num = 0;
      for (z=0; z<katundianCrew.length; z++){
        for (y=0;y<katundianCrew[z].items.length; y++){
          if (!katundianCrew[z].items[y].refreshed && katundianCrew[z].items[y].charge === 2){
            num++;
          }
        }
      }
      document.getElementById('userMessage').innerText = `Dank Fusion Reactor: Spend 1 Energy to refresh all Dank Matter items for all players. \n Click confirm to activate the Dank Fusion Reactor. \n ${num} items will be refreshed.`;
      break;
    case "Sustinance Replicator":
      num = 0;
      for (x=0;x<katundianCrew.length;x++){
        num += katundianCrew[x].stagger;
      }
      document.getElementById('userMessage').innerText = `Sustinance Replicator: Spend 1 Energy to remove all stagger from all characters. \n Click confirm to activate the Sustinance Replicator. \n ${num} Stagger will be removed.`;
      break;
    case "Nanite Nest":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        for (y=0;y<katundianCrew[z].items.length; y++){
          if (!katundianCrew[z].items[y].refreshed && katundianCrew[z].items[y].charge === 1){
            num++;
          }
        }
      }
      document.getElementById('userMessage').innerText = `Nanite Nest: Spend 1 Energy to refresh all Nanite items for all players. \n Click confirm to activate the Nanite Nest. \n ${num} items will be refreshed.`;
      break;
    case "Power Core":
      num = 0;
      for (z=0; z<7; z++){
        if (damage[z]){
          num++;
        }
      }
      document.getElementById('userMessage').innerText = `Power Core: Spend 1 Energy to repair every system on the ship. \n Click confirm to activate the Power Core. \n ${num} systems will be repaired.`;
      break;
    case "Wellness Enforcer":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        num += katundianCrew[z].infections.length;
      }
      document.getElementById('userMessage').innerText = `Wellness Enforcer: Spend 1 energy to remove all infections from all characters. \n Click confirm to remove ${num} infections.`;
      break;
    case "Quantifoam Tank":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        for (y=0;y<katundianCrew[z].items.length; y++){
          if (!katundianCrew[z].items[y].refreshed && katundianCrew[z].items[y].charge === 3){
            num++;
          }
        }
      }
      document.getElementById('userMessage').innerText = `Quantifoam Tank: Spend 1 Energy to refresh all Quantifoam items for all players. \n Click confirm to activate the Quantifoam Tank. \n ${num} items will be refreshed.`;
      break;
    case "Kludde attack":
      document.getElementById('userMessage').innerText = `The kludde are attacking ${allRooms[targetRoom].room}! \n Each character in the ${allRooms[targetRoom].room} will take 1 stagger. \n The ship will take 1 damage for each attacking kludde. \n Press confirm to continue.`
      break;
    case "Shields up":
      document.getElementById('userMessage').innerText = 'Shields up: Prevent all damage and stagger from the kludde attack. \n Spend ship energy equal to the number of attacking kludde.'
      break;
    case "Alkashitzer":
      num = [0,0];
      for (y=0;y<katundianCrew.length;y++){
        if (katundianCrew[y].room===katundianCrew[activePlayer].room){
          num[0] += katundianCrew[y].stagger;
          num[1] += katundianCrew[y].infections.length;
        }
      }
      document.getElementById('userMessage').innerText = `Alkashitzer: Remove all stagger and infections from all characters in your room. \n ${num[0]} stagger and ${num[1]} infections will be removed.`;
      break;
    case "Atomic Deconstructor 1":
      scanFor('Snake Vine', 'Atomic Deconstructor');
      break;
    case "Atomic Deconstructor 2":
      scanFor('Green Matter Blob', 'Atomic Deconstructor');
      break;
    case "Atomic Reconstructor 1":
      scanFor('Kaboom Pod', 'Atomic Reconstructor');
      break;
    case "Atomic Reconstructor 2":
      num = 0;
      for (y=0;y<damageMatrix[katundianCrew[activePlayer].room].length; y++){
        if (damage[damageMatrix[katundianCrew[activePlayer].room][y]]){
          num++
        }
      }
      document.getElementById('userMessage').innerText = `Atomic Reconstructor: Press confirm to repair all damage in your room. \n Press confirm to repair ${num} damage.`
      break;
    case "BFGG 1":
      scanFor('Lashing Root', 'BFGG');
      break;
    case "BFGG 2":
      scanFor('Shadow Seeder', 'BFGG');
      break;
    case "Battle Biscuits":
      num = 0;
      for (y=0; y<katundianCrew.length; y++){
        num += katundianCrew[y].stagger;
      }
      document.getElementById('userMessage').innerText = `Battle Biscuits: Remove all stagger from all characters. \n Press confirm to remove ${num} stagger.`;
      break;
    case "Dank Nugget 1":
      num = 0;
      for (y=0; y<katundianCrew.length; y++){
        for (x=0; x<katundianCrew[y].items.length; x++){
          if (!(katundianCrew[y].items[x].refreshed) && katundianCrew[y].items[x].charge===2){
            num++
          }
        }
      }
      document.getElementById('userMessage').innerText = `Dank Nugget: Refresh all dank matter items for all characters. \n Press confirm to refresh ${num} items.`;
      break;
    case "Dank Nugget 2":
      document.getElementById('userMessage').innerText = `Dank Nugget: Press confirm to gain 3 ship energy.`;
      break;
    case "Dimensional Scanner 1":
      scanFor('Shadow Seeder', 'Dimensional Scanner');
      break;
    case "Dimensional Scanner 2":
      num = 0;
      for (y=0; y<allRooms[katundianCrew[activePlayer].room].kludde.length; y++){
        if(!(allRooms[katundianCrew[activePlayer].room].kludde[y].revealed)){num++;}
      }
      document.getElementById('userMessage').innerText = `Dimensional Scanner: Reveal all hidden kludde attacking your room. \n Press confirm to reveal ${num} kludde.`;
      break;
    case "Eye Drone 1":
      scanFor('Shadow Seeder', 'Eye Drone');
      break;
    case "Eye Drone 2":
      for (z=0;z<6;z++){
        for (y=0;y<allRooms[z].kludde.length;y++){
          if (!allRooms[z].kludde[y].revealed){
            document.getElementById(`spaceZone${z}`).style.display="block";
          }
        }
      }
      document.getElementById('userMessage').innerText = 'Eye Drone: Reveal up to 2 kludde in any 1 space zone. \n Select a space zone with a hidden kludde to reveal.';
      break;
    case "Fixit Grenade":
      num = 0;
      for (y=0; y<7; y++){
        for (x=0; x<damageMatrix[y].length; x++){
          if (damage[damageMatrix[y][x]]){
            document.getElementById(`moveTo${y}`).style.display="block";
            num++
          }
        }
      }
      num > 0 ? sendMessage ('Fixit Grenade: Repair all damage in any 1 room. \n Select a room with damage to repair.') : sendMessage ('You cannot use the Fixit Grenade because the ship has no damage to repair. \n Fixit Grenade: Repair all damage in any 1 room.');
      break;
    case "Handi Boots 1":
      scanFor('Kaboom Pod', 'Handi Boots');
      break;
    case "Handi Boots 2":
      for (y=0; y<roomConnection[katundianCrew[activePlayer].room].length; y++){
        document.getElementById(`moveTo${roomConnection[katundianCrew[activePlayer].room][y][0]}`).style.display="block";
      }
      document.getElementById(`moveTo${katundianCrew[activePlayer].room}`).style.display="block";
      num = 0;
      for (x=0; x<damageMatrix[katundianCrew[activePlayer].room].length; x++){
        if (damage[damageMatrix[katundianCrew[activePlayer].room][x]]){num++}
      }
      document.getElementById('userMessage').innerText = `Handi Boots: Repair all doorways in your room. Then move through 1 doorway. \n Select a room to move to then press confirm. \n ${num} doorways will be repaired.`;
      break;
    case "Hypersonic Wrench 1":
      scanFor('Kaboom Pod', 'Hypersonic Wrench');
      break;
    case "Hypersonic Wrench 2":
      for (y=0; y<19; y++) {
        if (damage[y]) {document.getElementById(`dmg${y}`).style.display="block";}
      }
      document.getElementById('userMessage').innerText = `Hypersonic Wrench: Repair up to 4 damage anywhere on the ship. \n Select up to 4 damage then press confirm.`;
      break;
    case "Implosion Launcher 1":
      scanFor('Lashing Root', 'Implosion Launcher');
      break;
    case "Implosion Launcher 2":
      for (y=0; y<6; y++){
        if(!(targetRoom===y)){
          document.getElementById(`spaceZone${y}`).style.display="block";
        }
      }
      document.getElementById('userMessage').innerText = `Implosion Launcher: Choose where the kludde will attack next. \n Select a space zone then press confirm.`;
      break;
    case "Inferno Blaster 1":
      scanFor('Big Bamboo', 'Inferno Blaster');
      break;
    case "Inferno Blaster 2":
      scanFor('Green Matter Blob', 'Inferno Blaster');
      break;
    case "KEM Spray 1":
      scanFor('Green Matter Blob', 'KEM Spray');
      break;
    case "KEM Spray 2":
      num = 0;
      for (y=0; y<katundianCrew.length; y++){
        if (katundianCrew[y].room===katundianCrew[activePlayer].room){
          num += katundianCrew[y].stagger;
        }
      }
      document.getElementById('userMessage').innerText = `KEM Spray: remove all stagger from all characters in your room. \n Press confirm to remove ${num} stagger.`;
      break;
    case "Lumination Stick":
      for (y=0; y<6; y++){
        for (x=0; x<allRooms[y].kludde.length; x++){
          if (!(allRooms[y].kludde[x].revealed)) {document.getElementById(`spaceZone${y}`).style.display="block";}
        }
      }
      document.getElementById('userMessage').innerText = `Lumination Stick: Reveal all hidden kludde in any 1 space zone. \n Select a space zone then press confirm.`;
      break;
    case "Nanite Cluster 1":
      num = 0;
      for (y=0; y<katundianCrew.length; y++){
        for (x=0; x<katundianCrew[y].items.length; x++){
          if (!(katundianCrew[y].items[x].refreshed) && katundianCrew[y].items[x].charge===1){
            num++
          }
        }
      }
      document.getElementById('userMessage').innerText = `Nanite Cluster: Refresh all nanite items for all characters. \n Press confirm to refresh ${num} items.`;
      break;
    case "Nanite Cluster 2":
      document.getElementById('userMessage').innerText = `Nanite Cluster: Press confirm to gain 3 ship energy.`;
      break;
    case "NIP":
      sendMessage('NIP: Press confirm to gain 3 actions.');
      break;
    case "Photon Emitter 1":
      scanFor('Shadow Seeder', 'Photon Emitter');
      break;
    case "Photon Emitter 2":
      num = 0;
      for (y=0; y<allRooms[katundianCrew[activePlayer].room].kludde.length; y++){
        if (!(allRooms[katundianCrew[activePlayer].room].kludde[y].revealed)) {num++;}
      }
      document.getElementById('userMessage').innerText = `Photon Emitter: Reveal up to 2 kludde attacking your room. Treat any infections revealed this way. \n Press confirm to reveal ${num} kludde.`;
      break;
    case "Pounce Suit 1":
      scanFor('Snake Vine', 'Pounce Suit');
      break;
    case "Pounce Suit 2":
      document.getElementById('userMessage').innerText = 'Pounce Suit: Move to any room. \n Select a room on the ship. Then click confirm to move to that room.';
      for (z=0;z<7;z++){
        if (!(katundianCrew[activePlayer].room===z)){
          document.getElementById(`moveTo${z}`).style.display="block";
        }
      }
      break;
    case "Power Suit 1":
      scanFor('Big Bamboo', 'Power Suit');
      break;
    case "Power Suit 2":
      sendMessage('Power Suit: Press confirm to gain 2 actions.');
      break;
    case "Quantifoam Canister 1":
      num = 0;
      for (y=0; y<katundianCrew.length; y++){
        for (x=0; x<katundianCrew[y].items.length; x++){
          if (!(katundianCrew[y].items[x].refreshed) && katundianCrew[y].items[x].charge===3){
            num++
          }
        }
      }
      document.getElementById('userMessage').innerText = `Quantifoam Canister: Refresh all quantifoam items for all characters. \n Press confirm to refresh ${num} items.`;
      break;
    case "Quantifoam Canister 2":
      sendMessage('Quantifoam Canister: Press confirm to gain 3 ship Energy.');
      break;
    case "Reboot Gloves 1":
      scanFor('Kaboom Pod', 'Reboot Gloves');
      break;
    case "Reboot Gloves 2":
      exhaustItem('Rebbot Gloves');
      while (document.getElementById('actionSelector').options.length > 0){
    document.getElementById('actionSelector').options.remove(0);
      }
      for (z=0; z<7; z++){
        var act = document.createElement('option');
        act.value = systemList[z];
        act.innerHTML = systemList[z];
        document.getElementById('actionSelector').appendChild(act);
      }
      var act = document.createElement('option');
      act.value = 'Gloves off';
      act.innerHTML = 'Gloves off';
      document.getElementById('actionSelector').appendChild(act);
      document.getElementById('userMessage').innerText = 'Reboot Gloves: Activate any ship system. Repair that system first if it is damaged. \n Select a system then click confirm.'
      break;
    case "Gloves off":
      for (z=0; z<katundianCrew[activePlayer].items.length; z++){
        if("Reboot Gloves"===katundianCrew[activePlayer].items[z].name){
          refreshItem(activePlayer,z);
        }
     }
     possibleActions('');
     break;
    case "Temporal Loop":
      clickedKludde =[];
      document.getElementById('userMessage').innerText = `Temporal Loop: Defeat any 1 revealed kludde. \n click on a kludde then click Confirm.`;
      break;
    case "Viral Erasure Tool 1":
      scanFor('Green Matter Blob', 'Viral Erasure Tool');
      break;
    case "Viral Erasure Tool 2":
      num = 0;
      for (y=0; y<katundianCrew.length; y++){
        if (katundianCrew[y].room===katundianCrew[activePlayer].room) {num += katundianCrew[y].infections.length;}
      }
      document.getElementById('userMessage').innerText = `Viral Erasure Tool: remove all infections from all characters in your room. \n Click confirm to remove ${num} infections.`;
      break;
  }
}

// takeAction(act) performs the action the user selected. If the action is not possible, it updates the "userMessage" to explain why.
// This function is called when the user clicks the submit button.
let captainCommanding = false;
let captainsActions = 0;
function takeAction(act){
  let msg = '';
  document.getElementById('confirmAction').style.display = 'none'
  let num = 0;
  var roomOpts = document.getElementsByName('moveToRoom');
  let acted = false;
  acted = false;
  switch(act){
    case 'nap (end turn)':
      msg = `The ${katundianCrew[activePlayer].role} takes a nap`
      if (captainCommanding){
        captainCommanding = false;
        actionsRemaining = captainsActions;
        for (z=0; z<katundianCrew.length; z++){
          if (katundianCrew[z].role==='captain'){
            activePlayer = z;
          }
        }
        actionsRemaining > 0 ? possibleActions(msg) : kluddeAttack(msg);
      } else {
        kluddeAttack(msg);
      }
      break;
    case 'Back':
      possibleActions('');
      break;
    case 'peak':
      for (z=0; z<allRooms[katundianCrew[activePlayer].room].kludde.length; z++){
        if (!allRooms[katundianCrew[activePlayer].room].kludde[z].revealed && !acted){
          acted = true;
          document.getElementById('messageImage').src = allRooms[katundianCrew[activePlayer].room].kludde[z].picture;
          msg = revealAKludde(allRooms[katundianCrew[activePlayer].room].kludde[z], katundianCrew[activePlayer].room, z);
          }
        }
      if (!acted){document.getElementById('userMessage').innerText = 'You cannot peak. There are no hidden Kludde attacking your room.'};
      break;
    case 'paw':
      if(itemDeck.length > 0){
        katundianCrew[activePlayer].items.push(itemDeck[0]);
        msg = `The ${katundianCrew[activePlayer].role} finds the ${itemDeck[0].name}.`
        document.getElementById('messageImage').src = itemDeck[0].picture;
        itemDeck.shift();
        num = katundianCrew[activePlayer].items.length-1;
        makeItemIcon(activePlayer, num);
        acted = true;
        if(infectionList[4]){
          katundianCrew[activePlayer].stagger++;
          msg += `\n The ${katundianCrew[activePlayer].role}'s paws tremble. They look frazzled.`;
        }
      } else{
        document.getElementById('userMessage').innerText = 'There are no items to draw. Choose a different action.';
      }
      break;
    case 'scamper':   
      for (z = 0; z<roomOpts.length; z++){
        if(roomOpts[z].checked){
          msg = `The ${katundianCrew[activePlayer].role} scampers to the ${allRooms[z].room}`;
          for (y=0;y<roomConnection[katundianCrew[activePlayer].room].length;y++){
            if(z===roomConnection[katundianCrew[activePlayer].room][y][0] && damage[roomConnection[katundianCrew[activePlayer].room][y][1]]){
              katundianCrew[activePlayer].stagger++;
              msg = `The ${katundianCrew[activePlayer].role} scampers to the ${allRooms[z].room} \n The doorway is damaged, they are staggered as they scamper through.`
            }
          }
          katundianCrew[activePlayer].room = z;
          characterPosition(activePlayer);
          acted = true;
          if (infectionList[6]){
            katundianCrew[activePlayer].stagger++;
            msg += `\n The ${katundianCrew[activePlayer].role} wobbles unsteadily like they are intoxicated`;
          }
        }
      }
      if (!acted){document.getElementById('userMessage').innerText = 'Select a room to move to, before you click confirm.'}
      break;
    case 'Computer':
      document.getElementById('userMessage').innerText = 'Select a system from the list.'
      break;
    case '0': //"captain's Orders"
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6': 
      captainCommanding = true;
      captainsActions = actionsRemaining-1;
      activePlayer = act;
      actionsRemaining = 1;
      possibleActions(`The captain commands the ${katundianCrew[act].role}.`)
      break;
    case 'Chow Time':
     num = 0;
      for (z=0;z<katundianCrew.length;z++){
        if (katundianCrew[z].room === katundianCrew[activePlayer].room && katundianCrew[z].stagger>0){
          num += katundianCrew[z].stagger;
          katundianCrew[z].stagger = 0;
          acted = true;
        }
      }
      if (acted){
        msg = `The cook makes a delicious meal. \n ${num} stagger is removed.`;
      } else{
        document.getElementById('userMessage').innerText = 'No one in your room is hungry. Chose a different action.';
        }
      break;
    case "Quick Fix":
      num = 0;
      for (z=0; z<19; z++){
        if(document.getElementById(`dmg${z}`).checked) {num++;}
      }
      if (num > 2){
        document.getElementById('userMessage').innerText = 'You selected too much damage. \n Quick Fix can only repair 2 damage at a time.'
      } else {
        if (num > 0){
          for (y=0; y<19; y++){
            if (document.getElementById(`dmg${y}`).checked){
              repairDamage(y);
            }
          }
          msg = `The mechanic repairs ${num} damage.`
          acted = true;
        } else {
            document.getElementById('userMessage').innerText = 'No damage selected. \n Select up to 2 damage, before you click confirm.'
          }
        }
      break;
    case "Treat":
      for (z=0;z<katundianCrew.length;z++){
        if (katundianCrew[z].room === katundianCrew[activePlayer].room && katundianCrew[z].infections.length>0){
          num += katundianCrew[z].infections.length;
          kluddeFleet -= katundianCrew[z].infections.length;
          katundianCrew[z].infections = [];
          acted = true;
        }
      }
      acted ? msg = `The medic treats ${num} infections.`: document.getElementById('userMessage').innerText = 'No one in your room is infected. Chose a different action.';  
      break;
    case 'Spot':
      for (z=0; z<6; z++){
        if (document.getElementById(`spaceZone${z}`).checked){num = z;}
      }
      for (y=0; y<allRooms[num].kludde.length; y++){
        if (!allRooms[num].kludde[y].revealed && !acted){
          acted = true;
          document.getElementById('messageImage').src = allRooms[num].kludde[y].picture;
          msg = revealAKludde(allRooms[num].kludde[y], num, y);
          }
        }
      break;
    case "Blip":
      for (z = 0; z<roomOpts.length; z++){
        if(roomOpts[z].checked){
          msg = `The teleporter blips to the ${allRooms[z].room}`;
          katundianCrew[activePlayer].room = z;
          characterPosition(activePlayer);
          acted = true;
          if (infectionList[6]){
            katundianCrew[activePlayer].stagger++;
            msg += `\n The teleporter wobbles unsteadily like they are intoxicated`;
          }
        }
      }
      if (!acted){document.getElementById('userMessage').innerText = 'Select a room to move to, before you click confirm.'}
      break;
    case "Grabby Paws":
      if (clickedKludde.length>0){
        kluddeFleet -= clickedKludde[0].fleet;
        msg = `The ${katundianCrew[activePlayer].role} activates the Grabby Paws to defeat a ${clickedKludde[0].name}.`
        removeKluddeIcon(clickedKludde[0],clickedKludde[1],clickedKludde[2]);
        shipEnergy--;
        acted = true;
        repairDamage(0);
        if (infectionList[7]) {
          takeDamage(0);
          msg += `\n They push the button angrily and break it.`;
        }
      } else {
        document.getElementById('userMessage').innerText = 'Click on a revealed kludde to defeat, before you click confirm.';
      }
      break;
    case "Dank Fusion Reactor":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        for (y=0;y<katundianCrew[z].items.length;y++){
          if (!(katundianCrew[z].items[y].refreshed) && katundianCrew[z].items[y].charge===2){
            refreshItem(z,y);
            acted = true;
            num++;
          }
        }
      }
      if(acted){
        repairDamage(3);
        msg = `The ${katundianCrew[activePlayer].role} activates the dank fusion reactor to refresh ${num} items.`;
        shipEnergy--;
        if (infectionList[7]) {
          takeDamage(3);
          msg += `\n They push the button angrily and break it.`;
        }
      } else {
        document.getElementById('userMessage').innerText='There are no dank matter that need to be refreshed. \n Choose a different action.';
        }
      break;
    case "Sustinance Replicator":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        if (katundianCrew[z].stagger > 0){
          num += katundianCrew[z].stagger;
          katundianCrew[z].stagger = 0;
          acted = true;
        }
      }
      if(acted){
        msg = `The ${katundianCrew[activePlayer].role} activates the sustinance replicator to remove ${num} stagger.`;
        shipEnergy--;
        repairDamage(5);
        if (infectionList[7]) {
          takeDamage(5);
          msg += `\n They push the button angrily and break it.`;
        }
      } else {
         document.getElementById('userMessage').innerText='Nobody is hungry. \n Choose a different action.';
      }
      break;
    case "Nanite Nest":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        for (y=0; y<katundianCrew[z].items.length; y++){
          if (!(katundianCrew[z].items[y].refreshed) && katundianCrew[z].items[y].charge===1){
            refreshItem(z,y);
            acted = true;
            num++;
          }
        }
      }
      if(acted){
        repairDamage(4);
        msg = `The ${katundianCrew[activePlayer].role} activates the nanite nest to refresh ${num} items.`;
        shipEnergy--;
        if (infectionList[7]) {
          takeDamage(4);
          msg += `\n They push the button angrily and break it.`;
        }
      } else {
        document.getElementById('userMessage').innerText='There are no nanite items that need to be refreshed. \n Choose a different action.';
        }
      break;
    case "Power Core":
      num = 0;
      for (z=0; z<7; z++){
        if (damage[z]){
          repairDamage(z);
          acted = true;
          num++;
        }
      }
      if(acted){
        msg = `The ${katundianCrew[activePlayer].role} activates the power core to repair ${num} systems.`;
        shipEnergy--;
        if (infectionList[7]) {
          takeDamage(6);
          msg += `\n They push the button angrily and break it.`;
        }
      } else {
        document.getElementById('userMessage').innerText='There are no quanitifoam items that need to be refreshed. \n Choose a different action.';
      }
      break;
    case "Wellness Enforcer":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        if (katundianCrew[z].infections.length > 0){
          num += katundianCrew[z].infections.length;
          katundianCrew[z].infections = [];
          acted = true;
        }
      }
      if(acted){
        repairDamage(1);
        msg = `The ${katundianCrew[activePlayer].role} activates the wellness enforcer to treat ${num} infections.`;
        kluddeFleet -= num;
        shipEnergy--;
        if (infectionList[7]) {
          takeDamage(1);
          msg += `\n They push the button angrily and break it.`;
        }
      } else {
         document.getElementById('userMessage').innerText='Nobody is infected. \n Choose a different action.';
      }
      break;
    case "Quantifoam Tank":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        for (y=0; y<katundianCrew[z].items.length; y++){
          if (!(katundianCrew[z].items[y].refreshed) && katundianCrew[z].items[y].charge===3){
            refreshItem(z,y);
            acted = true;
            num++;
            repairDamage(2);
          }
        }
      }
      if(acted){
        msg = `The ${katundianCrew[activePlayer].role} activates the quatifoam tank to refresh ${num} items.`;
        shipEnergy--;
        if (infectionList[7]) {
          takeDamage(2);
          msg += `\n They push the button angrily and break it.`;
        }
      } else {
        document.getElementById('userMessage').innerText='There are no quanitifoam items that need to be refreshed. \n Choose a different action.';
        }
      break;
    case "Kludde attack":
      num = -1;
      for (z=0; z<katundianCrew.length; z++){
        if (katundianCrew[z].room===targetRoom){
          katundianCrew[z].stagger++
          activeInfections(katundianCrew[z].infections);
          if (infectionList[12]) {
            katundianCrew[z].stagger++
            num = z;
          }
        }
      }
      msg = `The Kludde attack the ${allRooms[targetRoom].room}!`
      if (num>=0) {msg += `\n The ${katundianCrew[num].role} feels overwhelmed.`;}
      attackDamage(allRooms[targetRoom].kludde.length+1);
      drawKluddeCard(targetRoom);
      nextPlayerTurn(msg)
      break;
    case "Shields up":
      num = allRooms[targetRoom].kludde.length + 1;
      shipEnergy -=num;
      msg = `The kludde attack ${allRooms[targetRoom].room}! \n ${num} energy is spent on shields.`
      document.getElementById(`kluddeAmount${targetRoom}`).style.outline= "none";
      drawKluddeCard(targetRoom);
      nextPlayerTurn(msg)
      break;
    case "Alkashitzer":
      num = [0,0];
      for (z=0;z<katundianCrew.length;z++){
        if (katundianCrew[z].room===katundianCrew[activePlayer].room){
          if (katundianCrew[z].stagger > 0 || katundianCrew[z].infections.length > 0){
            num[0] += katundianCrew[z].stagger;
            num[1] += katundianCrew[z].infections.length;
            katundianCrew[z].stagger = 0;
            katundianCrew[z].infections = [];
            acted = true;
          }
        }
      }
      kluddeFleet -= num[1];
      if(acted){
        exhaustItem('Alkashitzer');
        msg = `The ${katundianCrew[activePlayer].role} uses Alkashitzer. ${num[0]} stagger and ${num[1]} infections are removed`;
      } else {
        document.getElementById('userMessage').innerText = "Nobody needs Alkashitzer yet. \n choose a different action.";
      } 
      break;
    case "Atomic Deconstructor 1":
      [acted, msg] = defeatKludde('Snake Vine', katundianCrew[activePlayer].room, 'Atomic Deconstructor');
      break;
    case "Atomic Deconstructor 2":
      [acted, msg] = defeatKludde('Green Matter Blob', katundianCrew[activePlayer].room, 'Atomic Deconstructor');
      break;
    case "Atomic Reconstructor 1":
      [acted, msg] = defeatKludde('Kaboom Pod', katundianCrew[activePlayer].room, 'Atomic Reconstructor');
      break;
    case "Atomic Reconstructor 2":
      num = 0;
      for (z=0; z<damageMatrix[katundianCrew[activePlayer].room].length; z++){
        if (damage[damageMatrix[katundianCrew[activePlayer].room][z]]){
          repairDamage(damageMatrix[katundianCrew[activePlayer].room][z]);
          num++
          acted = true;
        }
      }
      if(acted){
        msg = `The ${katundianCrew[activePlayer].role} uses the Atomic Reconstructor to repair ${num} damage.`;
        exhaustItem('Atomic Reconstructor');
      } else{
        document.getElementById('userMessage').innerText = `There is no damage in the ${allRooms[katundianCrew[activePlayer].room].room}. \n Choose a different action.`;
      }
      break;
    case "BFGG 1":
      [acted, msg] = defeatKludde('Lashing Root', katundianCrew[activePlayer].room, 'BFGG');
      break;
    case "BFGG 2":
      [acted, msg] = defeatKludde('Shadow Seeder', katundianCrew[activePlayer].room, 'BFGG');
      break;
    case "Battle Biscuits":
      num = 0;
      for (z=0; z<katundianCrew.length; z++){
        num += katundianCrew[z].stagger;
        katundianCrew[z].stagger = 0;
      }
      if (num > 0){
        acted = true;
        msg = `The ${katundianCrew[activePlayer].role} opens the Battle Biscuits. \n Everyone hears the bag opening. \n ${num} stagger is removed.`
        exhaustItem('Battle Biscuits');
      } else {
        sendMessage('Nobody is hungry. \n Choose a different action.')
      }
      break;
    case "Dank Nugget 1":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        for (y=0;y<katundianCrew[z].items.length;y++){
          if (!(katundianCrew[z].items[y].refreshed) && katundianCrew[z].items[y].charge===2){
            refreshItem(z,y);
            acted = true;
            num++;
          }
        }
      }
      if(acted){
        msg = `The ${katundianCrew[activePlayer].role} uses the dank nugget. \n ${num} items have been refreshed.`;
        exhaustItem('Dank Nugget');
      } else {
        document.getElementById('userMessage').innerText='There are no dank matter items that need to be refreshed. \n Choose a different action.';
        }
      break;
    case "Dank Nugget 2":
      shipEnergy += 3;
      acted = true;
      msg = `The ${katundianCrew[activePlayer].role} uses the Dank Nugget to add 3 energy to the ship.`;
      exhaustItem('Dank Nugget');
      break;
    case "Dimensional Scanner 1":
      [acted, msg] = defeatKludde('Shadow Seeder', katundianCrew[activePlayer].room, 'Dimensional Scanner');
      break;
    case "Dimensional Scanner 2":
      num = 0;
      msg = `The ${katundianCrew[activePlayer].role} uses the Dimensional Scanner.`
      for (z=allRooms[katundianCrew[activePlayer].room].kludde.length-1; z>=0; z--){
        if (!(allRooms[katundianCrew[activePlayer].room].kludde[z].revealed)){
          msg += '\n'
          msg += revealAKludde(allRooms[katundianCrew[activePlayer].room].kludde[z], katundianCrew[activePlayer].room, z);
          num++;
        }
      }
      if (num>0){
        acted = true;
        exhaustItem('Dimensional Scanner');
        msg += `\n ${num} kludde were revealed.`
      } else {
        document.getElementById('userMessage').innerText = `There are no hidden kludde attacking the ${allRooms[katundianCrew[activePlayer].room].room} \n Choose a different actions.`
      }
      break;
    case "Eye Drone 1":
      [acted, msg] = defeatKludde('Shadow Seeder', katundianCrew[activePlayer].room, 'Eye Drone');
      break;
    case "Eye Drone 2":
      num = 0;
      for (z=0; z<6; z++){
        if (document.getElementById(`spaceZone${z}`).checked){
          acted = true;
          exhaustItem('Eye Drone');
          msg = `The ${katundianCrew[activePlayer].role} uses the Eye Drone.`;
          for (y=allRooms[z].kludde.length-1; y>=0; y--){
            if (!(allRooms[z].kludde[y].revealed) && num < 2){
              msg += '\n';
              msg += revealAKludde(allRooms[z].kludde[y], z, y);
              num++;
            }
          }
        }
      }
      acted ? msg += `${num} kludde are revealed.` : sendMessage('Select a space zone, before you click confirm.');
      break;
    case "Fixit Grenade":
      num = 0;
      for (z=0; z<7; z++){
        if (document.getElementById(`moveTo${z}`).checked){
          for(y=0; y<damageMatrix[z].length; y++){
            if (damage[damageMatrix[z][y]]) {
              repairDamage(damageMatrix[z][y]);
              num++;
            }
          }
        }
      }
      if (num > 0) {
        acted = true;
        exhaustItem('Fixit Grenade');
        msg = `The ${katundianCrew[activePlayer].role} uses the Fixit Grenade to repair ${num} damage.`;
      } else {
        sendMessage('Select a room to repair, before you click confirm. \n If the ship has no damage, choose a different action.')
      }
      break;
    case "Handi Boots 1":
      [acted, msg] = defeatKludde('Kaboom Pod', katundianCrew[activePlayer].room, 'Handi Boots');
      break;
    case "Handi Boots 2":
      num = [0,0];
      num[0] = katundianCrew[activePlayer].room;
      for (y=0; y<7; y++){
        if (document.getElementById(`moveTo${y}`).checked) {
          katundianCrew[activePlayer].room = y;
          characterPosition(activePlayer);
          acted = true;
        }
      }
      if (!acted) {
        sendMessage('Select a room to move to, before you click confirm.');
        break;
      }
      for (z=1; z<damageMatrix[num[0]].length; z++){
        if (damage[damageMatrix[num[0]][z]]){
          repairDamage(damageMatrix[num[0]][z]);
          num[1]++;
        } 
      }
      if (num[0]===katundianCrew[activePlayer].room){
        if (num[1]>0) {
          msg = `The ${katundianCrew[activePlayer].role} uses handi boots to repair ${num[1]} damage.`;
          exhaustItem('Handi Boots');
        } else {
          acted = false;
          sendMessage('There is no daamge to repair. \n Choose a different action.');
        }
      } else {
        if (num[1]>0){
          msg = `The ${katundianCrew[activePlayer].role} uses handi boots. \n They repair ${num[1]} damage on the way to the ${allRooms[katundianCrew[activePlayer].room].room}.`;
          exhaustItem('Handi Boots');
        } else {
          msg = `The ${katundianCrew[activePlayer].role} tries to use the handi boots. \n There is no damage to repair, so they scamper to the ${allRooms[katundianCrew[activePlayer].room].room} instead.`;
        }
        if (infectionList[6]){
          katundianCrew[activePlayer].stagger++;
          msg += `\n The ${katundianCrew[activePlayer].role} wobbles unsteadily like they are intoxicated`;
        }
      } 
      break;
    case "Hypersonic Wrench 1":
      [acted, msg] = defeatKludde('Kaboom Pod', katundianCrew[activePlayer].room, 'Hypersonic Wrench');
      break;
    case "Hypersonic Wrench 2":
      num = 0;
      for (z=0; z<19; z++){
        if (document.getElementById(`dmg${z}`).checked){
          num++;
        }
      }
      if (num > 4) {
        sendMessage('The hypersonic wrench can only repair 4 damage at a time. \n You have selected too much damage to repair.');
        break;
      } 
      if (num===0){
        sendMessage('Select up to 4 damage to repair, before you click confirm.');
        break;
      }
      for (y=0; y<19; y++){
        if (document.getElementById(`dmg${y}`).checked){
          repairDamage(y);
        }
      }
      msg = `The ${katundianCrew[activePlayer].role} uses the hypersonic wrench to repair ${num} damage`;
      exhaustItem('Hypersonic Wrench');
      acted = true;
      break;
    case "Implosion Launcher 1":
      [acted, msg] = defeatKludde('Lashing Root', katundianCrew[activePlayer].room, 'Implosion Launcher');
      break;
    case "Implosion Launcher 2":
      for (z=0; z<6; z++){
        if (document.getElementById(`spaceZone${z}`).checked){
          acted = true;
          document.getElementById(`kluddeAmount${targetRoom}`).style.outline= "none";
          document.getElementById(`kluddeAmount${z}`).style.outline= "3px solid red";
          targetRoom = z;
          msg = `The ${katundianCrew[activePlayer].role} uses the Implosion Launcher to divert the kludde's attention towards the ${allRooms[z].room}`;
          exhaustItem('Implosion Launcher');
        }
      }
      if (!acted) {sendMessage('Select a space zone before you click confirm. \n The next kludde attack will target that space zone.');}
      break;
    case "Inferno Blaster 1":
      [acted, msg] = defeatKludde('Big Bamboo', katundianCrew[activePlayer].room, 'Inferno Blaster');
      break;
    case "Inferno Blaster 2":
      [acted, msg] = defeatKludde('Green Matter Blob', katundianCrew[activePlayer].room, 'Inferno Blaster');
      break;
    case "KEM Spray 1":
      [acted, msg] = defeatKludde('Green Matter Blob', katundianCrew[activePlayer].room, 'KEM Spray');
      break;
    case "KEM Spray 2":
      num = 0;
      for (z=0; z<katundianCrew.length; z++){
        if (katundianCrew[z].room === katundianCrew[activePlayer].room && katundianCrew[z].stagger>0){
          num += katundianCrew[z].stagger;
          katundianCrew[z].stagger = 0;
          acted = true;
        }
      }
      if (acted){
        exhaustItem('KEM Spray');
        msg = `The ${katundianCrew[activePlayer].role} uses KEM Spray. \n ${num} stagger is removed.`;
      } else{
        document.getElementById('userMessage').innerText = 'No one in your room is hungry. Chose a different action.';
        }  
      break;
    case "Lumination Stick":
      num = 0;
      for (z=0; z<6; z++){
        if (document.getElementById(`spaceZone${z}`).checked){
          msg = `The ${katundianCrew[activePlayer].role} uses the Lumination Stick.`
          acted = true;
          exhaustItem('Lumination Stick');
          for (y=allRooms[z].kludde.length-1; y>=0; y--){
            if(!(allRooms[z].kludde[y].revealed)){
              msg += '\n';
              msg += revealAKludde(allRooms[z].kludde[y], z, y);
              num++;
            }
          }
        }
      }
      acted ? msg += `\n ${num} kludde are revealed.` : sendMessage('Select a space zone, before you click confirm.');
      break;
    case "Nanite Cluster 1":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        for (y=0;y<katundianCrew[z].items.length;y++){
          if (!(katundianCrew[z].items[y].refreshed) && katundianCrew[z].items[y].charge===1){
            refreshItem(z,y);
            acted = true;
            num++;
          }
        }
      }
      if(acted){
        msg = `The ${katundianCrew[activePlayer].role} uses the nanite cluster. \n ${num} items have been refreshed.`;
        exhaustItem('Nanite Cluster');
      } else {
        document.getElementById('userMessage').innerText='There are no nanite items that need to be refreshed. \n Choose a different action.';
      }
      break;
    case "Nanite Cluster 2":
      shipEnergy += 3;
      acted = true;
      msg = `The ${katundianCrew[activePlayer].role} uses the Nanite Cluster to add 3 energy to the ship.`;
      exhaustItem('Nanite Cluster');
      break;
    case "NIP":
      actionsRemaining += 3;
      acted = true;
      msg = `The ${katundianCrew[activePlayer].role} uses NIP`;
      exhaustItem('NIP');
      break;
    case "Photon Emitter 1":
      [acted, msg] = defeatKludde('Shadow Seeder', katundianCrew[activePlayer].room, 'Photon Emitter');
      break;
    case "Photon Emitter 2":
      msg = `The ${katundianCrew[activePlayer].role} uses the Photon Emitter`;
      num = [0, [], 0];
      num[1] = JSON.parse(JSON.stringify(katundianCrew[activePlayer].infections));
      for (z=allRooms[katundianCrew[activePlayer].room].kludde.length-1; z>=0; z--){
        if (!(allRooms[katundianCrew[activePlayer].room].kludde[z].revealed) && num[0] < 2){
          msg += '\n';
          msg += revealAKludde(allRooms[katundianCrew[activePlayer].room].kludde[z], katundianCrew[activePlayer].room, z);
          num[0]++;
        }
      }
      if (num[0] === 0){
        document.getElementById('userMessage').innerText = `There are no hidden kludde attacking the ${allRooms[katundianCrew[activePlayer].room].room}. \n Photon Emitter: reveal up to 2 hidden kludde attacking your room. Treat all infections revealed this way.`;
      } else {
        acted = true;
        exhaustItem('Photon Emitter');
        num[2] = katundianCrew[activePlayer].infections.length - num[1].length;
        kluddeFleet -= num[2];
        katundianCrew[activePlayer].infections = num[1];
        msg += `\n ${num[0]} kludde were revealed and ${num[2]} infections were treated.`;
      }
      break;
    case "Pounce Suit 1":
      [acted, msg] = defeatKludde('Snake Vine', katundianCrew[activePlayer].room, 'Pounce Suit');
      break;
    case "Pounce Suit 2":
      for (z=0; z<7; z++){
        if (document.getElementById(`moveTo${z}`).checked){
          katundianCrew[activePlayer].room = z;
          characterPosition(activePlayer);
          acted = true;
          msg = `The ${katundianCrew[activePlayer].role} uses the Pounce Suit to move to the ${allRooms[katundianCrew[activePlayer].room].room}.`
          exhaustItem('Pounce Suit');
          if (infectionList[6]){
            katundianCrew[activePlayer].stagger++;
            msg += `\n The ${katundianCrew[activePlayer].role} wobbles unsteadily like they are intoxicated`;
          }
        }
      }
      break;
    case "Power Suit 1":
      [acted, msg] = defeatKludde('Big Bamboom', katundianCrew[activePlayer].room, 'Power Suit');
      break;
    case "Power Suit 2":
      actionsRemaining +=2;
      acted = true;
      msg = `The ${katundianCrew[activePlayer].role} uses the Power Suit to move to gain 2 extra actions.`;
      exhaustItem('Power Suit');
      break;
    case "Quantifoam Canister 1":
      num = 0;
      for (z=0;z<katundianCrew.length;z++){
        for (y=0;y<katundianCrew[z].items.length;y++){
          if (!(katundianCrew[z].items[y].refreshed) && katundianCrew[z].items[y].charge===3){
            refreshItem(z,y);
            acted = true;
            num++;
          }
        }
      }
      if(acted){
        msg = `The ${katundianCrew[activePlayer].role} uses the quantifoam canister. \n ${num} items have been refreshed.`;
        exhaustItem('Quantifoam Canister');
      } else {
        document.getElementById('userMessage').innerText='There are no quantifoam items that need to be refreshed. \n Choose a different action.';
      }
      break;
    case "Quantifoam Canister 2":
      shipEnergy += 3;
      acted = true;
      msg = `The ${katundianCrew[activePlayer].role} uses the Quantifoam Canister to add 3 energy to the ship.`;
      exhaustItem('Quantifoam Canister');
      break;
    case "Reboot Gloves 1":
      [acted, msg] = defeatKludde('Kaboom Pod', katundianCrew[activePlayer].room, 'Reboot Gloves');
      break;
    case "Reboot Gloves 2":
      break;
    case "Temporal Loop":
      if (clickedKludde.length>0){
        kluddeFleet -= clickedKludde[0].fleet;
        msg = `The ${katundianCrew[activePlayer].role} uses the temporal loop to defeat a ${clickedKludde[0].name}.`;
        removeKluddeIcon(clickedKludde[0],clickedKludde[1],clickedKludde[2]);
        exhaustItem('Temporal Loop');
        acted = true;
      } else {
        document.getElementById('userMessage').innerText = 'Click on a kludde to defeat, before you click confirm.';
      }
      break;
    case "Viral Erasure Tool 1":
      [acted, msg] = defeatKludde('Green Matter Blob', katundianCrew[activePlayer].room, 'Viral Erasure Tool');
      break;
    case "Viral Erasure Tool 2":
    num = 0;
      for (z=0;z<katundianCrew.length;z++){
        if (katundianCrew[z].room === katundianCrew[activePlayer].room && katundianCrew[z].infections.length>0){
          num += katundianCrew[z].infections.length;
          kluddeFleet -= katundianCrew[z].infections.length;
          katundianCrew[z].infections = [];
          acted = true;
        }
      }
      if (acted){
        msg = `The ${katundianCrew[activePlayer].role} uses the Viral Erasure tool to treats ${num} infections.`
        exhaustItem('Viral Erasure Tool');
      } else {
        sendMessage ('No one in your room is infected. \n Chose a different action.');
      }
      break;
    case "new game":
      resetTheGame();
      showSelect();
      break;
  }
  document.getElementById('confirmAction').style.display = 'inline';
  if (acted){
    hideActionOptions();
    actionsRemaining--;
    if (actionsRemaining>0) {
      possibleActions(msg);
    } else {
      if (captainCommanding){
        actionsRemaining = captainsActions;
        captainCommanding = false;
        for (z=0; z<katundianCrew.length; z++){
          if (katundianCrew[z].role==='captain'){
            activePlayer = z;
          }
        }
      }
      actionsRemaining > 0 ? possibleActions(msg) : kluddeAttack(msg);
    }
  }
}

function nextPlayerTurn(msg){
  let bool = true;
  kluddefused = true;
  activeInfections(katundianCrew[activePlayer].infections);
  if (infectionList[3]){
    for (y=0; y<katundianCrew.length; y++){
      if (!(y===activePlayer) && katundianCrew[activePlayer].room===katundianCrew[y].room) {
        katundianCrew[y].stagger++;
        msg += `\n The ${katundianCrew[y].role} chokes and coughs as spores waft from the ${katundianCrew[activePlayer].role}.`
      }
    }
  }
  if (infectionList[13] && actionsRemaining < 1){
    katundianCrew[activePlayer].stagger++;
    msg += `\n The ${katundianCrew[y].role} is turning green.`;
  }
  activePlayer++;
  if (activePlayer >= katundianCrew.length){
    activePlayer = 0;
  }
  document.getElementById('messageImage').src = emptyImage;
  activeInfections(katundianCrew[activePlayer].infections);
  if (infectionList[0]){
    bool = true;
    for (z=0; z<damageMatrix[katundianCrew[activePlayer].room].length; z++){
      if (bool && !(damage[damageMatrix[katundianCrew[activePlayer].room][z]])){
        takeDamage(damageMatrix[katundianCrew[activePlayer].room][z]);
        bool = false;
        msg += `\n The ${katundianCrew[activePlayer].role} damage the ${allrooms[katundianCrew[activePlayer].room].room} in a fit of Bio Rage.`;
      }
    }
  }
  if (infectionList[2]) {
    bool = true;
    for (y=0; y<katundianCrew.length; y++){
      if (bool && !(y===activePlayer) && katundianCrew[activePlayer].room===katundianCrew[y].room) {
        katundianCrew[activePlayer].stagger++;
        bool = false;
        msg += `\n The ${katundianCrew[activePlayer].role} shakes with BTD Visions and stares suspiciously at the ${katundianCrew[y].role}`
      }
    }
  }
  if (katundianCrew[activePlayer].stagger < 3){
    if (katundianCrew[activePlayer].stagger>1 && infectionList[14]){
      katundianCrew[activePlayer].stagger = 0;
      msg += `\n The ${katundianCrew[activePlayer].role} is suffering from whiplash, and completely staggered.`
      kluddeAttack(msg);
    } else {
      actionsRemaining = 3;
      possibleActions(msg)
    }
  } else {
    katundianCrew[activePlayer].stagger = 0;
    msg += `\n The ${katundianCrew[activePlayer].role} is completely staggered.`
    kluddeAttack(msg);
  }
}

//kluddeAttack(msg) happens at the end of every player turn, when actionsRemaining = 0. actionsRemaining is set to 4 for the next player ;p. Active player is advanced by 1. The actionSelector is set so that the only possible actions is 'Kludde attack' (later I will add a second option, 'Shields up'). userMessage tells where the kludde will attack. msg is passed from the takeAction function, telling the player what they just did before the attack. 
//The actual attack doesn't happen until the user clicks confirm, which triggers the 'Kludde attack' case in the 'takeAction' function.
function kluddeAttack(msg){ 
  while (document.getElementById('actionSelector').options.length > 0){
    document.getElementById('actionSelector').options.remove(0);
  }
  document.getElementById('userMessage').innerText = `${msg} \n The kludde are attacking the ${allRooms[targetRoom].room}! \n Each character in the ${allRooms[targetRoom].room} will take 1 stagger. \n The ship will take 1 damage for each attacking kludde. \n Press confirm to continue.`
  document.getElementById('shipNumber').innerText = shipEnergy;
  document.getElementById('kluddeNumber').innerText = kluddeFleet;
  document.getElementById('confirmAction').style.display = 'inline';
  const attackList = ["Kludde attack", "Shields up"];
  if (kluddeFleet < 1){
    document.getElementById('userMessage').innerText = `${msg} \n \n The kludde fleet has been defeated. \n You win!!`;
    attackList =[{label: "new game"}];

  }
  for (z=0; z<2; z++){
    var act = document.createElement('option');
    act.value = attackList[z];
    act.innerHTML = attackList[z];
    document.getElementById('actionSelector').appendChild(act);
  }
}

// drawKludeCard(x) shifts 1 kludde from the "kluddeDeck" array and pushes that kludde into "allRooms[x].kludde". Target room is advanced by the new kludde's ".clockwise" value, to determine which room will be attacked next. The number next to the red arrow is updated to be equal to the number of kludde attacking the room.
let targetRoom = 0;
const spacePositions =[
    [[380,130], [440,130], [560,130], [620,130], [370,50], [425,50], [480,50], [535,50], [590,50], [645,50]], //Bridge
    [[900,380], [900,270], [900,210], [900,150], [980,400], [980,345], [980,290], [980,235], [980,180], [980,125]],  //Infirmary
    [[900,650], [900,770], [900,830], [900,890], [980,625], [980,680], [980,735], [980,790], [980,845], [980,900]],  //Loading Bay
    [[380,900], [440,900], [560,900], [620,900], [370,980], [425,980], [480,980], [535,980], [590,980], [645,980]],  //Engine Room
    [[130,650], [130,770], [130,830], [130,890], [50,625], [50,680], [50,735], [50,790], [50,845], [50,900]],  //Hold
    [[130,380], [130,270], [130,210], [130,150], [50,400], [50,345], [50,290], [50,235], [50,180], [50,125]]   //Galley
]
function drawKluddeCard(z){
  document.getElementById(`kluddeAmount${targetRoom}`).style.outline= "none";
  allRooms[z].kludde.push(kluddeDeck[0]);
  document.getElementById(`kluddeAmount${z}`).innerText = allRooms[z].kludde.length;
  var kld = document.createElement('img');
  kld.src = hiddenKludde;
  kld.style.position = 'absolute';
  kld.style.left =`${spacePositions[z][allRooms[z].kludde.length-1][0]}px`
  kld.style.top =`${spacePositions[z][allRooms[z].kludde.length-1][1]}px`
  kld.style.height = '50px';
  kld.style.width = '50px';
  kld.id= JSON.parse(JSON.stringify(`${z}${kluddeDeck[0].name}${kluddeDeck[0].clockwise}`));
  kld.addEventListener('click', () => {kluddeDescription(kld.id)} ); 
  document.getElementById('kluddeOverlay').appendChild(kld);
  targetRoom += kluddeDeck[0].clockwise;
  targetRoom > 5 ? targetRoom -= 6 : null;
  document.getElementById(`kluddeAmount${targetRoom}`).style.outline= "3px solid red";
  kluddeDeck.shift();
}

// revealAKludde(kld) takes a hidden kludde and reveals it. kld is a specific kludde inside allRooms[z].kludde. 
function revealAKludde(kld, rmNum, ndx){
  document.getElementById('messageImage').src = kld.picture;
  switch (kld.type){
    case ('defeatable'):
      kld.revealed = true;
      document.getElementById(`${rmNum}${kld.name}${kld.clockwise}`).src = kld.icon;
      msg = `The ${katundianCrew[activePlayer].role} reveals a ${kld.name} outside the ${allRooms[rmNum].room}.`;
      break;
    case ('infection'):
      katundianCrew[activePlayer].infections.push(kld);
      msg = `The ${katundianCrew[activePlayer].role} reveals a cloud of infectious spores. \n The ${katundianCrew[activePlayer].role} is infected with ${kld.name}.`;
      removeKluddeIcon(kld, rmNum, ndx);
      if (infectionList[7]) {
        katundianCrew[activePlayer].stagger += 3;
        msg += `\n The ${katundianCrew[activePlayer].role} collapses from kludde poisoning.`
      }
      break;
    case('event'):
      switch(allRooms[rmNum].kludde[ndx].name){
        case('Glare'):
          msg = `The ${katundianCrew[activePlayer].role} reveals a glare. \n The kludde mothership looks away akwardly when they lock eyes.`;
          break;
        case('Electrostatic Shock'):
          if (damage[katundianCrew[activePlayer].room]){
            shipEnergy--;
            msg = `The ${katundianCrew[activePlayer].role} reveals an electrostatic shock. \n The ship loses 1 energy.`;
          } else{
            takeDamage(katundianCrew[activePlayer].room);
            msg = `The ${katundianCrew[activePlayer].role} reveals an electrostatic shock. \n ZAP! It damages the ${allRooms[katundianCrew[activePlayer].room].action.label}.`;
          }
          break;
        case('Spicy Air'):
          katundianCrew[activePlayer].stagger++;
          msg = `The ${katundianCrew[activePlayer].role} reveals spicy air. \n The ${katundianCrew[activePlayer].role} is staggered.`;
          break;
      }
      removeKluddeIcon(kld, rmNum, ndx);
      break;
  }
  if (infectionList[1]) {
    katundianCrew[activePlayer].stagger++;
    msg += `\n The ${katundianCrew[activePlayer].role}'s knees go weak with Botonophobia.`
  }
  return(msg);
}

// kluddeDescription(kldID) is called when the player clicks on a kludde icon. It gives the player information about the kludde they clicked.
let clickedKludde =[];
function kluddeDescription(kldID){
  let rmNum = 0;
  let kldClock = 0;
  let kldName = '';
  rmNum = +kldID.charAt(0);
  kldClock = +kldID.charAt(kldID.length-1);
  kldName = kldID.substr(1,kldID.length-2);
  for (z=0; z<allRooms[rmNum].kludde.length; z++){
    if (kldName===allRooms[rmNum].kludde[z].name && kldClock===allRooms[rmNum].kludde[z].clockwise){
      if(allRooms[rmNum].kludde[z].revealed){
        document.getElementById('userMessage').innerText = `You clicked on a ${allRooms[rmNum].kludde[z].name} that is attacking the ${allRooms[rmNum].room}.`
        document.getElementById('userMessage').src = allRooms[rmNum].kludde[z].picture;
      clickedKludde[0] = allRooms[rmNum].kludde[z];
      clickedKludde[1] = rmNum;
      clickedKludde[2] = z;
      } else{
        rmNum===katundianCrew[activePlayer].room ? document.getElementById('userMessage').innerText = `You clicked on a hidden kludde outside the ${allRooms[rmNum].room}\n You can "Peak" at this kludde to reveal it.` : document.getElementById('userMessage').innerText = `You clicked on a hidden kludde outside the ${allRooms[rmNum].room}\n If you were in the ${allRooms[rmNum].room} you could "Peak" at this kludde to reveal it.`
      }
    }
  }
}

// defeatKludde(kld, rmNum, z) defeats 1 specific kludde with the name 'kldName' in the space zone given by rmNumb
function defeatKludde(kldName, rmNum, itmName){
  let msg = '';
  for (z=0; z<allRooms[rmNum].kludde.length; z++){
    if (allRooms[rmNum].kludde[z].name=== kldName && allRooms[rmNum].kludde[z].revealed){
      kluddeFleet -= allRooms[rmNum].kludde[z].fleet;
      removeKluddeIcon(allRooms[rmNum].kludde[z], rmNum, z);
      msg = `The ${katundianCrew[activePlayer].role} uses the ${itmName} to defeat a ${kldName}.`
      exhaustItem(itmName);
      if (infectionList[10]){
        katundianCrew[activePlayer].stagger++
        msg += `\n The ${katundianCrew[activePlayer].role} writhes in pain when they harm a kludde.`;
      }
      return [true, msg];
    }
  }
  document.getElementById('userMessage').innerText = `There are no revealed ${kldName} attacking the ${allRooms[rmNum].room} \n Choose a different action.`;
  return [false, ''];
}

// removeKluddeIcon removes the kludde images from the space zone and removes the kludde from the allRooms[rmNum].kludde. This is separate from the defeatKludde function because certain kludde icons can be removed without defeating the kludde.
function removeKluddeIcon(kld, rmNum, ndx){
  allRooms[rmNum].kludde.splice(ndx,1);
  document.getElementById(`${rmNum}${kld.name}${kld.clockwise}`).remove();
  for (a=0; a<allRooms[rmNum].kludde.length; a++){
    document.getElementById(`${rmNum}${allRooms[rmNum].kludde[a].name}${allRooms[rmNum].kludde[a].clockwise}`).style.left = `${spacePositions[rmNum][a][0]}px`;
    document.getElementById(`${rmNum}${allRooms[rmNum].kludde[a].name}${allRooms[rmNum].kludde[a].clockwise}`).style.top = `${spacePositions[rmNum][a][1]}px`;
  }
  document.getElementById(`kluddeAmount${rmNum}`).innerText = allRooms[rmNum].kludde.length;
}

// 'damageMatrix' is an array of rooms where each room has 4 posible 'damage' index's. 'damage' is an array of boolean values which indicates whether each system or door of the ship is damaged. damage[0] is the 'Grabby Paws'. damage[7] through damage[9] are the doors leading out of the bridge. damageMatrix[0] represents the Bridge, hence [0,7,8,9]
const damageMatrix = [[0,7,8,9], [1,9,10,11], [2,11,12,13], [3,13,14,15], [4,15,16,17], [5,17,18,7], [6,8,10,12,14,16,18]];
function attackDamage(num){
  let rand = Math.floor(Math.random() *3);
  rand = Math.floor(Math.random() *3);
  let spotsLeft = 4;
  spotsLeft = 4;
  for (z=0;z<4;z++){
    if(damage[damageMatrix[targetRoom][z]]){spotsLeft--};
  }
  if (num < spotsLeft){
    while (num > 0) {
      if (rand>=4) {rand=0};
      if(damage[damageMatrix[targetRoom][rand]]){
        rand++;
      } else{
        takeDamage(damageMatrix[targetRoom][rand]);
        rand++
        num--;
      }
   }
  } else{
    for(y=0;y<4;y++){
      takeDamage(damageMatrix[targetRoom][y]);
    }
    num -= spotsLeft;
    shipEnergy -= num;
  }
}

// takeDamage(x) puts damage onto the ship, first by setting damage[x] = true, then by displaying the damagePicture. repairDamage(x) removes damage from the ship, by doing the inverse.
function takeDamage(ndx){
  damage[ndx] = true;
  document.getElementById(`damagePicture${ndx}`).style.display = 'block';
}
function repairDamage(ndx){
  damage[ndx] = false;
  document.getElementById(`damagePicture${ndx}`).style.display = 'none';
}

//exhaustItem(itmName) exhausts a specific item, by setting .refreshed to false
let kluddefused = true;
function exhaustItem(itmName) {
  for (b=0; b<katundianCrew[activePlayer].items.length; b++){
    if(itmName===katundianCrew[activePlayer].items[b].name){
      katundianCrew[activePlayer].items[b].refreshed = false;
      if (katundianCrew[activePlayer].items[b].charge>0){
        document.getElementById(`${activePlayer}${itmName}`).src = katundianCrew[activePlayer].items[b].grayIcon;
      } else {
        katundianCrew[activePlayer].items.splice(b,1);
        document.getElementById(`${activePlayer}${itmName}`).remove();
        for (c=0; c<katundianCrew[activePlayer].items.length; c++) {
          document.getElementById(`${activePlayer}${katundianCrew[activePlayer].items[c].name}`).style.left = `${10+c*110}px`;
          document.getElementById(`${activePlayer}${katundianCrew[activePlayer].items[c].name}`).style.top = `${10+activePlayer*110}px`;
        }
      }
    }
  }
  if (infectionList[11]) {kluddefused = false;}
}

function refreshItem(crNum, itNum){
  katundianCrew[crNum].items[itNum].refreshed = true;
  document.getElementById(`${crNum}${katundianCrew[crNum].items[itNum].name}`).src = katundianCrew[crNum].items[itNum].icon;
}

function scanFor(kldName, itmName){
  let num = 0;
  num = 0;
  let msg = '';
  for (z=0; z<allRooms[katundianCrew[activePlayer].room].kludde.length; z++){
    if (kldName===allRooms[katundianCrew[activePlayer].room].kludde[z].name && allRooms[katundianCrew[activePlayer].room].kludde[z].revealed){
      num++;
    }
  }
  num > 0 ? msg = `${itmName}: Press confirm to defeat 1 ${kldName}` : msg = `There are no revealed ${kldName}s attacking the ${allRooms[katundianCrew[activePlayer].room].room}. \n \n ${itmName}: defeat 1 revealed ${kldName} that is attacking your room.`;
  document.getElementById('userMessage').innerText = msg;
  for (y=0; y<katundianCrew[activePlayer].items.length; y++){
    if (itmName === katundianCrew[activePlayer].items[y].name){
      document.getElementById('messageImage').src = katundianCrew[activePlayer].items[y].picture;
    }
  }
}

// activeInfections(infs) sets the values for infectionList based on the active player's infections. If the active player has Botonophobia for example, infectionList[1] gets set to true. Infection list is used different parts of the code to penalize the infected character. 
let infectionList = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
function activeInfections(infs) {
  infectionList = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  for (c=0; c<infs.length; c++){
    switch(infs[c].name){
      case 'Bio Rage':
        infectionList[0] = true;
        break;
      case 'Botanophobia':
        infectionList[1] = true;
        break;
      case 'BTD Visions':
        infectionList[2] = true;
        break;
      case 'Crop Duster':
        infectionList[3] = true;
        break;
      case 'Frazzled':
        infectionList[4] = true;
        break;
      case 'Fung Eye':
        infectionList[5] = true;
        break;
      case 'Intoxicated':
        infectionList[6] = true;
        break;
      case 'Destruction':
        infectionList[7] = true;
        break;
      case 'Kludde Poisoning':
        infectionList[8] = true;
        break;
      case 'Kludde Sensitivity':
        infectionList[9] = true;
        break;
      case 'Kludde Vengence':
        infectionList[10] = true;
        break;
      case 'Kluddefused':
        infectionList[11] = true;
        break;
      case 'Overwhelmed':
        infectionList[12] = true;
        break;
      case 'Turning Green':
        infectionList[13] = true;
        break;
      case 'Whiplash':
        infectionList[14] = true;
        break;
    }
  if (!(infectionList[11])) {kluddefused = true;}
  }
}

// createInventory adds the character images and starting item images to the inventory. 
function createInventory() {
  for (z=0; z<katundianCrew.length; z++){
    makeCrewIcon(z);
    makeItemIcon(z,0);
  }
  document.getElementById('inventoryDisplay').style.height = `${100+110*katundianCrew.length}px`;
  document.getElementById('itemScrollbox').style.height = `${20+110*katundianCrew.length}px`;
}

// makeCrewIcon(crNum) makes an icon in the inventory screen for a specific crew member.
function makeCrewIcon(crNum){
  var pic = document.createElement('img');
  pic.src = katundianCrew[crNum].picture;
  pic.style.position = 'absolute';
  pic.style.left = '50px';
  pic.style.top = `${50+crNum*110}px`;
  pic.style.width = '100px';
  pic.style.height = '100px';
  document.getElementById('inventoryDisplay').appendChild(pic);
}

// makeItemIcon(crNum, itNum) makes an icon in the inventory screen for a specific item. The item is located at katundianCrew[crNum].items[itNum]
function makeItemIcon(crNum, itNum) {
  var pic = document.createElement('img');
  pic.src = katundianCrew[crNum].items[itNum].icon;
  pic.style.position = 'absolute';
  pic.style.left = `${10+itNum*110}px`;
  pic.style.top = `${10+crNum*110}px`;
  pic.style.width = '100px';
  pic.style.height = '100px';
  pic.id = JSON.parse(JSON.stringify(`${crNum}${katundianCrew[crNum].items[itNum].name}`));
  console.log(pic.id);
  pic.addEventListener('click', () => {clickInventory(pic.id)} ); 
  document.getElementById('itemScrollbox').appendChild(pic);
}

// clickInventory(picID) shows the player information about the item they click on in their inventory.
function clickInventory(picID) {
  let num = 0;
  let itName = picID.slice(1);
  console.log(picID);
  num = +picID.charAt(0);
  for (z=0; z<katundianCrew[num].items.length; z++){
    if (itName===katundianCrew[num].items[z].name){
      document.getElementById('userMessage').innerText = katundianCrew[num].items[z].description;
      document.getElementById('messageImage').src = katundianCrew[num].items[z].picture;
    }
  }
}

// This allows the user to drag and drop the inventory
var offset = [0,0]
var inventoryBox = document.getElementById ("inventoryDisplay");
var boxMoves = false;
inventoryBox.addEventListener('mousedown', function(e) {
    boxMoves = true;
    offset = [
        inventoryBox.offsetLeft - e.clientX,
        inventoryBox.offsetTop - e.clientY
    ];
}, true);
document.addEventListener('mouseup', function() {
    boxMoves = false;
}, true);
document.addEventListener('mousemove', function(e) {
    event.preventDefault();
    if (boxMoves) {
        inventoryBox.style.left = (e.clientX + offset[0]) + 'px';
        inventoryBox.style.top  = (e.clientY + offset[1]) + 'px';
    }
}, true);
