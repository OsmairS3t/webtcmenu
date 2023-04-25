import react from 'react'

interface Props {
  className: string;
  title: string;
  onClick: () => {};
}

export default function Button({ className, title, onClick }: Props) {
  return (
    <Button
      className={className}
      title={title}
      onClick={onClick}
    />
  )
}