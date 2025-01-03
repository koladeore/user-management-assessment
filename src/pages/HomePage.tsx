import React from 'react';
import { UserCard } from '../components/UserCard';
import { users } from '../data/users';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/animations/PageTransition';

export const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center mb-4"
            >
              <Users className="w-12 h-12 text-blue-600" />
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">User Directory</h1>
            <p className="text-xl text-gray-600">Browse through our user database</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user, index) => (
              <UserCard key={user.id} user={user} index={index} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};