import React from 'react';
import { User } from '../types/user';
import { Building2, Mail, Phone, Globe, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface UserDetailsProps {
  user: User;
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto"
    >
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{user.name}</h1>
        <p className="text-gray-600">@{user.username}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
          
          <motion.div variants={itemVariants} className="flex items-center text-gray-600">
            <Mail className="w-5 h-5 mr-3" />
            <a href={`mailto:${user.email}`} className="hover:text-blue-600">
              {user.email}
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center text-gray-600">
            <Phone className="w-5 h-5 mr-3" />
            <span>{user.phone}</span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center text-gray-600">
            <Globe className="w-5 h-5 mr-3" />
            <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              {user.website}
            </a>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Address</h2>
          
          <motion.div variants={itemVariants} className="flex items-start text-gray-600">
            <MapPin className="w-5 h-5 mr-3 mt-1" />
            <div>
              <p>{user.address.street}</p>
              <p>{user.address.suite}</p>
              <p>{user.address.city}, {user.address.zipcode}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="mt-8 pt-8 border-t border-gray-200"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Company Information</h2>
        
        <motion.div variants={itemVariants} className="flex items-start text-gray-600">
          <Building2 className="w-5 h-5 mr-3 mt-1" />
          <div>
            <p className="font-semibold">{user.company.name}</p>
            <p className="italic">"{user.company.catchPhrase}"</p>
            <p className="text-sm">{user.company.bs}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};