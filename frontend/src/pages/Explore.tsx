import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import PublicationCard from "@/components/PublicationCard";
import { mockPublications } from "@/utils/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string>("All");

  const topics = ["All", "Plant Biology", "Microbiology", "Human Physiology", "Astrobiology", "Immunology", "Chronobiology"];

  const filteredPublications = mockPublications.filter((pub) => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = selectedTopic === "All" || pub.topic === selectedTopic;
    return matchesSearch && matchesTopic;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-display font-bold mb-4 glow-text">Explore Publications</h1>
        <p className="text-muted-foreground">
          Discover NASA's bioscience research with AI-powered summaries
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 space-y-4"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="text"
            placeholder="Search publications by title or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 glass-input h-12"
          />
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <Filter className="w-5 h-5 text-muted-foreground" />
          <div className="flex gap-2 flex-wrap">
            {topics.map((topic) => (
              <Button
                key={topic}
                variant={selectedTopic === topic ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTopic(topic)}
                className={selectedTopic === topic ? "bg-primary/20 border-primary/40" : ""}
              >
                {topic}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="space-y-6">
        {filteredPublications.length > 0 ? (
          filteredPublications.map((pub, index) => (
            <PublicationCard key={pub.id} publication={pub} index={index} />
          ))
        ) : (
          <div className="glass-card p-12 text-center">
            <p className="text-muted-foreground">No publications found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
