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
  "https://images.unsplash.com/photo-1691335053879-02096d6ee2ca?q=60&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544723495-432537d12f6c?q=60&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=60&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542507464418-09c375b86bbe?q=60&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=60&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=60&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=60&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=60&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=60&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=60&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=60&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=60&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=60&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=60&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=60&w=640&auto=format&fit=crop",
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
  { name: "Robert Martinez", email: "robert.martinez@xeroestate.com" },
  { name: "Amanda Davis", email: "amanda.davis@xeroestate.com" },
  { name: "Christopher Lee", email: "christopher.lee@xeroestate.com" },
  { name: "Jennifer Taylor", email: "jennifer.taylor@xeroestate.com" },
  { name: "Daniel Anderson", email: "daniel.anderson@xeroestate.com" },
  { name: "Michelle White", email: "michelle.white@xeroestate.com" },
  { name: "James Harris", email: "james.harris@xeroestate.com" },
  { name: "Lisa Clark", email: "lisa.clark@xeroestate.com" },
  { name: "Kevin Lewis", email: "kevin.lewis@xeroestate.com" },
  { name: "Rachel Walker", email: "rachel.walker@xeroestate.com" },
];





const propertyNames = [
  "Sunset Villa", "Ocean View Penthouse", "Mountain Retreat", "Urban Oasis",
  "Lakeside Manor", "Skyline Tower", "Garden Estate", "Riverside Residence",
  "Hillside Haven", "Coastal Paradise", "Downtown Loft", "Suburban Sanctuary",
  "Metro Heights", "Parkside Palace", "Beachfront Bliss", "City Center Suite",
  "Valley View Villa", "Harbor House", "Forest Lodge", "Meadow Mansion",
  "Crystal Bay Estate", "Emerald Tower", "Golden Gate Manor", "Silver Lake House",
  "Diamond Heights", "Pearl Harbor View", "Ruby Ridge Estate", "Sapphire Shores",
  "Platinum Plaza", "Bronze Bay Villa", "Copper Creek Lodge", "Ivory Tower Residence",
  "Jade Garden Estate", "Opal Ocean View", "Topaz Terrace", "Amber Avenue House",
  "Quartz Quarter Loft", "Onyx Overlook", "Garnet Grove Manor", "Turquoise Tide Villa",
  "Coral Cove Estate", "Marble Mountain House", "Granite Gardens", "Limestone Lodge",
  "Sandstone Sanctuary", "Slate Sky Tower", "Cobblestone Court", "Brick Bay Manor",
  "Stone Summit Villa", "Clay Canyon Estate", "Willow Creek Residence", "Pine Valley Manor",
  "Cedar Point Estate", "Maple Grove House", "Birch Bay Villa", "Oak Ridge Mansion",
  "Aspen Heights", "Redwood Retreat", "Palm Paradise", "Cypress Cove",
  "Magnolia Manor", "Laurel Lane Estate", "Rosewood Residence", "Ivy League Loft",
  "Jasmine Gardens", "Orchid Overlook", "Lotus Lake House", "Tulip Terrace",
  "Daisy Dell Manor", "Lily Pond Estate", "Violet Vista", "Poppy Place",
  "Sunflower Summit", "Lavender Lane", "Primrose Plaza", "Azalea Avenue",
  "Camellia Court", "Dahlia Drive", "Gardenia Grove", "Hibiscus Heights"
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
  "168 Lakefront Road, Minneapolis, MN 55401",
  "234 Crystal Bay, Tampa, FL 33602",
  "567 Emerald Street, Portland, ME 04101",
  "890 Golden Avenue, Sacramento, CA 95814",
  "432 Silver Circle, Las Vegas, NV 89101",
  "765 Diamond Drive, Honolulu, HI 96813",
  "198 Pearl Plaza, San Diego, CA 92101",
  "876 Ruby Road, Salt Lake City, UT 84101",
  "543 Sapphire Shore, Virginia Beach, VA 23451",
  "210 Platinum Place, Dallas, TX 75201",
  "987 Bronze Boulevard, Detroit, MI 48226",
  "654 Copper Court, Pittsburgh, PA 15222",
  "321 Ivory Lane, Indianapolis, IN 46204",
  "789 Jade Junction, Columbus, OH 43215",
  "456 Opal Ocean, Jacksonville, FL 32202",
  "123 Topaz Trail, Charlotte, NC 28202",
  "890 Amber Alley, Memphis, TN 38103",
  "567 Quartz Quarter, Louisville, KY 40202",
  "234 Onyx Overlook, Milwaukee, WI 53202",
  "901 Garnet Grove, Albuquerque, NM 87102",
  "678 Turquoise Terrace, Tucson, AZ 85701",
  "345 Coral Cove, Fresno, CA 93721",
  "012 Marble Mile, Sacramento, CA 95814",
  "789 Granite Gateway, Mesa, AZ 85201",
  "456 Limestone Loop, Kansas City, MO 64106",
  "123 Sandstone Street, Oklahoma City, OK 73102",
  "890 Slate Square, Omaha, NE 68102",
  "567 Cobblestone Circle, Cleveland, OH 44113",
  "234 Brick Bay, Wichita, KS 67202",
  "901 Stone Summit, Arlington, TX 76010",
  "678 Clay Canyon, New Orleans, LA 70112"
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
  "44.9778,-93.2650",  // Minneapolis, MN
  "27.9506,-82.4572",  // Tampa, FL
  "43.6591,-70.2568",  // Portland, ME
  "38.5816,-121.4944", // Sacramento, CA
  "36.1699,-115.1398", // Las Vegas, NV
  "21.3099,-157.8581", // Honolulu, HI
  "32.7157,-117.1611", // San Diego, CA
  "40.7608,-111.8910", // Salt Lake City, UT
  "36.8529,-75.9780",  // Virginia Beach, VA
  "32.7767,-96.7970",  // Dallas, TX
  "42.3314,-83.0458",  // Detroit, MI
  "40.4406,-79.9959",  // Pittsburgh, PA
  "39.7684,-86.1581",  // Indianapolis, IN
  "39.9612,-82.9988",  // Columbus, OH
  "30.3322,-81.6557",  // Jacksonville, FL
  "35.2271,-80.8431",  // Charlotte, NC
  "35.1495,-90.0490",  // Memphis, TN
  "38.2527,-85.7585",  // Louisville, KY
  "43.0389,-87.9065",  // Milwaukee, WI
  "35.0844,-106.6504", // Albuquerque, NM
  "32.2226,-110.9747", // Tucson, AZ
  "36.7378,-119.7871", // Fresno, CA
  "38.5816,-121.4944", // Sacramento, CA
  "33.4152,-111.8315", // Mesa, AZ
  "39.0997,-94.5786",  // Kansas City, MO
  "35.4676,-97.5164",  // Oklahoma City, OK
  "41.2565,-95.9345",  // Omaha, NE
  "41.4993,-81.6944",  // Cleveland, OH
  "37.6872,-97.3301",  // Wichita, KS
  "32.7357,-97.1081",  // Arlington, TX
  "29.9511,-90.0715"   // New Orleans, LA
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
    await clearCollection(appwriteConfig.collections.agents, "agents");

    // Step 2: Create 15 agents
    console.log("\n👥 Creating agents...");
    const createdAgents = [];
    for (let i = 0; i < 15; i++) {
      const agent = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.collections.agents,
        ID.unique(),
        {
          name: agentNames[i].name,
          email: agentNames[i].email,
          url: agentImages[i % agentImages.length],
        }
      );
      createdAgents.push(agent);
      console.log(`✓ Created agent: ${agent.name}`);
      await delay(200); // Small delay between creations
    }





    // Step 3: Create 80 properties
    console.log("\n🏠 Creating properties...");
    for (let i = 0; i < 80; i++) {
      const randomAgent = getRandomItem(createdAgents);
      const randomFacilities = getRandomItems(facilities, getRandomInt(2, 4));

      const property = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.collections.properties,
        ID.unique(),
        {
          name: propertyNames[i % propertyNames.length],
          description: getRandomItem(descriptions),
          address: addresses[i % addresses.length],
          price: getRandomInt(250000, 8500000),
          area: getRandomFloat(800, 5000, 0),
          bedrooms: getRandomInt(1, 6),
          bathrooms: getRandomInt(1, 4),

          image: propertiesImages[i % propertiesImages.length],
          geolocation: geolocations[i % geolocations.length],
          type: getRandomItem(propertyTypes),
          facilities: randomFacilities,
          agent: randomAgent.$id,

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
    console.log(`- Agents: 15`);
    console.log(`- Properties: 80`);

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
