const NotFound = () => {
  return null;
};

export async function getServerSideProps({ res }:any) {
  res.writeHead(302, { Location: '/home' });
  res.end();
  return null;
}

export default NotFound;