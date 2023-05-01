import {
  NoDepositCont,
  NoContentImgEle,
  NoContHeadingEle,
  NoContParaEle,
  ResultCont,
  InnerResultCont,
  ResultHeading,
  ResultPara,
} from './styledComponents'

const NoteItem = () => (
  <>
    <NoDepositCont>
      <NoContentImgEle
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoContHeadingEle>No Notes Yet</NoContHeadingEle>
      <NoContParaEle>Notes you add will appear here</NoContParaEle>
    </NoDepositCont>
    <ResultCont>
      <InnerResultCont>
        <ResultHeading>fgdg</ResultHeading>
        <ResultPara>dfsaf</ResultPara>
      </InnerResultCont>
    </ResultCont>
  </>
)

export default NoteItem
