import SearchForm from "@/components/SearchForm"

const Home = async ({ searchParams }: { searchParams: Promise<{query?: string}>}) => {
  const query = (await searchParams).query ?? ""

  return (
    <section className="pink_container">
      <div className="relative small-heading">
        <div className="triangle -rotate-12 absolute top-2 left-2">
        </div>
          <p>Pitch, Vote, and Grow</p>
          <span className="w-20 h-1 bg-white rounded-full absolute top-12 left-20"></span>
        <div className="triangle absolute bottom-2 right-1" style={{ transform: "rotate(125deg)"}}>
        </div>
      </div>

      <h1 className="heading">Pitch Your Startup, <br /> Connect with Entrepreneur</h1>
      <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>

      <SearchForm query={query} />
    </section>
  )
}

export default Home
