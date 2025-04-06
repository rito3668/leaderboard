import { useState } from "react"
import Three from "./components/Three"
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Others from "./components/Others"
import ControlPages from "./components/ControlPages"
import users from "./data/users"

function App() {
  const [page,setPage] = useState(1)
  console.log(users)
  const firstThreeUsers = users.slice(0,3)
  const restUsers = users.slice(3)
  const perPage = 20
  const totalPages = Math.ceil(restUsers.length/perPage)
  const currentPageData = restUsers.slice((page-1)*perPage,page*perPage)
  return (
      <div className="main">
      <h1 variant="h4" align="center" gutterBottom>
         Leaderboard
      </h1>
      <div className="victory">
        <img src="./victory.png" alt="" />
      </div>
      <Three data={firstThreeUsers} />
      <Others data={currentPageData} startRank={(page - 1) * perPage + 4} />
      <ControlPages currentPage={page} setPage={setPage} totalPages={totalPages} />
      </div>
  
  )
}

export default App
