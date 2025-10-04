import { NavLink } from "react-router-dom";
import { Home, Search, Network, BarChart3, Bot, Info, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const navigation = [
  { name: "Dashboard", to: "/", icon: Home },
  { name: "Explore", to: "/explore", icon: Search },
  { name: "Knowledge Graph", to: "/graph", icon: Network },
  { name: "Insights", to: "/insights", icon: BarChart3 },
  { name: "AI Assistant", to: "/assistant", icon: Bot },
  { name: "About", to: "/about", icon: Info },
];

export default function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="w-64 min-h-screen glass-card border-r border-primary/20 flex flex-col"
    >
      <div className="p-6 border-b border-primary/20">
        <div className="flex items-center gap-3">
          <Rocket className="w-8 h-8 text-primary animate-float" />
          <div>
            <h1 className="text-xl font-display font-bold glow-text">Bio-Astra</h1>
            <p className="text-xs text-muted-foreground">Navigator</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={`w-5 h-5 ${isActive ? "animate-glow" : ""}`} />
                <span className="font-medium">{item.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-primary/20">
        <div className="glass-card p-4 text-center">
          <p className="text-xs text-muted-foreground">NASA Space Apps Challenge 2024</p>
        </div>
      </div>
    </motion.aside>
  );
}
