import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      slug
      title
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY)

  return (
    <h1>hello world</h1>
  )
}

export default App
