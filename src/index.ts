import { Database } from './utils/database'
import { Environment } from './utils/environment'

try {
  Environment.checkEnvVariables()
} catch (error) {
  console.error(error)
}

const auto = Database.auto([...process.argv.slice(2)])

auto
  .run()
  .then((data) => {
    console.log(data.tables) // table list
    console.log(data.foreignKeys) // foreign key list
    console.log(data.text) // text of generated files
  })
  .catch((error) => console.error(error))
