
export default function HighLight({label,value}:{label:string,value:any}) {
  return (
    <p><span className="font-bold text-text">{label}: </span><span className='text-text'>{value}</span></p>
  )
}
