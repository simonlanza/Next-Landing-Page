import Link from 'next/link'

const Nav = () => {
  return (
    <nav class="w-auto h-12 bg-black font-serif fixed p-2">
      <ul class="text-white h-12 text-xl">
        <li class="grid justify-center items-center hover:text-fluoyellow">
          <Link href='/'>Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav