import { faker } from '@faker-js/faker'
import fs from 'fs'

const users = []

for (let i = 0; i < 10; i++) {
  users.push({
    id: i,
    email: faker.internet.email(),
    password: `Test@${i}`
  })
}

const data = {
  users
}

fs.writeFileSync('./src/db/db.json', JSON.stringify(data))
