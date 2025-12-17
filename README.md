This is our project setup guide:
- Once you have cloned the repo
- In the terminal enter:
- npm install

- npm run build
- npm start

- npm run build
- npm start

- Base Accounts (Please use these for testing)

donor@sustain.com Test.Password123
staff@sustain.com Test.Password123
admin@sustain.com Test.Password123



ENV file contents (If a env file is not present)

create a ".env" file inside of the root directory, it should be in the same dir as package.json, components.json 


DATABASE_URL = "postgresql://neondb_owner:npg_k73wIATEisOZ@ep-broad-bread-adjoy8ph-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
GOOGLE_CLIENT_ID = '189067545183-faqqfeht18b1i2lg4ffn8csmbe2anfti.apps.googleusercontent.com'
GOOGLE_CLIENT_SECRET = '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'
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET='a79e73951b04b876b8111136e84071a396717ffc501232750541486261396104'
