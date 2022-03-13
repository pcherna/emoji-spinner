const emojiList = [

    // Smileys and People

    "😀", // Grinning Face
    "😃", // Grinning Face with Big Eyes
    "😄", // Grinning Face with Smiling Eyes
    "😁", // Beaming Face with Smiling Eyes
    "😆", // Grinning Squinting Face
    "😅", // Grinning Face with Sweat
    "🤣", // Rolling on the Floor Laughing
    "😂", // Face with Tears of Joy
    "🙂", // Slightly Smiling Face
    "🙃", // Upside-Down Face
    "😉", // Winking Face
    "😊", // Smiling Face with Smiling Eyes
    "😇", // Smiling Face with Halo
    "🥰", // Smiling Face with Hearts
    "😍", // Smiling Face with Heart-Eyes
    "🤩", // Star-Struck
    "😘", // Face Blowing a Kiss
    "😗", // Kissing Face
    "😚", // Kissing Face with Closed Eyes
    "😙", // Kissing Face with Smiling Eyes
    "😋", // Face Savoring Food
    "😛", // Face with Tongue
    "😜", // Winking Face with Tongue
    "🤪", // Zany Face
    "😝", // Squinting Face with Tongue
    "🤗", // Smiling Face with Open Hands
    "🤭", // Face with Hand Over Mouth
    "🤫", // Shushing Face
    "🤔", // Thinking Face
    "🤐", // Zipper-Mouth Face
    "🤨", // Face with Raised Eyebrow
    "😐", // Neutral Face
    "😑", // Expressionless Face
    "😶", // Face Without Mouth
    "😏", // Smirking Face
    "😒", // Unamused Face
    "🙄", // Face with Rolling Eyes
    "😬", // Grimacing Face
    "🤥", // Lying Face
    "😌", // Relieved Face
    "😔", // Pensive Face
    "😪", // Sleepy Face
    "🤤", // Drooling Face
    "😴", // Sleeping Face
    "😷", // Face with Medical Mask
    "🤒", // Face with Thermometer
    "🤕", // Face with Head-Bandage
    "🤢", // Nauseated Face
    "🤧", // Sneezing Face
    "🥵", // Hot Face
    "🥶", // Cold Face
    "🥴", // Woozy Face
    "😵", // Face with Crossed-Out Eyes
    "🤯", // Exploding Head
    "🤠", // Cowboy Hat Face
    "🥳", // Partying Face
    "😎", // Smiling Face with Sunglasses
    "🤓", // Nerd Face
    "🧐", // Face with Monocle
    "😕", // Confused Face
    "😟", // Worried Face
    "🙁", // Slightly Frowning Face
    "😮", // Face with Open Mouth
    "😯", // Hushed Face
    "😲", // Astonished Face
    "😳", // Flushed Face
    "🥺", // Pleading Face
    "😦", // Frowning Face with Open Mouth
    "😧", // Anguished Face
    "😨", // Fearful Face
    "😰", // Anxious Face with Sweat
    "😥", // Sad but Relieved Face
    "😢", // Crying Face
    "😭", // Loudly Crying Face
    "😱", // Face Screaming in Fear
    "😖", // Confounded Face
    "😣", // Persevering Face
    "😞", // Disappointed Face
    "😓", // Downcast Face with Sweat
    "😩", // Weary Face
    "😫", // Tired Face
    "😤", // Face with Steam From Nose
    "😡", // Enraged Face
    "😠", // Angry Face
    "💀", // Skull
    "🤡", // Clown Face
    "👹", // Ogre
    "👺", // Goblin
    "👻", // Ghost
    "👽", // Alien
    "👾", // Alien Monster
    "🤖", // Robot
    "😺", // Grinning Cat
    "😸", // Grinning Cat with Smiling Eyes
    "😹", // Cat with Tears of Joy
    "😻", // Smiling Cat with Heart-Eyes
    "😼", // Cat with Wry Smile
    "😽", // Kissing Cat
    "🙀", // Weary Cat
    "😿", // Crying Cat
    "😾", // Pouting Cat
    "💋", // Kiss Mark
    "👋", // Waving Hand
    "🤚", // Raised Back of Hand
    "🖐️", // Hand with Fingers Splayed
    "✋", // Raised Hand
    "🖖", // Vulcan Salute
    "👌", // OK Hand
    "✌️", // Victory Hand
    "🤞", // Crossed Fingers
    "🤟", // Love-You Gesture
    "🤘", // Sign of the Horns
    "🤙", // Call Me Hand
    "👈", // Backhand Index Pointing Left
    "👉", // Backhand Index Pointing Right
    "👆", // Backhand Index Pointing Up
    "👇", // Backhand Index Pointing Down
    "☝️", // Index Pointing Up
    "👍", // Thumbs Up
    "👎", // Thumbs Down
    "✊", // Raised Fist
    "👊", // Oncoming Fist
    "🤛", // Left-Facing Fist
    "🤜", // Right-Facing Fist
    "👏", // Clapping Hands
    "🙌", // Raising Hands
    "👐", // Open Hands
    "🤲", // Palms Up Together
    "🤝", // Handshake
    "🙏", // Folded Hands
    "✍️", // Writing Hand
    "💅", // Nail Polish
    "🤳", // Selfie
    "💪", // Flexed Biceps
    "🦵", // Leg
    "🦶", // Foot
    "👂", // Ear
    "👃", // Nose
    "🧠", // Brain
    "🦷", // Tooth
    "🦴", // Bone
    "👀", // Eyes
    "👁️", // Eye
    "👅", // Tongue
    "👄", // Mouth
    "👶", // Baby
    "🧒", // Child
    "👦", // Boy
    "👧", // Girl
    "🧑", // Person
    "👱", // Person: Blond Hair
    "👨", // Man
    "🧔", // Person: Beard
    "👨‍🦰", // Man: Red Hair
    "👨‍🦱", // Man: Curly Hair
    "👨‍🦳", // Man: White Hair
    "👨‍🦲", // Man: Bald
    "👩", // Woman
    "👩‍🦰", // Woman: Red Hair
    "👩‍🦱", // Woman: Curly Hair
    "👩‍🦳", // Woman: White Hair
    "👩‍🦲", // Woman: Bald
    "👱‍♀️", // Woman: Blond Hair
    "👱‍♂️", // Man: Blond Hair
    "🧓", // Older Person
    "👴", // Old Man
    "👵", // Old Woman
    "🙍", // Person Frowning
    "🙍‍♂️", // Man Frowning
    "🙍‍♀️", // Woman Frowning
    "🙎", // Person Pouting
    "🙎‍♂️", // Man Pouting
    "🙎‍♀️", // Woman Pouting
    "🙅", // Person Gesturing No
    "🙅‍♂️", // Man Gesturing No
    "🙅‍♀️", // Woman Gesturing No
    "🙆", // Person Gesturing OK
    "🙆‍♂️", // Man Gesturing OK
    "🙆‍♀️", // Woman Gesturing OK
    "💁", // Person Tipping Hand
    "💁‍♂️", // Man Tipping Hand
    "💁‍♀️", // Woman Tipping Hand
    "🙋", // Person Raising Hand
    "🙋‍♂️", // Man Raising Hand
    "🙋‍♀️", // Woman Raising Hand
    "🙇", // Person Bowing
    "🙇‍♂️", // Man Bowing
    "🙇‍♀️", // Woman Bowing
    "🤦", // Person Facepalming
    "🤦‍♂️", // Man Facepalming
    "🤦‍♀️", // Woman Facepalming
    "🤷", // Person Shrugging
    "🤷‍♂️", // Man Shrugging
    "🤷‍♀️", // Woman Shrugging
    "👨‍⚕️", // Man Health Worker
    "👩‍⚕️", // Woman Health Worker
    "👨‍🎓", // Man Student
    "👩‍🎓", // Woman Student
    "👨‍🏫", // Man Teacher
    "👩‍🏫", // Woman Teacher
    "👨‍⚖️", // Man Judge
    "👩‍⚖️", // Woman Judge
    "👨‍🌾", // Man Farmer
    "👩‍🌾", // Woman Farmer
    "👨‍🍳", // Man Cook
    "👩‍🍳", // Woman Cook
    "👨‍🔧", // Man Mechanic
    "👩‍🔧", // Woman Mechanic
    "👨‍🏭", // Man Factory Worker
    "👩‍🏭", // Woman Factory Worker
    "👨‍💼", // Man Office Worker
    "👩‍💼", // Woman Office Worker
    "👨‍🔬", // Man Scientist
    "👩‍🔬", // Woman Scientist
    "👨‍💻", // Man Technologist
    "👩‍💻", // Woman Technologist
    "👨‍🎤", // Man Singer
    "👩‍🎤", // Woman Singer
    "👨‍🎨", // Man Artist
    "👩‍🎨", // Woman Artist
    "👨‍✈️", // Man Pilot
    "👩‍✈️", // Woman Pilot
    "👨‍🚀", // Man Astronaut
    "👩‍🚀", // Woman Astronaut
    "👨‍🚒", // Man Firefighter
    "👩‍🚒", // Woman Firefighter
    "👮", // Police Officer
    "👮‍♂️", // Man Police Officer
    "👮‍♀️", // Woman Police Officer
    "🕵️", // Detective
    "🕵️‍♂️", // Man Detective
    "🕵️‍♀️", // Woman Detective
    "💂", // Guard
    "💂‍♂️", // Man Guard
    "💂‍♀️", // Woman Guard
    "👷", // Construction Worker
    "👷‍♂️", // Man Construction Worker
    "👷‍♀️", // Woman Construction Worker
    "🤴", // Prince
    "👸", // Princess
    "👳", // Person Wearing Turban
    "👳‍♂️", // Man Wearing Turban
    "👳‍♀️", // Woman Wearing Turban
    "👲", // Person with Skullcap
    "🧕", // Woman with Headscarf
    "🤵", // Person in Tuxedo
    "👰", // Person with Veil
    "🤰", // Pregnant Woman
    "🤱", // Breast-Feeding
    "👼", // Baby Angel
    "🎅", // Santa Claus
    "🤶", // Mrs. Claus
    "🦸", // Superhero
    "🦸‍♂️", // Man Superhero
    "🦸‍♀️", // Woman Superhero
    "🦹", // Supervillain
    "🦹‍♂️", // Man Supervillain
    "🦹‍♀️", // Woman Supervillain
    "🧙", // Mage
    "🧙‍♂️", // Man Mage
    "🧙‍♀️", // Woman Mage
    "🧚", // Fairy
    "🧚‍♂️", // Man Fairy
    "🧚‍♀️", // Woman Fairy
    "🧛", // Vampire
    "🧛‍♂️", // Man Vampire
    "🧛‍♀️", // Woman Vampire
    "🧜", // Merperson
    "🧜‍♂️", // Merman
    "🧜‍♀️", // Mermaid
    "🧝", // Elf
    "🧝‍♂️", // Man Elf
    "🧝‍♀️", // Woman Elf
    "🧞", // Genie
    "🧞‍♂️", // Man Genie
    "🧞‍♀️", // Woman Genie
    "🧟", // Zombie
    "🧟‍♂️", // Man Zombie
    "🧟‍♀️", // Woman Zombie
    "💆", // Person Getting Massage
    "💆‍♂️", // Man Getting Massage
    "💆‍♀️", // Woman Getting Massage
    "💇", // Person Getting Haircut
    "💇‍♂️", // Man Getting Haircut
    "💇‍♀️", // Woman Getting Haircut
    "🚶", // Person Walking
    "🚶‍♂️", // Man Walking
    "🚶‍♀️", // Woman Walking
    "🏃", // Person Running
    "🏃‍♂️", // Man Running
    "🏃‍♀️", // Woman Running
    "💃", // Woman Dancing
    "🕺", // Man Dancing
    "🕴️", // Person in Suit Levitating
    "👯", // People with Bunny Ears
    "👯‍♂️", // Men with Bunny Ears
    "👯‍♀️", // Women with Bunny Ears
    "🧖", // Person in Steamy Room
    "🧖‍♂️", // Man in Steamy Room
    "🧖‍♀️", // Woman in Steamy Room
    "🧘", // Person in Lotus Position
    "👭", // Women Holding Hands
    "👫", // Woman and Man Holding Hands
    "👬", // Men Holding Hands
    "💏", // Kiss
    "👩‍❤️‍💋‍👨", // Kiss: Woman, Man
    "👨‍❤️‍💋‍👨", // Kiss: Man, Man
    "👩‍❤️‍💋‍👩", // Kiss: Woman, Woman
    "💑", // Couple with Heart
    "👩‍❤️‍👨", // Couple with Heart: Woman, Man
    "👨‍❤️‍👨", // Couple with Heart: Man, Man
    "👩‍❤️‍👩", // Couple with Heart: Woman, Woman
    "👪", // Family
    "👨‍👩‍👦", // Family: Man, Woman, Boy
    "👨‍👩‍👧", // Family: Man, Woman, Girl
    "👨‍👩‍👧‍👦", // Family: Man, Woman, Girl, Boy
    "👨‍👩‍👦‍👦", // Family: Man, Woman, Boy, Boy
    "👨‍👩‍👧‍👧", // Family: Man, Woman, Girl, Girl
    "👨‍👨‍👦", // Family: Man, Man, Boy
    "👨‍👨‍👧", // Family: Man, Man, Girl
    "👨‍👨‍👧‍👦", // Family: Man, Man, Girl, Boy
    "👨‍👨‍👦‍👦", // Family: Man, Man, Boy, Boy
    "👨‍👨‍👧‍👧", // Family: Man, Man, Girl, Girl
    "👩‍👩‍👦", // Family: Woman, Woman, Boy
    "👩‍👩‍👧", // Family: Woman, Woman, Girl
    "👩‍👩‍👧‍👦", // Family: Woman, Woman, Girl, Boy
    "👩‍👩‍👦‍👦", // Family: Woman, Woman, Boy, Boy
    "👩‍👩‍👧‍👧", // Family: Woman, Woman, Girl, Girl
    "👨‍👦", // Family: Man, Boy
    "👨‍👦‍👦", // Family: Man, Boy, Boy
    "👨‍👧", // Family: Man, Girl
    "👨‍👧‍👦", // Family: Man, Girl, Boy
    "👨‍👧‍👧", // Family: Man, Girl, Girl
    "👩‍👦", // Family: Woman, Boy
    "👩‍👦‍👦", // Family: Woman, Boy, Boy
    "👩‍👧", // Family: Woman, Girl
    "👩‍👧‍👦", // Family: Woman, Girl, Boy
    "👩‍👧‍👧", // Family: Woman, Girl, Girl
    "🗣️", // Speaking Head
    "👤", // Bust in Silhouette
    "👥", // Busts in Silhouette
    "👣", // Footprints
    "🧳", // Luggage
    "🌂", // Closed Umbrella
    "☂️", // Umbrella
    "🎃", // Jack-O-Lantern
    "🧵", // Thread
    "🧶", // Yarn
    "👓", // Glasses
    "🕶️", // Sunglasses
    "🥽", // Goggles
    "🥼", // Lab Coat
    "👔", // Necktie
    "👕", // T-Shirt
    "👖", // Jeans
    "🧣", // Scarf
    "🧤", // Gloves
    "🧥", // Coat
    "🧦", // Socks
    "👗", // Dress
    "👘", // Kimono
    "👙", // Bikini
    "👚", // Woman’s Clothes
    "👛", // Purse
    "👜", // Handbag
    "👝", // Clutch Bag
    "🎒", // Backpack
    "👞", // Man’s Shoe
    "👟", // Running Shoe
    "🥾", // Hiking Boot
    "🥿", // Flat Shoe
    "👠", // High-Heeled Shoe
    "👡", // Woman’s Sandal
    "👢", // Woman’s Boot
    "👑", // Crown
    "👒", // Woman’s Hat
    "🎩", // Top Hat
    "🎓", // Graduation Cap
    "🧢", // Billed Cap
    "⛑️", // Rescue Worker’s Helmet
    "💄", // Lipstick
    "💍", // Ring
    "💼", // Briefcase
    // "🥲", // Smiling Face with Tear
    // "😵‍💫", // Face with Spiral Eyes
    // "🥸", // Disguised Face
    // "🥱", // Yawning Face
    // "🦾", // Mechanical Arm
    // "🦿", // Mechanical Leg
    // "🦻", // Ear with Hearing Aid
    // "🫀", // Anatomical Heart
    // "🫁", // Lungs
    // "🧏‍♂️", // Deaf Man
    // "🧏‍♀️", // Deaf Woman
    // "🥷", // Ninja
    // "🧍‍♂️", // Man Standing
    // "🧍‍♀️", // Woman Standing
    // "🧎‍♂️", // Man Kneeling
    // "🧎‍♀️", // Woman Kneeling
    // "👨‍🦯", // Man with White Cane
    // "👩‍🦯", // Woman with White Cane
    // "👨‍🦼", // Man in Motorized Wheelchair
    // "👩‍🦼", // Woman in Motorized Wheelchair
    // "👨‍🦽", // Man in Manual Wheelchair
    // "👩‍🦽", // Woman in Manual Wheelchair
    // "🦺", // Safety Vest
    // "🥻", // Sari
    // "🩱", // One-Piece Swimsuit
    // "🩲", // Briefs
    // "🩳", // Shorts
    // "🩴", // Thong Sandal
    // "🩰", // Ballet Shoes
    // "🪖", // Military Helmet


    // Animals & Nature

    "🙈", // See-No-Evil Monkey
    "🙉", // Hear-No-Evil Monkey
    "🙊", // Speak-No-Evil Monkey
    "💥", // Collision
    "💫", // Dizzy
    "💦", // Sweat Droplets
    "🐵", // Monkey Face
    "🐒", // Monkey
    "🦍", // Gorilla
    "🐶", // Dog Face
    "🐕", // Dog
    "🐩", // Poodle
    "🐺", // Wolf
    "🦊", // Fox
    "🦝", // Raccoon
    "🐱", // Cat Face
    "🐈", // Cat
    "🦁", // Lion
    "🐯", // Tiger Face
    "🐅", // Tiger
    "🐆", // Leopard
    "🐴", // Horse Face
    "🐎", // Horse
    "🦄", // Unicorn
    "🦓", // Zebra
    "🦌", // Deer
    "🐮", // Cow Face
    "🐂", // Ox
    "🐄", // Cow
    "🐷", // Pig Face
    "🐖", // Pig
    "🐗", // Boar
    "🐏", // Ram
    "🐑", // Ewe
    "🐐", // Goat
    "🐪", // Camel
    "🐫", // Two-Hump Camel
    "🦙", // Llama
    "🦒", // Giraffe
    "🐘", // Elephant
    "🦏", // Rhinoceros
    "🦛", // Hippopotamus
    "🐭", // Mouse Face
    "🐁", // Mouse
    "🐀", // Rat
    "🐹", // Hamster
    "🐰", // Rabbit Face
    "🐇", // Rabbit
    "🐿️", // Chipmunk
    "🦔", // Hedgehog
    "🦇", // Bat
    "🐻", // Bear
    "🐨", // Koala
    "🐼", // Panda
    "🦘", // Kangaroo
    "🦡", // Badger
    "🐾", // Paw Prints
    "🦃", // Turkey
    "🐔", // Chicken
    "🐓", // Rooster
    "🐣", // Hatching Chick
    "🐥", // Front-Facing Baby Chick
    "🐦", // Bird
    "🐧", // Penguin
    "🕊️", // Dove
    "🦅", // Eagle
    "🦆", // Duck
    "🦢", // Swan
    "🦉", // Owl
    "🦚", // Peacock
    "🦜", // Parrot
    "🐸", // Frog
    "🐊", // Crocodile
    "🐢", // Turtle
    "🦎", // Lizard
    "🐍", // Snake
    "🐲", // Dragon Face
    "🐉", // Dragon
    "🦕", // Sauropod
    "🦖", // T-Rex
    "🐳", // Spouting Whale
    "🐋", // Whale
    "🐬", // Dolphin
    "🐟", // Fish
    "🐠", // Tropical Fish
    "🐡", // Blowfish
    "🦈", // Shark
    "🐙", // Octopus
    "🐚", // Spiral Shell
    "🐌", // Snail
    "🦋", // Butterfly
    "🐛", // Bug
    "🐜", // Ant
    "🐝", // Honeybee
    "🐞", // Lady Beetle
    "🦗", // Cricket
    "🕷️", // Spider
    "🕸️", // Spider Web
    "🦂", // Scorpion
    "🦟", // Mosquito
    "🦠", // Microbe
    "💐", // Bouquet
    "🌸", // Cherry Blossom
    "🌹", // Rose
    "🥀", // Wilted Flower
    "🌺", // Hibiscus
    "🌻", // Sunflower
    "🌼", // Blossom
    "🌷", // Tulip
    "🌱", // Seedling
    "🌲", // Evergreen Tree
    "🌳", // Deciduous Tree
    "🌴", // Palm Tree
    "🌵", // Cactus
    "🌾", // Sheaf of Rice
    "🌿", // Herb
    "☘️", // Shamrock
    "🍀", // Four Leaf Clover
    "🍁", // Maple Leaf
    "🍂", // Fallen Leaf
    "🍃", // Leaf Fluttering in Wind
    "🍄", // Mushroom
    "🌰", // Chestnut
    "🦀", // Crab
    "🦞", // Lobster
    "🦐", // Shrimp
    "🦑", // Squid
    "🌍", // Globe Showing Europe-Africa
    "🌎", // Globe Showing Americas
    "🌏", // Globe Showing Asia-Australia
    "🌙", // Crescent Moon
    "🌚", // New Moon Face
    "🌛", // First Quarter Moon Face
    "🌜", // Last Quarter Moon Face
    "☀️", // Sun
    "🌝", // Full Moon Face
    "🌞", // Sun with Face
    "⭐", // Star
    "🌟", // Glowing Star
    "🌠", // Shooting Star
    "☁️", // Cloud
    "⛅", // Sun Behind Cloud
    "⛈️", // Cloud with Lightning and Rain
    "🌤️", // Sun Behind Small Cloud
    "🌥️", // Sun Behind Large Cloud
    "🌦️", // Sun Behind Rain Cloud
    "🌧️", // Cloud with Rain
    "🌨️", // Cloud with Snow
    "🌩️", // Cloud with Lightning
    "🌪️", // Tornado
    "🌬️", // Wind Face
    "🌈", // Rainbow
    "☂️", // Umbrella
    "☔", // Umbrella with Rain Drops
    "⚡", // High Voltage
    "❄️", // Snowflake
    "☃️", // Snowman
    "⛄", // Snowman Without Snow
    "☄️", // Comet
    "🔥", // Fire
    "💧", // Droplet
    "🌊", // Water Wave
    "🎄", // Christmas Tree
    "✨", // Sparkles
    // "🦧", // Orangutan -- Too New
    // "🦮", // Guide Dog -- Too New
    // "🐕‍🦺", // Service Dog -- Too New
    // "🐈‍⬛", // Black Cat -- Too New
    // "🦬", // Bison -- Too New
    // "🦣", // Mammoth -- Too New
    // "🦫", // Beaver -- Too New
    // "🐻‍❄️", // Polar Bear -- Too New
    // "🦥", // Sloth -- Too New
    // "🦦", // Otter -- Too New
    // "🦨", // Skunk -- Too New
    // "🦤", // Dodo -- Too New
    // "🪶", // Feather -- Too New
    // "🦩", // Flamingo -- Too New
    // "🦭", // Seal -- Too New
    // "🪲", // Beetle -- Too New
    // "🪳", // Cockroach -- Too New
    // "🪰", // Fly -- Too New
    // "🪱", // Worm -- Too New
    // "🪴", // Potted Plant -- Too New
    // "🪨", // Rock -- Too New


    // Food and Drink

    "🍇", // Grapes
    "🍈", // Melon
    "🍉", // Watermelon
    "🍊", // Tangerine
    "🍋", // Lemon
    "🍌", // Banana
    "🍍", // Pineapple
    "🥭", // Mango
    "🍎", // Red Apple
    "🍏", // Green Apple
    "🍐", // Pear
    "🍑", // Peach
    "🍒", // Cherries
    "🍓", // Strawberry
    "🥝", // Kiwi Fruit
    "🍅", // Tomato
    "🥥", // Coconut
    "🥑", // Avocado
    "🥔", // Potato
    "🥕", // Carrot
    "🌽", // Ear of Corn
    "🌶️", // Hot Pepper
    "🥒", // Cucumber
    "🥬", // Leafy Green
    "🥦", // Broccoli
    "🍄", // Mushroom
    "🥜", // Peanuts
    "🌰", // Chestnut
    "🍞", // Bread
    "🥐", // Croissant
    "🥖", // Baguette Bread
    "🥨", // Pretzel
    "🥯", // Bagel
    "🥞", // Pancakes
    "🧀", // Cheese Wedge
    "🍖", // Meat on Bone
    "🍗", // Poultry Leg
    "🥩", // Cut of Meat
    "🥓", // Bacon
    "🍔", // Hamburger
    "🍟", // French Fries
    "🍕", // Pizza
    "🌭", // Hot Dog
    "🥪", // Sandwich
    "🌮", // Taco
    "🌯", // Burrito
    "🥙", // Stuffed Flatbread
    "🥚", // Egg
    "🍳", // Cooking
    "🥘", // Shallow Pan of Food
    "🍲", // Pot of Food
    "🥣", // Bowl with Spoon
    "🥗", // Green Salad
    "🍿", // Popcorn
    "🧂", // Salt
    "🥫", // Canned Food
    "🍱", // Bento Box
    "🍚", // Cooked Rice
    "🍛", // Curry Rice
    "🍜", // Steaming Bowl
    "🍝", // Spaghetti
    "🍠", // Roasted Sweet Potato
    "🍣", // Sushi
    "🍤", // Fried Shrimp
    "🥮", // Moon Cake
    "🍡", // Dango
    "🥟", // Dumpling
    "🥠", // Fortune Cookie
    "🥡", // Takeout Box
    "🍦", // Soft Ice Cream
    "🍧", // Shaved Ice
    "🍨", // Ice Cream
    "🍩", // Doughnut
    "🍪", // Cookie
    "🎂", // Birthday Cake
    "🍰", // Shortcake
    "🧁", // Cupcake
    "🥧", // Pie
    "🍫", // Chocolate Bar
    "🍬", // Candy
    "🍭", // Lollipop
    "🍮", // Custard
    "🍯", // Honey Pot
    "🍼", // Baby Bottle
    "🥛", // Glass of Milk
    "☕", // Hot Beverage
    "🍵", // Teacup Without Handle
    "🥤", // Cup with Straw
    "🥢", // Chopsticks
    "🍽️", // Fork and Knife with Plate
    "🍴", // Fork and Knife
    "🥄", // Spoon

    // "🫐", // Blueberries -- Too new
    // "🫒", // Olive -- Too new
    // "🫑", // Bell Pepper -- Too new
    // "🧄", // Garlic -- Too new
    // "🧅", // Onion -- Too new
    // "🫓", // Flatbread -- Too new
    // "🧇", // Waffle -- Too new
    // "🫔", // Tamale -- Too new
    // "🧆", // Falafel -- Too new
    // "🫕", // Fondue -- Too new
    // "🧈", // Butter -- Too new
    // "🦪", // Oyster -- Too new
    // "🫖", // Teapot -- Too new
    // "🧋", // Bubble Tea -- Too new
    // "🧃", // Beverage Box -- Too new
    // "🧉", // Mate -- Too new
    // "🧊", // Ice -- Too new


    // Activities

    "🕴️", // Person in Suit Levitating
    "🧗‍♂️", // Man Climbing
    "🧗‍♀️", // Woman Climbing
    "🤺", // Person Fencing
    "🏇", // Horse Racing
    "⛷️", // Skier
    "🏂", // Snowboarder
    "🏌️‍♂️", // Man Golfing
    "🏌️‍♀️", // Woman Golfing
    "🏄‍♂️", // Man Surfing
    "🏄‍♀️", // Woman Surfing
    "🚣‍♂️", // Man Rowing Boat
    "🚣‍♀️", // Woman Rowing Boat
    "🏊‍♂️", // Man Swimming
    "🏊‍♀️", // Woman Swimming
    "⛹️‍♂️", // Man Bouncing Ball
    "⛹️‍♀️", // Woman Bouncing Ball
    "🏋️‍♂️", // Man Lifting Weights
    "🏋️‍♀️", // Woman Lifting Weights
    "🚴‍♂️", // Man Biking
    "🚴‍♀️", // Woman Biking
    "🚵‍♂️", // Man Mountain Biking
    "🚵‍♀️", // Woman Mountain Biking
    "🤸‍♂️", // Man Cartwheeling
    "🤸‍♀️", // Woman Cartwheeling
    "🤼", // People Wrestling
    "🤼‍♂️", // Men Wrestling
    "🤼‍♀️", // Women Wrestling
    "🤽‍♂️", // Man Playing Water Polo
    "🤽‍♀️", // Woman Playing Water Polo
    "🤾‍♂️", // Man Playing Handball
    "🤾‍♀️", // Woman Playing Handball
    "🤹‍♂️", // Man Juggling
    "🤹‍♀️", // Woman Juggling
    "🧘‍♂️", // Man in Lotus Position
    "🧘‍♀️", // Woman in Lotus Position
    "🎪", // Circus Tent
    "🛹", // Skateboard
    "🛶", // Canoe
    "🎗️", // Reminder Ribbon
    "🎟️", // Admission Tickets
    "🎫", // Ticket
    "🎖️", // Military Medal
    "🏆", // Trophy
    "🏅", // Sports Medal
    "🥇", // 1st Place Medal
    "🥈", // 2nd Place Medal
    "🥉", // 3rd Place Medal
    "⚽", // Soccer Ball
    "⚾", // Baseball
    "🥎", // Softball
    "🏀", // Basketball
    "🏐", // Volleyball
    "🏈", // American Football
    "🏉", // Rugby Football
    "🎾", // Tennis
    "🥏", // Flying Disc
    "🎳", // Bowling
    "🏏", // Cricket Game
    "🏑", // Field Hockey
    "🏒", // Ice Hockey
    "🥍", // Lacrosse
    "🏓", // Ping Pong
    "🏸", // Badminton
    "🥊", // Boxing Glove
    "🥋", // Martial Arts Uniform
    "🥅", // Goal Net
    "⛳", // Flag in Hole
    "⛸️", // Ice Skate
    "🎣", // Fishing Pole
    "🎽", // Running Shirt
    "🎿", // Skis
    "🛷", // Sled
    "🥌", // Curling Stone
    "🎯", // Bullseye
    "🎱", // Pool 8 Ball
    "🎮", // Video Game
    "🎰", // Slot Machine
    "🎲", // Game Die
    "🧩", // Puzzle Piece
    "♟️", // Chess Pawn
    "🎭", // Performing Arts
    "🎨", // Artist Palette
    "🧵", // Thread
    "🧶", // Yarn
    "🎼", // Musical Score
    "🎤", // Microphone
    "🎧", // Headphone
    "🎷", // Saxophone
    "🎸", // Guitar
    "🎹", // Musical Keyboard
    "🎺", // Trumpet
    "🎻", // Violin
    "🥁", // Drum
    "🎬", // Clapper Board
    "🏹", // Bow and Arrow
    // "🛼", // Roller Skate
    // "🪗", // Accordion
    // "🪘", // Long Drum


    // Travel and Places
    
    "🗾", // Map of Japan
    "🏔️", // Snow-Capped Mountain
    "⛰️", // Mountain
    "🌋", // Volcano
    "🗻", // Mount Fuji
    "🏕️", // Camping
    "🏖️", // Beach with Umbrella
    "🏜️", // Desert
    "🏝️", // Desert Island
    "🏞️", // National Park
    "🏟️", // Stadium
    "🏛️", // Classical Building
    "🏗️", // Building Construction
    "🏘️", // Houses
    "🏚️", // Derelict House
    "🏠", // House
    "🏡", // House with Garden
    "🏢", // Office Building
    "🏣", // Japanese Post Office
    "🏤", // Post Office
    "🏥", // Hospital
    "🏦", // Bank
    "🏨", // Hotel
    "🏩", // Love Hotel
    "🏪", // Convenience Store
    "🏫", // School
    "🏬", // Department Store
    "🏭", // Factory
    "🏯", // Japanese Castle
    "🏰", // Castle
    "💒", // Wedding
    "🗼", // Tokyo Tower
    "🗽", // Statue of Liberty
    "⛪", // Church
    "🕌", // Mosque
    "🕍", // Synagogue
    "⛩️", // Shinto Shrine
    "🕋", // Kaaba
    "⛲", // Fountain
    "⛺", // Tent
    "🌁", // Foggy
    "🌃", // Night with Stars
    "🏙️", // Cityscape
    "🌄", // Sunrise Over Mountains
    "🌅", // Sunrise
    "🌆", // Cityscape at Dusk
    "🌇", // Sunset
    "🌉", // Bridge at Night
    "🎠", // Carousel Horse
    "🎡", // Ferris Wheel
    "🎢", // Roller Coaster
    "🚂", // Locomotive
    "🚃", // Railway Car
    "🚄", // High-Speed Train
    "🚅", // Bullet Train
    "🚆", // Train
    "🚇", // Metro
    "🚈", // Light Rail
    "🚉", // Station
    "🚊", // Tram
    "🚝", // Monorail
    "🚞", // Mountain Railway
    "🚋", // Tram Car
    "🚌", // Bus
    "🚍", // Oncoming Bus
    "🚎", // Trolleybus
    "🚐", // Minibus
    "🚑", // Ambulance
    "🚒", // Fire Engine
    "🚓", // Police Car
    "🚔", // Oncoming Police Car
    "🚕", // Taxi
    "🚖", // Oncoming Taxi
    "🚗", // Automobile
    "🚘", // Oncoming Automobile
    "🚙", // Sport Utility Vehicle
    "🚚", // Delivery Truck
    "🚛", // Articulated Lorry
    "🚜", // Tractor
    "🏎️", // Racing Car
    "🏍️", // Motorcycle
    "🛵", // Motor Scooter
    "🚲", // Bicycle
    "🛴", // Kick Scooter
    "🚏", // Bus Stop
    "🛣️", // Motorway
    "🛤️", // Railway Track
    "⛽", // Fuel Pump
    "🚨", // Police Car Light
    "🚥", // Horizontal Traffic Light
    "🚦", // Vertical Traffic Light
    "🚧", // Construction
    "⚓", // Anchor
    "⛵", // Sailboat
    "🚤", // Speedboat
    "🛳️", // Passenger Ship
    "⛴️", // Ferry
    "🛥️", // Motor Boat
    "🚢", // Ship
    "✈️", // Airplane
    "🛩️", // Small Airplane
    "🛫", // Airplane Departure
    "🛬", // Airplane Arrival
    "💺", // Seat
    "🚁", // Helicopter
    "🚟", // Suspension Railway
    "🚠", // Mountain Cableway
    "🚡", // Aerial Tramway
    "🛰️", // Satellite
    "🚀", // Rocket
    "🛸", // Flying Saucer
    "🌠", // Shooting Star
    "🌌", // Milky Way
    "⛱️", // Umbrella on Ground
    "🎆", // Fireworks
    "🎇", // Sparkler
    "🎑", // Moon Viewing Ceremony
    "💴", // Yen Banknote
    "💵", // Dollar Banknote
    "💶", // Euro Banknote
    "💷", // Pound Banknote
    "🗿", // Moai
    "🛂", // Passport Control
    "🛃", // Customs
    "🛄", // Baggage Claim
    "🛅", // Left Luggage
    // 🛖 Hut
    // 🛕 Hindu Temple
    // 🛻 Pickup Truck
    // 🛺 Auto Rickshaw
    // 🪂 Parachute
    // 🪐 Ringed Planet


    // Objects

    "💌", // Love Letter
    "🕳️", // Hole
    "💣", // Bomb
    "🛀", // Person Taking Bath
    "🛌", // Person in Bed
    "🏺", // Amphora
    "🗺️", // World Map
    "🧭", // Compass
    "🧱", // Brick
    "💈", // Barber Pole
    "🛢️", // Oil Drum
    "🛎️", // Bellhop Bell
    "🧳", // Luggage
    "⌛", // Hourglass Done
    "⏳", // Hourglass Not Done
    "⌚", // Watch
    "⏰", // Alarm Clock
    "⏱️", //  topwatch
    "⏲️", //  imer Clock
    "🕰️", // Mantelpiece Clock
    "🌡️", // Thermometer
    "⛱️", // Umbrella on Ground
    "🎈", // Balloon
    "🎉", // Party Popper
    "🎊", // Confetti Ball
    "🎎", // Japanese Dolls
    "🎏", // Carp Streamer
    "🧧", // Red Envelope
    "🎀", // Ribbon
    "🎁", // Wrapped Gift
    "🔮", // Crystal Ball
    "🕹️", // Joystick
    "🧸", // Teddy Bear
    "🖼️", // Framed Picture
    "🧵", // Thread
    "🧶", // Yarn
    "🛍️", // Shopping Bags
    "📿", // Prayer Beads
    "💎", // Gem Stone
    "📯", // Postal Horn
    "🎙️", // Studio Microphone
    "🎚️", // Level Slider
    "🎛️", // Control Knobs
    "📻", // Radio
    "📱", // Mobile Phone
    "📲", // Mobile Phone with Arrow
    "☎️", // Telephone
    "📞", // Telephone Receiver
    "📟", // Pager
    "📠", // Fax Machine
    "🔋", // Battery
    "🔌", // Electric Plug
    "💻", // Laptop
    "🖥️", // Desktop Computer
    "🖨️", // Printer
    "🖱️", // Computer Mouse
    "🖲️", // Trackball
    "💽", // Computer Disk
    "💾", // Floppy Disk
    "💿", // Optical Disk
    "📀", // DVD
    "🧮", // Abacus
    "🎥", // Movie Camera
    "🎞️", // Film Frames
    "📽️", // Film Projector
    "📺", // Television
    "📷", // Camera
    "📸", // Camera with Flash
    "📹", // Video Camera
    "📼", // Videocassette
    "🔍", // Magnifying Glass Tilted Left
    "🔎", // Magnifying Glass Tilted Right
    "🕯️", // Candle
    "💡", // Light Bulb
    "🔦", // Flashlight
    "🏮", // Red Paper Lantern
    "📔", // Notebook with Decorative Cover
    "📕", // Closed Book
    "📖", // Open Book
    "📗", // Green Book
    "📘", // Blue Book
    "📙", // Orange Book
    "📚", // Books
    "📓", // Notebook
    "📒", // Ledger
    "📃", // Page with Curl
    "📜", // Scroll
    "📄", // Page Facing Up
    "📰", // Newspaper
    "🗞️", // Rolled-Up Newspaper
    "📑", // Bookmark Tabs
    "🔖", // Bookmark
    "🏷️", // Label
    "💰", // Money Bag
    "💴", // Yen Banknote
    "💵", // Dollar Banknote
    "💶", // Euro Banknote
    "💷", // Pound Banknote
    "💸", // Money with Wings
    "💳", // Credit Card
    "🧾", // Receipt
    "✉️", // Envelope
    "📧", // E-Mail
    "📨", // Incoming Envelope
    "📩", // Envelope with Arrow
    "📤", // Outbox Tray
    "📥", // Inbox Tray
    "📦", // Package
    "📫", // Closed Mailbox with Raised Flag
    "📪", // Closed Mailbox with Lowered Flag
    "📬", // Open Mailbox with Raised Flag
    "📭", // Open Mailbox with Lowered Flag
    "📮", // Postbox
    "🗳️", // Ballot Box with Ballot
    "✏️", // Pencil
    "✒️", // Black Nib
    "🖋️", // Fountain Pen
    "🖊️", // Pen
    "🖌️", // Paintbrush
    "🖍️", // Crayon
    "📝", // Memo
    "📁", // File Folder
    "📂", // Open File Folder
    "🗂️", // Card Index Dividers
    "📅", // Calendar
    "📆", // Tear-Off Calendar
    "🗒️", // Spiral Notepad
    "🗓️", // Spiral Calendar
    "📇", // Card Index
    "📈", // Chart Increasing
    "📉", // Chart Decreasing
    "📊", // Bar Chart
    "📋", // Clipboard
    "📌", // Pushpin
    "📍", // Round Pushpin
    "📎", // Paperclip
    "🖇️", // Linked Paperclips
    "📏", // Straight Ruler
    "📐", // Triangular Ruler
    "✂️", // Scissors
    "🗃️", // Card File Box
    "🗄️", // File Cabinet
    "🗑️", // Wastebasket
    "🔒", // Locked
    "🔓", // Unlocked
    "🔏", // Locked with Pen
    "🔐", // Locked with Key
    "🔑", // Key
    "🗝️", // Old Key
    "🔨", // Hammer
    "⛏️", // Pick
    "⚒️", // Hammer and Pick
    "🛠️", // Hammer and Wrench
    "🛡️", // Shield
    "🔧", // Wrench
    "🔩", // Nut and Bolt
    "⚙️", // Gear
    "🗜️", // Clamp
    "⚖️", // Balance Scale
    "🔗", // Link
    "⛓️", // Chains
    "🧰", // Toolbox
    "🧲", // Magnet
    "⚗️", // Alembic
    "🧪", // Test Tube
    "🧫", // Petri Dish
    "🧬", // DNA
    "🔬", // Microscope
    "🔭", // Telescope
    "📡", // Satellite Antenna
    "🚪", // Door
    "🛏️", // Bed
    "🛋️", // Couch and Lamp
    "🚿", // Shower
    "🛁", // Bathtub
    "🧴", // Lotion Bottle
    "🧷", // Safety Pin
    "🧹", // Broom
    "🧺", // Basket
    "🧼", // Soap
    "🧽", // Sponge
    "🧯", // Fire Extinguisher
    "🛒", // Shopping Cart
    "⚰️", // Coffin
    "⚱️", // Funeral Urn
    "🚰", // Potable Water
    // "🤿", // Diving Mask
    // "🪀", // Yo-Yo
    // "🪁", // Kite
    // "🪄", // Magic Wand
    // "🪆", // Nesting Dolls
    // "🪅", // Piñata
    // "🪡", // Sewing Needle
    // "🪢", // Knot
    // "🪕", // Banjo
    // "🪙", // Coin
    // "🪓", // Axe
    // "🪃", // Boomerang
    // "🪚", // Carpentry Saw
    // "🪛", // Screwdriver
    // "🦯", // White Cane
    // "🪜", // Ladder
    // "🩹", // Adhesive Bandage
    // "🩺", // Stethoscope
    // "🪞", // Mirror
    // "🪟", // Window
    // "🪤", // Mouse Trap
    // "🪒", // Razor
    // "🪣", // Bucket
    // "🪥", // Toothbrush
    // "🪧", // Placard
]

export { emojiList }
