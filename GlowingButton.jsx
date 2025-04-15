import { motion } from 'framer-motion'

const GlowingButton = ({ text }) => {
  return (
    <motion.button
      className="relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium overflow-hidden group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      <motion.span
        className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 mix-blend-overlay transition-opacity duration-300 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        whileHover={{ opacity: 0.1 }}
      />
    </motion.button>
  )
}

export default GlowingButton
