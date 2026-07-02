import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Root } from './componets/Root.jsx'
import { Home } from './componets/Home.jsx'
import { Users } from './componets/Users.jsx'
import { Posts } from './componets/Posts.jsx'
import { User } from './componets/User.jsx'
import { UserDatailes } from './componets/UserDatailes.jsx'
import { PostDatails } from './componets/PostDatails.jsx'

const promise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: 'users',
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
        Component: Users
      },
        {
          path: `users/:userId`,
          loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
          Component: UserDatailes
        },
      { path: 'posts', element: <Suspense fallback = {<h1>Loading.......</h1>}>
        <Posts promise = {promise}></Posts>
      </Suspense> } ,
      {
        path : `/posts/:id` ,
        element : <PostDatails></PostDatails>
      }
    ]
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
