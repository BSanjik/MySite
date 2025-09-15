// Пример конфигурации для BSanjik
// Скопируйте этот файл в config.js и заполните своими данными

const CONFIG = {
  // EmailJS настройки
  EMAILJS: {
    SERVICE_ID: 'your_service_id_here',
    TEMPLATE_ID: 'your_template_id_here', 
    PUBLIC_KEY: 'your_public_key_here'
  },
  
  // Telegram бот настройки
  TELEGRAM: {
    ENABLED: true,
    BOT_TOKEN: 'your_bot_token_here',
    CHAT_ID: 'your_chat_id_here'
  },
  
  // Аналитика
  ANALYTICS: {
    GOOGLE_GA4_ID: 'G-XXXXXXXXXX',
    YANDEX_METRICA_ID: 'XXXXXXXX'
  },
  
  // Контактная информация
  CONTACT: {
    EMAIL: 'your-email@example.com',
    PHONE: '+1234567890',
    COMPANY_NAME: 'Ваша Компания'
  },
  
  // Социальные сети
  SOCIAL: {
    INSTAGRAM: 'https://instagram.com/your_username',
    TELEGRAM: 'https://t.me/your_username',
    WHATSAPP: 'https://wa.me/+1234567890'
  },
  
  // SEO настройки
  SEO: {
    SITE_URL: 'https://yoursite.com',
    COMPANY_NAME: 'Ваша Компания',
    DESCRIPTION: 'Описание вашей компании'
  }
};

// Не забудьте добавить config.js в .gitignore!
