const ParkEntities = [
  {
    name: "Walt Disney World",
    icon: {
      url: "/disney.png",
      width: 256,
      height: 180
    },
    slug: "disneyworld",
    parks: [
      {
        id: "75ea578a-adc8-4116-a54d-dccb60765ef9",
        name: "Magic Kingdom Park",
        slug: "magickingdom"
      },
      {
        id: "47f90d2c-e191-4239-a466-5892ef59a88b",
        name: "EPCOT",
        slug: "epcot"
      },
      {
        id: "288747d1-8b4f-4a64-867e-ea7c9b27bad8",
        name: "Disney's Hollywood Studios",
        slug: "hollywoodstudios"
      },
      {
        id: "1c84a229-8862-4648-9c71-378ddd2c7693",
        name: "Disney's Animal Kingdom Theme Park",
        slug: "animalkingdom"
      },
      {
        id: "b070cbc5-feaa-4b87-a8c1-f94cca037a18",
        name: "Disney's Typhoon Lagoon Water Park",
        slug: "typhoonlagoon"
      },
      {
        id: "ead53ea5-22e5-4095-9a83-8c29300d7c63",
        name: "Disney's Blizzard Beach Water Park",
        slug: "blizzardbeach"
      }
    ]
  },
  {
    name: "Universal Studios Florida",
    icon: {
      url: "/universal.png",
      width: 256,
      height: 120
    },
    slug: "universalflorida",
    parks: [
      {
        id: "eb3f4560-2383-4a36-9152-6b3e5ed6bc57",
        name: "Universal Studios Florida",
        slug: "universalstudios"
      },
      {
        id: "267615cc-8943-4c2a-ae2c-5da728ca591f",
        name: "Universal's Islands of Adventure",
        slug: "islandsofadventure"
      },
      {
        id: "fe78a026-b91b-470c-b906-9d2266b692da",
        name: "Universal's Volcano Bay",
        slug: "volcanobay"
      }
    ]
  }
]

export default ParkEntities;

