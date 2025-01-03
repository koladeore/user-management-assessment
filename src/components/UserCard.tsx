import React from 'react';
import { User } from '../types/user';
import { Building2, Mail, Phone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface UserCardProps {
  user: User;
  index: number;
}

export const UserCard: React.FC<UserCardProps> = ({ user, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">@{user.username}</p>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 space-y-2"
      >
        <div className="flex items-center text-gray-600">
          <Mail className="w-5 h-5 mr-2" />
          <a href={`mailto:${user.email}`} className="hover:text-blue-600">
            {user.email}
          </a>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Building2 className="w-5 h-5 mr-2" />
          <span>{user.company.name}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Phone className="w-5 h-5 mr-2" />
          <span>{user.phone}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Globe className="w-5 h-5 mr-2" />
          <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            {user.website}
          </a>
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-6"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to={`/user/${user.id}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          View Details
        </Link>
      </motion.div>
    </motion.div>
  );
};