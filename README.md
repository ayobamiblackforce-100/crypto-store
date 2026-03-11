docker-compose up --build -d

#email
npm install resend
npx prisma migrate dev --name add_email_to_orders

