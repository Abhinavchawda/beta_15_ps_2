// import LeaderboardWin from "../components/LeaderboardWin"

export default function Games() {
  // const data = [
  //   {
  //     username: "ABC",
  //     streak_count: 2,
  //     score: 4,
  //     createdAt: "10-03-2024"
  //   },
  //   {
  //     username: "ABC",
  //     streak_count: 2,
  //     score: 4,
  //     createdAt: "10-03-2024"
  //   },
  //   {
  //     username: "ABC",
  //     streak_count: 2,
  //     score: 4,
  //     createdAt: "10-03-2024"
  //   },
  //   {
  //     username: "ABC",
  //     streak_count: 2,
  //     score: 4,
  //     createdAt: "10-03-2024"
  //   }
  // ]
  const games = [
    {name: 'Wordle', desc: "", imgSrc:""},
    {name: 'Game2', desc: "Engage in fun activities designed to improve your mental well-being and cognitive skills.", imgSrc:""},
    {name: 'Game3', desc: "", imgSrc:""}
  ]
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-12 text-[rgb(16,20,61)]">Mental Wellness Games</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game,index) => (
                <div key={index} className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105 duration-300 rounded-xl p-6 flex flex-col items-center justify-between border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{game.name}</h3>
                    <p className="text-gray-600 text-center mb-6 text-base">
                        {game.desc}
                    </p>
                    <button className="w-full bg-gray-800 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300">
                        Play Now
                    </button>
                </div>
            ))}
        </div>
      </div>
      {/* <LeaderboardWin data={data} /> */}
    </section>
  )
}
