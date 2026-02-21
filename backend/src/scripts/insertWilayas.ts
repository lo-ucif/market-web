import mongoose from "mongoose";
import dotenv from "dotenv";
import Wilaya from "../models/wilaya";

dotenv.config();

const wilayas = [
  { name: "Adrar", deliveryPrice: 600 },
  { name: "Chlef", deliveryPrice: 600 },
  { name: "Laghouat", deliveryPrice: 600 },
  { name: "Oum El Bouaghi", deliveryPrice: 600 },
  { name: "Batna", deliveryPrice: 600 },
  { name: "Béjaïa", deliveryPrice: 600 },
  { name: "Biskra", deliveryPrice: 600 },
  { name: "Béchar", deliveryPrice: 600 },
  { name: "Blida", deliveryPrice: 600 },
  { name: "Bouira", deliveryPrice: 600 },
  { name: "Tamanrasset", deliveryPrice: 600 },
  { name: "Tébessa", deliveryPrice: 600 },
  { name: "Tlemcen", deliveryPrice: 600 },
  { name: "Tiaret", deliveryPrice: 600 },
  { name: "Tizi Ouzou", deliveryPrice: 600 },
  { name: "Algiers", deliveryPrice: 600 },
  { name: "Djelfa", deliveryPrice: 600 },
  { name: "Jijel", deliveryPrice: 600 },
  { name: "Sétif", deliveryPrice: 600 },
  { name: "Saïda", deliveryPrice: 600 },
  { name: "Skikda", deliveryPrice: 600 },
  { name: "Sidi Bel Abbès", deliveryPrice: 600 },
  { name: "Annaba", deliveryPrice: 600 },
  { name: "Guelma", deliveryPrice: 600 },
  { name: "Constantine", deliveryPrice: 600 },
  { name: "Médéa", deliveryPrice: 600 },
  { name: "Mostaganem", deliveryPrice: 600 },
  { name: "M'Sila", deliveryPrice: 600 },
  { name: "Mascara", deliveryPrice: 600 },
  { name: "Ouargla", deliveryPrice: 600 },
  { name: "Oran", deliveryPrice: 600 },
  { name: "El Bayadh", deliveryPrice: 600 },
  { name: "Illizi", deliveryPrice: 600 },
  { name: "Bordj Bou Arreridj", deliveryPrice: 600 },
  { name: "Boumerdès", deliveryPrice: 600 },
  { name: "El Tarf", deliveryPrice: 600 },
  { name: "Tindouf", deliveryPrice: 600 },
  { name: "Tissemsilt", deliveryPrice: 600 },
  { name: "El Oued", deliveryPrice: 600 },
  { name: "Khenchela", deliveryPrice: 600 },
  { name: "Souk Ahras", deliveryPrice: 600 },
  { name: "Tipaza", deliveryPrice: 600 },
  { name: "Mila", deliveryPrice: 600 },
  { name: "Aïn Defla", deliveryPrice: 600 },
  { name: "Naâma", deliveryPrice: 600 },
  { name: "Aïn Témouchent", deliveryPrice: 600 },
  { name: "Ghardaïa", deliveryPrice: 600 },
  { name: "Relizane", deliveryPrice: 600 },
  { name: "El M'Ghair", deliveryPrice: 600 },
  { name: "El Meniaa", deliveryPrice: 600 },
  { name: "Ouled Djellal", deliveryPrice: 600 },
  { name: "Bordj Badji Mokhtar", deliveryPrice: 600 },
  { name: "Béni Abbès", deliveryPrice: 600 },
  { name: "Timimoun", deliveryPrice: 600 },
  { name: "Touggourt", deliveryPrice: 600 },
  { name: "Djanet", deliveryPrice: 600 },
  { name: "In Salah", deliveryPrice: 600 },
  { name: "In Guezzam", deliveryPrice: 600 },
];

const insertWilayas = async () => {
  await mongoose.connect(process.env.MONGO_URI as string);
  await Wilaya.insertMany(wilayas);
  console.log("All wilayas inserted!");
  process.exit(0);
};

insertWilayas();
