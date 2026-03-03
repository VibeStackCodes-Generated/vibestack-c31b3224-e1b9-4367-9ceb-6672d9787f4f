import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const rooms = [
  {
    name: "Suite Provençale",
    price: "€620 / night",
    image:
      "https://img.vibestack.site/s/provencal luxury suite interior/600/400",
  },
  {
    name: "Garden Room",
    price: "€420 / night",
    image:
      "https://img.vibestack.site/s/sunlit garden hotel room/600/400",
  },
  {
    name: "Rooftop Terrace",
    price: "€780 / night",
    image:
      "https://img.vibestack.site/s/rooftop terrace suite mediterranean/600/400",
  },
];

const experiences = [
  {
    title: "Vineyard Dining",
    description:
      "Twilight tables set among ancient vines, paired with cellar discoveries and the scent of warm fig leaves.",
    image:
      "https://img.vibestack.site/s/vineyard dining sunset table/800/600",
  },
  {
    title: "Spa Treatments",
    description:
      "Golden oils, silken linens, and slow rituals inspired by Provençal botanicals and sea minerals.",
    image:
      "https://img.vibestack.site/s/luxury spa treatment room/800/600",
  },
  {
    title: "Coastal Excursions",
    description:
      "Private yachts and hidden calanques, the Riviera unfolding in a palette of sapphire and stone.",
    image:
      "https://img.vibestack.site/s/mediterranean coast boat excursion/800/600",
  },
];

const dishes = [
  {
    name: "Sea bream crudo",
    image: "https://img.vibestack.site/s/sea bream crudo plate/500/400",
  },
  {
    name: "Lavender honey lamb",
    image: "https://img.vibestack.site/s/lavender honey lamb dish/500/400",
  },
  {
    name: "Heirloom tomato tarte",
    image: "https://img.vibestack.site/s/heirloom tomato tart/500/400",
  },
  {
    name: "Citrus olive oil cake",
    image: "https://img.vibestack.site/s/citrus olive oil cake/500/400",
  },
];

const testimonials = [
  {
    name: "Camille Roche",
    quote:
      "Maison Duvall feels like a private residence wrapped in Provence light. Every evening was effortless.",
    image:
      "https://img.vibestack.site/s/guest headshot studio lighting/200/200",
  },
  {
    name: "Jonas Meyer",
    quote:
      "The garden breakfasts and coastal afternoons were pure poetry. We left already planning our return.",
    image:
      "https://img.vibestack.site/s/elegant male headshot studio lighting/200/200",
  },
  {
    name: "Sofia Alvarez",
    quote:
      "A serene escape with impeccable service. The spa rituals alone are worth the journey.",
    image:
      "https://img.vibestack.site/s/woman headshot studio lighting/200/200",
  },
];

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center text-center text-white">
        <img
          src="https://img.vibestack.site/s/sun drenched villa exterior south of france/1600/900"
          alt="Sun-drenched villa exterior at Maison Duvall"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl px-6">
          <p className="text-xs uppercase tracking-[0.5em] text-gold font-sans">
            Maison Duvall · Côte d'Azur
          </p>
          <h1 className="mt-6 text-5xl md:text-7xl font-display font-light text-gold">
            A luminous retreat in the south of France
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-white/80 font-sans">
            Suites kissed by Provençal light, curated experiences, and slow luxury
            overlooking the Riviera.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gold text-foreground hover:bg-gold/90 font-sans">
              Reserve a stay
            </Button>
            <Button variant="outline" className="border-gold text-gold font-sans">
              Explore experiences
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gold font-sans">
                Rooms & Suites
              </p>
              <h2 className="text-4xl md:text-5xl font-display mt-3">
                Suites shaped by sunlight
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground font-sans">
              Three intimate categories, each framed by artisan textiles, antiques, and
              balcony gardens.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {rooms.map((room) => (
              <Card
                key={room.name}
                className="group overflow-hidden border-none shadow-lg relative"
              >
                <img
                  src={room.image}
                  alt={`${room.name} at Maison Duvall`}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="p-6 bg-card">
                  <h3 className="text-2xl font-display">{room.name}</h3>
                  <p className="mt-2 text-muted-foreground font-sans">
                    {room.price}
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <Button className="bg-gold text-foreground hover:bg-gold/90 font-sans">
                    Reserve
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gold font-sans">
                Experience
              </p>
              <h2 className="text-4xl md:text-5xl font-display mt-3">
                Editorial moments curated by Maison Duvall
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground font-sans">
              An itinerary of softness: culinary terroir, restorative rituals, and
              coastal discovery.
            </p>
          </div>

          <div className="mt-14 space-y-16">
            {experiences.map((experience, index) => (
              <div
                key={experience.title}
                className={`grid gap-10 items-center md:grid-cols-2 ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="h-80 w-full object-cover rounded-3xl shadow-lg"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-display">{experience.title}</h3>
                  <p className="mt-4 text-lg text-muted-foreground font-sans">
                    {experience.description}
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 border-gold text-gold font-sans"
                  >
                    Plan this experience
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gold font-sans">
                Food & Drink
              </p>
              <h2 className="text-4xl md:text-5xl font-display mt-3">
                Seasonal menus with Provençal flair
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground font-sans">
              Crafted by our resident chef, inspired by nearby markets and the
              Mediterranean coast.
            </p>
          </div>
          <div className="mt-10 flex gap-6 overflow-x-auto pb-4">
            {dishes.map((dish) => (
              <div
                key={dish.name}
                className="min-w-[260px] bg-card rounded-3xl overflow-hidden shadow-md"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="text-lg font-display">{dish.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-[#f6f0e7]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gold font-sans">
                Testimonials
              </p>
              <h2 className="text-4xl md:text-5xl font-display mt-3">
                Guests who linger in memory
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground font-sans">
              A few notes from those who have discovered the Maison Duvall pace of
              life.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="border-none bg-white shadow-md">
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-14 w-14 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-sans text-sm uppercase tracking-[0.2em] text-gold">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground font-sans">
                        Returning guest
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground font-sans">
                    "{testimonial.quote}"
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage:
              "url(https://img.vibestack.site/s/drone coastline south of france/1600/900)",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-gold font-sans">
              The Riviera Beyond
            </p>
            <h2 className="text-4xl md:text-5xl font-display mt-3">
              A coastline made for slow mornings
            </h2>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-gold/30 h-[380px] bg-[linear-gradient(135deg,#f8f3e8,#efe6d7)] flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-gold font-sans">
                Map
              </p>
              <p className="mt-3 text-muted-foreground font-sans">
                Interactive map placeholder for Maison Duvall
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gold font-sans">
                Contact
              </p>
              <h3 className="text-3xl font-display mt-3">Maison Duvall</h3>
              <p className="mt-3 text-muted-foreground font-sans">
                18 Avenue des Oliviers, Saint-Raphaël
                <br />
                Provence-Alpes-Côte d'Azur, France
              </p>
              <p className="mt-3 text-muted-foreground font-sans">
                +33 4 92 00 18 64
                <br />
                reservations@maisonduvall.fr
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gold font-sans">
                Arrival ritual
              </p>
              <p className="mt-2 text-muted-foreground font-sans">
                Private transfers available from Nice Côte d'Azur airport and Cannes
                heliport.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#1f1a16] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gold font-sans">
              Maison Duvall
            </p>
            <h3 className="text-3xl font-display mt-3">
              A discreet address on the Côte d'Azur
            </h3>
            <p className="mt-4 text-white/70 font-sans">
              Join our newsletter for seasonal menus, retreat experiences, and suite
              releases.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Input
                placeholder="Email address"
                className="bg-transparent border-gold text-white placeholder:text-white/50 font-sans"
              />
              <Button className="bg-gold text-foreground hover:bg-gold/90 font-sans">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-gold font-sans">
              Enquiries
            </p>
            <p className="text-white/70 font-sans">
              reservations@maisonduvall.fr
              <br />
              +33 4 92 00 18 64
            </p>
            <p className="text-white/70 font-sans">
              Follow Maison Duvall: Instagram · Pinterest · Facebook
            </p>
            <p className="text-white/50 text-sm font-sans">
              © 2026 Maison Duvall. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;