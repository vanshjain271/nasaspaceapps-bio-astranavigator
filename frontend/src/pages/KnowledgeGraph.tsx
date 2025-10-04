import { motion } from "framer-motion";
import { Network, ZoomIn, ZoomOut, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockGraphData } from "@/utils/mockData";

export default function KnowledgeGraph() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-display font-bold mb-4 glow-text">Knowledge Graph</h1>
        <p className="text-muted-foreground">
          Visualize relationships between research topics, organisms, and outcomes
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-4 gap-6"
      >
        <div className="lg:col-span-3">
          <div className="glass-card p-6 h-[600px] relative">
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <Button size="icon" variant="outline" className="glass-card">
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="glass-card">
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="glass-card">
                <Maximize className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-4">
                <Network className="w-24 h-24 text-primary mx-auto animate-float" />
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2">Interactive Graph View</h3>
                  <p className="text-muted-foreground max-w-md">
                    D3.js or Cytoscape.js visualization will render here, showing connections between:
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span className="text-sm">Conditions (e.g., Microgravity)</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 ml-2">
                      <div className="w-3 h-3 rounded-full bg-accent" />
                      <span className="text-sm">Organisms (e.g., Plants)</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-secondary ml-2">
                      <div className="w-3 h-3 rounded-full bg-foreground" />
                      <span className="text-sm">Results (e.g., Gene Expression)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass-card p-6">
            <h3 className="text-lg font-display font-semibold mb-4">Node Details</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Click on a node to see detailed information about that research element.
            </p>
            <div className="space-y-3">
              {mockGraphData.nodes.slice(0, 3).map((node) => (
                <div key={node.id} className="p-3 rounded-lg bg-secondary/50 border border-primary/20">
                  <p className="text-sm font-semibold">{node.label}</p>
                  <p className="text-xs text-muted-foreground capitalize">{node.type}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-display font-semibold mb-4">Graph Stats</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Total Nodes</span>
                <span className="text-sm font-semibold">{mockGraphData.nodes.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Connections</span>
                <span className="text-sm font-semibold">{mockGraphData.edges.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Node Types</span>
                <span className="text-sm font-semibold">4</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
