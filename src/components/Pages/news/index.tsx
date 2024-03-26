import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const News = () => {
  return (
    <section className="w-full">
      <div className="flex-row">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl truncate">
              Lansering av Bygden 2024
            </CardTitle>
            <CardDescription>Publicerat: 2024-03-10 05:32</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-pretty truncate max-h-16">
              Som Emiliano skrev förra veckan så är vi på gång upp igen. Vi har
              tagit tid på oss för att lansera servern och det är främst på
              grund av att vi har viljat utveckla servern utan press och stress.
              Vi är inte klara och det kommer vi aldrig bli. Det blir aldrig en
              FiveM server. Men vi är säkra på att ni kommer gilla de ändringar
              som gjorts. Vision Vår vision är som tidigare att vi vill bli
              Sveriges största server. Vi var en av Sveriges största servrar
              förra året, men vi ska nu upp och toucha taket fler gånger.
              Däremot ser vi hellre att nivån på rollspelande och communityt är
              högre än spelarantalet. Ni är här för att ha kul och det
              värdesätter vi högre än spelarsiffror.
            </p>
          </CardContent>
          <CardFooter>
            <a className="text-sm underline">Läs mer</a>
          </CardFooter>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-full mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl truncate">
              Lansering av Bygden 2024
            </CardTitle>
            <CardDescription>Publicerat: 2024-03-10 05:32</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-pretty truncate max-h-16">
              Som Emiliano skrev förra veckan så är vi på gång upp igen. Vi har
              tagit tid på oss för att lansera servern och det är främst på
              grund av att vi har viljat utveckla servern utan press och stress.
              Vi är inte klara och det kommer vi aldrig bli. Det blir aldrig en
              FiveM server. Men vi är säkra på att ni kommer gilla de ändringar
              som gjorts. Vision Vår vision är som tidigare att vi vill bli
              Sveriges största server. Vi var en av Sveriges största servrar
              förra året, men vi ska nu upp och toucha taket fler gånger.
              Däremot ser vi hellre att nivån på rollspelande och communityt är
              högre än spelarantalet. Ni är här för att ha kul och det
              värdesätter vi högre än spelarsiffror.
            </p>
          </CardContent>
          <CardFooter>
            <a className="text-sm underline">Läs mer</a>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl truncate">
              Lansering av Bygden 2024
            </CardTitle>
            <CardDescription>Publicerat: 2024-03-10 05:32</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-pretty truncate max-h-16">
              Som Emiliano skrev förra veckan så är vi på gång upp igen. Vi har
              tagit tid på oss för att lansera servern och det är främst på
              grund av att vi har viljat utveckla servern utan press och stress.
              Vi är inte klara och det kommer vi aldrig bli. Det blir aldrig en
              FiveM server. Men vi är säkra på att ni kommer gilla de ändringar
              som gjorts. Vision Vår vision är som tidigare att vi vill bli
              Sveriges största server. Vi var en av Sveriges största servrar
              förra året, men vi ska nu upp och toucha taket fler gånger.
              Däremot ser vi hellre att nivån på rollspelande och communityt är
              högre än spelarantalet. Ni är här för att ha kul och det
              värdesätter vi högre än spelarsiffror.
            </p>
          </CardContent>
          <CardFooter>
            <a className="text-sm underline">Läs mer</a>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Lansering av Bygden 2024</CardTitle>
            <CardDescription>Publicerat: 2024-03-10 05:32</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-pretty truncate max-h-16">
              Som Emiliano skrev förra veckan så är vi på gång upp igen. Vi har
              tagit tid på oss för att lansera servern och det är främst på
              grund av att vi har viljat utveckla servern utan press och stress.
              Vi är inte klara och det kommer vi aldrig bli. Det blir aldrig en
              FiveM server. Men vi är säkra på att ni kommer gilla de ändringar
              som gjorts. Vision Vår vision är som tidigare att vi vill bli
              Sveriges största server. Vi var en av Sveriges största servrar
              förra året, men vi ska nu upp och toucha taket fler gånger.
              Däremot ser vi hellre att nivån på rollspelande och communityt är
              högre än spelarantalet. Ni är här för att ha kul och det
              värdesätter vi högre än spelarsiffror.
            </p>
          </CardContent>
          <CardFooter>
            <a className="text-sm underline">Läs mer</a>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export { News };
