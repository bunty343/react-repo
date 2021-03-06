import { useState } from 'react'
import UserCard from './UserCard'
import SearchUser from './SearchUser'

function User() {
//     const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)

    // promises using Async/await - with arrow function
    // const getUsers = async () => {
    //     try {
    //         const result = await axios.get("https://jsonplaceholder.typicode.com/users")
    //         setUsers(result.data)
    //         setLoading(false)
    //     } catch (error) {
    //         console.log(error)
    //         setLoading(false)
    //     }
    // }

    // async function getUser (userId) {
    //     try {
    //         const result = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    //         setUser(result.data)
    //         setLoading(false)
    //     } catch (error) {
    //         console.log(error)
    //         setLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     // handle promises with .then() & .catch() methods
    //     // axios.get("https://jsonplaceholder.typicode.com/users")
    //     // .then(result => setUsers(result.data))
    //     // .catch(error => console.log(error))

    //     getUser(userId)

    // }, [userId])


    // console.log("user id", userId)
    // console.log('user', user)


    return (<div className='space-y-10'>
        <SearchUser setUser={setUser} />
        {user && 
            <UserCard user={user} />
        }
    </div>)
}

export default User