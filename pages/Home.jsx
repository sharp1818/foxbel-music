import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home({ users }) {
const[reactData, setReactData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setReactData(data);
    }).catch((e) => {console.log(e)});
  }, []);

  return (
    <>
    {/* <Head>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
</Head> */}
      <table>
        <tr>
          <th colSpan='3' className='topnav'>Rendered By React JS | Client side rendered</th>
        </tr>
        {reactData.map((user, index) => (
          <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>

      <br/>
      
      <table>
        <tr>
          <th colSpan='3' className='topnav'>Rendered By Next JS | Server side rendered</th>
        </tr>
        {users.map((user, index) => (
          <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>
    </>
  )
}
export async function getServerSideProps({params,req,res,query,preview,previewData,resolvedUrl,locale,locales,defaultLocale}) {
  console.log('Logging : '+res);
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await data.json();
  return { props: { users } }
}