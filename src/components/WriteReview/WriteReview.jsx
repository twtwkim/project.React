import React, { useCallback, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize';
import styled from 'styled-components';
import '../../css/WriteReview.css';
import Button from '../../common/Button';

// Quill 모듈 등록
Quill.register('modules/imageResize', ImageResize);

const StyledHr = styled.hr`
  width: 100%;
  border: 2px solid black;
  border-radius: 30%;
  margin: 2rem auto;
`;

const ButtonStyle = styled(Button)`
  margin-top: 1rem;
  color: Violet;
`;

const QuillDiv = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
    direction: ltr;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const WriteReview = (props) => {
  const { title, body } = props;
  const { change_field } = props;

  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: '내용을 작성하세요',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
        imageResize: {
          modules: ['Resize', 'DisplaySize', 'Toolbar'], // 사용하고자 하는 모듈 설정
          displayStyles: {
            backgroundColor: 'black',
            border: 'none', 
            color: 'white', 
          },
          handleStyles: {
            backgroundColor: 'black', 
            border: 'none', 
            color: 'white', 
          },
        },
      },
    });

    const quill = quillInstance.current;
    quill.on('text-change', (delta, oldDelta, source) => {
      if (source === 'user') {
        change_field('body', quill.root.innerHTML); // body
      }
    });
  }, [change_field]);

  useEffect(() => {
    if (quillInstance.current) {
      quillInstance.current.root.innerHTML = body;
    }
  }, []);

  const onChange = useCallback(
    (e) => {
      change_field('title', e.target.value); // title
    },
    [change_field]
  );

  return (
    <div className="WriteReviewPage-container">
      <div className="WriteReviewPage-title">
        <h2>후기작성</h2>
        <h1>직관의 맛과 함께한 추억을 공유하세요!</h1>
      </div>
      <StyledHr />
      <form className="Review-form">
        <input value={title} onChange={onChange} placeholder="제목을 입력하세요" required />
        <QuillDiv>
          <div ref={quillElement}></div>
        </QuillDiv>
        {/* <input type="file" id="image" name="image" accept="image/*" /> */}
      </form>
    </div>
  );
};

export default WriteReview;