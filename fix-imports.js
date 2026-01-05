const fs = require('fs');
const path = require('path');

const components = [
  'src/components/Header.js',
  'src/components/ToolsMatrix.js',
  'src/components/ProjectsShowcase.js',
  'src/components/ExperienceTimeline.js'
];

components.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if motion is imported but AnimatePresence is not
    if (content.includes('framer-motion') && content.includes('motion') && !content.includes('AnimatePresence')) {
      content = content.replace(
        "import { motion } from 'framer-motion';",
        "import { motion, AnimatePresence } from 'framer-motion';"
      );
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in ${filePath}`);
    }
  }
});