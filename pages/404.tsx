import Router from "next/router"

export default async function ErrorPage(): Promise<void> {
  await Router.push('/')
}
