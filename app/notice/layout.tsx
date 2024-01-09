export default async function layout (props : any) {
  return (
    <>
      <h1>공지사항</h1>
      {props.children}
    </>
  )
}