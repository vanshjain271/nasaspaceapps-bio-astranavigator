import { motion } from "framer-motion";
import { Calendar, Tag, FlaskConical, Sparkles } from "lucide-react";
import { Publication } from "@/utils/mockData";

interface PublicationCardProps {
  publication: Publication;
  index: number;
}

export default function PublicationCard({ publication, index }: PublicationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-card p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
    >
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
            {publication.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {publication.abstract}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-primary/10 border border-primary/30 text-primary">
            <Tag className="w-3 h-3" />
            {publication.topic}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-secondary/50 text-foreground/80">
            <Calendar className="w-3 h-3" />
            {publication.year}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-secondary/50 text-foreground/80">
            <FlaskConical className="w-3 h-3" />
            {publication.organism}
          </span>
        </div>

        <div className="pt-4 border-t border-primary/20">
          <div className="flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
            <div>
              <p className="text-xs font-semibold text-accent mb-1">AI Summary</p>
              <p className="text-sm text-foreground/80">{publication.aiSummary}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
