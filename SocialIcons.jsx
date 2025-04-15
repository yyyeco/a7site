import { motion } from 'framer-motion'

const SocialIcons = () => {
  const icons = [
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'GitHub', icon: '💻', url: '#' },
    { name: 'LinkedIn', icon: '🔗', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' }
  ]

  return (
    <div className="flex space-x-4">
      {icons.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          className="text-2xl text-gray-500 hover:text-purple-400 transition-colors"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.1 }}
          whileHover={{ y: -5, scale: 1.2 }}
          aria-label={social.name}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  )
}

export default SocialIcons
