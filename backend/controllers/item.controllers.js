import Item from "../models/item.model.js";
import Shop from "../models/shop.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

export const addItem = async (req, res) => {
  try {
    const { name, category, foodType, price } = req.body;
    let image;
    if (req.file) {
      image = await uploadOnCloudinary(req.file.path);
      const shop = await Shop.findOne({ owner: req.userId });
      if (!shop) {
        res.status(400).json({ messsge: "Shop not found" });
      }
      const item = await Item.create({
        name,
        category,
        foodType,
        price,
        image,
        shop: shop._id
      });

      return res.status(201).json(item);
    }
  } catch (error) {
    res.status(500).json({ message: `Add item error ${error}` });
  }
};

export const editItem = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const { name, category, foodType, price } = req.body;
    let image;
    if (req.file) {
      image = await uploadOnCloudinary(req.file.path);
    }
    const item = await Item.findByIdAndUpdate(
      itemId,
      {
        name,
        category,
        foodType,
        price,
        image
      },
      { new: true }
    );

    if (!item) {
      res.status(400).json({ messsge: "Item not found" });
    }

      return res.status(200).json(item);
      
  } catch (error) {
    res.status(500).json({ message: `Edit item error ${error}` });
  }
};
