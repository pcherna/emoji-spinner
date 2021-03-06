const emojiList = [

    // Smileys and People

    "๐", // Grinning Face
    "๐", // Grinning Face with Big Eyes
    "๐", // Grinning Face with Smiling Eyes
    "๐", // Beaming Face with Smiling Eyes
    "๐", // Grinning Squinting Face
    "๐", // Grinning Face with Sweat
    "๐คฃ", // Rolling on the Floor Laughing
    "๐", // Face with Tears of Joy
    "๐", // Slightly Smiling Face
    "๐", // Upside-Down Face
    "๐", // Winking Face
    "๐", // Smiling Face with Smiling Eyes
    "๐", // Smiling Face with Halo
    "๐ฅฐ", // Smiling Face with Hearts
    "๐", // Smiling Face with Heart-Eyes
    "๐คฉ", // Star-Struck
    "๐", // Face Blowing a Kiss
    "๐", // Kissing Face
    "๐", // Kissing Face with Closed Eyes
    "๐", // Kissing Face with Smiling Eyes
    "๐", // Face Savoring Food
    "๐", // Face with Tongue
    "๐", // Winking Face with Tongue
    "๐คช", // Zany Face
    "๐", // Squinting Face with Tongue
    "๐ค", // Smiling Face with Open Hands
    "๐คญ", // Face with Hand Over Mouth
    "๐คซ", // Shushing Face
    "๐ค", // Thinking Face
    "๐ค", // Zipper-Mouth Face
    "๐คจ", // Face with Raised Eyebrow
    "๐", // Neutral Face
    "๐", // Expressionless Face
    "๐ถ", // Face Without Mouth
    "๐", // Smirking Face
    "๐", // Unamused Face
    "๐", // Face with Rolling Eyes
    "๐ฌ", // Grimacing Face
    "๐คฅ", // Lying Face
    "๐", // Relieved Face
    "๐", // Pensive Face
    "๐ช", // Sleepy Face
    "๐คค", // Drooling Face
    "๐ด", // Sleeping Face
    "๐ท", // Face with Medical Mask
    "๐ค", // Face with Thermometer
    "๐ค", // Face with Head-Bandage
    "๐คข", // Nauseated Face
    "๐คง", // Sneezing Face
    "๐ฅต", // Hot Face
    "๐ฅถ", // Cold Face
    "๐ฅด", // Woozy Face
    "๐ต", // Face with Crossed-Out Eyes
    "๐คฏ", // Exploding Head
    "๐ค ", // Cowboy Hat Face
    "๐ฅณ", // Partying Face
    "๐", // Smiling Face with Sunglasses
    "๐ค", // Nerd Face
    "๐ง", // Face with Monocle
    "๐", // Confused Face
    "๐", // Worried Face
    "๐", // Slightly Frowning Face
    "๐ฎ", // Face with Open Mouth
    "๐ฏ", // Hushed Face
    "๐ฒ", // Astonished Face
    "๐ณ", // Flushed Face
    "๐ฅบ", // Pleading Face
    "๐ฆ", // Frowning Face with Open Mouth
    "๐ง", // Anguished Face
    "๐จ", // Fearful Face
    "๐ฐ", // Anxious Face with Sweat
    "๐ฅ", // Sad but Relieved Face
    "๐ข", // Crying Face
    "๐ญ", // Loudly Crying Face
    "๐ฑ", // Face Screaming in Fear
    "๐", // Confounded Face
    "๐ฃ", // Persevering Face
    "๐", // Disappointed Face
    "๐", // Downcast Face with Sweat
    "๐ฉ", // Weary Face
    "๐ซ", // Tired Face
    "๐ค", // Face with Steam From Nose
    "๐ก", // Enraged Face
    "๐ ", // Angry Face
    "๐", // Skull
    "๐คก", // Clown Face
    "๐น", // Ogre
    "๐บ", // Goblin
    "๐ป", // Ghost
    "๐ฝ", // Alien
    "๐พ", // Alien Monster
    "๐ค", // Robot
    "๐บ", // Grinning Cat
    "๐ธ", // Grinning Cat with Smiling Eyes
    "๐น", // Cat with Tears of Joy
    "๐ป", // Smiling Cat with Heart-Eyes
    "๐ผ", // Cat with Wry Smile
    "๐ฝ", // Kissing Cat
    "๐", // Weary Cat
    "๐ฟ", // Crying Cat
    "๐พ", // Pouting Cat
    "๐", // Kiss Mark
    "๐", // Waving Hand
    "๐ค", // Raised Back of Hand
    "๐๏ธ", // Hand with Fingers Splayed
    "โ", // Raised Hand
    "๐", // Vulcan Salute
    "๐", // OK Hand
    "โ๏ธ", // Victory Hand
    "๐ค", // Crossed Fingers
    "๐ค", // Love-You Gesture
    "๐ค", // Sign of the Horns
    "๐ค", // Call Me Hand
    "๐", // Backhand Index Pointing Left
    "๐", // Backhand Index Pointing Right
    "๐", // Backhand Index Pointing Up
    "๐", // Backhand Index Pointing Down
    "โ๏ธ", // Index Pointing Up
    "๐", // Thumbs Up
    "๐", // Thumbs Down
    "โ", // Raised Fist
    "๐", // Oncoming Fist
    "๐ค", // Left-Facing Fist
    "๐ค", // Right-Facing Fist
    "๐", // Clapping Hands
    "๐", // Raising Hands
    "๐", // Open Hands
    "๐คฒ", // Palms Up Together
    "๐ค", // Handshake
    "๐", // Folded Hands
    "โ๏ธ", // Writing Hand
    "๐", // Nail Polish
    "๐คณ", // Selfie
    "๐ช", // Flexed Biceps
    "๐ฆต", // Leg
    "๐ฆถ", // Foot
    "๐", // Ear
    "๐", // Nose
    "๐ง ", // Brain
    "๐ฆท", // Tooth
    "๐ฆด", // Bone
    "๐", // Eyes
    "๐๏ธ", // Eye
    "๐", // Tongue
    "๐", // Mouth
    "๐ถ", // Baby
    "๐ง", // Child
    "๐ฆ", // Boy
    "๐ง", // Girl
    "๐ง", // Person
    "๐ฑ", // Person: Blond Hair
    "๐จ", // Man
    "๐ง", // Person: Beard
    "๐จโ๐ฆฐ", // Man: Red Hair
    "๐จโ๐ฆฑ", // Man: Curly Hair
    "๐จโ๐ฆณ", // Man: White Hair
    "๐จโ๐ฆฒ", // Man: Bald
    "๐ฉ", // Woman
    "๐ฉโ๐ฆฐ", // Woman: Red Hair
    "๐ฉโ๐ฆฑ", // Woman: Curly Hair
    "๐ฉโ๐ฆณ", // Woman: White Hair
    "๐ฉโ๐ฆฒ", // Woman: Bald
    "๐ฑโโ๏ธ", // Woman: Blond Hair
    "๐ฑโโ๏ธ", // Man: Blond Hair
    "๐ง", // Older Person
    "๐ด", // Old Man
    "๐ต", // Old Woman
    "๐", // Person Frowning
    "๐โโ๏ธ", // Man Frowning
    "๐โโ๏ธ", // Woman Frowning
    "๐", // Person Pouting
    "๐โโ๏ธ", // Man Pouting
    "๐โโ๏ธ", // Woman Pouting
    "๐", // Person Gesturing No
    "๐โโ๏ธ", // Man Gesturing No
    "๐โโ๏ธ", // Woman Gesturing No
    "๐", // Person Gesturing OK
    "๐โโ๏ธ", // Man Gesturing OK
    "๐โโ๏ธ", // Woman Gesturing OK
    "๐", // Person Tipping Hand
    "๐โโ๏ธ", // Man Tipping Hand
    "๐โโ๏ธ", // Woman Tipping Hand
    "๐", // Person Raising Hand
    "๐โโ๏ธ", // Man Raising Hand
    "๐โโ๏ธ", // Woman Raising Hand
    "๐", // Person Bowing
    "๐โโ๏ธ", // Man Bowing
    "๐โโ๏ธ", // Woman Bowing
    "๐คฆ", // Person Facepalming
    "๐คฆโโ๏ธ", // Man Facepalming
    "๐คฆโโ๏ธ", // Woman Facepalming
    "๐คท", // Person Shrugging
    "๐คทโโ๏ธ", // Man Shrugging
    "๐คทโโ๏ธ", // Woman Shrugging
    "๐จโโ๏ธ", // Man Health Worker
    "๐ฉโโ๏ธ", // Woman Health Worker
    "๐จโ๐", // Man Student
    "๐ฉโ๐", // Woman Student
    "๐จโ๐ซ", // Man Teacher
    "๐ฉโ๐ซ", // Woman Teacher
    "๐จโโ๏ธ", // Man Judge
    "๐ฉโโ๏ธ", // Woman Judge
    "๐จโ๐พ", // Man Farmer
    "๐ฉโ๐พ", // Woman Farmer
    "๐จโ๐ณ", // Man Cook
    "๐ฉโ๐ณ", // Woman Cook
    "๐จโ๐ง", // Man Mechanic
    "๐ฉโ๐ง", // Woman Mechanic
    "๐จโ๐ญ", // Man Factory Worker
    "๐ฉโ๐ญ", // Woman Factory Worker
    "๐จโ๐ผ", // Man Office Worker
    "๐ฉโ๐ผ", // Woman Office Worker
    "๐จโ๐ฌ", // Man Scientist
    "๐ฉโ๐ฌ", // Woman Scientist
    "๐จโ๐ป", // Man Technologist
    "๐ฉโ๐ป", // Woman Technologist
    "๐จโ๐ค", // Man Singer
    "๐ฉโ๐ค", // Woman Singer
    "๐จโ๐จ", // Man Artist
    "๐ฉโ๐จ", // Woman Artist
    "๐จโโ๏ธ", // Man Pilot
    "๐ฉโโ๏ธ", // Woman Pilot
    "๐จโ๐", // Man Astronaut
    "๐ฉโ๐", // Woman Astronaut
    "๐จโ๐", // Man Firefighter
    "๐ฉโ๐", // Woman Firefighter
    "๐ฎ", // Police Officer
    "๐ฎโโ๏ธ", // Man Police Officer
    "๐ฎโโ๏ธ", // Woman Police Officer
    "๐ต๏ธ", // Detective
    "๐ต๏ธโโ๏ธ", // Man Detective
    "๐ต๏ธโโ๏ธ", // Woman Detective
    "๐", // Guard
    "๐โโ๏ธ", // Man Guard
    "๐โโ๏ธ", // Woman Guard
    "๐ท", // Construction Worker
    "๐ทโโ๏ธ", // Man Construction Worker
    "๐ทโโ๏ธ", // Woman Construction Worker
    "๐คด", // Prince
    "๐ธ", // Princess
    "๐ณ", // Person Wearing Turban
    "๐ณโโ๏ธ", // Man Wearing Turban
    "๐ณโโ๏ธ", // Woman Wearing Turban
    "๐ฒ", // Person with Skullcap
    "๐ง", // Woman with Headscarf
    "๐คต", // Person in Tuxedo
    "๐ฐ", // Person with Veil
    "๐คฐ", // Pregnant Woman
    "๐คฑ", // Breast-Feeding
    "๐ผ", // Baby Angel
    "๐", // Santa Claus
    "๐คถ", // Mrs. Claus
    "๐ฆธ", // Superhero
    "๐ฆธโโ๏ธ", // Man Superhero
    "๐ฆธโโ๏ธ", // Woman Superhero
    "๐ฆน", // Supervillain
    "๐ฆนโโ๏ธ", // Man Supervillain
    "๐ฆนโโ๏ธ", // Woman Supervillain
    "๐ง", // Mage
    "๐งโโ๏ธ", // Man Mage
    "๐งโโ๏ธ", // Woman Mage
    "๐ง", // Fairy
    "๐งโโ๏ธ", // Man Fairy
    "๐งโโ๏ธ", // Woman Fairy
    "๐ง", // Vampire
    "๐งโโ๏ธ", // Man Vampire
    "๐งโโ๏ธ", // Woman Vampire
    "๐ง", // Merperson
    "๐งโโ๏ธ", // Merman
    "๐งโโ๏ธ", // Mermaid
    "๐ง", // Elf
    "๐งโโ๏ธ", // Man Elf
    "๐งโโ๏ธ", // Woman Elf
    "๐ง", // Genie
    "๐งโโ๏ธ", // Man Genie
    "๐งโโ๏ธ", // Woman Genie
    "๐ง", // Zombie
    "๐งโโ๏ธ", // Man Zombie
    "๐งโโ๏ธ", // Woman Zombie
    "๐", // Person Getting Massage
    "๐โโ๏ธ", // Man Getting Massage
    "๐โโ๏ธ", // Woman Getting Massage
    "๐", // Person Getting Haircut
    "๐โโ๏ธ", // Man Getting Haircut
    "๐โโ๏ธ", // Woman Getting Haircut
    "๐ถ", // Person Walking
    "๐ถโโ๏ธ", // Man Walking
    "๐ถโโ๏ธ", // Woman Walking
    "๐", // Person Running
    "๐โโ๏ธ", // Man Running
    "๐โโ๏ธ", // Woman Running
    "๐", // Woman Dancing
    "๐บ", // Man Dancing
    "๐ด๏ธ", // Person in Suit Levitating
    "๐ฏ", // People with Bunny Ears
    "๐ฏโโ๏ธ", // Men with Bunny Ears
    "๐ฏโโ๏ธ", // Women with Bunny Ears
    "๐ง", // Person in Steamy Room
    "๐งโโ๏ธ", // Man in Steamy Room
    "๐งโโ๏ธ", // Woman in Steamy Room
    "๐ง", // Person in Lotus Position
    "๐ญ", // Women Holding Hands
    "๐ซ", // Woman and Man Holding Hands
    "๐ฌ", // Men Holding Hands
    "๐", // Kiss
    "๐ฉโโค๏ธโ๐โ๐จ", // Kiss: Woman, Man
    "๐จโโค๏ธโ๐โ๐จ", // Kiss: Man, Man
    "๐ฉโโค๏ธโ๐โ๐ฉ", // Kiss: Woman, Woman
    "๐", // Couple with Heart
    "๐ฉโโค๏ธโ๐จ", // Couple with Heart: Woman, Man
    "๐จโโค๏ธโ๐จ", // Couple with Heart: Man, Man
    "๐ฉโโค๏ธโ๐ฉ", // Couple with Heart: Woman, Woman
    "๐ช", // Family
    "๐จโ๐ฉโ๐ฆ", // Family: Man, Woman, Boy
    "๐จโ๐ฉโ๐ง", // Family: Man, Woman, Girl
    "๐จโ๐ฉโ๐งโ๐ฆ", // Family: Man, Woman, Girl, Boy
    "๐จโ๐ฉโ๐ฆโ๐ฆ", // Family: Man, Woman, Boy, Boy
    "๐จโ๐ฉโ๐งโ๐ง", // Family: Man, Woman, Girl, Girl
    "๐จโ๐จโ๐ฆ", // Family: Man, Man, Boy
    "๐จโ๐จโ๐ง", // Family: Man, Man, Girl
    "๐จโ๐จโ๐งโ๐ฆ", // Family: Man, Man, Girl, Boy
    "๐จโ๐จโ๐ฆโ๐ฆ", // Family: Man, Man, Boy, Boy
    "๐จโ๐จโ๐งโ๐ง", // Family: Man, Man, Girl, Girl
    "๐ฉโ๐ฉโ๐ฆ", // Family: Woman, Woman, Boy
    "๐ฉโ๐ฉโ๐ง", // Family: Woman, Woman, Girl
    "๐ฉโ๐ฉโ๐งโ๐ฆ", // Family: Woman, Woman, Girl, Boy
    "๐ฉโ๐ฉโ๐ฆโ๐ฆ", // Family: Woman, Woman, Boy, Boy
    "๐ฉโ๐ฉโ๐งโ๐ง", // Family: Woman, Woman, Girl, Girl
    "๐จโ๐ฆ", // Family: Man, Boy
    "๐จโ๐ฆโ๐ฆ", // Family: Man, Boy, Boy
    "๐จโ๐ง", // Family: Man, Girl
    "๐จโ๐งโ๐ฆ", // Family: Man, Girl, Boy
    "๐จโ๐งโ๐ง", // Family: Man, Girl, Girl
    "๐ฉโ๐ฆ", // Family: Woman, Boy
    "๐ฉโ๐ฆโ๐ฆ", // Family: Woman, Boy, Boy
    "๐ฉโ๐ง", // Family: Woman, Girl
    "๐ฉโ๐งโ๐ฆ", // Family: Woman, Girl, Boy
    "๐ฉโ๐งโ๐ง", // Family: Woman, Girl, Girl
    "๐ฃ๏ธ", // Speaking Head
    "๐ค", // Bust in Silhouette
    "๐ฅ", // Busts in Silhouette
    "๐ฃ", // Footprints
    "๐งณ", // Luggage
    "๐", // Closed Umbrella
    "โ๏ธ", // Umbrella
    "๐", // Jack-O-Lantern
    "๐งต", // Thread
    "๐งถ", // Yarn
    "๐", // Glasses
    "๐ถ๏ธ", // Sunglasses
    "๐ฅฝ", // Goggles
    "๐ฅผ", // Lab Coat
    "๐", // Necktie
    "๐", // T-Shirt
    "๐", // Jeans
    "๐งฃ", // Scarf
    "๐งค", // Gloves
    "๐งฅ", // Coat
    "๐งฆ", // Socks
    "๐", // Dress
    "๐", // Kimono
    "๐", // Bikini
    "๐", // Womanโs Clothes
    "๐", // Purse
    "๐", // Handbag
    "๐", // Clutch Bag
    "๐", // Backpack
    "๐", // Manโs Shoe
    "๐", // Running Shoe
    "๐ฅพ", // Hiking Boot
    "๐ฅฟ", // Flat Shoe
    "๐ ", // High-Heeled Shoe
    "๐ก", // Womanโs Sandal
    "๐ข", // Womanโs Boot
    "๐", // Crown
    "๐", // Womanโs Hat
    "๐ฉ", // Top Hat
    "๐", // Graduation Cap
    "๐งข", // Billed Cap
    "โ๏ธ", // Rescue Workerโs Helmet
    "๐", // Lipstick
    "๐", // Ring
    "๐ผ", // Briefcase
    // "๐ฅฒ", // Smiling Face with Tear
    // "๐ตโ๐ซ", // Face with Spiral Eyes
    // "๐ฅธ", // Disguised Face
    // "๐ฅฑ", // Yawning Face
    // "๐ฆพ", // Mechanical Arm
    // "๐ฆฟ", // Mechanical Leg
    // "๐ฆป", // Ear with Hearing Aid
    // "๐ซ", // Anatomical Heart
    // "๐ซ", // Lungs
    // "๐งโโ๏ธ", // Deaf Man
    // "๐งโโ๏ธ", // Deaf Woman
    // "๐ฅท", // Ninja
    // "๐งโโ๏ธ", // Man Standing
    // "๐งโโ๏ธ", // Woman Standing
    // "๐งโโ๏ธ", // Man Kneeling
    // "๐งโโ๏ธ", // Woman Kneeling
    // "๐จโ๐ฆฏ", // Man with White Cane
    // "๐ฉโ๐ฆฏ", // Woman with White Cane
    // "๐จโ๐ฆผ", // Man in Motorized Wheelchair
    // "๐ฉโ๐ฆผ", // Woman in Motorized Wheelchair
    // "๐จโ๐ฆฝ", // Man in Manual Wheelchair
    // "๐ฉโ๐ฆฝ", // Woman in Manual Wheelchair
    // "๐ฆบ", // Safety Vest
    // "๐ฅป", // Sari
    // "๐ฉฑ", // One-Piece Swimsuit
    // "๐ฉฒ", // Briefs
    // "๐ฉณ", // Shorts
    // "๐ฉด", // Thong Sandal
    // "๐ฉฐ", // Ballet Shoes
    // "๐ช", // Military Helmet


    // Animals & Nature

    "๐", // See-No-Evil Monkey
    "๐", // Hear-No-Evil Monkey
    "๐", // Speak-No-Evil Monkey
    "๐ฅ", // Collision
    "๐ซ", // Dizzy
    "๐ฆ", // Sweat Droplets
    "๐ต", // Monkey Face
    "๐", // Monkey
    "๐ฆ", // Gorilla
    "๐ถ", // Dog Face
    "๐", // Dog
    "๐ฉ", // Poodle
    "๐บ", // Wolf
    "๐ฆ", // Fox
    "๐ฆ", // Raccoon
    "๐ฑ", // Cat Face
    "๐", // Cat
    "๐ฆ", // Lion
    "๐ฏ", // Tiger Face
    "๐", // Tiger
    "๐", // Leopard
    "๐ด", // Horse Face
    "๐", // Horse
    "๐ฆ", // Unicorn
    "๐ฆ", // Zebra
    "๐ฆ", // Deer
    "๐ฎ", // Cow Face
    "๐", // Ox
    "๐", // Cow
    "๐ท", // Pig Face
    "๐", // Pig
    "๐", // Boar
    "๐", // Ram
    "๐", // Ewe
    "๐", // Goat
    "๐ช", // Camel
    "๐ซ", // Two-Hump Camel
    "๐ฆ", // Llama
    "๐ฆ", // Giraffe
    "๐", // Elephant
    "๐ฆ", // Rhinoceros
    "๐ฆ", // Hippopotamus
    "๐ญ", // Mouse Face
    "๐", // Mouse
    "๐", // Rat
    "๐น", // Hamster
    "๐ฐ", // Rabbit Face
    "๐", // Rabbit
    "๐ฟ๏ธ", // Chipmunk
    "๐ฆ", // Hedgehog
    "๐ฆ", // Bat
    "๐ป", // Bear
    "๐จ", // Koala
    "๐ผ", // Panda
    "๐ฆ", // Kangaroo
    "๐ฆก", // Badger
    "๐พ", // Paw Prints
    "๐ฆ", // Turkey
    "๐", // Chicken
    "๐", // Rooster
    "๐ฃ", // Hatching Chick
    "๐ฅ", // Front-Facing Baby Chick
    "๐ฆ", // Bird
    "๐ง", // Penguin
    "๐๏ธ", // Dove
    "๐ฆ", // Eagle
    "๐ฆ", // Duck
    "๐ฆข", // Swan
    "๐ฆ", // Owl
    "๐ฆ", // Peacock
    "๐ฆ", // Parrot
    "๐ธ", // Frog
    "๐", // Crocodile
    "๐ข", // Turtle
    "๐ฆ", // Lizard
    "๐", // Snake
    "๐ฒ", // Dragon Face
    "๐", // Dragon
    "๐ฆ", // Sauropod
    "๐ฆ", // T-Rex
    "๐ณ", // Spouting Whale
    "๐", // Whale
    "๐ฌ", // Dolphin
    "๐", // Fish
    "๐ ", // Tropical Fish
    "๐ก", // Blowfish
    "๐ฆ", // Shark
    "๐", // Octopus
    "๐", // Spiral Shell
    "๐", // Snail
    "๐ฆ", // Butterfly
    "๐", // Bug
    "๐", // Ant
    "๐", // Honeybee
    "๐", // Lady Beetle
    "๐ฆ", // Cricket
    "๐ท๏ธ", // Spider
    "๐ธ๏ธ", // Spider Web
    "๐ฆ", // Scorpion
    "๐ฆ", // Mosquito
    "๐ฆ ", // Microbe
    "๐", // Bouquet
    "๐ธ", // Cherry Blossom
    "๐น", // Rose
    "๐ฅ", // Wilted Flower
    "๐บ", // Hibiscus
    "๐ป", // Sunflower
    "๐ผ", // Blossom
    "๐ท", // Tulip
    "๐ฑ", // Seedling
    "๐ฒ", // Evergreen Tree
    "๐ณ", // Deciduous Tree
    "๐ด", // Palm Tree
    "๐ต", // Cactus
    "๐พ", // Sheaf of Rice
    "๐ฟ", // Herb
    "โ๏ธ", // Shamrock
    "๐", // Four Leaf Clover
    "๐", // Maple Leaf
    "๐", // Fallen Leaf
    "๐", // Leaf Fluttering in Wind
    "๐", // Mushroom
    "๐ฐ", // Chestnut
    "๐ฆ", // Crab
    "๐ฆ", // Lobster
    "๐ฆ", // Shrimp
    "๐ฆ", // Squid
    "๐", // Globe Showing Europe-Africa
    "๐", // Globe Showing Americas
    "๐", // Globe Showing Asia-Australia
    "๐", // Crescent Moon
    "๐", // New Moon Face
    "๐", // First Quarter Moon Face
    "๐", // Last Quarter Moon Face
    "โ๏ธ", // Sun
    "๐", // Full Moon Face
    "๐", // Sun with Face
    "โญ", // Star
    "๐", // Glowing Star
    "๐ ", // Shooting Star
    "โ๏ธ", // Cloud
    "โ", // Sun Behind Cloud
    "โ๏ธ", // Cloud with Lightning and Rain
    "๐ค๏ธ", // Sun Behind Small Cloud
    "๐ฅ๏ธ", // Sun Behind Large Cloud
    "๐ฆ๏ธ", // Sun Behind Rain Cloud
    "๐ง๏ธ", // Cloud with Rain
    "๐จ๏ธ", // Cloud with Snow
    "๐ฉ๏ธ", // Cloud with Lightning
    "๐ช๏ธ", // Tornado
    "๐ฌ๏ธ", // Wind Face
    "๐", // Rainbow
    "โ๏ธ", // Umbrella
    "โ", // Umbrella with Rain Drops
    "โก", // High Voltage
    "โ๏ธ", // Snowflake
    "โ๏ธ", // Snowman
    "โ", // Snowman Without Snow
    "โ๏ธ", // Comet
    "๐ฅ", // Fire
    "๐ง", // Droplet
    "๐", // Water Wave
    "๐", // Christmas Tree
    "โจ", // Sparkles
    // "๐ฆง", // Orangutan -- Too New
    // "๐ฆฎ", // Guide Dog -- Too New
    // "๐โ๐ฆบ", // Service Dog -- Too New
    // "๐โโฌ", // Black Cat -- Too New
    // "๐ฆฌ", // Bison -- Too New
    // "๐ฆฃ", // Mammoth -- Too New
    // "๐ฆซ", // Beaver -- Too New
    // "๐ปโโ๏ธ", // Polar Bear -- Too New
    // "๐ฆฅ", // Sloth -- Too New
    // "๐ฆฆ", // Otter -- Too New
    // "๐ฆจ", // Skunk -- Too New
    // "๐ฆค", // Dodo -- Too New
    // "๐ชถ", // Feather -- Too New
    // "๐ฆฉ", // Flamingo -- Too New
    // "๐ฆญ", // Seal -- Too New
    // "๐ชฒ", // Beetle -- Too New
    // "๐ชณ", // Cockroach -- Too New
    // "๐ชฐ", // Fly -- Too New
    // "๐ชฑ", // Worm -- Too New
    // "๐ชด", // Potted Plant -- Too New
    // "๐ชจ", // Rock -- Too New


    // Food and Drink

    "๐", // Grapes
    "๐", // Melon
    "๐", // Watermelon
    "๐", // Tangerine
    "๐", // Lemon
    "๐", // Banana
    "๐", // Pineapple
    "๐ฅญ", // Mango
    "๐", // Red Apple
    "๐", // Green Apple
    "๐", // Pear
    "๐", // Peach
    "๐", // Cherries
    "๐", // Strawberry
    "๐ฅ", // Kiwi Fruit
    "๐", // Tomato
    "๐ฅฅ", // Coconut
    "๐ฅ", // Avocado
    "๐ฅ", // Potato
    "๐ฅ", // Carrot
    "๐ฝ", // Ear of Corn
    "๐ถ๏ธ", // Hot Pepper
    "๐ฅ", // Cucumber
    "๐ฅฌ", // Leafy Green
    "๐ฅฆ", // Broccoli
    "๐", // Mushroom
    "๐ฅ", // Peanuts
    "๐ฐ", // Chestnut
    "๐", // Bread
    "๐ฅ", // Croissant
    "๐ฅ", // Baguette Bread
    "๐ฅจ", // Pretzel
    "๐ฅฏ", // Bagel
    "๐ฅ", // Pancakes
    "๐ง", // Cheese Wedge
    "๐", // Meat on Bone
    "๐", // Poultry Leg
    "๐ฅฉ", // Cut of Meat
    "๐ฅ", // Bacon
    "๐", // Hamburger
    "๐", // French Fries
    "๐", // Pizza
    "๐ญ", // Hot Dog
    "๐ฅช", // Sandwich
    "๐ฎ", // Taco
    "๐ฏ", // Burrito
    "๐ฅ", // Stuffed Flatbread
    "๐ฅ", // Egg
    "๐ณ", // Cooking
    "๐ฅ", // Shallow Pan of Food
    "๐ฒ", // Pot of Food
    "๐ฅฃ", // Bowl with Spoon
    "๐ฅ", // Green Salad
    "๐ฟ", // Popcorn
    "๐ง", // Salt
    "๐ฅซ", // Canned Food
    "๐ฑ", // Bento Box
    "๐", // Cooked Rice
    "๐", // Curry Rice
    "๐", // Steaming Bowl
    "๐", // Spaghetti
    "๐ ", // Roasted Sweet Potato
    "๐ฃ", // Sushi
    "๐ค", // Fried Shrimp
    "๐ฅฎ", // Moon Cake
    "๐ก", // Dango
    "๐ฅ", // Dumpling
    "๐ฅ ", // Fortune Cookie
    "๐ฅก", // Takeout Box
    "๐ฆ", // Soft Ice Cream
    "๐ง", // Shaved Ice
    "๐จ", // Ice Cream
    "๐ฉ", // Doughnut
    "๐ช", // Cookie
    "๐", // Birthday Cake
    "๐ฐ", // Shortcake
    "๐ง", // Cupcake
    "๐ฅง", // Pie
    "๐ซ", // Chocolate Bar
    "๐ฌ", // Candy
    "๐ญ", // Lollipop
    "๐ฎ", // Custard
    "๐ฏ", // Honey Pot
    "๐ผ", // Baby Bottle
    "๐ฅ", // Glass of Milk
    "โ", // Hot Beverage
    "๐ต", // Teacup Without Handle
    "๐ฅค", // Cup with Straw
    "๐ฅข", // Chopsticks
    "๐ฝ๏ธ", // Fork and Knife with Plate
    "๐ด", // Fork and Knife
    "๐ฅ", // Spoon

    // "๐ซ", // Blueberries -- Too new
    // "๐ซ", // Olive -- Too new
    // "๐ซ", // Bell Pepper -- Too new
    // "๐ง", // Garlic -- Too new
    // "๐ง", // Onion -- Too new
    // "๐ซ", // Flatbread -- Too new
    // "๐ง", // Waffle -- Too new
    // "๐ซ", // Tamale -- Too new
    // "๐ง", // Falafel -- Too new
    // "๐ซ", // Fondue -- Too new
    // "๐ง", // Butter -- Too new
    // "๐ฆช", // Oyster -- Too new
    // "๐ซ", // Teapot -- Too new
    // "๐ง", // Bubble Tea -- Too new
    // "๐ง", // Beverage Box -- Too new
    // "๐ง", // Mate -- Too new
    // "๐ง", // Ice -- Too new


    // Activities

    "๐ด๏ธ", // Person in Suit Levitating
    "๐งโโ๏ธ", // Man Climbing
    "๐งโโ๏ธ", // Woman Climbing
    "๐คบ", // Person Fencing
    "๐", // Horse Racing
    "โท๏ธ", // Skier
    "๐", // Snowboarder
    "๐๏ธโโ๏ธ", // Man Golfing
    "๐๏ธโโ๏ธ", // Woman Golfing
    "๐โโ๏ธ", // Man Surfing
    "๐โโ๏ธ", // Woman Surfing
    "๐ฃโโ๏ธ", // Man Rowing Boat
    "๐ฃโโ๏ธ", // Woman Rowing Boat
    "๐โโ๏ธ", // Man Swimming
    "๐โโ๏ธ", // Woman Swimming
    "โน๏ธโโ๏ธ", // Man Bouncing Ball
    "โน๏ธโโ๏ธ", // Woman Bouncing Ball
    "๐๏ธโโ๏ธ", // Man Lifting Weights
    "๐๏ธโโ๏ธ", // Woman Lifting Weights
    "๐ดโโ๏ธ", // Man Biking
    "๐ดโโ๏ธ", // Woman Biking
    "๐ตโโ๏ธ", // Man Mountain Biking
    "๐ตโโ๏ธ", // Woman Mountain Biking
    "๐คธโโ๏ธ", // Man Cartwheeling
    "๐คธโโ๏ธ", // Woman Cartwheeling
    "๐คผ", // People Wrestling
    "๐คผโโ๏ธ", // Men Wrestling
    "๐คผโโ๏ธ", // Women Wrestling
    "๐คฝโโ๏ธ", // Man Playing Water Polo
    "๐คฝโโ๏ธ", // Woman Playing Water Polo
    "๐คพโโ๏ธ", // Man Playing Handball
    "๐คพโโ๏ธ", // Woman Playing Handball
    "๐คนโโ๏ธ", // Man Juggling
    "๐คนโโ๏ธ", // Woman Juggling
    "๐งโโ๏ธ", // Man in Lotus Position
    "๐งโโ๏ธ", // Woman in Lotus Position
    "๐ช", // Circus Tent
    "๐น", // Skateboard
    "๐ถ", // Canoe
    "๐๏ธ", // Reminder Ribbon
    "๐๏ธ", // Admission Tickets
    "๐ซ", // Ticket
    "๐๏ธ", // Military Medal
    "๐", // Trophy
    "๐", // Sports Medal
    "๐ฅ", // 1st Place Medal
    "๐ฅ", // 2nd Place Medal
    "๐ฅ", // 3rd Place Medal
    "โฝ", // Soccer Ball
    "โพ", // Baseball
    "๐ฅ", // Softball
    "๐", // Basketball
    "๐", // Volleyball
    "๐", // American Football
    "๐", // Rugby Football
    "๐พ", // Tennis
    "๐ฅ", // Flying Disc
    "๐ณ", // Bowling
    "๐", // Cricket Game
    "๐", // Field Hockey
    "๐", // Ice Hockey
    "๐ฅ", // Lacrosse
    "๐", // Ping Pong
    "๐ธ", // Badminton
    "๐ฅ", // Boxing Glove
    "๐ฅ", // Martial Arts Uniform
    "๐ฅ", // Goal Net
    "โณ", // Flag in Hole
    "โธ๏ธ", // Ice Skate
    "๐ฃ", // Fishing Pole
    "๐ฝ", // Running Shirt
    "๐ฟ", // Skis
    "๐ท", // Sled
    "๐ฅ", // Curling Stone
    "๐ฏ", // Bullseye
    "๐ฑ", // Pool 8 Ball
    "๐ฎ", // Video Game
    "๐ฐ", // Slot Machine
    "๐ฒ", // Game Die
    "๐งฉ", // Puzzle Piece
    "โ๏ธ", // Chess Pawn
    "๐ญ", // Performing Arts
    "๐จ", // Artist Palette
    "๐งต", // Thread
    "๐งถ", // Yarn
    "๐ผ", // Musical Score
    "๐ค", // Microphone
    "๐ง", // Headphone
    "๐ท", // Saxophone
    "๐ธ", // Guitar
    "๐น", // Musical Keyboard
    "๐บ", // Trumpet
    "๐ป", // Violin
    "๐ฅ", // Drum
    "๐ฌ", // Clapper Board
    "๐น", // Bow and Arrow
    // "๐ผ", // Roller Skate
    // "๐ช", // Accordion
    // "๐ช", // Long Drum


    // Travel and Places
    
    "๐พ", // Map of Japan
    "๐๏ธ", // Snow-Capped Mountain
    "โฐ๏ธ", // Mountain
    "๐", // Volcano
    "๐ป", // Mount Fuji
    "๐๏ธ", // Camping
    "๐๏ธ", // Beach with Umbrella
    "๐๏ธ", // Desert
    "๐๏ธ", // Desert Island
    "๐๏ธ", // National Park
    "๐๏ธ", // Stadium
    "๐๏ธ", // Classical Building
    "๐๏ธ", // Building Construction
    "๐๏ธ", // Houses
    "๐๏ธ", // Derelict House
    "๐ ", // House
    "๐ก", // House with Garden
    "๐ข", // Office Building
    "๐ฃ", // Japanese Post Office
    "๐ค", // Post Office
    "๐ฅ", // Hospital
    "๐ฆ", // Bank
    "๐จ", // Hotel
    "๐ฉ", // Love Hotel
    "๐ช", // Convenience Store
    "๐ซ", // School
    "๐ฌ", // Department Store
    "๐ญ", // Factory
    "๐ฏ", // Japanese Castle
    "๐ฐ", // Castle
    "๐", // Wedding
    "๐ผ", // Tokyo Tower
    "๐ฝ", // Statue of Liberty
    "โช", // Church
    "๐", // Mosque
    "๐", // Synagogue
    "โฉ๏ธ", // Shinto Shrine
    "๐", // Kaaba
    "โฒ", // Fountain
    "โบ", // Tent
    "๐", // Foggy
    "๐", // Night with Stars
    "๐๏ธ", // Cityscape
    "๐", // Sunrise Over Mountains
    "๐", // Sunrise
    "๐", // Cityscape at Dusk
    "๐", // Sunset
    "๐", // Bridge at Night
    "๐ ", // Carousel Horse
    "๐ก", // Ferris Wheel
    "๐ข", // Roller Coaster
    "๐", // Locomotive
    "๐", // Railway Car
    "๐", // High-Speed Train
    "๐", // Bullet Train
    "๐", // Train
    "๐", // Metro
    "๐", // Light Rail
    "๐", // Station
    "๐", // Tram
    "๐", // Monorail
    "๐", // Mountain Railway
    "๐", // Tram Car
    "๐", // Bus
    "๐", // Oncoming Bus
    "๐", // Trolleybus
    "๐", // Minibus
    "๐", // Ambulance
    "๐", // Fire Engine
    "๐", // Police Car
    "๐", // Oncoming Police Car
    "๐", // Taxi
    "๐", // Oncoming Taxi
    "๐", // Automobile
    "๐", // Oncoming Automobile
    "๐", // Sport Utility Vehicle
    "๐", // Delivery Truck
    "๐", // Articulated Lorry
    "๐", // Tractor
    "๐๏ธ", // Racing Car
    "๐๏ธ", // Motorcycle
    "๐ต", // Motor Scooter
    "๐ฒ", // Bicycle
    "๐ด", // Kick Scooter
    "๐", // Bus Stop
    "๐ฃ๏ธ", // Motorway
    "๐ค๏ธ", // Railway Track
    "โฝ", // Fuel Pump
    "๐จ", // Police Car Light
    "๐ฅ", // Horizontal Traffic Light
    "๐ฆ", // Vertical Traffic Light
    "๐ง", // Construction
    "โ", // Anchor
    "โต", // Sailboat
    "๐ค", // Speedboat
    "๐ณ๏ธ", // Passenger Ship
    "โด๏ธ", // Ferry
    "๐ฅ๏ธ", // Motor Boat
    "๐ข", // Ship
    "โ๏ธ", // Airplane
    "๐ฉ๏ธ", // Small Airplane
    "๐ซ", // Airplane Departure
    "๐ฌ", // Airplane Arrival
    "๐บ", // Seat
    "๐", // Helicopter
    "๐", // Suspension Railway
    "๐ ", // Mountain Cableway
    "๐ก", // Aerial Tramway
    "๐ฐ๏ธ", // Satellite
    "๐", // Rocket
    "๐ธ", // Flying Saucer
    "๐ ", // Shooting Star
    "๐", // Milky Way
    "โฑ๏ธ", // Umbrella on Ground
    "๐", // Fireworks
    "๐", // Sparkler
    "๐", // Moon Viewing Ceremony
    "๐ด", // Yen Banknote
    "๐ต", // Dollar Banknote
    "๐ถ", // Euro Banknote
    "๐ท", // Pound Banknote
    "๐ฟ", // Moai
    "๐", // Passport Control
    "๐", // Customs
    "๐", // Baggage Claim
    "๐", // Left Luggage
    // ๐ Hut
    // ๐ Hindu Temple
    // ๐ป Pickup Truck
    // ๐บ Auto Rickshaw
    // ๐ช Parachute
    // ๐ช Ringed Planet


    // Objects

    "๐", // Love Letter
    "๐ณ๏ธ", // Hole
    "๐ฃ", // Bomb
    "๐", // Person Taking Bath
    "๐", // Person in Bed
    "๐บ", // Amphora
    "๐บ๏ธ", // World Map
    "๐งญ", // Compass
    "๐งฑ", // Brick
    "๐", // Barber Pole
    "๐ข๏ธ", // Oil Drum
    "๐๏ธ", // Bellhop Bell
    "๐งณ", // Luggage
    "โ", // Hourglass Done
    "โณ", // Hourglass Not Done
    "โ", // Watch
    "โฐ", // Alarm Clock
    "โฑ๏ธ", //  topwatch
    "โฒ๏ธ", //  imer Clock
    "๐ฐ๏ธ", // Mantelpiece Clock
    "๐ก๏ธ", // Thermometer
    "โฑ๏ธ", // Umbrella on Ground
    "๐", // Balloon
    "๐", // Party Popper
    "๐", // Confetti Ball
    "๐", // Japanese Dolls
    "๐", // Carp Streamer
    "๐งง", // Red Envelope
    "๐", // Ribbon
    "๐", // Wrapped Gift
    "๐ฎ", // Crystal Ball
    "๐น๏ธ", // Joystick
    "๐งธ", // Teddy Bear
    "๐ผ๏ธ", // Framed Picture
    "๐งต", // Thread
    "๐งถ", // Yarn
    "๐๏ธ", // Shopping Bags
    "๐ฟ", // Prayer Beads
    "๐", // Gem Stone
    "๐ฏ", // Postal Horn
    "๐๏ธ", // Studio Microphone
    "๐๏ธ", // Level Slider
    "๐๏ธ", // Control Knobs
    "๐ป", // Radio
    "๐ฑ", // Mobile Phone
    "๐ฒ", // Mobile Phone with Arrow
    "โ๏ธ", // Telephone
    "๐", // Telephone Receiver
    "๐", // Pager
    "๐ ", // Fax Machine
    "๐", // Battery
    "๐", // Electric Plug
    "๐ป", // Laptop
    "๐ฅ๏ธ", // Desktop Computer
    "๐จ๏ธ", // Printer
    "๐ฑ๏ธ", // Computer Mouse
    "๐ฒ๏ธ", // Trackball
    "๐ฝ", // Computer Disk
    "๐พ", // Floppy Disk
    "๐ฟ", // Optical Disk
    "๐", // DVD
    "๐งฎ", // Abacus
    "๐ฅ", // Movie Camera
    "๐๏ธ", // Film Frames
    "๐ฝ๏ธ", // Film Projector
    "๐บ", // Television
    "๐ท", // Camera
    "๐ธ", // Camera with Flash
    "๐น", // Video Camera
    "๐ผ", // Videocassette
    "๐", // Magnifying Glass Tilted Left
    "๐", // Magnifying Glass Tilted Right
    "๐ฏ๏ธ", // Candle
    "๐ก", // Light Bulb
    "๐ฆ", // Flashlight
    "๐ฎ", // Red Paper Lantern
    "๐", // Notebook with Decorative Cover
    "๐", // Closed Book
    "๐", // Open Book
    "๐", // Green Book
    "๐", // Blue Book
    "๐", // Orange Book
    "๐", // Books
    "๐", // Notebook
    "๐", // Ledger
    "๐", // Page with Curl
    "๐", // Scroll
    "๐", // Page Facing Up
    "๐ฐ", // Newspaper
    "๐๏ธ", // Rolled-Up Newspaper
    "๐", // Bookmark Tabs
    "๐", // Bookmark
    "๐ท๏ธ", // Label
    "๐ฐ", // Money Bag
    "๐ด", // Yen Banknote
    "๐ต", // Dollar Banknote
    "๐ถ", // Euro Banknote
    "๐ท", // Pound Banknote
    "๐ธ", // Money with Wings
    "๐ณ", // Credit Card
    "๐งพ", // Receipt
    "โ๏ธ", // Envelope
    "๐ง", // E-Mail
    "๐จ", // Incoming Envelope
    "๐ฉ", // Envelope with Arrow
    "๐ค", // Outbox Tray
    "๐ฅ", // Inbox Tray
    "๐ฆ", // Package
    "๐ซ", // Closed Mailbox with Raised Flag
    "๐ช", // Closed Mailbox with Lowered Flag
    "๐ฌ", // Open Mailbox with Raised Flag
    "๐ญ", // Open Mailbox with Lowered Flag
    "๐ฎ", // Postbox
    "๐ณ๏ธ", // Ballot Box with Ballot
    "โ๏ธ", // Pencil
    "โ๏ธ", // Black Nib
    "๐๏ธ", // Fountain Pen
    "๐๏ธ", // Pen
    "๐๏ธ", // Paintbrush
    "๐๏ธ", // Crayon
    "๐", // Memo
    "๐", // File Folder
    "๐", // Open File Folder
    "๐๏ธ", // Card Index Dividers
    "๐", // Calendar
    "๐", // Tear-Off Calendar
    "๐๏ธ", // Spiral Notepad
    "๐๏ธ", // Spiral Calendar
    "๐", // Card Index
    "๐", // Chart Increasing
    "๐", // Chart Decreasing
    "๐", // Bar Chart
    "๐", // Clipboard
    "๐", // Pushpin
    "๐", // Round Pushpin
    "๐", // Paperclip
    "๐๏ธ", // Linked Paperclips
    "๐", // Straight Ruler
    "๐", // Triangular Ruler
    "โ๏ธ", // Scissors
    "๐๏ธ", // Card File Box
    "๐๏ธ", // File Cabinet
    "๐๏ธ", // Wastebasket
    "๐", // Locked
    "๐", // Unlocked
    "๐", // Locked with Pen
    "๐", // Locked with Key
    "๐", // Key
    "๐๏ธ", // Old Key
    "๐จ", // Hammer
    "โ๏ธ", // Pick
    "โ๏ธ", // Hammer and Pick
    "๐ ๏ธ", // Hammer and Wrench
    "๐ก๏ธ", // Shield
    "๐ง", // Wrench
    "๐ฉ", // Nut and Bolt
    "โ๏ธ", // Gear
    "๐๏ธ", // Clamp
    "โ๏ธ", // Balance Scale
    "๐", // Link
    "โ๏ธ", // Chains
    "๐งฐ", // Toolbox
    "๐งฒ", // Magnet
    "โ๏ธ", // Alembic
    "๐งช", // Test Tube
    "๐งซ", // Petri Dish
    "๐งฌ", // DNA
    "๐ฌ", // Microscope
    "๐ญ", // Telescope
    "๐ก", // Satellite Antenna
    "๐ช", // Door
    "๐๏ธ", // Bed
    "๐๏ธ", // Couch and Lamp
    "๐ฟ", // Shower
    "๐", // Bathtub
    "๐งด", // Lotion Bottle
    "๐งท", // Safety Pin
    "๐งน", // Broom
    "๐งบ", // Basket
    "๐งผ", // Soap
    "๐งฝ", // Sponge
    "๐งฏ", // Fire Extinguisher
    "๐", // Shopping Cart
    "โฐ๏ธ", // Coffin
    "โฑ๏ธ", // Funeral Urn
    "๐ฐ", // Potable Water
    // "๐คฟ", // Diving Mask
    // "๐ช", // Yo-Yo
    // "๐ช", // Kite
    // "๐ช", // Magic Wand
    // "๐ช", // Nesting Dolls
    // "๐ช", // Piรฑata
    // "๐ชก", // Sewing Needle
    // "๐ชข", // Knot
    // "๐ช", // Banjo
    // "๐ช", // Coin
    // "๐ช", // Axe
    // "๐ช", // Boomerang
    // "๐ช", // Carpentry Saw
    // "๐ช", // Screwdriver
    // "๐ฆฏ", // White Cane
    // "๐ช", // Ladder
    // "๐ฉน", // Adhesive Bandage
    // "๐ฉบ", // Stethoscope
    // "๐ช", // Mirror
    // "๐ช", // Window
    // "๐ชค", // Mouse Trap
    // "๐ช", // Razor
    // "๐ชฃ", // Bucket
    // "๐ชฅ", // Toothbrush
    // "๐ชง", // Placard
]

export { emojiList }
