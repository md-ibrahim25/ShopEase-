import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "@/store/slices/cart-slice";

function ProductCard({ data }) {
  const { id, title, price, rating, thumbnail, discountPercentage, reviews } =
    data;

  const dispatch = useDispatch();
  const isPresent = useSelector((state) => state.cart.itemsId.includes(id));
  //Handle Add to Cart Button click
  const handleAddClick = () => {
    dispatch(addItem(id));
  };
  const handleRemoveClick = () => {
    dispatch(removeItem(id));
  };
  return (
    <Card className="h-[280px]">
      <img src={thumbnail} alt={title} className={"mx-auto h-[42%]"} />
      <CardHeader className="mb-1 flex h-[20%] overflow-hidden">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardFooter className="flex h-[30%] flex-col">
        <p className="mt-2 flex items-center gap-1 p-1 text-[#7E8A8C]">
          {rating.toFixed(1)} <Star fill="#7E8A8C" width={18} />{" "}
          <span className="text-black">({reviews.length})</span>
        </p>
        <div>
          {!isPresent ? (
            <Button onClick={handleAddClick}>Add to cart</Button>
          ) : (
            <Button onClick={handleRemoveClick} variant="destructive">Remove from cart</Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
