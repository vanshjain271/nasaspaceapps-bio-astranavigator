import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { mockTopics, mockYearlyData } from "@/utils/mockData";

const COLORS = ["hsl(195, 100%, 50%)", "hsl(195, 100%, 60%)", "hsl(207, 50%, 40%)", "hsl(207, 50%, 50%)", "hsl(195, 80%, 45%)", "hsl(207, 60%, 35%)", "hsl(195, 90%, 55%)"];

export default function Insights() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-display font-bold mb-4 glow-text">Research Insights</h1>
        <p className="text-muted-foreground">
          Visualize trends, patterns, and key metrics across NASA bioscience research
        </p>
      </motion.div>

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8"
        >
          <h2 className="text-2xl font-display font-semibold mb-6">Publications Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockYearlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(207, 40%, 25%)" />
              <XAxis dataKey="year" stroke="hsl(210, 40%, 98%)" />
              <YAxis stroke="hsl(210, 40%, 98%)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(207, 60%, 15%)",
                  border: "1px solid hsl(195, 100%, 50%, 0.3)",
                  borderRadius: "8px",
                }}
              />
              <Line type="monotone" dataKey="publications" stroke="hsl(195, 100%, 50%)" strokeWidth={3} dot={{ fill: "hsl(195, 100%, 50%)", r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8"
          >
            <h2 className="text-2xl font-display font-semibold mb-6">Research Topics Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={mockTopics}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {mockTopics.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(207, 60%, 15%)",
                    border: "1px solid hsl(195, 100%, 50%, 0.3)",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-card p-8"
          >
            <h2 className="text-2xl font-display font-semibold mb-6">Publications by Topic</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockTopics}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(207, 40%, 25%)" />
                <XAxis dataKey="name" stroke="hsl(210, 40%, 98%)" angle={-45} textAnchor="end" height={100} />
                <YAxis stroke="hsl(210, 40%, 98%)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(207, 60%, 15%)",
                    border: "1px solid hsl(195, 100%, 50%, 0.3)",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="value" fill="hsl(195, 100%, 50%)" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-8"
        >
          <h2 className="text-2xl font-display font-semibold mb-6">Key Insights & Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-primary/10 border border-primary/30">
              <h3 className="text-lg font-semibold mb-2 text-primary">Growing Interest</h3>
              <p className="text-sm text-muted-foreground">
                Human physiology research has increased by 45% since 2020, driven by Artemis program preparations.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-accent/10 border border-accent/30">
              <h3 className="text-lg font-semibold mb-2 text-accent">Knowledge Gap</h3>
              <p className="text-sm text-muted-foreground">
                Limited research on long-term radiation effects on neurological function in deep space conditions.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-primary/10 border border-primary/30">
              <h3 className="text-lg font-semibold mb-2 text-primary">Breakthrough Area</h3>
              <p className="text-sm text-muted-foreground">
                Plant biology research showing promising results for closed-loop life support systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
