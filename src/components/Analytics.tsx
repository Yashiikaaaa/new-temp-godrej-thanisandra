"use client"
import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import ReactGA from "react-ga4"

export default function Analytics() {
  const inited = useRef(false)
  const pathname = usePathname()
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-3J8R39GCCX"

  useEffect(() => {
    if (!GA_ID) {
      console.warn("GA ID missing: set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env.local")
      return
    }
    if (!inited.current) {
      ReactGA.initialize(GA_ID)
      inited.current = true
      console.info("ReactGA initialized:", GA_ID)
    }
  }, [GA_ID])

  useEffect(() => {
    if (!inited.current || !pathname) return
    // debug log
    console.info("Sending pageview:", pathname, document.title)
    // GA4 style page_view
    ReactGA.send({
      hitType: "pageview",
      page: pathname,
      title: document.title,
      page_location: window.location.href,
      page_path: pathname,
    })
  }, [pathname])

  return null
}