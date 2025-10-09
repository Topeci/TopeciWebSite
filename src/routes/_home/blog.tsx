import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Play,
  Newspaper,
  Video,
  Facebook,
  Tv,
  Award,
  Users,
  Globe,
  Star,
  TrendingUp,
  Heart,
} from "lucide-react";

export const Route = createFileRoute("/_home/blog")({
  component: RouteComponent,
});

const achievements = [
  {
    id: 1,
    title: "TOPECI dans TV5 Monde",
    description:
      "Reportage exclusif sur notre innovation dans l'apprentissage des langues africaines",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    url: "https://information.tv5monde.com/economie/video/francophonie-topeci-des-livres-audio-francais-langues-locales-2742819",
    type: "media",
    date: "2024-09-29",
    icon: Tv,
    color: "#BE356A",
    impact: "Audience internationale",
    stats: "1M+ de vues",
  },
  {
    id: 2,
    title: "Reportage Medi1TV",
    description:
      "Initier les tout-petits au Baoulé et Malinké - Zoom sur notre livre audio innovant",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    url: "https://www.medi1tv.com/fr/reportage/358935/Initier-les-tout-petits-au-Baoul%C3%A9-et-Malink%C3%A9--Zoom-sur-le-livre-audio-de-Jean-Marc-Bonny",
    type: "media",
    date: "2024-09-29",
    icon: Newspaper,
    color: "#BE356A",
    impact: "Reconnaissance média",
    stats: "Couverture internationale",
  },
  {
    id: 3,
    title: "Viral sur Facebook",
    description:
      "Nos livres audio créent le buzz sur les réseaux sociaux avec des milliers de partages",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
    url: "https://www.facebook.com/share/1CLynWuBKD/?mibextid=wwXIfr",
    type: "facebook",
    date: "2024-09-29",
    icon: Facebook,
    color: "#4E6FA7",
    impact: "Engagement communautaire",
    stats: "50K+ interactions",
  },
  {
    id: 4,
    title: "Interview YouTube Exclusive",
    description:
      "Découvrez les coulisses de TOPECI et notre vision pour l'éducation en Afrique",
    image:
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400&h=300&fit=crop",
    url: "https://m.youtube.com/watch?v=n4x9jofBpBM",
    type: "video",
    date: "2024-09-29",
    icon: Play,
    color: "#D68E54",
    impact: "Inspiration jeunesse",
    stats: "100K+ vues",
  },
  {
    id: 5,
    title: "Article Le Banco",
    description:
      "Francophonie: des lunettes pour découvrir la Côte d'Ivoire à Paris - Innovation TOPECI",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop",
    url: "https://lebanco.net/news/49082-francophonie-des-lunettes-pour-decouvrir-la-cote-divoire-a-paris.html",
    type: "media",
    date: "2024-09-29",
    icon: Award,
    color: "#BE356A",
    impact: "Innovation reconnue",
    stats: "Prix de l'innovation",
  },
  {
    id: 6,
    title: "Live Événementiel",
    description:
      "Participation au Salon International de l'Éducation avec démonstration en direct",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    url: "https://www.facebook.com/share/v/1QXax8ULJ5/?mibextid=wwXIfr",
    type: "facebook",
    date: "2024-09-29",
    icon: Users,
    color: "#4E6FA7",
    impact: "Impact direct",
    stats: "5K+ participants",
  },
];

const milestones = [
  {
    year: "2024",
    title: "Lancement International",
    description: "TOPECI présent dans 10 pays avec nos livres audio innovants",
    icon: Globe,
    color: "#DCCC41",
  },
  {
    year: "2023",
    title: "Reconnaissance Média",
    description:
      "Features dans TV5 Monde, Medi1TV et autres grands médias internationaux",
    icon: Award,
    color: "#BE356A",
  },
  {
    year: "2022",
    title: "Expansion Communautaire",
    description: "+10,000 enfants connectés à leur culture grâce à TOPECI",
    icon: Users,
    color: "#4E6FA7",
  },
  {
    year: "2021",
    title: "Innovation Technologique",
    description: "Développement de nos premiers livres audio interactifs",
    icon: TrendingUp,
    color: "#74C6C6",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function RouteComponent() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "facebook":
        return "#4E6FA7";
      case "media":
        return "#BE356A";
      case "video":
        return "#D68E54";
      default:
        return "#74C6C6";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "facebook":
        return "Réseau Social";
      case "media":
        return "Presse";
      case "video":
        return "Vidéo";
      default:
        return "Article";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#4E6FA7] via-[#BE356A] to-[#D68E54] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Award size={40} className="text-white" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-waffle-soft">
              Nos Exploits
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-glacial-indifference leading-relaxed">
              Découvrez le parcours extraordinaire de TOPECI à travers les
              médias, les récompenses et les moments qui ont marqué notre
              histoire
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {[
                "🏆 Lauréat Innovation",
                "📰 Featured in TV5 Monde",
                "🌍 10+ Pays",
                "👨‍👩‍👧‍👦 10K+ Enfants",
              ].map((badge, index) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold border border-white/30"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline des succès */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#4E6FA7] mb-4 font-waffle-soft">
              Notre Parcours
            </h2>
            <p className="text-xl text-gray-600 font-glacial-indifference">
              Les étapes clés qui ont façonné le succès de TOPECI
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <div
                    className={`bg-white p-6 rounded-2xl shadow-lg border-l-4 ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}
                    style={{ borderLeftColor: milestone.color }}
                  >
                    <div className="text-2xl font-bold text-[#D68E54] mb-2 font-waffle-soft">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 font-waffle-soft">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 font-glacial-indifference">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div className="mx-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg"
                    style={{ backgroundColor: milestone.color }}
                  >
                    <milestone.icon size={24} />
                  </div>
                </div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section des exploits médiatiques */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#BE356A] mb-4 font-waffle-soft">
              Dans les Médias
            </h2>
            <p className="text-xl text-gray-600 font-glacial-indifference">
              Retrouvez toutes nos apparitions et reconnaissances
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {achievements.map((achievement) => (
              <motion.a
                key={achievement.id}
                href={achievement.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="block bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: achievement.color }}
                    >
                      {getTypeLabel(achievement.type)}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <achievement.icon
                      size={24}
                      style={{ color: achievement.color }}
                    />
                    <ExternalLink
                      size={18}
                      className="text-gray-400 group-hover:text-[#74C6C6] transition-colors"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-waffle-soft leading-tight group-hover:text-[#4E6FA7] transition-colors">
                    {achievement.title}
                  </h3>

                  <p className="text-gray-600 mb-4 font-glacial-indifference leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Impact et stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-sm font-semibold text-[#D68E54] font-waffle-soft">
                        {achievement.impact}
                      </div>
                      <div className="text-xs text-gray-500 font-glacial-indifference">
                        {achievement.stats}
                      </div>
                    </div>
                    <Star size={16} className="text-yellow-400 fill-current" />
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section statistiques impressionnantes */}
      <section className="py-16 bg-gradient-to-r from-[#4E6FA7] to-[#BE356A] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 font-waffle-soft">
              Chiffres qui Parlent
            </h2>
            <p className="text-xl opacity-90 font-glacial-indifference">
              L'impact réel de TOPECI en quelques chiffres
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                number: "10,000+",
                label: "Enfants Impactés",
                icon: Users,
                color: "#DCCC41",
              },
              {
                number: "15+",
                label: "Pays Touchés",
                icon: Globe,
                color: "#74C6C6",
              },
              {
                number: "50+",
                label: "Médias Internationaux",
                icon: Newspaper,
                color: "#D68E54",
              },
              {
                number: "1M+",
                label: "Vues Total",
                icon: TrendingUp,
                color: "#BE356A",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              >
                <stat.icon
                  size={32}
                  className="mx-auto mb-4"
                  style={{ color: stat.color }}
                />
                <div className="text-3xl font-bold mb-2 font-waffle-soft">
                  {stat.number}
                </div>
                <div className="text-white/80 font-glacial-indifference">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Heart size={48} className="mx-auto mb-6 text-[#BE356A]" />
            <h2 className="text-4xl font-bold text-[#4E6FA7] mb-4 font-waffle-soft">
              Faites Partie de l'Aventure
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-glacial-indifference">
              Rejoignez les milliers de personnes qui soutiennent notre mission
              de préservation des langues et cultures africaines
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#DCCC41] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all font-waffle-soft"
              >
                Découvrir nos Produits
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#4E6FA7] text-[#4E6FA7] rounded-xl font-semibold text-lg hover:bg-[#4E6FA7] hover:text-white transition-all font-waffle-soft"
              >
                Nous Soutenir
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
