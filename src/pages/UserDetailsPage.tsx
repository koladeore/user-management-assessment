import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { UserDetails } from '../components/UserDetails';
import { users } from '../data/users';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/animations/PageTransition';

export const UserDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const user = users.find(u => u.id === Number(id));

  if (!user) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-gray-800 mb-4"
            >
              User not found
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link
                to="/"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </motion.div>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </motion.div>
          <UserDetails user={user} />
        </div>
      </div>
    </PageTransition>
  );
};