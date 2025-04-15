import { motion } from 'framer-motion'
import { useState } from 'react'
import Navbar from './components/Navbar'
import AnimatedText from './components/AnimatedText'
import GlowingButton from './components/GlowingButton'
import SocialIcons from './components/SocialIcons'
import { heroText, features } from './constants'

const App = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-20">
        <section className="flex flex-col items-center justify-center min-h-[70vh]">
          <AnimatedText 
            text={heroText.title} 
            className="text-5xl md:text-7xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          />
          <AnimatedText 
            text={heroText.subtitle} 
            className="text-xl md:text-2xl text-gray-400 text-center max-w-2xl mb-12"
            delay={0.5}
          />
          <GlowingButton text="Get Started" />
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-center mb-16">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border ${hoveredFeature === index ? 'border-purple-500' : 'border-gray-800'} bg-gray-800/50 backdrop-blur-sm`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
              >
                <div className="text-purple-400 text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">© {new Date().getFullYear()} My Pages Site</p>
          <SocialIcons />
        </div>
      </footer>
    </div>
  )
}

export default App
