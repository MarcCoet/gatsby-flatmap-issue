const fs = require("fs")

exports.createSchemaCustomization = ({ actions }) => {
  // by default saves to `schema.gql`
  // const options = {
  // path: `typedefs.graphql`,
  // exclude: { types: [`TypeWeDontWant`] },
  //   }
  //
  // Save the schema
  // actions.printTypeDefinitions({
  //   path: "schema.gql",
  // })
  // Use an existing schema
  actions.createTypes(fs.readFileSync(`schema.gql`, { encoding: `utf-8` }))
}
