
const About = () => {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Welcome CHACELLIE's BLOG</h1>
            </div>

            <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <div className="col-md-7 px-0">
                    <h1 className="display-4 fst-italic">첫번째 게시글 입니다.</h1>
                    <p className="lead my-3">아직 무엇을 주제로 블로그를 진행할 지 모르겠네요 엘리 아범으로 시작할걸 괜히 체이셀리(Chace + Ellie)로 바꾼걸까요 후후.. 일단! Bootstrap + React + Github 을 사용한 웹 블로그 입니다.</p>
                    <p className="lead mb-0">
                        <a href="#" className="text-white fw-bold">Continue reading...</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default About;