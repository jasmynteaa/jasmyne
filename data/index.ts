interface DataProps {
  image: {
    alt: string;
    src: string;
  };
  name: string;
  id: number;
}

export const components: DataProps[] = [
  {
    id: 1,
    name: "Arduino Uno",
    image: {
      src: "https://res.cloudinary.com/wikitro/image/upload/v1679369286/trash/arduino_ebblhg.png",
      alt: "Arduino Uno",
    },
  },
  {
    id: 2,
    name: "NodeMCU ESP8266",
    image: {
      src: "https://res.cloudinary.com/wikitro/image/upload/v1679369289/trash/mcu_wa4ram.png",
      alt: "NodeMCU ESP8266",
    },
  },
  {
    id: 3,
    name: "Ultrasonik HCSR04",
    image: {
      src: "https://res.cloudinary.com/wikitro/image/upload/v1679369290/trash/sonic_dnh6sf.png",
      alt: "Ultrasonik HCSR04",
    },
  },
  {
    id: 4,
    name: "Proximity Kapasitif",
    image: {
      src: "https://res.cloudinary.com/wikitro/image/upload/v1679369287/trash/proxi_bmnzvd.png",
      alt: "Proximity Kapasitif",
    },
  },
  {
    id: 5,
    name: "Motor Servo",
    image: {
      src: "https://res.cloudinary.com/wikitro/image/upload/v1679369300/trash/servo_ikbp5f.png",
      alt: "Motor Servo",
    },
  },
  {
    id: 6,
    name: "Buzzer",
    image: {
      src: "https://res.cloudinary.com/wikitro/image/upload/v1679369286/trash/buzzer_ujifbi.png",
      alt: "Buzzer",
    },
  },
];

export const componentSupports: DataProps[] = [
  {
    id: 1,
    name: "Breadboard",
    image: {
      src: "https://res.cloudinary.com/wikitro/image/upload/v1679369287/trash/board_tqglmk.png",
      alt: "Breadboard",
    },
  },
  {
    id: 2,
    name: "Jumper Cable",
    image: {
      src: "https://res.cloudinary.com/wikitro/image/upload/v1679369288/trash/jumper_gjjqrt.png",
      alt: "Jumper Cable",
    },
  },
  {
    id: 3,
    name: "Adaptor Cable",
    image: {
      src: "https://res.cloudinary.com/wikitro/image/upload/v1679369287/trash/adaptor_ngojbt.png",
      alt: "Adaptor Cable",
    },
  },
  {
    id: 4,
    name: "Power Supply",
    image: {
      src: "https://res.cloudinary.com/wikitro/image/upload/v1679369290/trash/supply_eyaduh.png",
      alt: "Power Supply",
    },
  },
  {
    id: 5,
    name: "Switch",
    image: {
      src: "https://res.cloudinary.com/wikitro/image/upload/v1679369289/trash/saklar_sn5bau.png",
      alt: "Switch",
    },
  },
];
