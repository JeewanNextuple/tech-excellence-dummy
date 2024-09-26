"use client";

import { useState } from "react";
import {
  ShoppingCart,
  User,
  Package,
  Globe,
  ChevronDown,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function HomePageComponent() {
  const [region, setRegion] = useState("United States");

  const products = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: "$79.99",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$149.99",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      name: "Laptop Backpack",
      price: "$59.99",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 4,
      name: "4K Action Camera",
      price: "$199.99",
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 5,
      name: "Portable Charger",
      price: "$39.99",
      image:
        "https://images.unsplash.com/photo-1585338665741-6a7439020b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary mr-8">OmniCart</h1>
            <div className="hidden md:flex space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>My Account</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" className="flex items-center">
                <Package className="mr-2 h-4 w-4" />
                Orders
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    {region}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onSelect={() => setRegion("United States")}>
                    United States
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => setRegion("Canada")}>
                    Canada
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onSelect={() => setRegion("United Kingdom")}
                  >
                    United Kingdom
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-64 mr-2"
              />
              <Button size="icon" variant="ghost">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">{product.price}</p>
                    <Button className="w-full mt-4">Add to Cart</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">Special Offer</h3>
              <img
                src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                alt="Special Offer - Smartphone Discount"
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p className="text-sm mb-4">
                Get 20% off on all smartphones! Limited time offer. Don't miss
                out!
              </p>
              <Button className="w-full">Shop Now</Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-6 fixed bottom-0 w-full">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; 2024 OmniCart. 3CO5d6objNGIph/KXjddOg==
        </div>
      </footer>
    </div>
  );
}
