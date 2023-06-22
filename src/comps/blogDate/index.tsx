import { parseISO, format } from 'date-fns';

export default function BlogDate({ dateString }: { dateString: string }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}
      className='
        text-lg
        text-zinc-600
        font-code
      '
    >{format(date, 'LLL d, yyyy')}</time>
  )
}