import React from 'react'
import Article from '../../molecular/article/Article'
import Button from '../../atoms/button/Button'
import { useRouter } from 'next/navigation';

export default function HomeProjectList() {
  const router = useRouter();
  return (
    <Article headingVariant="h2" title="Skill">
      <Button onClick={()=>router.push("/crud")} $fullWidth={true} $size="xs" className="">
        CRUD with React-query
      </Button>
      <Button onClick={()=>router.push("/designPattern")} $fullWidth={true} $size="xs">Design Pattern</Button>
      <Button onClick={()=>router.push("/interactive/intersect")} $fullWidth={true} $size="xs" >
        Interactive(animation)
      </Button>
      <Button onClick={()=>router.push("/interactive/threejs")} $fullWidth={true} $size="xs">Threejs</Button>
      <Button onClick={()=>router.push("/peoplelist")} $fullWidth={true} $size="xs">Infinite Scroll</Button>
      <Button onClick={()=>router.push("/msw")} $fullWidth={true} $size="xs">MSW 및 Testing Code</Button>
    </Article>
  )
}
