const catalog = [
  {
    id: 1,
    title: "Ghormeh Sabzi (Persian Herb Stew)",
    ingredients: [
      { item: "Stew Beef", amount: 150, unit: "g" },
      { item: "Small Onion", amount: 1, unit: "" },
      { item: "Parsley", amount: 0.5, unit: "cup" },
      { item: "Cilantro", amount: 0.25, unit: "cup" },
      { item: "Dried Fenugreek", amount: 2, unit: "tbsp" },
      { item: "Kidney Beans", amount: 0.25, unit: "cup" },
      { item: "Dried Lime", amount: 1, unit: "" },
      { item: "Lemon Juice (Optional)", amount: 1, unit: "tbsp" }
    ],
    macros: [
      { macro: "Calories", value: 350, unit: "" },
      { macro: "Protein", value: 25, unit: "g" },
      { macro: "Carbs", value: 18, unit: "g" },
      { macro: "Fats", value: 20, unit: "g" }
    ],
    directions: [
      "Finely chop parsley, cilantro, and dried fenugreek.",
      "Sauté chopped onion in oil until golden.",
      "Add stew beef, salt, pepper, and turmeric. Brown the meat on all sides.",
      "Add herbs and fry until they turn dark green and aromatic.",
      "Stir in kidney beans and dried lime.",
      "Add 1 cup of water (1 cup per 2 people), bring to a boil, then reduce heat.",
      "Cover and simmer on low for 1.5 hours until flavors combine and meat is tender.",
      "Add lemon juice at the end if desired. Serve hot with steamed rice."
    ],
    image: "images/ghormeSabzi.webp",
    favorite:"true"
  },
  {
    id: 2,
    title: "Fesenjan (Pomegranate Walnut Chicken Stew)",
    ingredients: [
      { item: "Chicken", amount: 150, unit: "g" },
      { item: "Ground Walnuts", amount: 0.5, unit: "cup" },
      { item: "Pomegranate Molasses", amount: 0.25, unit: "cup" },
      { item: "Small Onion", amount: 1, unit: "" }
    ],
    macros: [
      { macro: "Calories", value: 500, unit: "" },
      { macro: "Protein", value: 28, unit: "g" },
      { macro: "Carbs", value: 15, unit: "g" },
      { macro: "Fats", value: 35, unit: "g" }
    ],
    directions: [
      "Sauté chopped onion in a pot with oil until soft and golden.",
      "Add chicken pieces and brown them evenly on all sides.",
      "Add ground walnuts and toast lightly with the meat and onion.",
      "Pour in pomegranate molasses and 1 cup of water (1 cup per 2 people), stir well.",
      "Bring to a gentle boil, reduce heat, and cover.",
      "Simmer for 1.5 hours, stirring occasionally, until the stew thickens and darkens.",
      "Adjust sweetness or sourness with extra molasses or sugar to taste.",
      "Serve hot over white rice."
    ],
    image: "images/fesenjan.webp",
  },
  {
    id: 3,
    title: "Gheimeh (Yellow Split Pea & Beef Stew)",
    ingredients: [
      { item: "Beef", amount: 100, unit: "g" },
      { item: "Yellow Split Peas", amount: 0.25, unit: "cup" },
      { item: "Small Onion", amount: 1, unit: "" },
      { item: "Tomato Paste", amount: 1, unit: "tbsp" },
      { item: "Dried Lime", amount: 1, unit: "" },
      { item: "Fries", amount: 1, unit: "serving" }
    ],
    macros: [
      { macro: "Calories", value: 320, unit: "" },
      { macro: "Protein", value: 22, unit: "g" },
      { macro: "Carbs", value: 25, unit: "g" },
      { macro: "Fats", value: 15, unit: "g" }
    ],
    directions: [
      "Dice onion and sauté in oil until golden.",
      "Add beef cubes, salt, pepper, and turmeric. Cook until beef is browned.",
      "Stir in tomato paste and sauté for another minute.",
      "Add yellow split peas and the dried lime.",
      "Pour in 1 cup of water (1 cup per 2 people) and bring to a boil.",
      "Cover and simmer on low heat for 1 hour until meat and peas are tender.",
      "Top with crispy fries just before serving.",
      "Serve hot with steamed rice."
    ],
    image: "images/gheimeh.webp",
  },
  {
    id: 4,
    title: "Zereshk Polo ba Morgh (Barberry Rise With Chicken)",
    ingredients: [
      { item: "Chicken Piece", amount: 1, unit: "" },
      { item: "Rice", amount: 0.5, unit: "cup" },
      { item: "Barberries", amount: 2, unit: "tbsp" },
      { item: "Sugar", amount: 1, unit: "tbsp" },
      { item: "Saffron Water", amount: 1, unit: "tbsp" }
    ],
    macros: [
      { macro: "Calories", value: 420, unit: "" },
      { macro: "Protein", value: 30, unit: "g" },
      { macro: "Carbs", value: 35, unit: "g" },
      { macro: "Fats", value: 15, unit: "g" }
    ],
    directions: [
      "In a pot, cook chicken with onion, turmeric, salt, pepper, and tomato paste until tender.",
      "Meanwhile, wash and parboil rice, then drain.",
      "Sauté barberries in a bit of oil with sugar until puffed. Do not overcook.",
      "Add saffron water to the barberries and stir gently.",
      "Layer cooked rice with barberries and saffron mixture.",
      "Serve the rice with the chicken on the side or underneath."
    ],
    image: "images/zereshkPoloBaMorgh.webp",
    favorite: "true"
  },
  {
    id: 5,
    title: "Baghali Polo ba Mahicheh (Dill & Fava Bean Rise With Lamb Shank)",
    ingredients: [
      { item: "Lamb Shank", amount: 1, unit: "" },
      { item: "Rice", amount: 0.5, unit: "cup" },
      { item: "Fava Beans", amount: 0.25, unit: "cup" },
      { item: "Dill", amount: 2, unit: "tbsp" }
    ],
    macros: [
      { macro: "Calories", value: 460, unit: "" },
      { macro: "Protein", value: 32, unit: "g" },
      { macro: "Carbs", value: 30, unit: "g" },
      { macro: "Fats", value: 25, unit: "g" }
    ],
    directions: [
      "Season lamb shank with salt and turmeric.",
      "Sear the lamb shank in a pot until browned on all sides.",
      "Add enough water to cover and cook on low heat for 2–3 hours until tender.",
      "Separately, cook rice until al dente and drain.",
      "Boil fava beans briefly, then mix with rice and chopped dill.",
      "Steam the rice and beans mixture together for 30 minutes.",
      "Serve the dill rice alongside the cooked lamb shank."
    ],
    image: "images/baghaliPoloBaMahicheh.webp",
  },
  {
    id: 6,
    title: "Kabob Koobideh (Ground Meat Skewers)",
    ingredients: [
      { item: "Ground Meat", amount: 200, unit: "g" },
      { item: "Grated Onion (Juiced)", amount: 0.5, unit: "" },
      { item: "Salt", amount: 1, unit: "tsp" },
      { item: "Pepper", amount: 0.5, unit: "tsp" },
      { item: "Turmeric", amount: 0.25, unit: "tsp" }
    ],
    macros: [
      { macro: "Calories", value: 380, unit: "" },
      { macro: "Protein", value: 26, unit: "g" },
      { macro: "Carbs", value: 5, unit: "g" },
      { macro: "Fats", value: 28, unit: "g" }
    ],
    directions: [
      "Combine ground meat with juiced grated onion, salt, pepper, and turmeric.",
      "Mix thoroughly until the mixture becomes sticky and holds shape.",
      "Form the meat into long logs or shape around skewers.",
      "Grill over medium-high heat or cook in a pan until browned on all sides and cooked through.",
      "Serve hot with grilled tomato and rice or flatbread."
    ],
    image: "images/kabobKoobideh.webp",
    favorite: "true"
  },
  {
    id: 7,
    title: "Joojeh Kabab (Saffron Chicken Skewers)",
    ingredients: [
      { item: "Chicken", amount: 150, unit: "g" },
      { item: "Yogurt", amount: 2, unit: "tbsp" },
      { item: "Lemon Juice", amount: 1, unit: "tbsp" },
      { item: "Saffron Water", amount: 1, unit: "tbsp" }
    ],
    macros: [
      { macro: "Calories", value: 300, unit: "" },
      { macro: "Protein", value: 28, unit: "g" },
      { macro: "Carbs", value: 4, unit: "g" },
      { macro: "Fats", value: 18, unit: "g" }
    ],
    directions: [
      "Combine chicken with yogurt, lemon juice, and saffron water in a bowl.",
      "Mix well to coat the chicken evenly.",
      "Cover and marinate in the refrigerator overnight (or at least 4 hours).",
      "Grill the chicken on skewers or bake in the oven until golden and cooked through.",
      "Serve with rice or bread and grilled vegetables."
    ],
    image: "images/joojehKabob.webp",
    favorite: "true"
  },
  {
    id: 8,
    title: "Tahchin (Crispy Saffron Rice Cake With Chicken)",
    ingredients: [
      { item: "Rice", amount: 0.5, unit: "cup" },
      { item: "Egg Yolk", amount: 1, unit: "" },
      { item: "Yogurt", amount: 1, unit: "tbsp" },
      { item: "Saffron Water", amount: 1, unit: "tbsp" },
      { item: "Chicken Breast (Cooked, Shredded)", amount: 0.5, unit: "" }
    ],
    macros: [
      { macro: "Calories", value: 500, unit: "" },
      { macro: "Protein", value: 28, unit: "g" },
      { macro: "Carbs", value: 40, unit: "g" },
      { macro: "Fats", value: 25, unit: "g" }
    ],
    directions: [
      "Mix rice with egg yolk, yogurt, and saffron water in a bowl.",
      "Grease a nonstick baking dish or pan.",
      "Spread half the rice mixture on the bottom of the dish.",
      "Add a layer of shredded cooked chicken in the middle.",
      "Top with the remaining rice mixture and press down gently.",
      "Bake at 375°F (190°C) for 45–60 minutes until golden and crispy on the bottom.",
      "Flip to serve and slice into wedges."
    ],
    image: "images/tahchin.webp",
  },
  {
    id: 9,
    title: "Adas Polo (Lentil Rise with Raisins and Optional Meat)",
    ingredients: [
      { item: "Rice", amount: 0.5, unit: "cup" },
      { item: "Lentils", amount: 0.25, unit: "cup" },
      { item: "Raisins", amount: 2, unit: "tbsp" },
      { item: "Optional Meat or Dates", amount: 1, unit: "serving" }
    ],
    macros: [
      { macro: "Calories", value: 350, unit: "" },
      { macro: "Protein", value: 15, unit: "g" },
      { macro: "Carbs", value: 45, unit: "g" },
      { macro: "Fats", value: 10, unit: "g" }
    ],
    directions: [
      "Cook lentils in water until just tender, then drain.",
      "Boil rice separately until al dente, then drain.",
      "Sauté raisins in oil until they puff slightly.",
      "Layer rice, lentils, and raisins in a pot. Add a bit of oil and optional dates or meat.",
      "Steam the layered mixture for 30 minutes on low heat.",
      "Serve with yogurt or salad."
    ],
    image: "images/adasPolo.webp",
  },
  {
    id: 10,
    title: "Lubia Polo (Green Bean Rice and Ground Beef)",
    ingredients: [
      { item: "Rice", amount: 0.5, unit: "cup" },
      { item: "Ground Beef", amount: 100, unit: "g" },
      { item: "Green Beans", amount: 0.5, unit: "cup" },
      { item: "Tomato Paste", amount: 1, unit: "tbsp" }
    ],
    macros: [
      { macro: "Calories", value: 390, unit: "" },
      { macro: "Protein", value: 20, unit: "g" },
      { macro: "Carbs", value: 40, unit: "g" },
      { macro: "Fats", value: 18, unit: "g" }
    ],
    directions: [
      "Brown ground beef in a pan with oil, salt, and turmeric.",
      "Add chopped green beans and cook until tender.",
      "Stir in tomato paste and cook for another 2 minutes.",
      "Boil rice separately until al dente, then drain.",
      "Layer meat mixture and rice in a pot.",
      "Steam on low heat for 30–40 minutes.",
      "Serve warm with pickles or salad."
    ],
    image: "images/lubiaPolo.webp",
  },
  {
    id: 11,
    title: "Shirin Polo (Sweet Persian Rice with Nuts and Orange Peel)",
    ingredients: [
      { item: "Rice", amount: 0.5, unit: "cup" },
      { item: "Slivered Almonds/Pistachios", amount: 2, unit: "tbsp" },
      { item: "Candied Orange Peel", amount: 2, unit: "tbsp" },
      { item: "Sugar", amount: 1, unit: "tbsp" }
    ],
    macros: [
      { macro: "Calories", value: 370, unit: "" },
      { macro: "Protein", value: 10, unit: "g" },
      { macro: "Carbs", value: 50, unit: "g" },
      { macro: "Fats", value: 12, unit: "g" }
    ],
    directions: [
      "Boil rice until al dente and drain.",
      "Sauté orange peel with sugar until glossy.",
      "Lightly toast slivered almonds and pistachios.",
      "Layer rice in a serving dish and top with orange peel and nuts.",
      "Serve warm or at room temperature, ideally with saffron chicken."
    ],
    image: "images/shirinPolo.webp",
  },
  {
    id: 12,
    title: "Ash Reshteh (Persian Noodle and Bean Soup)",
    ingredients: [
      { item: "Chickpeas", amount: 0.25, unit: "cup" },
      { item: "Lentils", amount: 0.25, unit: "cup" },
      { item: "Kidney Beans", amount: 0.25, unit: "cup" },
      { item: "Mixed Herbs", amount: 1, unit: "cup" },
      { item: "Noodles", amount: 50, unit: "g" },
      { item: "Onion", amount: 1, unit: "" },
      { item: "Kashk", amount: 2, unit: "tbsp" }
    ],
    macros: [
      { macro: "Calories", value: 380, unit: "" },
      { macro: "Protein", value: 18, unit: "g" },
      { macro: "Carbs", value: 40, unit: "g" },
      { macro: "Fats", value: 15, unit: "g" }
    ],
    directions: [
      "Soak chickpeas, lentils, and kidney beans overnight.",
      "Boil the legumes in a large pot until soft.",
      "Add chopped herbs and continue cooking.",
      "Break in noodles and simmer until tender.",
      "Fry onion until caramelized. Reserve some for garnish.",
      "Add most of the onion to the pot and stir.",
      "Top with fried onion and spoonfuls of kashk before serving."
    ],
    image: "images/ashReshteh.webp",
    favorite: "true"
  },
  {
    id: 13,
    title: "Mirza Ghasemi (Smoked Eggplant With Tomato and Egg)",
    ingredients: [
      { item: "Eggplant", amount: 1, unit: "" },
      { item: "Garlic Clove", amount: 1, unit: "" },
      { item: "Tomato", amount: 1, unit: "" },
      { item: "Egg", amount: 1, unit: "" }
    ],
    macros: [
      { macro: "Calories", value: 250, unit: "" },
      { macro: "Protein", value: 8, unit: "g" },
      { macro: "Carbs", value: 12, unit: "g" },
      { macro: "Fats", value: 20, unit: "g" }
    ],
    directions: [
      "Roast or grill eggplant until charred and soft. Peel and mash.",
      "Sauté chopped garlic in oil until golden.",
      "Add chopped tomato and cook until soft.",
      "Mix in mashed eggplant and cook together for 10 minutes.",
      "Crack in an egg and stir until it sets.",
      "Serve warm with bread."
    ],
    image: "images/mirzaGhasemi.webp",
  },
  {
    id: 14,
    title: "Kuku Sabzi (Persian Herb Frittata)",
    ingredients: [
      { item: "Egg", amount: 1, unit: "" },
      { item: "Mixed Herbs (Parsley, Cilantro, Green Onion)", amount: 0.25, unit: "cup" },
      { item: "Flour (Optional)", amount: 1, unit: "tbsp" }
    ],
    macros: [
      { macro: "Calories", value: 180, unit: "" },
      { macro: "Protein", value: 8, unit: "g" },
      { macro: "Carbs", value: 5, unit: "g" },
      { macro: "Fats", value: 14, unit: "g" }
    ],
    directions: [
      "Chop herbs finely and mix with egg and flour (if using).",
      "Season with salt and pepper.",
      "Heat oil in a nonstick pan over medium heat.",
      "Pour the mixture and flatten into a round shape.",
      "Cook until golden on both sides, flipping carefully.",
      "Slice and serve hot or room temperature."
    ],
    image: "images/kukuSabzi.webp",
    favorite: "true"
  },
  {
    id: 15,
    title: "Dolmeh (Stuffed Grape Leaves or Peppers)",
    ingredients: [
      { item: "Grape Leaves or Bell Pepper", amount: 6, unit: "" },
      { item: "Rice", amount: 0.25, unit: "cup" },
      { item: "Ground Beef", amount: 2, unit: "tbsp" },
      { item: "Split Peas", amount: 1, unit: "tbsp" },
      { item: "Mixed Herbs", amount: 1, unit: "tbsp" }
    ],
    macros: [
      { macro: "Calories", value: 300, unit: "" },
      { macro: "Protein", value: 15, unit: "g" },
      { macro: "Carbs", value: 25, unit: "g" },
      { macro: "Fats", value: 15, unit: "g" }
    ],
    directions: [
      "Mix rice, ground beef, split peas, and herbs together for the filling.",
      "Blanch grape leaves if using. Core bell peppers if using.",
      "Stuff leaves or peppers with the filling and roll or cover.",
      "Arrange in a pot and pour over tomato sauce.",
      "Cover and simmer on low for 45–60 minutes until cooked through.",
      "Serve warm with yogurt or bread."
    ],
    image: "images/dolmeh.webp",
    favorite: "true"
  },
  {
    id: 16,
    title: "Kashk-e Bademjan (Roasted Eggplant Dip with Whey or Yogurt)",
    ingredients: [
      { item: "Eggplant", amount: 1, unit: "" },
      { item: "Garlic Clove", amount: 1, unit: "" },
      { item: "Kashk or Yogurt", amount: 2, unit: "tbsp" },
      { item: "Mint/Onion Topping (Optional)", amount: 1, unit: "tbsp" }
    ],
    macros: [
      { macro: "Calories", value: 220, unit: "" },
      { macro: "Protein", value: 7, unit: "g" },
      { macro: "Carbs", value: 10, unit: "g" },
      { macro: "Fats", value: 18, unit: "g" }
    ],
    directions: [
      "Roast or fry eggplant until soft, then mash.",
      "Sauté garlic in oil until fragrant.",
      "Mix mashed eggplant with garlic and stir in kashk or yogurt.",
      "Top with fried mint and onions if desired.",
      "Serve warm or room temperature with bread."
    ],
    image: "images/kashkeBademjan.webp",
    favorite: "true"
  }
];

export default catalog;