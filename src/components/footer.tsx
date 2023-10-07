import { Text } from './text'

const getYear = () => {
  const date = new Date()
  return date.getFullYear()
}

export function Footer () {
  return (
    <footer className='w-full flex justify-center bg-white py-4 px-3'>
      <Text color="#2B2B2B">{getYear()} All Rights Reserved</Text>
    </footer>
  )
}
