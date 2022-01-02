import { data } from "../../dummydata"
export default function Home() {
  return (
    <>
      <h1>Welcome to caster</h1>
      {
        data.results.map(result => (
          <p>{result.title_original}</p>
        ))
      }
    </>
  )
}