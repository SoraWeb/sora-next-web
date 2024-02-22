const prompts = {
  "tokyo-walk":
    "A stylish woman walks down a Tokyo street filled with warm glowing neon and animated city signage. She wears a black leather jacket, a long red dress, and black boots, and carries a black purse. She wears sunglasses and red lipstick. She walks confidently and casually. The street is damp and reflective, creating a mirror effect of the colorful lights. Many pedestrians walk about.",
  "wooly-mammoth":
    "Several giant wooly mammoths approach treading through a snowy meadow, their long wooly fur lightly blows in the wind as they walk, snow covered trees and dramatic snow capped mountains in the distance, mid afternoon light with wispy clouds and a sun high in the distance creates a warm glow, the low camera view is stunning capturing the large furry mammal with beautiful photography, depth of field.",
  "mitten-astronaut":
    "A movie trailer featuring the adventures of the 30 year old space man wearing a red wool knitted motorcycle helmet, blue sky, salt desert, cinematic style, shot on 35mm film, vivid colors.",
  "big-sur":
    "Drone view of waves crashing against the rugged cliffs along Big Sur\u2019s garay point beach. The crashing blue waters create white-tipped waves, while the golden light of the setting sun illuminates the rocky shore. A small island with a lighthouse sits in the distance, and green shrubbery covers the cliff\u2019s edge. The steep drop from the road down to the beach is a dramatic feat, with the cliff\u2019s edges jutting out over the sea. This is a view that captures the raw beauty of the coast and the rugged landscape of the Pacific Coast Highway.",
  "monster-with-melting-candle":
    "Animated scene features a close-up of a short fluffy monster kneeling beside a melting red candle. The art style is 3D and realistic, with a focus on lighting and texture. The mood of the painting is one of wonder and curiosity, as the monster gazes at the flame with wide eyes and open mouth. Its pose and expression convey a sense of innocence and playfulness, as if it is exploring the world around it for the first time. The use of warm colors and dramatic lighting further enhances the cozy atmosphere of the image.",
  "origami-undersea":
    "A gorgeously rendered papercraft world of a coral reef, rife with colorful fish and sea creatures.",
  "ships-in-coffee":
    "Photorealistic closeup video of two pirate ships battling each other as they sail inside a cup of coffee.",
  "man-on-the-cloud":
    "A young man at his 20s is sitting on a piece of cloud in the sky, reading a book.",
  "gold-rush": "Historical footage of California during the gold rush.",
  "zen-garden-gnome":
    "A close up view of a glass sphere that has a zen garden within it. There is a small dwarf in the sphere who is raking the zen garden and creating patterns in the sand.",
  "closeup-of-womans-eye":
    "Extreme close up of a 24 year old woman\u2019s eye blinking, standing in Marrakech during magic hour, cinematic film shot in 70mm, depth of field, vivid colors, cinematic",
  "dancing-kangaroo": "A cartoon kangaroo disco dances.",
  lagos:
    "A beautiful homemade video showing the people of Lagos, Nigeria in the year 2056. Shot with a mobile phone camera.",
  "petri-dish-pandas":
    "A petri dish with a bamboo forest growing within it that has tiny red pandas running around.",
  "stack-of-tvs":
    "The camera rotates around a large stack of vintage televisions all showing different programs \u2014 1950s sci-fi movies, horror movies, news, static, a 1970s sitcom, etc, set inside a large New York museum gallery.",
  "big-eyed-fluff-ball":
    "3D animation of a small, round, fluffy creature with big, expressive eyes explores a vibrant, enchanted forest. The creature, a whimsical blend of a rabbit and a squirrel, has soft blue fur and a bushy, striped tail. It hops along a sparkling stream, its eyes wide with wonder. The forest is alive with magical elements: flowers that glow and change colors, trees with leaves in shades of purple and silver, and small floating lights that resemble fireflies. The creature stops to interact playfully with a group of tiny, fairy-like beings dancing around a mushroom ring. The creature looks up in awe at a large, glowing tree that seems to be the heart of the forest.",
  "suv-in-the-dust":
    "The camera follows behind a white vintage SUV with a black roof rack as it speeds up a steep dirt road surrounded by pine trees on a steep mountain slope, dust kicks up from it\u2019s tires, the sunlight shines on the SUV as it speeds along the dirt road, casting a warm glow over the scene. The dirt road curves gently into the distance, with no other cars or vehicles in sight. The trees on either side of the road are redwoods, with patches of greenery scattered throughout. The car is seen from the rear following the curve with ease, making it seem as if it is on a rugged drive through the rugged terrain. The dirt road itself is surrounded by steep hills and mountains, with a clear blue sky above with wispy clouds.",
  "train-window":
    "Reflections in the window of a train traveling through the Tokyo suburbs.",
  "amalfi-coast":
    "A drone camera circles around a beautiful historic church built on a rocky outcropping along the Amalfi Coast, the view showcases historic and magnificent architectural details and tiered pathways and patios, waves are seen crashing against the rocks below as the view overlooks the horizon of the coastal waters and hilly landscapes of the Amalfi Coast Italy, several distant people are seen walking and enjoying vistas on patios of the dramatic ocean views, the warm glow of the afternoon sun creates a magical and romantic feeling to the scene, the view is stunning captured with beautiful photography.",
  "paper-airplanes":
    "A flock of paper airplanes flutters through a dense jungle, weaving around trees as if they were migrating birds.",
  "cat-on-bed":
    "A cat waking up its sleeping owner demanding breakfast. The owner tries to ignore the cat, but the cat tries new tactics and finally the owner pulls out a secret stash of treats from under the pillow to hold the cat off a little longer.",
  "birds-over-river": "Borneo wildlife on the Kinabatangan River",
  "chinese-new-year-dragon":
    "A Chinese Lunar New Year celebration video with Chinese Dragon.",
  "art-museum":
    "Tour of an art gallery with many beautiful works of art in different styles.",
  "tokyo-in-the-snow":
    "Beautiful, snowy Tokyo city is bustling. The camera moves through the bustling city street, following several people enjoying the beautiful snowy weather and shopping at nearby stalls. Gorgeous sakura petals are flying through the wind along with snowflakes.",
  "flower-blooming":
    "A stop motion animation of a flower growing out of the windowsill of a suburban house.",
  "robot-video-game":
    "The story of a robot\u2019s life in a cyberpunk setting.",
  "closeup-man-in-glasses":
    "An extreme close-up of an gray-haired man with a beard in his 60s, he is deep in thought pondering the history of the universe as he sits at a cafe in Paris, his eyes focus on people offscreen as they walk as he sits mostly motionless, he is dressed in a wool coat suit coat with a button-down shirt , he wears a brown beret and glasses and has a very professorial appearance, and the end he offers a subtle closed-mouth smile as if he found the answer to the mystery of life, the lighting is very cinematic with the golden light and the Parisian streets and city in the background, depth of field, cinematic 35mm film.",
  wolves:
    "A beautiful silhouette animation shows a wolf howling at the moon, feeling lonely, until it finds its pack.",
  "aquarium-nyc":
    "New York City submerged like Atlantis. Fish, whales, sea turtles and sharks swim through the streets of New York.",
  "snow-dogs":
    "A litter of golden retriever puppies playing in the snow. Their heads pop out of the snow, covered in.",
  "backward-jogger":
    "Step-printing scene of a person running, cinematic film shot in 35mm.",
  "basketball-explosion": "Basketball through hoop then explodes.",
  "chair-archaeology":
    "Archeologists discover a generic plastic chair in the desert, excavating and dusting it with great care.",
  "grandma-birthday":
    "A grandmother with neatly combed grey hair stands behind a colorful birthday cake with numerous candles at a wood dining room table, expression is one of pure joy and happiness, with a happy glow in her eye. She leans forward and blows out the candles with a gentle puff, the cake has pink frosting and sprinkles and the candles cease to flicker, the grandmother wears a light blue blouse adorned with floral patterns, several happy friends and family sitting at the table can be seen celebrating, out of focus. The scene is beautifully captured, cinematic, showing a 3/4 view of the grandmother and the dining room. Warm color tones and soft lighting enhance the mood.",
  "italian-pup":
    "The camera directly faces colorful buildings in burano italy. An adorable dalmation looks through a window on a building on the ground floor. Many people are walking and cycling along the canal streets in front of the buildings.",
  "otter-on-surfboard":
    "An adorable happy otter confidently stands on a surfboard wearing a yellow lifejacket, riding along turquoise tropical waters near lush tropical islands, 3D digital render art style.",
  "vlogger-corgi": "A corgi vlogging itself in tropical Maui.",
  santorini:
    "Aerial view of Santorini during the blue hour, showcasing the stunning architecture of white Cycladic buildings with blue domes. The caldera views are breathtaking, and the lighting creates a beautiful, serene atmosphere.",
  "tiny-construction":
    "Tiltshift of a construction site filled with workers, equipment, and heavy machinery.",
  "cloud-man":
    "A giant, towering cloud in the shape of a man looms over the earth. The cloud man shoots lighting bolts down to the earth.",
  "dogs-downtown":
    "A Samoyed and a Golden Retriever dog are playfully romping through a futuristic neon city at night. The neon lights emitted from the nearby buildings glistens off of their fur.",
  "photoreal-train":
    "The Glenfinnan Viaduct is a historic railway bridge in Scotland, UK, that crosses over the west highland line between the towns of Mallaig and Fort William. It is a stunning sight as a steam train leaves the bridge, traveling over the arch-covered viaduct. The landscape is dotted with lush greenery and rocky mountains, creating a picturesque backdrop for the train journey. The sky is blue and the sun is shining, making for a beautiful day to explore this majestic spot.",
  "animals-on-bicycle":
    "A bicycle race on ocean with different animals as athletes riding the bicycles with drone camera view.",
  "grandma-waving":
    "A instructional cooking session for homemade gnocchi hosted by a grandmother social media influencer set in a rustic Tuscan country kitchen with cinematic lighting.",
  "dogs-chatting": "Two golden retrievers podcasting on top of a mountain.",
  "futuristic-drones": "A futuristic drone race at sunset on the planet mars",
  "duck-dragon":
    "A half duck half dragon flies through a beautiful sunset with a hamster dressed in adventure gear on its back.",
  wizard:
    "a wizard wearing a pointed hat and a blue robe with white stars casting a spell that shoots lightning from his hand and holding an old tome in his other hand",
  "monster-illustration":
    "Monster Illustration in flat design style of a diverse family of monsters. The group includes a furry brown monster, a sleek black monster with antennas, a spotted green monster, and a tiny polka-dotted monster, all interacting in a playful environment.",
  "sora-cloud": "An image of a realistic cloud that spells \u201cSORA\u201d.",
  "massive-tidal":
    "In an ornate, historical hall, a massive tidal wave peaks and begins to crash. Two surfers, seizing the moment, skillfully navigate the face of the wave.",
  bikes: "Extend mountain bike video.",
  "tokyo-streetview":
    "Beautiful, snowy Tokyo city is bustling. The camera moves through the bustling city street, following several people enjoying the beautiful snowy weather and shopping at nearby stalls. Gorgeous sakura petals are flying through the wind along with snowflakes.",
  "climb-mountain": "Mountain. The camera moves through the mountain.",
  "dog-looking": "Dog looking outside the window.",
  "drink-on-table": "Glass shattering on a desk.",
  "man-eating-burger": "Man eating a burger and leave bite marks.",
  minecraft: "Render world. Minecraft.",
  "minecraft-play": "Render world. Minecraft.",
  painting:
    "A painter leave new strokes along a canvas that persist over time.",
  "bling-zoo": "Welcome to bling zoo.",
  "cathedral-cats":
    "A giant cathedral is completely filled with cats. there are cats everywhere you look. a man enters the cathedral and bows before the giant cat king sitting on a throne.",
  "green-orange-blob":
    "A green blob and an orange blob are in love and dancing together",
  "monkey-chess": "A monkey playing chess in a park.",
  "relaxing-at-beach":
    "Realistic video of people relaxing at beach, then a shark jumps out of the water halfway through and surprises everyone",
  "sea-turtle": "Sea turtle swimming.",
  simulation_3: "Robot in 2050.",
  "walking-figure":
    "A walking figure made out of water tours an art gallery with many beautiful works of art in different styles.",
  "baby-daikon-radish-in-a-tutu-walking-a-dog":
    "A baby daikon radish in a tutu walking a dog.",
  "coastal-picturesque-town":
    "The camera lowers and widens to a grand panoramic view overlooking the beautiful ocean and the historical buildings along the a stunning coastal picturesque town perched on the cliffs. Colorful buildings in shades of yellow, orange, pink, and white cascade down the steep slopes of the rugged coastline of Amalfi Coast in Italy. The architecture has a classic European charm, with tiled roofs and ornate details. Several boats and yachts are speckled across the calm waters, implying leisure activities like boating or sightseeing are common here. Lush greenery on the mountainous landscape. The overall image is vibrant, inviting, and bustling with the potential for holiday adventures and relaxation, warm golden light, beautiful high-end travel photography shot on 4K digital cameras.",
  "giant-duck-walks-through-boston":
    "A giant duck walks through the streets in Boston.",
  "golden-retriever-and-samoyed-walk-through-nyc":
    "A golden retriever and samoyed walk through NYC, then a taxi stop to let the dogs pass a crosswalk, then they walk past a pretzel and hot dog stand, and finally they end up looking at Broadway signs.",
  "photorealisitic-video-of-butterfly-swimming-underwater":
    "A photorealistic video of a butterfly that can swim navigating underwater through a beautiful coral reef.",
  "street-of-japan-in-multiple-viewpoints":
    "Street of Japan in multiple viewpoints.",
  "white-and-orange-tabby-alley-cat":
    "A white and orange tabby alley cat is seen darting across a back street alley in a heavy rain, looking for shelter.",
  "macro-shot-of-a-leaf-showing-tiny-trains-moving-through-its-veins":
    "Macro shot of a leaf showing tiny trains moving through its veins.",
  "an-ant-navigating-the-inside-of-an-ant-nest":
    "Pov footage of an ant navigating the inside of an ant nest.",
  "minecraft-in-8k":
    "Minecraft with the most gorgeous high res 8k texture pack ever.",
}

export default prompts
