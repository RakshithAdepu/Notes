import {useState} from 'react'

import NoteItem from '../NoteItem'

import {
  MainCont,
  HeadingEle,
  InputCont,
  TitleInputEle,
  DescriptionEle,
  ButtonEle,
} from './styledComponents'

const Notes = () => {
  const [list, setList] = useState([])
  const [title, setTitle] = useState('')

  const [description, setDescription] = useState('')

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeDescription = event => {
    setDescription(event.target.value)
  }

  const onClickAdd = () => {
    const listItems = JSON.stringify({title, description})
    setTitle('')
    setDescription('')
    setList(prev => prev + listItems)

    console.log(list)
  }

  return (
    <>
      <MainCont>
        <HeadingEle>Notes</HeadingEle>
        <InputCont>
          <TitleInputEle
            // value={title}
            onChange={onChangeTitle}
            type="text"
            placeholder="Title"
          />
          <DescriptionEle
            onChange={onChangeDescription}
            type="text"
            placeholder="Take a Note.."
            // value={description}
          />
          <ButtonEle onClick={onClickAdd}>Add</ButtonEle>
        </InputCont>
        <NoteItem />
      </MainCont>
    </>
  )
}

export default Notes
