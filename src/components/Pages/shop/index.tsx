import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

/* eslint-disable @typescript-eslint/no-unused-vars */
const MOCK_DATA = {
  COINS: {
    [0]: {
      title: "Coins x100",
      price: 100,
      currecy: "sek",
      image: "https://i.imgur.com/xV9Ov5X.png",
    },
    [1]: {
      title: "Coins x200",
      price: 100,
      currecy: "sek",
      image: "https://i.imgur.com/xV9Ov5X.png",
    },
    [2]: {
      title: "Coins x300",
      price: 100,
      currecy: "sek",
      image: "https://i.imgur.com/xV9Ov5X.png",
    },
    [3]: {
      title: "Coins x400",
      price: 100,
      currecy: "sek",
      image: "https://i.imgur.com/xV9Ov5X.png",
    },
    [4]: {
      title: "Coins x500",
      price: 100,
      currecy: "sek",
      image: "https://i.imgur.com/xV9Ov5X.png",
    },
    [5]: {
      title: "Coins x600",
      price: 100,
      currecy: "sek",
      image: "https://i.imgur.com/xV9Ov5X.png",
    },
  },

  ITEMS: {
    [0]: {
      title: "Pistol",
      price: 100,
      currecy: "sek",
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsX29mZmljZV8yNF9waG90b19vZl90b3lfYmxhY2tfaGFuZGd1bl9pc29sYXRlZF93aGl0ZV9iYV9hZmQ5MmZhNC1lZTM5LTQyZGItYjM4NC1lM2YzOWU0MTUxNDMucG5n.png",
    },
    [1]: {
      title: "Assult Rifle",
      price: 100,
      currecy: "sek",
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsX29mZmljZV8yNF9waG90b19vZl90b3lfYmxhY2tfaGFuZGd1bl9pc29sYXRlZF93aGl0ZV9iYV9hZmQ5MmZhNC1lZTM5LTQyZGItYjM4NC1lM2YzOWU0MTUxNDMucG5n.png",
    },
    [2]: {
      title: "RPG",
      price: 100,
      currecy: "sek",
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsX29mZmljZV8yNF9waG90b19vZl90b3lfYmxhY2tfaGFuZGd1bl9pc29sYXRlZF93aGl0ZV9iYV9hZmQ5MmZhNC1lZTM5LTQyZGItYjM4NC1lM2YzOWU0MTUxNDMucG5n.png",
    },
    [3]: {
      title: "Knife",
      price: 100,
      currecy: "sek",
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsX29mZmljZV8yNF9waG90b19vZl90b3lfYmxhY2tfaGFuZGd1bl9pc29sYXRlZF93aGl0ZV9iYV9hZmQ5MmZhNC1lZTM5LTQyZGItYjM4NC1lM2YzOWU0MTUxNDMucG5n.png",
    },
    [4]: {
      title: "Idk",
      price: 100,
      currecy: "sek",
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsX29mZmljZV8yNF9waG90b19vZl90b3lfYmxhY2tfaGFuZGd1bl9pc29sYXRlZF93aGl0ZV9iYV9hZmQ5MmZhNC1lZTM5LTQyZGItYjM4NC1lM2YzOWU0MTUxNDMucG5n.png",
    },
    [5]: {
      title: "Idk 2",
      price: 100,
      currecy: "sek",
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsX29mZmljZV8yNF9waG90b19vZl90b3lfYmxhY2tfaGFuZGd1bl9pc29sYXRlZF93aGl0ZV9iYV9hZmQ5MmZhNC1lZTM5LTQyZGItYjM4NC1lM2YzOWU0MTUxNDMucG5n.png",
    },
  },

  BATTLE_PASS: {},

  VEHICLES: {},
};

const Shop = () => {
  return (
    <div className="w-full overflow-x-hidden overflow-y-scroll max-h-full no-scrollbar">
      <h2 className="text-xl font-bold mb-2">
        Coins ({Object.keys(MOCK_DATA.COINS).length}st)
      </h2>
      <Carousel className="max-w-48">
        <CarouselContent>
          {Object.entries(MOCK_DATA.COINS).map(([key, coin]) => (
            <CarouselItem key={key}>
              <Card>
                <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                  <a href="#">
                    <img
                      className="rounded-lg"
                      src={coin.image}
                      alt="image description"
                    />
                  </a>
                  <figcaption className="absolute flex items-center justify-center text-lg text-white bottom-4 w-full">
                    <Badge>
                      {coin.title} |{" "}
                      {new Intl.NumberFormat("sv-SE", {
                        style: "currency",
                        currency: coin.currecy,
                      }).format(coin.price)}
                    </Badge>
                  </figcaption>
                </figure>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Separator className="my-4" />

      <h2 className="text-xl font-bold mb-2">
        Föremål ({Object.keys(MOCK_DATA.ITEMS).length}st)
      </h2>
      <Carousel className="max-w-48">
        <CarouselContent>
          {Object.entries(MOCK_DATA.ITEMS).map(([key, item]) => (
            <CarouselItem key={key}>
              <div className="p-1">
                <Card>
                  <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <a href="#">
                      <img
                        className="rounded-lg"
                        src={item.image}
                        alt="image description"
                      />
                    </a>
                    <figcaption className="absolute flex items-center justify-center text-lg text-white bottom-4 w-full">
                      <Badge>
                        {item.title} |{" "}
                        {new Intl.NumberFormat("sv-SE", {
                          style: "currency",
                          currency: item.currecy,
                        }).format(item.price)}
                      </Badge>
                    </figcaption>
                  </figure>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Separator className="my-4" />

      <h2 className="text-xl font-bold mb-2">
        Battlepass ({Object.keys(MOCK_DATA.BATTLE_PASS).length}st)
      </h2>
      <Carousel className="max-w-48">
        <CarouselContent>
          {Object.entries(MOCK_DATA.ITEMS).map(([key, item]) => (
            <CarouselItem key={key}>
              <div className="p-1">
                <Card>
                  <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                    <a href="#">
                      <img
                        className="rounded-lg"
                        src={item.image}
                        alt="image description"
                      />
                    </a>
                    <figcaption className="absolute flex items-center justify-center text-lg text-white bottom-4 w-full">
                      <Badge>
                        {item.title} |{" "}
                        {new Intl.NumberFormat("sv-SE", {
                          style: "currency",
                          currency: item.currecy,
                        }).format(item.price)}
                      </Badge>
                    </figcaption>
                  </figure>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export { Shop };
