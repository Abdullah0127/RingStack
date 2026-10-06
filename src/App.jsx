import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'

// Each page is its own chunk, loaded only when visited.
const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Services = lazy(() => import('./pages/Services.jsx'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const Legal = lazy(() => import('./pages/Legal.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<Legal title="Privacy Policy" />} />
          <Route path="terms-and-conditions" element={<Legal title="Terms & Conditions" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
