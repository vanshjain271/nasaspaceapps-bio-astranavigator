import { motion } from "framer-motion";
import { Rocket, Target, Lightbulb, Users } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-display font-bold mb-4 glow-text">About Bio-Astra-Navigator</h1>
        <p className="text-muted-foreground text-lg">
          Your intelligent companion for exploring NASA's bioscience research frontier
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-8"
      >
        <div className="glass-card p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-semibold mb-3">Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Bio-Astra-Navigator was created for the NASA Space Apps Challenge 2024 to democratize access to space biology research. 
                By combining AI-powered analysis with interactive visualization, we make it easier for researchers, students, and space 
                enthusiasts to discover insights from NASA's extensive bioscience publications database.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-card p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-accent/10 border border-accent/30">
              <Lightbulb className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-semibold mb-3">Key Features</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>AI-generated summaries of 608+ NASA bioscience publications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Interactive knowledge graph showing research relationships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Visual insights dashboard with trend analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Conversational AI assistant for research exploration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>Advanced search and filtering capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glass-card p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-semibold mb-3">Technology Stack</h2>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Frontend</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• React + TypeScript</li>
                    <li>• Vite</li>
                    <li>• TailwindCSS</li>
                    <li>• Framer Motion</li>
                    <li>• Recharts</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-accent">Backend (Planned)</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Flask / FastAPI</li>
                    <li>• AI/ML Models</li>
                    <li>• NASA Data APIs</li>
                    <li>• Graph Database</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-accent/10 border border-accent/30">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-semibold mb-3">NASA Space Apps Challenge 2024</h2>
              <p className="text-muted-foreground leading-relaxed">
                This project was developed as part of the international NASA Space Apps Challenge, a hackathon where teams 
                around the world use NASA's open data to solve real-world problems in space exploration and Earth science. 
                Our team focused on making space biology research more accessible and understandable through AI and visualization.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
