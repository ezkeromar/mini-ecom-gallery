import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function ProductFilter({onCategoryChange}: {onCategoryChange: (category: string) => void}) {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    loadCategeries();
  }, []);

  const loadCategeries = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const categories = (await response.json()) as string[];
      setCategories(categories);
      console.log(categories, "categories");
    } catch (error) {
      console.error(error);
    }
  };

const changeCategory = (category: string) => {
    onCategoryChange(category);
};
  return (
    <div className="flex justify-end col-span-12 my-3">
      <Select onValueChange={category => changeCategory(category)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem className="capitalize" value="all">all</SelectItem>
          {categories.map((category, index) => (
            <SelectItem className="capitalize" key={index} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
