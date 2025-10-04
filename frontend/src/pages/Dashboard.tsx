import { motion } from "framer-motion";
import { BookOpen, Sparkles, Network, TrendingUp } from "lucide-react";
import StatCard from "@/components/StatCard";
import StarfieldBackground from "@/components/StarfieldBackground";
import { mockStats } from "@/utils/mockData";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="relative min-h-screen">
      <StarfieldBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 glow-text">
            BioSpace Insight
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI-Powered NASA Bioscience Explorer
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Navigate through decades of space biology research with intelligent analysis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard
            title="Total Publications"
            value={mockStats.totalPublications}
            icon={BookOpen}
            delay={0.2}
          />
          <StatCard
            title="AI Summaries Generated"
            value={mockStats.aiSummariesGenerated}
            icon={Sparkles}
            delay={0.3}
          />
          <StatCard
            title="Topics Detected"
            value={mockStats.topicsDetected}
            icon={Network}
            delay={0.4}
          />
          <StatCard
            title="Research Years"
            value={mockStats.researchYearsSpan}
            icon={TrendingUp}
            delay={0.5}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Link
            to="/explore"
            className="glass-card p-8 hover:border-primary/50 transition-all duration-300 group"
          >
            <BookOpen className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-display font-bold mb-2">Explore Publications</h3>
            <p className="text-muted-foreground">
              Search and filter through NASA's extensive bioscience research database
            </p>
          </Link>

          <Link
            to="/graph"
            className="glass-card p-8 hover:border-primary/50 transition-all duration-300 group"
          >
            <Network className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-display font-bold mb-2">Knowledge Graph</h3>
            <p className="text-muted-foreground">
              Visualize connections between experiments, organisms, and discoveries
            </p>
          </Link>

          <Link
            to="/insights"
            className="glass-card p-8 hover:border-primary/50 transition-all duration-300 group"
          >
            <TrendingUp className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-display font-bold mb-2">Research Insights</h3>
            <p className="text-muted-foreground">
              Discover trends, patterns, and knowledge gaps in space biology
            </p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
