// controllers/cartController.js
const Cart = require("../models/cartModel");

exports.addToCart = async (req, res) => {
  const userId = req.user.id; // JWT로 인증된 사용자
  const { productId, quantity, selectedOptions } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    // 이미 같은 상품+옵션이 장바구니에 있으면 수량만 증가
    const existingItem = cart.items.find(
      (item) =>
        item.product.toString() === productId &&
        item.selectedOptions.size === selectedOptions.size &&
        item.selectedOptions.color === selectedOptions.color
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity, selectedOptions });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: "장바구니 추가 실패" });
  }
};

exports.getCart = async(req, res) => {
  const userId = req.user.id; 

  try {
    const cart = await Cart.findOne({ userId }).populate('items.product');

    if (!cart) {
      return res.status(404).json({ message: "장바구니가 비어 있습니다." });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error("장바구니 조회 실패:", error);
    res.status(500).json({ message: "서버 오류" });
  }
};
