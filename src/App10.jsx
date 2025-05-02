/*
{id:1,name:'小明',score:55}
{id:2,name:'小美',score:78}
{id:3,name:'小華',score:92}
{id:4,name:'阿強',score:40}
顯示
id |name | score | pass
1   小明    55     X
2   小明    78     V
3   小明    92     V
4   小明    40     X
全班平均
要猜分 父子組件
*/
//頭
function GradeTableHeader(){
    return(
        <thead>
        <tr>
            <th width="50px" align="right">id</th>
            <th width="100px" align="right">name</th>
            <th width="100px" align="right">score</th>
            <th width="100px" align="right">pass</th>
        </tr>
        </thead>
    )
}
//子組件 身
function GradeTableBody({grades}){
    return(
        <tbody>
            {grades.map((grade) => (
                <tr key={grade.id} >
                    <td width="50px" align="right">{grade.id}</td>
                    <td width="100px" align="right">{grade.name}</td>
                    <td width="100px" align="right">{grade.score}</td>
                    <td width="100px" align="right">{grade.score>60?'V':'X'}</td>
                </tr>
      ))}
    </tbody>
    )
}
//子組件 尾
function GradeTableFooter({totalScore,count}){
    return(
        <tfoot>
            <tr>
                <td colSpan="2" align="right">全班平均</td>
                <td align="right">{(totalScore/count).toFixed(2)}</td>
            </tr>
        </tfoot>

    )
}
//子組件 融合
function GradeTable({grades,totalScore,count}){
    return(
        <table style={{ border: '20px solid pink', borderCollapse: 'collapse', width: '100%' }} >
            <GradeTableHeader/>
            <GradeTableBody grades={grades}/>
            <GradeTableFooter totalScore={totalScore} count={count}/>
        </table>
    )
    
}


function App(){
    const grades=[
        {id:1,name:'小明',score:55},
        {id:2,name:'小美',score:78},
        {id:3,name:'小華',score:92},
        {id:4,name:'阿強',score:40}
    ]
    const totalScore = grades.reduce( (sum,grade)=>  sum+grade.score,0 )
    const count= grades.length
    
    return (
        <>
            <GradeTable grades={grades} totalScore={totalScore} count={count}/>
        </>
    )
}
export default App;
