import DataContainer from "@/components/DataContainer"
import UserModal from "@/components/Modal"
import NoAccess from "@/components/NoAccess"
import { options } from "@/lib/auth"
import { getServerSession } from "next-auth"

const page = async () => {
  const session = await getServerSession(options)
  
  if (session?.user) {
    return <div>
      <UserModal user={session?.user}/>
      <DataContainer />
    </ div>
  }

  return (
    <NoAccess />
  )
}

export default page