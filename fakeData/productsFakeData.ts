export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  categorySlugs: string[];
  price: number;
  description: string;
  imageUrl: string;
  additioninfo: {
    brandName: string;
    composition: string;
    pack: string;
  }[];
}

export const categories: ProductCategory[] = [
  { id: 1, name: "Alopecia", slug: "alopecia", description: "Products for hair loss treatment." },
  { id: 2, name: "Anti Acne", slug: "anti-acne", description: "Treatments to reduce acne and blemishes." },
  { id: 3, name: "Anti Allergics", slug: "anti-allergics", description: "Relief for allergic reactions." },
  { id: 4, name: "Anti Fungal", slug: "anti-fungal", description: "Treatments for fungal infections." },
  { id: 5, name: "Anti Seborrheic", slug: "anti-seborrheic", description: "Solutions for seborrheic dermatitis." },
  { id: 6, name: "Anti Seborrheic & Topical Steroids", slug: "anti-seborrheic-topical-steroids", description: "Combination treatments for seborrheic issues and inflammation." },
  { id: 7, name: "Anti-infective", slug: "anti-infective", description: "Prevent and treat infections." },
  { id: 8, name: "Anti-Viral", slug: "anti-viral", description: "Fight against viral infections." },
  { id: 9, name: "Antibiotics", slug: "antibiotics", description: "Broad-spectrum antibacterial treatments." },
  { id: 10, name: "Body Wash", slug: "body-wash", description: "Cleansers for daily hygiene." },
  { id: 11, name: "Capsule", slug: "capsule", description: "Oral capsule medications." },
  { id: 12, name: "Cleansing Lotion", slug: "cleansing-lotion", description: "Gentle lotion-based cleansers." },
  { id: 13, name: "Cream", slug: "cream", description: "Topical creams for various skin concerns." },
  { id: 14, name: "Creamy Wash", slug: "creamy-wash", description: "Moisturizing face and body washes." },
  { id: 15, name: "Demelanizing Agents", slug: "demelanizing-agents", description: "Skin lightening and brightening solutions." },
  { id: 16, name: "Dusting Powder", slug: "dusting-powder", description: "Anti-fungal and soothing powders." },
  { id: 17, name: "Emollients", slug: "emollients", description: "Moisturizers for dry skin." },
  { id: 18, name: "Face Serum", slug: "face-serum", description: "Nutrient-rich serums for skin health." },
  { id: 19, name: "Face Wash", slug: "face-wash", description: "Daily face cleansing products." },
  { id: 20, name: "Feminine Hygiene", slug: "feminine-hygiene", description: "Care and hygiene products for women." }
];

export const products: Product[] = [
  {
    id: 101,
    name: "Anti Acne Gel",
    slug: "anti-acne-gel",
    categorySlugs: ["anti-acne", "cream"],
    price: 120,
    description: "Effective acne treatment gel.",
    imageUrl: "/images/itocan-SB-65.jpg",
    additioninfo: [
      {
        brandName: "ITOCAN SB – 65",
        composition: "Itraconazole 65 mg Super Bioavailable Technology",
        pack: "10X10"
      }
    ]
  },
  {
    id: 102,
    name: "Anti Fungal Cream",
    slug: "anti-fungal-cream",
    categorySlugs: ["anti-fungal", "cream"],
    price: 85,
    description: "Topical cream for fungal infections.",
    imageUrl: "https://placehold.co/600x400.png?text=No+Image",
    additioninfo: [
      {
        brandName: "FUNGICURE",
        composition: "Clotrimazole 1%",
        pack: "15g tube"
      }
    ]
  },
  {
    id: 103,
    name: "Hair Growth Serum",
    slug: "hair-growth-serum",
    categorySlugs: ["alopecia", "face-serum"],
    price: 250,
    description: "Serum to promote hair regrowth.",
    imageUrl: "https://placehold.co/600x400.png?text=No+Image",
    additioninfo: [
      {
        brandName: "HAIRGEN",
        composition: "Minoxidil 5%",
        pack: "60ml bottle"
      }
    ]
  },
  {
    id: 104,
    name: "Seborrheic Shampoo",
    slug: "seborrheic-shampoo",
    categorySlugs: ["anti-seborrheic", "creamy-wash"],
    price: 160,
    description: "Cleansing shampoo for dandruff and itching.",
    imageUrl: "https://placehold.co/600x400.png?text=No+Image",
    additioninfo: [
      {
        brandName: "SEBOWASH",
        composition: "Ketoconazole 2%",
        pack: "100ml bottle"
      }
    ]
  },
  {
    id: 105,
    name: "Topical Steroid Lotion",
    slug: "topical-steroid-lotion",
    categorySlugs: ["anti-seborrheic-topical-steroids", "lotion"],
    price: 145,
    description: "Lotion for skin inflammation.",
    imageUrl: "https://placehold.co/600x400.png?text=No+Image",
    additioninfo: [
      {
        brandName: "STEROCARE",
        composition: "Mometasone Furoate 0.1%",
        pack: "30ml bottle"
      }
    ]
  },
  {
    id: 106,
    name: "Antibiotic Cream",
    slug: "antibiotic-cream",
    categorySlugs: ["antibiotics", "cream"],
    price: 95,
    description: "For bacterial skin infections.",
    imageUrl: "https://placehold.co/600x400.png?text=No+Image",
    additioninfo: [
      {
        brandName: "BACICURE",
        composition: "Mupirocin 2%",
        pack: "10g tube"
      }
    ]
  },
  {
    id: 107,
    name: "Anti-Viral Tablet",
    slug: "anti-viral-tablet",
    categorySlugs: ["anti-viral", "capsule"],
    price: 300,
    description: "Oral tablet for viral conditions.",
    imageUrl: "https://placehold.co/600x400.png?text=No+Image",
    additioninfo: [
      {
        brandName: "VIRACURE",
        composition: "Acyclovir 400mg",
        pack: "10x10 Tablets"
      }
    ]
  },
  {
    id: 108,
    name: "Gentle Body Wash",
    slug: "gentle-body-wash",
    categorySlugs: ["body-wash", "creamy-wash"],
    price: 110,
    description: "Soothing body wash for all skin types.",
    imageUrl: "https://placehold.co/600x400.png?text=No+Image",
    additioninfo: [
      {
        brandName: "BODYPURE",
        composition: "Aloe Vera & Vitamin E",
        pack: "200ml bottle"
      }
    ]
  },
  {
    id: 109,
    name: "Skin Lightening Cream",
    slug: "skin-lightening-cream",
    categorySlugs: ["demelanizing-agents", "cream"],
    price: 180,
    description: "Brightening cream for dark spots.",
    imageUrl: "https://placehold.co/600x400.png?text=No+Image",
    additioninfo: [
      {
        brandName: "LUMIGLOW",
        composition: "Hydroquinone 2% + Kojic Acid",
        pack: "20g tube"
      }
    ]
  },
  {
    id: 110,
    name: "Dusting Powder",
    slug: "dusting-powder",
    categorySlugs: ["dusting-powder"],
    price: 70,
    description: "Cooling powder for irritation relief.",
    imageUrl: "https://placehold.co/600x400.png?text=No+Image",
    additioninfo: [
      {
        brandName: "DERMAPOWDER",
        composition: "Talc & Clotrimazole",
        pack: "100g bottle"
      }
    ]
  },
  {
    id: 111,
    name: "Face Wash Gel",
    slug: "face-wash-gel",
    categorySlugs: ["face-wash", "cleansing-lotion"],
    price: 90,
    description: "Refreshing gel face wash.",
    imageUrl: "https://placehold.co/600x400.png?text=No+Image",
    additioninfo: [
      {
        brandName: "FRESHFACE",
        composition: "Salicylic Acid 1.5%",
        pack: "100ml tube"
      }
    ]
  },
  {
    id: 112,
    name: "Nourishing Face Serum",
    slug: "nourishing-face-serum",
    categorySlugs: ["face-serum"],
    price: 210,
    description: "Hydrating serum for glow and repair.",
    imageUrl: "https://placehold.co/600x400.png?text=No+Image",
    additioninfo: [
      {
        brandName: "GLOWSERUM",
        composition: "Niacinamide 10% + Zinc",
        pack: "30ml dropper"
      }
    ]
  },
  {
    id: 113,
    name: "Cleansing Lotion",
    slug: "cleansing-lotion",
    categorySlugs: ["cleansing-lotion", "lotion"],
    price: 130,
    description: "Mild lotion for skin cleansing.",
    imageUrl: "https://placehold.co/600x400.png?text=No+Image",
    additioninfo: [
      {
        brandName: "CLEARLOTION",
        composition: "Gentle Cleanser Base",
        pack: "100ml bottle"
      }
    ]
  },
  {
    id: 114,
    name: "Soft Emollient Cream",
    slug: "emollient-cream",
    categorySlugs: ["emollients", "cream"],
    price: 105,
    description: "Intense moisturizing formula.",
    imageUrl: "https://placehold.co/600x400.png?text=No+Image",
    additioninfo: [
      {
        brandName: "EMOSOFT",
        composition: "Urea + Lactic Acid",
        pack: "50g tube"
      }
    ]
  },
  {
    id: 115,
    name: "Hygiene Wash for Women",
    slug: "feminine-hygiene-wash",
    categorySlugs: ["feminine-hygiene", "body-wash"],
    price: 140,
    description: "Gentle cleanser for intimate hygiene.",
    imageUrl: "https://placehold.co/600x400.png?text=No+Image",
    additioninfo: [
      {
        brandName: "INTIMWASH",
        composition: "Lactic Acid & Tea Tree Oil",
        pack: "100ml bottle"
      }
    ]
  }
];