const HI = {lat: 21.6543, lng: -158.0593}
const BALI = {lat: -8.6478, lng: 115.1385}
const NZ = {lat: -37.8014, lng: 174.8718}
const HK = {lat: 22.3964, lng: 114.1095}
const ESP = {lat: 43.3183, lng: -1.9812}
const SYD = {lat: -33.9399, lng: 151.1753}
const BYRON = {lat: -28.6474, lng: 153.6020}
const PUERTO = {lat: 15.8720, lng: -97.0767}
const JOSH = {lat: 33.8734, lng: -115.9010}
const COP = {lat: 55.5761, lng: 12.5683}
const POR = {lat: 38.7223, lng: -9.1393}
const SANT = {lat: 36.3932, lng: 25.4615}
const PARIS = {lat: 48.8566, lng: 2.3522}
const LAX = {lat: 33.9416, lng: -118.4085}
const SD = {lat: 32.7338, lng: -117.1933}
const SF = {lat: 37.6213, lng: -122.3790}
const OSAKA = {lat:34.6937, lng:135.5022}
const KL = {lat: 3.1390, lng: 101.6869}
const SING = {lat: 1.3521, lng:103.8198}
const ATH = {lat: 37.9838, lng: 23.7275}
const BARC = {lat: 41.3851, lng: 2.1734}
const MUNDAKA = {lat: 43.4080, lng: -2.7003}

export const LAT_LONGS = [
   {
      name: "Bali",
      imagePath: "Bali.JPG",
      lat: BALI.lat,
      lng: BALI.lng,
      path: [[HI, OSAKA, KL, BALI], [HK, BALI], [BALI, SING, ATH, SANT]]
   },
   {
      name: "Spain",
      imagePath: "Spain.JPG",
      lat: ESP.lat,
      lng: ESP.lng,
      path: [[POR, MUNDAKA, ESP], [ESP, BARC, SF, SD]]
   },
   {
      name: "Hawaii",
      imagePath: "Hawaii.JPG",
      lat: HI.lat,
      lng: HI.lng,
      path: [[HI, OSAKA, KL, BALI], [HI, NZ], [SYD, HI], [SD, HI]]
   },
   {
      name: "New Zealand",
      imagePath: "New Zealand.JPG",
      lat: NZ.lat,
      lng: NZ.lng,
      path: [[HI, NZ], [NZ, SYD]]
   },
   {
      name: "Puerto Escondido",
      imagePath: "Puerto Escondido.JPG",
      lat: PUERTO.lat,
      lng: PUERTO.lng,
      path: [[SD, PUERTO]]
   },
   {
      name: "Joshua Tree",
      imagePath: "Joshua Tree.JPG",
      lat: JOSH.lat,
      lng: JOSH.lng,
      path: [[SD, JOSH]]
   },
   {
      name: "Copenhagen",
      imagePath: "Copenhagen.JPG",
      lat: COP.lat,
      lng: COP.lng,
      path: [[PARIS, COP]]
   },
   {
      name: "Australia",
      imagePath: "Australia.jpg",
      lat: BYRON.lat,
      lng: BYRON.lng,
      path: [[SYD, BYRON],[NZ, SYD], [SYD, HI]]
   },
   {
      name: "Hong Kong",
      imagePath: "Hong Kong.JPG",
      lat: HK.lat,
      lng: HK.lng,
      path: [[LAX, HK], [HK, BALI]]
   },
   {
      name: "Santorini",
      imagePath: "Santorini.JPG",
      lat: SANT.lat,
      lng: SANT.lng,
      path: [[BALI, SING, ATH, SANT], [SANT, ATH]]
   },
   {
      name: "Portugal",
      imagePath: "Portugal.JPG",
      lat: POR.lat,
      lng: POR.lng,
      path: [[PARIS, POR], [POR, MUNDAKA, ESP]]
   },
   {
      name: "Paris",
      imagePath: "Paris.JPG",
      lat: PARIS.lat,
      lng: PARIS.lng,
      path: [[ATH, PARIS], [PARIS, COP], [PARIS, POR]]
   },
];