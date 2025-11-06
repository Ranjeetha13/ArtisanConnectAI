// data.js
const categories = [
    {
        name: "Home Decor",
        id: "home-decor",
        products: [
            { id: 1, name: "Handwoven Rug", description: "A beautiful handwoven rug made from natural fibers.", price: 9000, rating: 4.5, image: "./productphoto/rug.jpg" },
            { id: 2, name: "Recycled Glass Vase", description: "A stunning vase made from 100% recycled glass.", price: 2500, rating: 5.0, image: "./productphoto/vase.jpg" },
            { id: 3, name: "Bamboo Wall Art", description: "Unique wall art crafted from sustainable bamboo.", price: 6000, rating: 4.2, image: "./productphoto/wall-art.jpg" },
            { id: 4, name: "Natural Fiber Basket", description: "Handcrafted basket made from natural fibers, perfect for storage.", price: 1800, rating: 4.6, image: "./productphoto/basket.jpg" },
            { id: 5, name: "Upcycled Wood Furniture", description: "Stylish furniture made from upcycled wood.", price: 22000, rating: 4.8, image: "./productphoto/furniture.jpg" }
        ]
    },
    {
        name: "Fashion",
        id: "fashion",
        products: [
            { id: 6, name: "Organic Cotton T-shirt", description: "Soft and breathable t-shirt made from organic cotton.", price: 1800, rating: 4.9, image: "./productphoto/tshirt.jpg" },
            { id: 7, name: "Handcrafted Leather Bag", description: "Durable leather bag handcrafted by artisans.", price: 12000, rating: 4.4, image: "./productphoto/leather-bag.jpg" },
            { id: 8, name: "Recycled Fabric Scarf", description: "Stylish scarf made from recycled fabric.", price: 1200, rating: 4.3, image: "./productphoto/scarf.jpg" },
            { id: 9, name: "Hemp Clothing", description: "Comfortable clothing made from sustainable hemp.", price: 3000, rating: 4.7, image: "./productphoto/hemp-clothing.jpg" },
            { id: 10, name: "Fair-Trade Jewelry", description: "Beautiful jewelry made by artisans under fair-trade conditions.", price: 2500, rating: 4.6, image: "./productphoto/jewelry.jpg" }
        ]
    },
    {
        name: "Beauty & Personal Care",
        id: "beauty",
        products: [
            { id: 11, name: "Organic Skincare Products", description: "Natural skincare products made from organic ingredients.", price: 1500, rating: 4.8, image: "./productphoto/skincare.jpg" },
            { id: 12, name: "Handmade Soap", description: "Luxurious handmade soap with natural ingredients.", price: 300, rating: 5.0, image: "./productphoto/soap.jpg" },
            { id: 13, name: "Natural Deodorant", description: "Eco-friendly deodorant made from natural ingredients.", price: 400, rating: 4.4, image: "./productphoto/deodorant.jpg" },
            { id: 14, name: "Eco-Friendly Makeup", description: "Makeup products made from sustainable and natural ingredients.", price: 1200, rating: 4.5, image: "./productphoto/makeup.jpg" },
            { id: 15, name: "Bamboo Toothbrush", description: "Biodegradable toothbrush made from bamboo.", price: 150, rating: 4.9, image: "./productphoto/toothbrush.jpg" }
        ]
    },
    {
        name: "Kitchenware",
        id: "kitchenware",
        products: [
            { id: 16, name: "Bamboo Utensils", description: "Eco-friendly kitchen utensils made from bamboo.", price: 800, rating: 4.6, image: "./productphoto/utensils.jpg" },
            { id: 17, name: "Reusable Beeswax Wraps", description: "Sustainable alternative to plastic wrap.", price: 600, rating: 4.8, image: "./productphoto/beeswax-wraps.jpg" },
            { id: 18, name: "Glass Storage Containers", description: "Durable glass containers for food storage.", price: 1200, rating: 4.5, image: "./productphoto/containers.jpg" },
            { id: 19, name: "Handcrafted Cutting Board", description: "Beautiful cutting board made from sustainable wood.", price: 1500, rating: 4.7, image: "./productphoto/cutting-board.jpg" },
            { id: 20, name: "Organic Cotton Dish Towels", description: "Soft and absorbent dish towels made from organic cotton.", price: 500, rating: 4.4, image: "./productphoto/dish-towels.jpg" }
        ]
    },
    {
        name: "Gardening Supplies",
        id: "gardening",
        products: [
            { id: 21, name: "Seed Bombs", description: "Eco-friendly seed bombs for easy planting.", price: 300, rating: 4.5, image: "./productphoto/seed-bombs.jpg" },
            { id: 22, name: "Biodegradable Pots", description: "Pots made from biodegradable materials for planting.", price: 400, rating: 4.6, image: "./productphoto/pots.jpg" },
            { id: 23, name: "Organic Seeds", description: "High-quality organic seeds for your garden.", price: 200, rating: 4.8, image: "./productphoto/seeds.jpg" },
            { id: 24, name: "Handcrafted Garden Tools", description: "Durable garden tools made by skilled artisans.", price: 1000, rating: 4.7, image: "./productphoto/garden-tools.jpg" },
            { id: 25, name: "Natural Fertilizers", description: "Organic fertilizers to promote healthy plant growth.", price: 600, rating: 4.9, image: "./productphoto/fertilizers.jpg" }
        ]
    },
    {
        name: "Toys & Games",
        id: "toys",
        products: [
            { id: 26, name: "Wooden Toys", description: "Eco-friendly wooden toys for children.", price: 1200, rating: 4.8, image: "./productphoto/wooden-toys.jpg" },
            { id: 27, name: "Organic Cotton Stuffed Animals", description: "Soft and safe stuffed animals made from organic cotton.", price: 800, rating: 4.9, image: "./productphoto/stuffed-animals.jpg" },
            { id: 28, name: "Eco-Friendly Puzzles", description: "Fun puzzles made from sustainable materials.", price: 600, rating: 4.4, image: "./productphoto/puzzles.jpg" },
            { id: 29, name: "Handcrafted Board Games", description: "Unique board games made from natural materials.", price: 1500, rating: 4.5, image: "./productphoto/board-games.jpg" },
            { id: 30, name: "Natural Rubber Balls", description: "Safe and durable balls made from natural rubber.", price: 400, rating: 4.6, image: "./productphoto/rubber-balls.jpg" }
        ]
    },
    {
        name: "Stationery",
        id: "stationary",
        products: [
            { id: 31, name: "Recycled Paper Notebooks", description: "Notebooks made from 100% recycled paper.", price: 300, rating: 4.5, image: "./productphoto/notebooks.jpg" },
            { id: 32, name: "Plantable Pencils", description: "Pencils that can be planted to grow herbs or flowers.", price: 150, rating: 4.8, image: "./productphoto/pencils.jpg" },
            { id: 33, name: "Eco-Friendly Pens", description: "Biodegradable pens made from sustainable materials.", price: 200, rating: 4.4, image: "./productphoto/pens.jpg" },
            { id: 34, name: "Handmade Greeting Cards", description: "Beautiful greeting cards made from recycled paper.", price: 100, rating: 4.9, image: "./productphoto/greeting-cards.jpg" },
            { id: 35, name: "Natural Ink", description: "Eco-friendly ink made from natural ingredients.", price: 250, rating: 4.6, image: "./productphoto/ink.jpg" }
        ]
    },
    {
        name: "Bags & Accessories",
        id: "bags",
        products: [
            { id: 36, name: "Handwoven Tote Bags", description: "Stylish tote bags made by local artisans.", price: 1200, rating: 4.8, image: "./productphoto/tote-bags.jpg" },
            { id: 37, name: "Recycled Material Backpacks", description: "Durable backpacks made from recycled materials.", price: 2500, rating: 4.5, image: "./productphoto/backpacks.jpg" },
            { id: 38, name: "Eco-Friendly Wallets", description: "Wallets made from sustainable materials.", price: 1000, rating: 4.4, image: "./productphoto/wallets.jpg" },
            { id: 39, name: "Natural Fiber Clutches", description: "Elegant clutches made from natural fibers.", price: 1500, rating: 4.7, image: "./productphoto/clutches.jpg" },
            { id: 40, name: "Upcycled Fabric Pouches", description: "Handy pouches made from upcycled fabric.", price: 600, rating: 4.6, image: "./productphoto/pouches.jpg" }
        ]
    },
    {
        name: "Pet Products",
        id: "pets",
        products: [
            { id: 41, name: "Organic Pet Food", description: "Healthy and organic food for your pets.", price: 1500, rating: 4.9, image: "./productphoto/pet-food.jpg" },
            { id: 42, name: "Handmade Pet Toys", description: "Safe and durable toys made from natural materials.", price: 800, rating: 4.8, image: "./productphoto/pet-toys.jpg" },
            { id: 43, name: "Biodegradable Dog Waste Bags", description: "Eco-friendly waste bags that decompose naturally.", price: 300, rating: 4.6, image: "./productphoto/waste-bags.jpg" },
            { id: 44, name: "Natural Fiber Pet Beds", description: "Comfortable pet beds made from natural fibers.", price: 2000, rating: 4.7, image: "./productphoto/pet-beds.jpg" },
            { id: 45, name: "Organic Catnip", description: "100% organic catnip for your feline friends.", price: 250, rating: 4.9, image: "./productphoto/catnip.jpg" }
        ]
    },
    {
        name: "Health & Wellness",
        id: "wellness",
        products: [
            { id: 46, name: "Organic Herbal Tea", description: "A selection of organic herbal teas for relaxation.", price: 500, rating: 4.8, image: "./productphoto/herbal-tea.jpg" },
            { id: 47, name: "Natural Essential Oils", description: "Pure essential oils for aromatherapy.", price: 1200, rating: 4.9, image: "./productphoto/essential-oils.jpg" },
            { id: 48, name: "Eco-Friendly Yoga Mat", description: "Non-toxic yoga mat made from natural materials.", price: 2000, rating: 4.6, image: "./productphoto/yoga-mat.jpg" },
            { id: 49, name: "Sustainable Water Bottle", description: "Reusable water bottle made from stainless steel.", price: 1000, rating: 4.7, image: "./productphoto/water-bottle.jpg" },
            { id: 50, name: "Organic Supplements", description: "Health supplements made from organic ingredients.", price: 1500, rating: 4.5, image: "./productphoto/supplements.jpg" }
        ]
    }
];

// Featured products (example selection)
const featuredProducts = [
    categories[0].products[0], // Handwoven Rug
    categories[1].products[0], // Organic Cotton T-shirt
    categories[2].products[1], // Handmade Soap
    categories[3].products[2], // Glass Storage Containers
    categories[4].products[3]  // Handcrafted Garden Tools
];