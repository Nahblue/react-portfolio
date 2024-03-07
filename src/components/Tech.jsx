export function Tech( {title} ) {
  return (
    <span 
      className="text-sm p-2 md:text-base md:p-3 md:h-11 flex justify-center items-center bg-slate-900 rounded-lg text-slate-100 dark:bg-slate-200 dark:text-slate-900"
    >
      {title}
    </span>
  )
}