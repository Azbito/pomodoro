import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Historic } from './pages/Historic'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/historic" element={<Historic />} />
      </Route>
    </Routes>
  )
}