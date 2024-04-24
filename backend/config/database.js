module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi-demo'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'ketan'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: JSON.parse(env('DATABASE_SSL_SELF', false))
      // ssl: {
      //   rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
        
      // },
    },
    debug: false,
  },
});