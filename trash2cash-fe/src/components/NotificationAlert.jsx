import { useState } from 'react';
import { motion } from 'framer-motion';
import { BellIcon, XIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NotificationAlert() {
    const [visible, setVisible] = useState(true);
    const navigate = useNavigate(); 
  
    if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-6 right-6 z-50 w-full max-w-sm"
    >
      <div className="relative bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl shadow-xl p-6">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <XIcon className="w-5 h-5" />
        </button>
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <BellIcon className="w-6 h-6 text-yellow-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Notification Alert</h2>
            <p className="text-sm text-gray-700 mt-1">
              Kamu belum mengumpulkan sampah untuk hari ini! Ayo kumpulkan sekarang!
            </p>
            <button
              onClick={() => {
                setVisible(false);
                navigate('/uploadimage');
              }}
              className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Kumpulkan Sekarang!
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}