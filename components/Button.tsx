import Link from 'next/link'

type ButtonProps = {
  text: string
  link: string
}

const Button: React.FunctionComponent<ButtonProps> = ({ text, link }) => {
  return (
    <div className="text-center my-20">
      <Link
        className="inline-flex items-center justify-center px-7 py-5 text-base font-medium text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:ring-orange-500 dark:focus:ring-blue-900"
        href={link}
      >
        {text}
      </Link>
    </div>
  )
}

export default Button
