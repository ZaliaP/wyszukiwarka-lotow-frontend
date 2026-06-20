export const AIRPORTS = [
  { code: "WAW", name: "Warszawa, Lotnisko Chopina", cityEn: "Warsaw" },
  { code: "WMI", name: "Warszawa Modlin", cityEn: "Warsaw Modlin" },
  { code: "KRK", name: "Kraków, Balice", cityEn: "Krakow" },
  { code: "GDN", name: "Gdańsk, Rębiechowo", cityEn: "Gdansk" },
  { code: "WRO", name: "Wrocław", cityEn: "Wroclaw" },
  { code: "POZ", name: "Poznań, Ławica", cityEn: "Poznan" },
  { code: "CDG", name: "Paryż, Charles de Gaulle", cityEn: "Paris" },
  { code: "ORY", name: "Paryż, Orly", cityEn: "Paris Orly" },
  { code: "LHR", name: "Londyn, Heathrow", cityEn: "London" },
  { code: "LTN", name: "Londyn, Luton", cityEn: "London Luton" },
  { code: "STN", name: "Londyn, Stansted", cityEn: "London Stansted" },
  { code: "FRA", name: "Frankfurt nad Menem", cityEn: "Frankfurt" },
  { code: "MUC", name: "Monachium", cityEn: "Munich" },
  { code: "BCN", name: "Barcelona", cityEn: "Barcelona" },
  { code: "MAD", name: "Madryt", cityEn: "Madrid" },
  { code: "FCO", name: "Rzym, Fiumicino", cityEn: "Rome" },
  { code: "AMS", name: "Amsterdam", cityEn: "Amsterdam" },
  { code: "VIE", name: "Wiedeń", cityEn: "Vienna" },
  { code: "PRG", name: "Praga", cityEn: "Prague" },
  { code: "DUB", name: "Dublin", cityEn: "Dublin" },
];

export function searchAirports(query) {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  return AIRPORTS.filter(
    (a) =>
      a.code.toLowerCase().includes(q) ||
      a.name.toLowerCase().includes(q) ||
      a.cityEn.toLowerCase().includes(q)
  );
}
