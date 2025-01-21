import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState, useRef } from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react"; // Assuming you're using Lucide for icons

function TabBar() {
  const [categoryList, setCategoryList] = useState([]);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const tabsListRef = useRef(null);

  useEffect(() => {
    // Fetch category list
    const fetchTabsData = async () => {
      try {
        const data = await fetch(
          "https://dummyjson.com/products/category-list",
        ).then((res) => res.json());
        setCategoryList(data);
      } catch (error) {
        console.log("Error Fetching Category Data");
      }
    };
    fetchTabsData();
  }, []);

  useEffect(() => {
    // Check for overflow in TabsList
    const checkOverflow = () => {
      if (tabsListRef.current) {
        const tabsList = tabsListRef.current;
        const isOverflow = tabsList.scrollHeight > tabsList.clientHeight;
        setIsOverflowing(isOverflow);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [categoryList]);

  return (
    <div className="relative mx-auto w-[99%]">
      <Tabs defaultValue="account" className="w-full">
        <div className="relative">
          {/* TabsList with wrapping and controlled height */}
          <TabsList
            ref={tabsListRef}
            className={`flex flex-wrap ${
              showMore ? "max-h-full" : "max-h-[40px]"
            } overflow-hidden transition-all duration-300`}
          >
            {categoryList.map((item, index) => (
              <TabsTrigger
                value={item}
                key={index}
                className="capitalize data-[state=active]:text-[#00B6DF]"
              >
                {item}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Down Arrow Button */}
          {isOverflowing && (
            <Button
              className="absolute right-0 top-0 z-10 bg-muted p-1"
              onClick={() => setShowMore(!showMore)}
            >
              <ChevronDown
                size={16}
                className={`text-black transition-transform ${
                  showMore ? "rotate-180" : ""
                }`}
              />
            </Button>
          )}
        </div>
      </Tabs>
    </div>
  );
}

export default TabBar;
