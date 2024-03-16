// query key를 아래와 같이 설정하면 오타가 났을 때 해당부분에서 에러날 것
export const queryKeys = {
  getAlbumList:"getAlbumList",
  posts: "posts",
  treatments: "treatments",
  appointments: "appointments",
  user: "user",
  staff: "staff",
  albumDetail:"albumDetail"
};

export const mysqlQueryKey = {
  getAlbumList: `with dd as (
    select 
        ? as v_limit,
        ? as v_page
    from dual
  )
  select a.*
  from (
    select  ceil((count(*) over())/dd.v_limit) as totalcnt,row_number() over(order by id desc) as num,a.* from TB_PR_CARDALBUM a, dd
    ) a, dd
  where num<=dd.v_limit*(dd.v_page)
    and num>dd.v_limit*(dd.v_page-1)
  order by id desc`,
  insCardAlbum: `insert into TB_PR_CARDALBUM values(CONVERT(nextval(SE_TB_PR_CARDALBUM_ID),CHARACTER),?,?,?,?)`,
  updCardAlbum: `update TB_PR_CARDALBUM set title=?, image=?, description=?, generatedDate=? where id=?`,
  updCardAlbumNoImage:`update TB_PR_CARDALBUM set title=?, description=?, generatedDate=? where id=?`,
  delCardAlbum: `delete from TB_PR_CARDALBUM where id=?`,
  getDetailCardAlbum:`select id, title, image, generatedDate, description from TB_PR_CARDALBUM where id=?`
};
