import { PrismaClient } from '@prisma/client'

const client = new PrismaClient()

export function allLider() {
  return client.lider.findMany()
}


export function createLider(name, age) {
  return client.lider.create({
    data: {
      name,
      age
    }
  })
}


export function updateLider(id, name, age) {
  return client.lider.update({
    data: {
      name,
      age
    },
    where: {
      id
    }
  })
}

export function deleteLider(id) {
  return client.lider.delete({
    where: {
      id
    }
  })
}