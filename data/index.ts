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
      src: "/../public/arduino.png",
      alt: "Arduino Uno",
    },
  },
  {
    id: 2,
    name: "NodeMCU ESP8266",
    image: {
      src: "/../public/mcu.png",
      alt: "NodeMCU ESP8266",
    },
  },
  {
    id: 3,
    name: "Ultrasonik HCSR04",
    image: {
      src: "/../public/sonic.png",
      alt: "Ultrasonik HCSR04",
    },
  },
  {
    id: 4,
    name: "Proximity Kapasitif",
    image: {
      src: "/../public/proxi.png",
      alt: "Proximity Kapasitif",
    },
  },
  {
    id: 5,
    name: "Motor Servo",
    image: {
      src: "/../public/servo.png",
      alt: "Motor Servo",
    },
  },
  {
    id: 6,
    name: "Buzzer",
    image: {
      src: "/../public/buzzer.png",
      alt: "Buzzer",
    },
  },
];

export const componentSupports: DataProps[] = [
  {
    id: 1,
    name: "Breadboard",
    image: {
      src: "/../public/board.png",
      alt: "Breadboard",
    },
  },
  {
    id: 2,
    name: "Jumper Cable",
    image: {
      src: "/../public/jumper.png",
      alt: "Jumper Cable",
    },
  },
  {
    id: 3,
    name: "Adaptor Cable",
    image: {
      src: "/../public/adaptor.png",
      alt: "Adaptor Cable",
    },
  },
  {
    id: 4,
    name: "Power Supply",
    image: {
      src: "/../public/supply.png",
      alt: "Power Supply",
    },
  },
  {
    id: 5,
    name: "Switch",
    image: {
      src: "/../public/saklar.png",
      alt: "Switch",
    },
  },
];
