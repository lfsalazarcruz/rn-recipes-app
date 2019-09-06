import Categories from "../models/category";
import Meals from "../models/meals";

export const CATEGORIES = [
  new Categories("c1", "Italian", "#f5428d"),
  new Categories("c2", "Quick and Easy", "#f54242"),
  new Categories("c3", "Hamburgers", "#f5a442"),
  new Categories("c4", "German", "#f5d142"),
  new Categories("c5", "Asian", "#368dff"),
  new Categories("c6", "French", "#41d95d"),
  new Categories("c7", "Summer", "#9eecff"),
  new Categories("c8", "Mexican", "#ffc7ff"),
  new Categories("c9", "Breakfast", "#47428d")
];

export const MEALS = [
  new Meals(
    "m1",
    ["c1", "c2"],
    "Spaguetti",
    "affordable",
    "simple",
    "https://www.cremadelechealqueria.com/sites/alqueria-dev/files/styles/650_x_350/public/espagueti_al_limon_y_cilantro.png?itok=z1xh0Psq",
    20,
    "water, spaguetti, salt",
    "Instructions",
    false,
    false,
    false,
    false
  ),
  new Meals(
    "m1",
    ["c2", "c3", "c4"],
    "Pancakes",
    "affordable",
    "simple",
    "url",
    20,
    "water, flour, salt, milk",
    "Instructions",
    false,
    false,
    false,
    false
  )
];
