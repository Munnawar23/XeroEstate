import { appwriteConfig } from "@/config/appwrite";
import { Databases, ID, Query } from "react-native-appwrite";
import { client } from "./appwrite";

const databases = new Databases(client);

// Image arrays
export const galleryImages = [
  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1638799869566-b17fa794c4de?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1641910532059-ad684fd3049c?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1621293954908-907159247fc8?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1604328702728-d26d2062c20b?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600435335786-d74d2bb6de37?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1635108198979-9806fdf275c6?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const agentImages = [
  "https://images.unsplash.com/photo-1691335053879-02096d6ee2ca?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1544723495-432537d12f6c?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542507464418-09c375b86bbe?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const reviewImages = [
  "https://images.unsplash.com/photo-1517331671191-ddc2c6d3ebd1?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511551203524-9a24350a5771?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export const propertiesImages = [
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605146768851-eda79da39897?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1561753757-d8880c5a3551?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1551241090-67de81d3541c?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1697299262049-e9b5fa1e9761?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1719299225324-301bad5c333c?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1516095901529-0ef7be431a4f?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1720432972486-2d53db5badf0?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// Sample data
const agentNames = [
  { name: "Sarah Johnson", email: "sarah.johnson@xeroestate.com" },
  { name: "Michael Chen", email: "michael.chen@xeroestate.com" },
  { name: "Emily Rodriguez", email: "emily.rodriguez@xeroestate.com" },
  { name: "David Thompson", email: "david.thompson@xeroestate.com" },
  { name: "Jessica Williams", email: "jessica.williams@xeroestate.com" },
];

const reviewerNames = [
  "Alex Morgan", "Jordan Lee", "Taylor Swift", "Casey Johnson", "Morgan Freeman",
  "Riley Cooper", "Jamie Fox", "Avery Brown", "Quinn Davis", "Skyler White",
  "Cameron Blue", "Drew Barrymore", "Peyton Manning", "Dakota Fanning", "River Phoenix",
  "Sage Green", "Phoenix Wright", "Hunter Biden", "Sawyer Tom", "Parker Lewis"
];

const reviewTexts = [
  "Absolutely stunning property! The attention to detail is remarkable and the location couldn't be better.",
  "Great investment opportunity. The neighborhood is developing rapidly and the property is well-maintained.",
  "Perfect family home with spacious rooms and a beautiful backyard. Highly recommended!",
  "Modern amenities combined with classic architecture. A true gem in the heart of the city.",
  "Excellent value for money. The agent was professional and the entire process was smooth.",
  "Beautiful property with amazing views. The facilities are top-notch and well-maintained.",
  "Love the open floor plan and natural lighting. Perfect for entertaining guests.",
  "Great location with easy access to schools, shopping, and public transportation.",
  "The property exceeded our expectations. Every corner is thoughtfully designed.",
  "Fantastic investment! The area is growing and the property has great potential.",
  "Wonderful experience from start to finish. The property is exactly as described.",
  "Impressive architecture and premium finishes throughout. Worth every penny!",
  "Peaceful neighborhood with friendly residents. Perfect for raising a family.",
  "The amenities are outstanding - gym, pool, and security are all excellent.",
  "Beautiful landscaping and well-maintained common areas. A pleasure to live here.",
  "Modern kitchen with high-end appliances. The master suite is absolutely luxurious.",
  "Great community feel with regular events and activities. Highly recommend!",
  "The property management is responsive and professional. No complaints whatsoever.",
  "Stunning sunset views from the balcony. The location is simply unbeatable.",
  "Excellent build quality and attention to detail. You can tell this was built with care."
];

const propertyNames = [
  "Sunset Villa", "Ocean View Penthouse", "Mountain Retreat", "Urban Oasis",
  "Lakeside Manor", "Skyline Tower", "Garden Estate", "Riverside Residence",
  "Hillside Haven", "Coastal Paradise", "Downtown Loft", "Suburban Sanctuary",
  "Metro Heights", "Parkside Palace", "Beachfront Bliss", "City Center Suite",
  "Valley View Villa", "Harbor House", "Forest Lodge", "Meadow Mansion"
];

const addresses = [
  "123 Ocean Drive, Miami Beach, FL 33139",
  "456 Mountain Road, Aspen, CO 81611",
  "789 Park Avenue, New York, NY 10021",
  "321 Beach Boulevard, Santa Monica, CA 90401",
  "654 Lake Shore Drive, Chicago, IL 60611",
  "987 Sunset Strip, Los Angeles, CA 90069",
  "147 Harbor View, Seattle, WA 98101",
  "258 Forest Lane, Portland, OR 97201",
  "369 Valley Road, Austin, TX 78701",
  "741 Riverside Drive, Boston, MA 02108",
  "852 Downtown Plaza, San Francisco, CA 94102",
  "963 Hillside Avenue, Denver, CO 80202",
  "159 Coastal Highway, Charleston, SC 29401",
  "357 Metro Boulevard, Atlanta, GA 30303",
  "486 Parkway Circle, Nashville, TN 37201",
  "624 Skyline Drive, Phoenix, AZ 85001",
  "735 Garden Street, Savannah, GA 31401",
  "846 Urban Way, Philadelphia, PA 19102",
  "957 Meadow Lane, Raleigh, NC 27601",
  "168 Lakefront Road, Minneapolis, MN 55401"
];

// Geolocation coordinates (latitude, longitude) for each address
const geolocations = [
  "25.7907,-80.1300",  // Miami Beach, FL
  "39.1911,-106.8175", // Aspen, CO
  "40.7736,-73.9566",  // New York, NY
  "34.0195,-118.4912", // Santa Monica, CA
  "41.8969,-87.6217",  // Chicago, IL
  "34.0901,-118.3850", // Los Angeles, CA
  "47.6062,-122.3321", // Seattle, WA
  "45.5152,-122.6784", // Portland, OR
  "30.2672,-97.7431",  // Austin, TX
  "42.3601,-71.0589",  // Boston, MA
  "37.7749,-122.4194", // San Francisco, CA
  "39.7392,-104.9903", // Denver, CO
  "32.7765,-79.9311",  // Charleston, SC
  "33.7490,-84.3880",  // Atlanta, GA
  "36.1627,-86.7816",  // Nashville, TN
  "33.4484,-112.0740", // Phoenix, AZ
  "32.0809,-81.0912",  // Savannah, GA
  "39.9526,-75.1652",  // Philadelphia, PA
  "35.7796,-78.6382",  // Raleigh, NC
  "44.9778,-93.2650"   // Minneapolis, MN
];

const propertyTypes = ["House", "Townhouse", "Duplex", "Studio", "Villa", "Apartment", "Other"];

const descriptions = [
  "Experience luxury living at its finest in this meticulously designed property. Featuring state-of-the-art amenities, premium finishes, and breathtaking views, this residence offers the perfect blend of comfort and sophistication.",
  "Discover your dream home in this stunning property that combines modern elegance with timeless charm. Spacious interiors, high ceilings, and abundant natural light create an inviting atmosphere perfect for both relaxation and entertainment.",
  "This exceptional property offers unparalleled quality and attention to detail. From the gourmet kitchen to the spa-like bathrooms, every aspect has been carefully crafted to provide the ultimate living experience.",
  "Nestled in a prime location, this beautiful property offers the perfect balance of privacy and convenience. Enjoy easy access to shopping, dining, and entertainment while retreating to your own peaceful sanctuary.",
  "Step into luxury with this magnificent property featuring premium upgrades throughout. The open floor plan, designer finishes, and top-of-the-line appliances make this home truly exceptional.",
];

const facilities = [
  "Laundry", "Parking", "Gym", "Wifi", "Pet-Friendly"
];

// Helper functions
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min: number, max: number, decimals: number = 1): number {
  return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
}

function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

// Delay function to avoid rate limiting
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Clear all data from a collection with rate limiting protection
async function clearCollection(collectionId: string, collectionName: string) {
  try {
    console.log(`Clearing ${collectionName}...`);
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      collectionId,
      [Query.limit(500)]
    );

    let deletedCount = 0;
    for (const doc of response.documents) {
      try {
        await databases.deleteDocument(
          appwriteConfig.databaseId,
          collectionId,
          doc.$id
        );
        deletedCount++;
        
        // Add delay every 5 deletions to avoid rate limiting
        if (deletedCount % 5 === 0) {
          await delay(300); // 300ms delay
        }
      } catch (error) {
        console.warn(`Failed to delete document ${doc.$id}:`, error);
      }
    }
    
    console.log(`✓ Cleared ${deletedCount} documents from ${collectionName}`);
    
    // Add delay after clearing each collection
    await delay(500);
  } catch (error) {
    console.error(`Error clearing ${collectionName}:`, error);
    throw error;
  }
}

// Main seed function
export async function seedDatabase() {
  try {
    console.log("🌱 Starting database seeding...");

    // Step 1: Clear all existing data
    console.log("\n📦 Clearing existing data...");
    await clearCollection(appwriteConfig.collections.properties, "properties");
    await clearCollection(appwriteConfig.collections.reviews, "reviews");
    await clearCollection(appwriteConfig.collections.galleries, "galleries");
    await clearCollection(appwriteConfig.collections.agents, "agents");

    // Step 2: Create 5 agents
    console.log("\n👥 Creating agents...");
    const createdAgents = [];
    for (let i = 0; i < 5; i++) {
      const agent = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.collections.agents,
        ID.unique(),
        {
          name: agentNames[i].name,
          email: agentNames[i].email,
          url: agentImages[i],
        }
      );
      createdAgents.push(agent);
      console.log(`✓ Created agent: ${agent.name}`);
      await delay(200); // Small delay between creations
    }

    // Step 3: Create 20 reviews
    console.log("\n⭐ Creating reviews...");
    const createdReviews = [];
    for (let i = 0; i < 20; i++) {
      const review = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.collections.reviews,
        ID.unique(),
        {
          name: reviewerNames[i],
          avatar: getRandomItem(reviewImages),
          review: reviewTexts[i],
          rating: getRandomFloat(3.5, 5.0, 1),
        }
      );
      createdReviews.push(review);
      console.log(`✓ Created review by: ${review.name}`);
      
      // Add delay every 5 reviews
      if ((i + 1) % 5 === 0) {
        await delay(300);
      }
    }

    // Step 4: Create gallery items
    console.log("\n🖼️  Creating gallery images...");
    const createdGalleries = [];
    for (const imageUrl of galleryImages) {
      const gallery = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.collections.galleries,
        ID.unique(),
        {
          image: imageUrl,
        }
      );
      createdGalleries.push(gallery);
      await delay(200); // Small delay between creations
    }
    console.log(`✓ Created ${createdGalleries.length} gallery images`);

    // Step 5: Create 20 properties
    console.log("\n🏠 Creating properties...");
    for (let i = 0; i < 20; i++) {
      const randomAgent = getRandomItem(createdAgents);
      const randomReview = getRandomItem(createdReviews); // Single review instead of array
      const randomGalleries = getRandomItems(createdGalleries, getRandomInt(3, 8));
      const randomFacilities = getRandomItems(facilities, getRandomInt(2, 4));

      const property = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.collections.properties,
        ID.unique(),
        {
          name: propertyNames[i],
          description: getRandomItem(descriptions),
          address: addresses[i],
          price: getRandomInt(300000, 5000000),
          area: getRandomFloat(800, 5000, 0),
          bedrooms: getRandomInt(1, 6),
          bathrooms: getRandomInt(1, 4),
          rating: getRandomFloat(3.5, 5.0, 1), // Use random rating since we only have one review
          image: propertiesImages[i],
          geolocation: geolocations[i],
          type: getRandomItem(propertyTypes),
          facilities: randomFacilities,
          agent: randomAgent.$id,
          gallery: randomGalleries.map(g => g.$id),
          reviews: randomReview.$id, // Single ID instead of array
        }
      );
      console.log(`✓ Created property: ${property.name}`);
      
      // Add delay every 3 properties
      if ((i + 1) % 3 === 0) {
        await delay(400);
      }
    }

    console.log("\n✅ Database seeding completed successfully!");
    console.log(`\nSummary:`);
    console.log(`- Agents: 5`);
    console.log(`- Reviews: 20`);
    console.log(`- Gallery Images: ${createdGalleries.length}`);
    console.log(`- Properties: 20`);

    return {
      success: true,
      message: "Database seeded successfully!",
    };
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}
